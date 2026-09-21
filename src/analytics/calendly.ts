import type { AnalyticsEventName } from "./events.ts";

export const CALENDLY_ORIGIN = "https://calendly.com";

type CalendlyEventName = "calendly.event_type_viewed" | "calendly.date_and_time_selected" | "calendly.event_scheduled";

export type SanitizedCalendlyEvent = {
  name: AnalyticsEventName;
  params: Record<string, string>;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const sanitizeCalendlyMessage = (
  message: Pick<MessageEvent, "origin" | "source" | "data">,
  activeFrameSource: MessageEventSource | null | undefined
): { event: CalendlyEventName; analytics: SanitizedCalendlyEvent } | undefined => {
  if (message.origin !== CALENDLY_ORIGIN || !activeFrameSource || message.source !== activeFrameSource)
    return undefined;
  if (!isRecord(message.data) || typeof message.data.event !== "string") return undefined;

  if (message.data.event === "calendly.event_type_viewed") {
    return {
      event: message.data.event,
      analytics: { name: "meeting_step", params: { meeting_step: "event_type_viewed" } }
    };
  }
  if (message.data.event === "calendly.date_and_time_selected") {
    return {
      event: message.data.event,
      analytics: { name: "meeting_step", params: { meeting_step: "date_and_time_selected" } }
    };
  }
  if (message.data.event === "calendly.event_scheduled") {
    return {
      event: message.data.event,
      analytics: { name: "generate_lead", params: { method: "calendly" } }
    };
  }
  return undefined;
};

export class CalendlyMessageSequence {
  private seen = new Set<CalendlyEventName>();
  private completed = false;

  consume(
    message: Pick<MessageEvent, "origin" | "source" | "data">,
    activeFrameSource: MessageEventSource | null | undefined
  ): SanitizedCalendlyEvent | undefined {
    const sanitized = sanitizeCalendlyMessage(message, activeFrameSource);
    if (!sanitized) return undefined;

    if (this.completed && sanitized.event === "calendly.event_type_viewed") {
      this.seen.clear();
      this.completed = false;
    }
    if (this.seen.has(sanitized.event)) return undefined;

    this.seen.add(sanitized.event);
    if (sanitized.event === "calendly.event_scheduled") this.completed = true;
    return sanitized.analytics;
  }
}
