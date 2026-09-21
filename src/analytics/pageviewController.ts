import {
  canonicalPathname,
  sanitizeReferrer,
  toPageViewPayload,
  type PageSnapshot,
  type PageViewPayload
} from "./contract.ts";

type PendingPageview = { key: string; payload: PageViewPayload };

export class PageviewController {
  private readonly send: (payload: PageViewPayload) => void;
  private consentGranted = false;
  private current?: { key: string; snapshot: PageSnapshot };
  private visitNumber = 0;
  private grantNumber = 0;
  private lastConsentedLocation?: string;
  private pending: PendingPageview[] = [];
  private sent = new Set<string>();

  constructor(send: (payload: PageViewPayload) => void) {
    this.send = send;
  }

  observe(snapshot: PageSnapshot): void {
    const nextPath = canonicalPathname(snapshot.page_location);
    const currentPath = this.current ? canonicalPathname(this.current.snapshot.page_location) : undefined;

    if (currentPath === nextPath) {
      this.current = { key: this.current!.key, snapshot };
      return;
    }

    this.visitNumber += 1;
    const referrer = this.consentGranted ? this.lastConsentedLocation : snapshot.page_referrer;
    const nextSnapshot = { ...snapshot, page_referrer: sanitizeReferrer(referrer) };
    this.current = { key: `visit-${this.visitNumber}`, snapshot: nextSnapshot };

    if (this.consentGranted) {
      this.queue(this.current.key, nextSnapshot);
      this.lastConsentedLocation = nextSnapshot.page_location;
    }
  }

  grant(): void {
    if (!this.current || this.consentGranted) return;
    this.consentGranted = true;
    this.grantNumber += 1;
    const key = `${this.current.key}-grant-${this.grantNumber}`;
    this.queue(key, this.current.snapshot);
    this.lastConsentedLocation = this.current.snapshot.page_location;
  }

  deny(): void {
    this.consentGranted = false;
    this.pending = [];
    this.lastConsentedLocation = undefined;
  }

  flush(): void {
    if (!this.consentGranted) return;
    const queued = this.pending;
    this.pending = [];
    for (const item of queued) {
      if (this.sent.has(item.key)) continue;
      this.send(item.payload);
      this.sent.add(item.key);
    }
  }

  getVisitKey(): string | undefined {
    return this.current?.key;
  }

  private queue(key: string, snapshot: PageSnapshot): void {
    if (this.sent.has(key) || this.pending.some(item => item.key === key)) return;
    this.pending.push({ key, payload: toPageViewPayload(snapshot) });
  }
}
