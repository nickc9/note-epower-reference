---
title: "Cooling System — Two Circuits, One Coolant"
description: "The Note e-POWER's separate engine and inverter cooling circuits: capacities, intervals, what's DIY-able, and what's honestly still undocumented."
difficulty: involved
time_minutes: 120
interval: "First change 7 yr / 160,000 km, then every 4 yr / 80,000 km"
tools:
  - "Drain pan, funnel"
  - "Fresh S-LLC (premixed) — see parts"
parts:
  - coolant-sllc
  - inverter-water-pump
fluids:
  - name: "Engine circuit (S-LLC)"
    capacity: "approx. 6.78 L"
  - name: "Inverter circuit (S-LLC)"
    capacity: "approx. 4.16 L"
phase: 2
draft: false
---

## The architecture

The e-POWER has **two fully separate cooling circuits**, each with its own
reservoir, piping, and its own **electric** water pump:

1. **Engine circuit** (~6.78 L) — cools the HR12DE generator engine.
   Electric pump (no belt).
2. **Inverter circuit** (~4.16 L) — cools the power electronics.
   Electric pump 21581-5WZ0B.

Both use the same fluid: **Nissan Super Long Life Coolant** (blue,
premixed KQ301-34002). Nissan says genuine S-LLC only, no leak-stop
additives. Interval (verified across Nissan sources): first change at
**7 years / 160,000 km**, then every **4 years / 80,000 km** — so a 2018
import is due its first change around 2025-2026. If yours hasn't had it,
this is current, not future, maintenance.

## What's DIY-able — honest assessment

**Engine circuit:** a conventional drain-refill-bleed job in principle
(drain cock at the radiator, refill, run with heater on max hot, top up,
repeat). Standard practice on most modern Nissans, and no special-tool
requirement surfaced in research.

**Inverter circuit: here's the honest gap.** Its pump is electronically
controlled, and refilling plausibly requires commanding the pump to run
(CONSULT diagnostic tool) to purge air — but **no owner DIY log or public
document confirming the bleed procedure could be found**. Every owner log
we found had this circuit done at the dealer. That pattern, plus an
air-locked inverter pump being an expensive mistake, means our current
recommendation is:

> **Have the coolant change done at a Nissan dealer or hybrid-capable
> garage, both circuits together.** Owner-reported dealer cost in Japan:
> ~¥12,000 all-in. Use this page to sanity-check the quote and make sure
> BOTH circuits are being done.

If you have documentation of the inverter bleed procedure (service manual
excerpt, dealer job sheet), please share it via GitHub — it's the single
most-wanted missing piece in this guide.

## Watch-items between changes

- Check both reservoir levels (cold) at every oil change; a dropping
  inverter reservoir is a leak or pump problem, not "normal usage".
- A cooling warning light + CONSULT code on the e-POWER can mean a failed
  **electric** water pump on either circuit — a known repair pattern on
  these cars, and worth diagnosing promptly since an overheated inverter
  derates the drivetrain.
- Radiator/upper-bay work: mind the HV inverter assembly — it's heavy and
  sits close to the work area.
