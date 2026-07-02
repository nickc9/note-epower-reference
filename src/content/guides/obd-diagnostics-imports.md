---
title: "OBD Diagnostics on an Imported e-POWER"
description: "What a generic OBD-II scanner can and can't read on a JDM HE12, the CONSULT reality, reading battery SOC with LeafSpy, and the maintenance-mode trick every emissions tester needs."
difficulty: easy
time_minutes: 15
interval: "Reference"
tools:
  - "Bluetooth or WiFi ELM327 OBD-II dongle (v1.5 recommended over v2.1)"
parts: []
phase: 3
draft: false
---

## The port

Standard OBD-II port, standard place: **driver's footwell, under the
steering column** (two independent owner logs agree). Any ELM327-class
dongle pairs fine.

## What consumer tools can actually do

The picture, assembled from owner reports (probable, not
factory-documented):

- **Generic OBD-II apps** (Torque, Car Gauge Pro, Car Scanner): basic
  engine data works for some owners, sometimes only after manually
  forcing the protocol to **ISO 14230-4 "Fast Init"** instead of auto.
  A UK owners-club claim (which we couldn't re-verify directly) says
  Nissan gates deep ECU access behind its CONSULT protocol — consistent
  with what owners experience.
- **LeafSpy Lite + ELM327** reads the traction battery's **state of
  charge** via the Leaf BMS profile — the one genuinely useful hybrid
  datapoint available cheaply. Setup quirk (owner-documented): set the
  app's "year" field to **"BMS"**, or the app force-closes on this car.
- **Feature coding works**: JP owners routinely use OBD apps to toggle
  dealer-config bits — reverse-beep off, auto-lock speed, auto-light
  timing, mirror auto-fold. The port is not read-only.
- **Carista** officially lists Note e-Power support: warning-light
  readout (ABS/SRS/engine), service resets, and battery registration
  among its features.
- What nobody has demonstrated with consumer tools: inverter/motor/HV
  DTCs, motor RPM, inverter temperature. Assume those need the real
  dealer tool.

## CONSULT-III plus — the dealer tool

Deep hybrid diagnostics (and likely the inverter-coolant bleed pump
activation) live behind Nissan's CONSULT-III plus. Real shop diagnostics
on HE12s demonstrably use it — a documented JP shop case traced an
electric water pump fault via CONSULT DTCs.

**On clones:** $150-600 "Consult III+" clone interfaces are widely sold
and the forum consensus across several independent communities is
uniformly negative — dropped comms, VIN read failures, and at least one
report of a clone damaging ECM/BCM modules. If you need CONSULT-level
work outside Japan, a Nissan dealer or a hybrid-capable independent with
genuine/licensed tooling is the safe route. We don't recommend clones.

## The emissions-test problem (and the fix)

An e-POWER **will not idle its engine continuously** — it starts and
stops the generator as it pleases, which breaks any static tailpipe test.
Two independent JP sources document the fix:

1. Sometimes it's enough to **leave the hood slightly ajar** while
   running — the car holds the engine on.
2. Otherwise there's a built-in **maintenance mode** (メンテナンスモード)
   entered by a driver-input sequence — roughly: P, power on without
   brake, then a P→N shift pattern with specific accelerator inputs until
   the dash shows maintenance mode. The two sources disagree on the exact
   pedal choreography, so treat it as "this mode exists, the entry
   sequence involves P/N shifts plus accelerator inputs — watch the dash
   for confirmation". Powering off exits it. No tool required.

Hand this page to your test station — it applies across Note, Serena,
Kicks and other e-POWERs.

## One more diagnostics quirk

Weak or absent regen braking with no other symptoms? Check the
**brake-light fuse** before fearing the worst — the regen permission
logic needs a healthy stop-lamp circuit. Details in the
[brake system reference](../brake-system-reference/).

## A warning about English-language "common problems" articles

Most English SEO articles about "Nissan Note e-Power problems" describe
the **petrol** Note — drive belt whistle, torque converter complaints.
This car has neither a belt nor a torque converter. If an article
mentions them, close the tab; it wasn't written about your car.
