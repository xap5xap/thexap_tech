import { PRODUCTION_GA4_MEASUREMENT_ID } from "./contract.ts";

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
  }
}

const SCRIPT_ID = "thexap-ga4";

const command: (...args: unknown[]) => void = function () {
  window.dataLayer = window.dataLayer || [];
  // Google gtag.js requires the function's Arguments object rather than a copied array.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
};

export const initializeGoogleTag = (measurementId: string): Promise<void> => {
  if (measurementId !== PRODUCTION_GA4_MEASUREMENT_ID) return Promise.reject(new Error("Invalid GA4 destination."));

  window.gtag = command;
  command("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });
  command("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  command("js", new Date());
  command("config", measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing?.dataset.loaded === "true") return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = existing || document.createElement("script");
    const handleLoad = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    const handleError = () => {
      script.remove();
      reject(new Error("The GA4 script did not load."));
    };
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existing) {
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
    }
  });
};

export const grantGoogleConsent = (): void => {
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
};

export const sendGoogleEvent = (name: string, params: Record<string, unknown>): void => {
  window.gtag?.("event", name, params);
};

export const withdrawGoogleTag = (): void => {
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
};

export const removeAccessibleGoogleCookies = (hostname: string, cookieHeader: string): void => {
  const names = cookieHeader
    .split(";")
    .map(part => part.trim().split("=")[0])
    .filter(name => name === "_ga" || name.startsWith("_ga_"));
  const domains = Array.from(new Set([hostname, ".thexap.com"]));
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}; SameSite=Lax`;
    }
  }
};
