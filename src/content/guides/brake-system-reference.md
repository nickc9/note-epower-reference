---
title: "Brake System Reference — Drums, Fluid, Parking Brake"
description: "The Note e-POWER (HE12) rear drum brakes, brake fluid spec and change guidance, parking brake, and the regen-braking fuse quirk."
difficulty: moderate
time_minutes: 30
interval: "Fluid ~every 2 years (convention); drums inspected at shaken/24-month service"
tools: []
parts:
  - rear-brake-shoes
  - rear-brake-drum
  - rear-wheel-cylinder
  - brake-fluid
phase: 2
draft: false
---

## The layout

Front: 260 mm vented discs. Rear: **leading-trailing drum brakes on every
HE12 grade, including NISMO and NISMO S.** (English sources claiming the
NISMO S has rear discs are describing the old petrol E12改 NISMO S — see
the [model identification guide](../identify-your-model/).) The parking
brake is a conventional hand lever, cable-actuated on the rear shoes —
the electronic parking brake arrived with the next-generation E13.

## Rear drums — what to know

- Shoes wear very slowly on an e-POWER (regen does the work), but check
  for **leaking wheel cylinders** and rust at every inspection — a fluid
  stain inside the backing plate or on the shoes means the cylinder
  (44100-3HA0B) needs replacing and the shoes with it if contaminated.
- Drum service (shoes, springs, adjusters, cylinders) is fiddlier than
  disc work and the self-adjuster must be set correctly for a working
  handbrake — a reasonable job to leave to a garage; use the parts
  entries to source components yourself.
- No parking-brake adjustment spec (lever clicks / cable tension) was
  found in public sources — flagged as an open item pending factory
  service manual data.

## Brake fluid

- Spec: **Nissan No.2500 (DOT 3)** — genuine 0.5 L bottle is KN100-30005.
- No official change interval was found for the HE12; owner and workshop
  convention in Japan is **every 2 years, with shaken**. Brake fluid
  absorbs moisture regardless of mileage — if your import's history is
  unknown, change it as part of your baseline service.
- DOT 4 is generally backward-compatible with DOT 3 systems, but no
  Nissan statement for this chassis was found — using No.2500/DOT 3 is
  the zero-argument choice.
- Bleeding order and any ABS/actuator-specific bleed requirements for
  this chassis weren't confirmed in public sources. If you bleed at home,
  keep the reservoir topped up and get a firm pedal before driving; if
  the pedal stays soft or the ABS unit may have taken in air, it's a
  CONSULT/dealer job.

## ⚠️ The regen-braking fuse quirk

One owner-documented quirk worth knowing (single source, unconfirmed): a
blown **rear brake-light fuse also disables regenerative braking** — the
car needs the brake-light circuit healthy to allow regen. If your regen /
one-pedal behaviour suddenly weakens, check the brake lights and their
fuse before assuming something expensive.
