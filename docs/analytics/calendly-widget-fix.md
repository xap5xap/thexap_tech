# Calendly widget error fix

Issue: XAP-196  
Verified source version: `react-calendly@4.4.0`  
Initial evidence date: September 20, 2026 (America/Guayaquil)

## Diagnosis

Production `/schedule-meeting` loaded both:

1. the `react-calendly` `InlineWidget`, which renders its own iframe with a formatted Calendly URL; and
2. `https://assets.calendly.com/assets/external/widget.js` through `next/script`.

On a fresh production load, the browser recorded:

```text
Uncaught TypeError: Cannot read properties of null (reading 'split')
https://assets.calendly.com/assets/external/widget.js
```

At the same time the page had one `.calendly-inline-widget`, one Calendly iframe, and the extra external script.

The installed `react-calendly` source shows that `InlineWidget` formats the URL and directly renders the iframe. The fetched production widget script shows its independent constructor uses:

```text
(this.options.url || this.getUrlFromParent()).split("#")[0]
```

and `getUrlFromParent()` reads the parent element's `data-url`. The React component's container has no `data-url`, so the independently loaded script reads `null` and calls `.split()` on it.

## Fix

Remove the redundant `next/script` loader. Keep the `InlineWidget`, URL, theme parameters, dimensions, page copy, and Calendly account settings unchanged.

No dependency upgrade, `node_modules` patch, error suppression, analytics callback, or provider setting change is part of this fix.

## Verification matrix

| Check | Before | Candidate | Production release |
| --- | --- | --- | --- |
| Fresh route load | Exact split/null exception reproduced | No split/null error; one React-owned iframe; no widget script | XAP-204 required |
| Client navigation into route | One active iframe; redundant script remained loaded | No split/null error; one iframe | XAP-204 required |
| Leave and revisit route | One active iframe; no second visible iframe | No split/null error; one iframe and one container | XAP-204 required |
| Booking UI | 30 Minute Meeting and available dates visible | Same meeting and available dates visible | XAP-204 required |
| Date and time selection | Not submitted; must stop at attendee details | Reached `Enter Details`; no data entered or appointment submitted | XAP-204 required |
| Desktop and mobile layout | Required | 1682 px and 390 px checks had no horizontal overflow | XAP-204 required |
| Keyboard and focus | Required, excluding a claim of full third-party iframe accessibility | Skip link focused `main`; next Tab reached the Calendly iframe | XAP-204 required |
| Analytics denied or blocked | Recheck after XAP-199 | XAP-204 integration check | XAP-204 required |

The production column stays pending until the scoped XAP-204 release. A local or preview result is not a deployed fix.
