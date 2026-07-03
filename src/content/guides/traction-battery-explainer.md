---
title: "The Traction Battery — How the e-POWER's Two Batteries Work"
description: "The lithium-ion drive battery and the 12V auxiliary battery: what each does, why e-POWERs get flat 12V batteries, jump-start rules, degradation, and replacement cost reality."
difficulty: easy
time_minutes: 10
interval: "Reference — no scheduled maintenance"
tools: []
parts:
  - battery-12v-ln2
phase: 3
draft: false
---

## Two batteries, two very different jobs

**The traction (drive) battery** is a small lithium-ion pack. It buffers
energy between the HR12DE generator engine and the EM57 drive motor, and
also powers the electric A/C compressor. It is *not* a Leaf battery —
the e-POWER pack is tiny by EV standards because it's a buffer, not a
range tank. **292 V nominal, 4 modules / 80 cells, 41.8 kg pack weight**
are verified directly from Nissan's own "Note e-POWER (E12-type)"
lithium-ion battery removal/recovery manual (dated April 2020, published
for licensed dismantlers under Japan's End-of-Life Vehicle Recycling
Law). The commonly-quoted **~1.47 kWh** capacity figure is still not
confirmed by any primary Nissan document — Nissan's 2016 launch press
kit deliberately withheld a capacity spec (contemporary journalists'
"~1.5 kWh" figures were their own back-of-envelope estimates from a
"1/20th the size of the Leaf pack" quote, not a cited Nissan number), so
treat 1.47 kWh as a widely-repeated derived figure rather than a verified
one. Note: the same manual states the *system* runs at up to ~350V via a
boost converter to the motor inverter — that's not the battery pack's
own 292V rating, don't conflate the two.

**The 12V auxiliary battery** (boot floor, LN2 size on NISMO/NISMO S)
boots the e-POWER system and runs conventional electrics. Key mechanism,
from Nissan's official FAQ: the 12V battery is charged from the traction
battery through a DC/DC converter **only while the system is powered
ON/READY**. A parked car does not top up its 12V battery no matter how
charged the traction pack is — which is why lightly-used e-POWERs
famously wake up with flat 12V batteries. If you drive rarely, drive
longer when you do, or use a maintenance charger.

## Flat battery? The rules (from Nissan's owner documentation)

- A no-start is almost always the **12V** battery, not the traction pack.
- Jump the 12V system **only** via the ⊕ jump terminal in the engine-bay
  fuse box area — never touch the traction battery.
- The donor must be a conventional 12V petrol/diesel car.
- **Never use your e-POWER as the donor for another car** — the 12V
  circuit isn't rated for cranking loads and expensive damage can result.
- Push-starting is impossible (no mechanical connection between wheels
  and engine).
- If the traction battery itself is faulted, that's a warning-light +
  dealer situation, not a jump-start one.

## NISMO S and the battery

No source shows any traction-battery difference between grades. The
NISMO S's extra output (100 kW vs 80 kW) comes from a retuned inverter,
control software, and a strengthened reduction gear — same pack.
(Working assumption from consistent sources; Nissan doesn't publish
pack specs per grade.)

## Degradation and replacement cost — the honest picture

- Symptoms of a tired pack: the engine runs more often, fuel economy
  drops, less EV-only crawling. JP owner reports suggest packs generally
  outlast 100,000 km without drama.
- Replacement cost reports in Japan scatter widely — roughly
  **¥200,000-800,000** depending on source and whether it's a dealer
  quote or aggregator figure. No tight number exists publicly; treat any
  specific figure you're quoted as needing a second opinion.
- Real-world data point: one documented owner replacement (flood damage,
  not degradation) totalled ~¥1.25 million for all flood repairs
  including the pack, took 4 months on parts lead times, and was covered
  by insurance as natural-disaster damage.
- You can watch state-of-charge yourself: **LeafSpy Lite** over a
  Bluetooth ELM327 dongle reads the pack's BMS (set the app's "year"
  field to "BMS" or it force-closes on this car) — see the
  [diagnostics guide](../obd-diagnostics-imports/).

## For importers

The traction battery is commonly cited as carrying an 8-year/160,000 km
warranty in Japan (aggregator-grade figure, not verified against Nissan's
warranty booklet) — and whatever it was, it does **not** travel with a
grey import. Factor pack condition into
any purchase: a test drive where the engine barely stops running on a
warm day is a yellow flag.
