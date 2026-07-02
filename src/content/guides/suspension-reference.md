---
title: "Suspension Reference — NISMO Tune, Wear Parts, Torque Specs"
description: "What's actually different about NISMO/NISMO S suspension on the HE12, which wear parts have known numbers, common failure reports, and upgrade options."
difficulty: moderate
time_minutes: 20
interval: "Inspect at 12-month service; shocks commonly weep by 5-8 years"
tools: []
parts:
  - front-stabilizer-link
  - rear-shock-absorber
  - nismo-sports-suspension-kit
torque_specs:
  - fastener: "Front strut upper mount nut (non-reusable)"
    nm: 40
  - fastener: "Front strut-to-knuckle bolts (non-reusable)"
    nm: 165
  - fastener: "Stabilizer link nuts, upper/lower"
    nm: 39
  - fastener: "Lower arm ball joint nut (non-reusable)"
    nm: 55
  - fastener: "Tie rod end nut (non-reusable)"
    nm: 34
  - fastener: "Rear shock lower bolt"
    nm: 98
  - fastener: "Rear shock upper mount nut (non-reusable)"
    nm: 20
  - fastener: "Rear torsion beam mounting bolts (non-reusable nuts)"
    nm: 90
phase: 3
draft: false
---

## The layout

Front: MacPherson struts. Rear: torsion beam. Same architecture on every
HE12 grade — what changes on NISMO/NISMO S is tuning, not layout.

**What Nissan's own spec sheet says about the NISMO grades** (official
archived document, verified): e-POWER NISMO and NISMO S share an
**identical "NISMO専用" (NISMO-dedicated) suspension tune** — there is no
suspension difference between NISMO and NISMO S; the S is an
inverter/software tune. Versus standard grades, the sheet calls out a
**reinforced front stabilizer bar ("フロント強化")**, plus NISMO-specific
body-stiffening bars. Both NISMO grades weigh 1250 kg with 130 mm ground
clearance.

Cusco's fitment sheet independently corroborates the stabilizer detail:
their 22 mm front bar is rated "185% of stock" against a base e-POWER but
only "135% of stock" against an e-POWER NISMO — the NISMO bar really is
stiffer from the factory.

## Wear parts — what we know so far

| Part | Number | Status |
|---|---|---|
| Front stabilizer links | 54618-JX00A | Verified (Amayama + retailers), fits all grades |
| Rear shock absorbers | E6210-A16E | Probable — standard grades; NISMO number unconfirmed |
| Front struts | — | **Unknown.** Candidates found all turned out to be petrol E11/E12 parts |
| Coil springs, strut mounts, bump stops | — | Unknown |
| Lower arm / ball joint / bushings | — | Unknown; ball joint boot is serviceable (aftermarket Ohno Rubber boots used in shop logs) |
| Rear torsion beam bushings | — | Likely not sold separately by Nissan; a petrol-E12 owner used PowerFlex 11160 poly bushings |

That's an honest picture: suspension OEM numbers are the biggest remaining
gap on this site, mostly because the NISMO-dedicated tune means standard-
grade numbers can't be assumed to carry over. A dealer can resolve any of
these against your frame number — if you get numbers from a dealer
invoice, please contribute them via GitHub.

## Known failure patterns (owner reports)

- **Rear shock oil leaks** are the most-reported suspension issue —
  including one e-POWER NISMO S with weeping rears at ~18,000 km /
  30 months, and another car failing shaken pre-inspection at higher
  mileage. Check for oil streaks down the shock body at every tire
  rotation.
- **Knocking/rattling over small bumps** at the front is classically the
  stabilizer links — cheap and easy to replace.

## Torque specs — caveat

The table above comes from a third-party torque-spec aggregator
cross-checked against owner posts where possible (the 98 N·m rear shock
bolt and 34 N·m tie rod nut match independent sources) — **not from a
factory manual**. Note how many fasteners are single-use
(non-reusable nuts/bolts): budget for new hardware on any suspension job.

## Upgrades

- **NISMO's own Öhlins-based full-length adjustable kit** is the factory-
  blessed option for the e-POWER NISMO/NISMO S — see the parts entry
  (price/SKU needs dealer confirmation).
- **Cusco** publishes an official HE12 e-POWER fitment sheet: 22 mm front
  solid bar (2A1 311 A22, ¥25,000), 16 mm rear add-on bar (2A1 311 B16,
  ¥18,000), front strut brace type OS (278 540 A, ¥15,000), power braces,
  and the Street Zero coilover (¥128,000). The sheet lists "e-POWER /
  e-POWER NISMO" — NISMO S isn't named but shares the NISMO suspension.
  On NISMO grades some power braces replace factory-fitted bars rather
  than adding new ones.
- **Lowering springs**: Espelir lists HE12 e-POWER applications split by
  grade (ESN-3185 for the NISMO) — their catalogue page couldn't be
  verified directly, so confirm the number with the vendor.
- Tower bars: several are sold "for Note" but at least one (Blitz 96140)
  is explicitly for the petrol HR16DE NISMO — check e-POWER fitment
  before buying any tower bar; the engine bays differ.
