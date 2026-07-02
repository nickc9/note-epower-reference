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
- **Parking brake adjustment (forum-grade):** one owner DIY log (petrol
  E12, which shares the lever/cable/drum architecture) describes a **10 mm
  adjuster nut through an opening at the base of the handbrake lever**
  inside the centre console, with the manufacturer target quoted as
  **11–12 clicks of lever travel**. Single source, not HE12-labelled, and
  not from a factory manual — treat as a starting point, and remember
  over-tightening drags the drums and cooks the shoes. A factory-manual
  spec for the HE12 specifically is still wanted.

## Brake fluid

- Spec: **Nissan No.2500 (DOT 3)** — genuine 0.5 L bottle is KN100-30005.
- Interval: **Nissan does not publish one online.** We checked Nissan's
  own fluid FAQ for this chassis — it gives capacities and types but
  explicitly defers change timing to the paper Maintenance Note booklet
  that ships with the car. Owner and workshop convention in Japan is
  **every 2 years, with shaken**, and that's what we suggest. Brake fluid
  absorbs moisture regardless of mileage — if your import's history is
  unknown, change it as part of your baseline service. (If you have the
  メンテナンスノート booklet for an HE12, the official figure is a wanted
  contribution.)
- DOT 4 is generally backward-compatible with DOT 3 systems, but no
  Nissan statement for this chassis was found — using No.2500/DOT 3 is
  the zero-argument choice.
- Bleeding order and any ABS/actuator-specific bleed requirements for
  this chassis weren't confirmed in public sources. If you bleed at home,
  keep the reservoir topped up and get a firm pedal before driving; if
  the pedal stays soft or the ABS unit may have taken in air, it's a
  CONSULT/dealer job.

## ⚠️ The regen-braking fuse quirk

One owner-documented quirk worth knowing (single source, forum-grade): a
blown **brake-light (stop lamp) fuse also disables regenerative braking** —
the car needs the brake-light circuit healthy to allow regen. Per the same
owner's teardown, it's a **10 A low-profile fuse living in a "hidden"
fuse box** under a bento-box-style cover that the owner's manual doesn't
document (the HE12 has four fuse box locations in total; the manual shows
only two — dash area and luggage-room by the 12V battery, plus six 10 A
Micro2 fuses by the engine-bay jump terminal). If your regen / one-pedal
behaviour suddenly weakens, check the brake lights and this fuse before
assuming something expensive. Note the HE12 uses two fuse form factors —
low-profile mini and the smaller Micro2 — so keep spares of both.
