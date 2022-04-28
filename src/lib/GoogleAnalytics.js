//File taken from MUI source code

import React from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";

function loadScript(src, position) {
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.src = src;
  position.appendChild(script);

  return script;
}

function handleClick(event) {
  let element = event.target;

  while (element && element !== document) {
    const category = element.getAttribute("data-ga-event-category");

    // We reach a tracking element, no need to look higher in the dom tree.
    if (category) {
      const split = parseFloat(element.getAttribute("data-ga-event-split"));

      if (split && split < Math.random()) {
        return;
      }

      window.ga("send", {
        hitType: "event",
        eventCategory: category,
        eventAction: element.getAttribute("data-ga-event-action"),
        eventLabel: element.getAttribute("data-ga-event-label"),
      });
      break;
    }

    element = element.parentElement;
  }
}

let boundDataGaListener = false;

/**
 * basically just a `useAnalytics` hook.
 * However, it needs the redux store which is created
 * in the same component this "hook" is used.
 */
function GoogleAnalytics() {
  React.useEffect(() => {
    loadScript(
      "https://www.google-analytics.com/analytics.js",
      document.querySelector("head")
    );

    if (!boundDataGaListener) {
      boundDataGaListener = true;
      document.addEventListener("click", handleClick);
    }
  }, []);

  const router = useRouter();

  React.useEffect(() => {
    // Wait for the title to be updated.
    setTimeout(() => {
      const page = window.location.pathname;
      window.ga("set", { page });
      window.ga("send", { hitType: "pageview" });
    });
  }, [router.route]);

  React.useEffect(() => {
    /**
     * Based on https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#Monitoring_screen_resolution_or_zoom_level_changes
     * Adjusted to track 3 or more different ratios
     */
    function trackDevicePixelRation() {
      const devicePixelRatio = Math.round(window.devicePixelRatio * 10) / 10;
      window.ga("set", "dimension3", devicePixelRatio);
    }

    trackDevicePixelRation();

    /**
     * @type {MediaQueryList}
     */
    const matchMedia = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );
    // Intentionally use deprecated listener methods to support iOS & old browsers
    matchMedia.addListener(trackDevicePixelRation);
    return () => {
      matchMedia.removeListener(trackDevicePixelRation);
    };
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });
  const colorSchemeOS = prefersDarkMode ? "dark" : "light";

  React.useEffect(() => {
    window.ga("set", "dimension4", colorSchemeOS);
  }, [colorSchemeOS]);

  return null;
}

export default React.memo(GoogleAnalytics);
