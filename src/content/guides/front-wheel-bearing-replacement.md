---
title: "Front Wheel Bearing Replacement"
description: "Diagnosing and replacing a front hub bearing on the Note e-POWER (HE12) — a real, repeatedly-reported failure mode, the honest DIY difficulty, and the OEM part-number ambiguity that's still unresolved."
difficulty: involved
time_minutes: 150
interval: "No scheduled interval — inspect if you hear a speed-dependent roaring/humming noise. Real failures reported from ~36,000 km to 140,000+ km; don't wait for a mileage milestone."
tools:
  - "Hydraulic press, or an engine crane + suitable bearing/hub adapters (not a hand-tool job)"
  - "Jack + axle stands, wheel chocks"
  - "Breaker bar (the driveshaft nut is torqued very high and usually seized)"
  - "Sockets/wrenches for tie rod end, ball joint, and strut-to-knuckle fasteners (exact sizes not independently confirmed for this car — verify before buying)"
  - "Torque wrench (up to 250 N·m capable)"
  - "New driveshaft nut and hub cap (non-reusable — see Notes)"
  - "Bearing puller/slide hammer set, if not using a full press"
parts:
  - front-wheel-bearing
torque_specs:
  - fastener: "Tie rod end nut (non-reusable)"
    nm: 34
  - fastener: "Lower arm ball joint nut (non-reusable)"
    nm: 55
  - fastener: "Front strut-to-knuckle bolts (non-reusable)"
    nm: 165
  - fastener: "Driveshaft nut (non-reusable, one-time use)"
    nm: 228
  - fastener: "Wheel nuts"
    nm: 108
phase: 5
draft: false
---

## Is this actually your problem?

A speed-dependent **roaring or humming noise that gets louder above roughly
50 km/h**, sometimes with detectable play when you rock the wheel top/bottom
with the car raised, is the classic front hub bearing symptom on this car —
and it's a real, repeatedly-reported issue across multiple independent
HE12 e-POWER owners, not just generic wheel-bearing folklore. See the
[suspension reference guide](../suspension-reference/) and the
[front wheel bearing part entry](../../parts/front-wheel-bearing/) for the
owner-reported cases this is based on.

**Reported failure mileages are wide — roughly 36,000 km to 140,000+ km —
rather than clustering around any one figure.** One owner had a
dealer-fitted replacement bearing fail again within another ~10,000 km.
Don't use "it's under 100,000 km, it can't be the bearing" as a reason to
rule this out. Before assuming a bearing, also rule out:

- **Tire wear/noise** — an irregularly worn or damaged tire can sound similar;
  swap wheels front-to-rear or check a known-good tire if the noise doesn't
  change with steering input.
- **The reduction gear / drivetrain** — at least one owner's "roaring" turned
  out to be the reduction gear, not the bearing, after a bearing replacement
  didn't fix it (see the part entry). A rolling-noise-that-changes-with-
  steering-angle points to a bearing; a noise that's constant regardless of
  turning is more likely drivetrain.
- **Rear bearings** — owner reports include rear hub bearing failures too,
  not just front. Confirm which corner is noisy (a second person listening,
  or a mechanic's stethoscope) before ordering parts.

## The honest difficulty assessment

**This is not a routine DIY job.** The front hub bearing is a press-fit
assembly inside the knuckle — replacing it means removing the knuckle from
the car and pressing the old bearing out / new one in. Multiple sources
agree this needs a hydraulic press (or an engine crane rigged with adapters)
and is why shops charge accordingly. It's DIY-feasible if you have real
press access, but budget it at the same difficulty tier as strut/knuckle
work, not a brake-pad-style swap. If a press isn't available to you, this
is shop work — use this page and the part entry to check parts and sanity-
check the quote (~¥12,000-15,000 labor per corner observed in an owner log,
plus parts).

## Before you start

- **OEM part number is unresolved for this car.** Two candidates exist
  (40210-1HA1A / 40210-5RB0A) with conflicting fitment evidence — read the
  [part entry](../../parts/front-wheel-bearing/) before ordering, and ideally
  confirm the correct number against your own frame number at a dealer, or
  read the number stamped on the bearing you're removing.
- e-POWER safety habit applies as always: power the car fully **OFF**, not
  READY, before working near the engine bay — though this job is mostly
  underneath the car at the front corner.
- The driveshaft nut, strut-to-knuckle bolts, ball joint nut, and tie rod
  end nut are all **non-reusable** — buy new fasteners before you start, not
  after you're mid-job.

## Steps

1. Loosen the front wheel nuts and the driveshaft nut (both while the wheel
   is still on the ground for leverage) — the driveshaft nut is torqued to
   **228 N·m** and is usually seized; a breaker bar and a helper stepping on
   the brake pedal (or a specialty tool to lock the hub) may be needed.
2. Jack and support the front of the car on stands (see the
   [wheels & tires guide](../wheels-and-tires/) for jacking-point cautions),
   remove the wheel, and remove the driveshaft nut and its washer.
3. Remove the brake caliper (support it with wire — never let it hang by the
   hose) and the rotor to expose the hub.
4. Disconnect the tie rod end and the lower ball joint from the knuckle
   (both non-reusable nuts — a ball joint separator/pickle fork may be
   needed if the taper is stuck).
5. Remove the strut-to-knuckle bolts (non-reusable) and separate the knuckle
   from the strut.
6. Withdraw the driveshaft outer CV joint from the hub — it may need a
   puller or a few careful taps with a soft drift if it's seized; don't hit
   the CV joint boot or threads.
7. With the knuckle off the car, support it securely in the press and press
   the old hub bearing out, then press the new one in — follow the press
   adapter/tool set's instructions for correct bearing orientation and
   support points; pressing on the wrong race can damage the new bearing
   before it's even fitted.
8. Reassemble in reverse: knuckle to strut (165 N·m), driveshaft into the
   hub, ball joint and tie rod end reconnected (55 N·m / 34 N·m), new
   driveshaft nut torqued to **228 N·m** with the wheel back on the ground
   for leverage, rotor and caliper refitted.
9. Refit the wheel (108 N·m), lower the car, and re-check all torques —
   especially the driveshaft nut, given how commonly it's under-torqued or
   over-torqued by hand.
10. Road test: confirm the noise is gone, and re-check wheel nut and
    driveshaft nut torque again after ~100 km.

## Notes

- Reported parts cost: an aftermarket bearing ran ~¥4,719 vs. genuine
  ~¥7,579 per side in one owner's DIY log — see the part entry for the
  full pricing and sourcing picture.
- The ABS wheel-speed sensor is likely integrated into the hub bearing unit
  on this car (standard on modern Nissans with front discs), though this
  isn't independently confirmed for either candidate part number — handle
  the hub carefully during removal/installation regardless.
- If you don't have confirmed torque figures for the driveshaft nut or
  suspension fasteners from a factory manual for your specific car, the
  figures above come from a third-party torque-spec aggregator
  cross-checked against owner posts where possible — not a factory
  manual. Snug hardware conservatively and double-check before driving.
- This is a good opportunity to inspect the CV joint boot, ball joint boot,
  and tie rod end boot while everything is apart — cheap insurance against
  a second teardown later.
