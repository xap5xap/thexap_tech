import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HeaderFooterLayout from "../src/components/HeaderFooterLayout";
import { InlineWidget } from "react-calendly";
import { scheduleMeetingMetadata } from "../src/content/portfolio/metadata";
import { useEffect, useRef } from "react";
import { CalendlyMessageSequence } from "../src/analytics/calendly";
import { useAnalytics } from "../src/analytics/AnalyticsProvider";

const ScheduleMeetingPage = () => {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const sequenceRef = useRef(new CalendlyMessageSequence());
  const { trackEvent } = useAnalytics();
  const trackEventRef = useRef(trackEvent);
  trackEventRef.current = trackEvent;

  useEffect(() => {
    const onMessage = (message: MessageEvent) => {
      const activeFrameSource = calendarRef.current?.querySelector("iframe")?.contentWindow;
      const event = sequenceRef.current.consume(message, activeFrameSource);
      if (event) trackEventRef.current(event.name, event.params);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <HeaderFooterLayout metadata={scheduleMeetingMetadata}>
        <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: "background.paper" }}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h3" textAlign="center">
              Schedule a meeting
            </Typography>
            <Typography color="text.secondary" textAlign="center" sx={{ mt: 2 }}>
              Bring the current product state, the outcome that matters next, and where ownership is unclear. An initial
              conversation will establish whether direct senior ownership fits the work.
            </Typography>
            <Typography color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
              You do not need a finished specification.
            </Typography>
          </Container>
        </Box>
        <Box ref={calendarRef} sx={{ height: { xs: 780, md: 720 }, backgroundColor: "background.default" }}>
          <InlineWidget
            styles={{ width: "100%", height: "100%" }}
            url="https://calendly.com/xavier-perez-dev/30min?background_color=303136&text_color=ffffff&primary_color=f59415"
          />
        </Box>
      </HeaderFooterLayout>
    </>
  );
};

export default ScheduleMeetingPage;
