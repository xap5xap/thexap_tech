import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  consentCookieValue,
  isProductionAnalyticsEnvironment,
  readConsentCookie,
  type AnalyticsConsent,
  type PageContext
} from "./contract";
import { buildPageSnapshot } from "./contract";
import {
  grantGoogleConsent,
  initializeGoogleTag,
  removeAccessibleGoogleCookies,
  sendGoogleEvent,
  withdrawGoogleTag
} from "./googleTag";
import { PageviewController } from "./pageviewController";
import { buildPortfolioEventPayload, type PortfolioEventName } from "./events";

const CONSENT_COPY =
  "Optional analytics help me understand which pages and projects visitors find useful. If you accept, Google Analytics uses cookies to measure site activity. You can reject analytics or change your choice at any time.";

type AnalyticsContextValue = {
  consent: AnalyticsConsent;
  openSettings: () => void;
  trackEvent: (name: PortfolioEventName, params: Record<string, unknown>) => boolean;
  visitKey?: string;
  pageContext: PageContext;
};

const AnalyticsContext = createContext<AnalyticsContextValue>({
  consent: null,
  openSettings: () => undefined,
  trackEvent: () => false,
  pageContext: { content_group: "utility", page_type: "not_found" }
});

let sharedController: PageviewController | undefined;
let tagReady = false;
let tagLoading: Promise<void> | undefined;
let pendingEvents: Array<{ name: PortfolioEventName; payload: Record<string, unknown> }> = [];

const flushPendingEvents = () => {
  if (!tagReady) return;
  const events = pendingEvents;
  pendingEvents = [];
  for (const event of events) sendGoogleEvent(event.name, event.payload);
};

const getController = () => {
  if (!sharedController) sharedController = new PageviewController(payload => sendGoogleEvent("page_view", payload));
  return sharedController;
};

export const useAnalytics = () => useContext(AnalyticsContext);

type Props = {
  children: ReactNode;
  pageContext: PageContext;
};

export const AnalyticsProvider = ({ children, pageContext }: Props) => {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [consent, setConsent] = useState<AnalyticsConsent>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [visitKey, setVisitKey] = useState<string>();
  const contextRef = useRef(pageContext);
  contextRef.current = pageContext;

  const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const environmentAllowed =
    typeof window !== "undefined" && isProductionAnalyticsEnvironment(measurementId, window.location.hostname);

  const currentSnapshot = useCallback(() => {
    return buildPageSnapshot({
      location: window.location.href,
      title: document.title,
      referrer: document.referrer,
      context: contextRef.current
    });
  }, []);

  const loadAndFlush = useCallback(() => {
    if (!environmentAllowed || !measurementId) return;
    if (tagReady) {
      grantGoogleConsent();
      getController().flush();
      flushPendingEvents();
      return;
    }
    if (!tagLoading) {
      tagLoading = initializeGoogleTag(measurementId)
        .then(() => {
          tagReady = true;
          getController().flush();
          flushPendingEvents();
        })
        .catch(() => {
          tagReady = false;
          tagLoading = undefined;
        });
    }
  }, [environmentAllowed, measurementId]);

  useEffect(() => {
    const storedConsent = readConsentCookie(document.cookie);
    setConsent(storedConsent);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const timer = window.setTimeout(() => {
      const controller = getController();
      controller.observe(currentSnapshot());
      setVisitKey(controller.getVisitKey());
      if (consent === "granted" && environmentAllowed) {
        controller.grant();
        setVisitKey(controller.getVisitKey());
        loadAndFlush();
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [consent, currentSnapshot, environmentAllowed, hydrated, loadAndFlush, pageContext, router.asPath]);

  const chooseConsent = useCallback(
    (nextConsent: Exclude<AnalyticsConsent, null>) => {
      document.cookie = consentCookieValue(nextConsent, window.location.protocol === "https:");
      setConsent(nextConsent);
      setSettingsOpen(false);
      const controller = getController();
      controller.observe(currentSnapshot());

      if (nextConsent === "granted" && environmentAllowed) {
        controller.grant();
        setVisitKey(controller.getVisitKey());
        loadAndFlush();
        return;
      }

      controller.deny();
      pendingEvents = [];
      if (consent === "granted") {
        withdrawGoogleTag();
        removeAccessibleGoogleCookies(window.location.hostname, document.cookie);
      }
    },
    [consent, currentSnapshot, environmentAllowed, loadAndFlush]
  );

  const trackEvent = useCallback(
    (name: PortfolioEventName, params: Record<string, unknown>) => {
      if (consent !== "granted" || !environmentAllowed) return false;
      const payload = buildPortfolioEventPayload(name, params, currentSnapshot());
      if (!payload) return false;
      if (tagReady) sendGoogleEvent(name, payload);
      else pendingEvents.push({ name, payload });
      return true;
    },
    [consent, currentSnapshot, environmentAllowed]
  );

  const contextValue = useMemo<AnalyticsContextValue>(
    () => ({ consent, openSettings: () => setSettingsOpen(true), trackEvent, visitKey, pageContext }),
    [consent, pageContext, trackEvent, visitKey]
  );

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
      {hydrated && consent === null ? (
        <Paper
          component="section"
          role="region"
          aria-label="Analytics consent"
          elevation={8}
          sx={{
            position: "fixed",
            zIndex: theme => theme.zIndex.modal - 1,
            right: { xs: 12, sm: 24 },
            bottom: { xs: 12, sm: 24 },
            left: { xs: 12, sm: "auto" },
            width: { sm: 520 },
            maxWidth: "calc(100vw - 24px)",
            p: 2.5
          }}
        >
          <Stack spacing={2}>
            <Typography variant="body2">{CONSENT_COPY}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <Button fullWidth variant="outlined" onClick={() => chooseConsent("granted")}>
                Accept analytics
              </Button>
              <Button fullWidth variant="outlined" onClick={() => chooseConsent("denied")}>
                Reject analytics
              </Button>
            </Stack>
          </Stack>
        </Paper>
      ) : null}
      <Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)} aria-labelledby="analytics-settings-title">
        <DialogTitle id="analytics-settings-title">Analytics settings</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography variant="body2">{CONSENT_COPY}</Typography>
            <Typography variant="body2" color="text.secondary">
              Current choice: {consent === "granted" ? "Accepted" : consent === "denied" ? "Rejected" : "Not set"}.
              Withdrawing consent stops future analytics events and removes accessible Google Analytics cookies from
              this site. It does not delete data Google already processed.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 1, p: 2 }}>
          <Button fullWidth variant="outlined" onClick={() => chooseConsent("granted")}>
            Accept analytics
          </Button>
          <Button fullWidth variant="outlined" onClick={() => chooseConsent("denied")}>
            Reject analytics
          </Button>
        </DialogActions>
      </Dialog>
    </AnalyticsContext.Provider>
  );
};
