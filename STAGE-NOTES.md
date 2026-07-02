# Stage notes

## Status (July 2026)

- **Phase 1 — DONE:** oil & filter, air filter, cabin filter, wipers, 12V
  battery, key fob, tires/wheels, service intervals, model identification.
  13 parts + 9 guides.
- **Phase 2 — DONE:** brakes (pads/rotors/shoes/drum/cylinder/fluid),
  spark plugs, coolant/two-circuit cooling, drive belt (finding: none
  fitted). +10 parts, +4 guides, Phase 1 confidence upgrades via Amayama
  browser checks.
- **Phase 3 — NEXT:** suspension & NISMO parts (S-tune etc.), reduction
  gear oil (Matic Fluid S, ~1.94 L, no official interval), traction
  battery & e-POWER system explainer, OBD/diagnostics for imports
  (which tools speak to a JDM HE12), possibly headlight/bulb part entries.

## Key facts already established (don't re-derive)

- Full research files with all sources: `docs/research/*.md`
- Oil: 0W-20 SN, 3.2/3.4 L, filter 15208-65F00 → JDM current 15208-ED50A
  (Pitwork AY100-NS004); drain plug 11128-01M00 + washer 11026-01M02
  (both Amayama-verified), drain torque ~35 N·m (owner-sourced)
- Air 16546-5WK0A / cabin 27277-1HD0A (Pitwork AY684/685/686-NS018)
- 12V battery: EN/DIN LN2 EFB for NISMO/NISMO S (LN1 = base S grade only),
  boot floor, hydrogen vent hose critical, genuine p/n still unknown
- Wipers 650/300/305 mm; current genuine driver blade 28890-3VA0D
- Tires: NISMO/NISMO S 195/55R16 87V on 16×6.5J ET46, 4×100; lugs
  M12×1.25 @ 108 N·m; placard 230/210 kPa; no spare (repair kit)
- Brakes: shared across all HE12 grades incl. NISMO S (rear DRUMS);
  pads AY040-NS167, rotor 260×22 min 20 mm, shoes AY360-NS106, drum
  43206-ED300, cylinder 44100-3HA0B, fluid No.2500 DOT3 KN100-30005
- Plugs: 22401-ED815 (NGK LZKAR6AP-11; Premium RX LKAR6ARX-11P upgrade),
  interval 100,000 km — resolved via Nissan FAQ precious-metal rule
- Coolant: S-LLC KQ301-34002 premixed; engine ~6.78 L + inverter ~4.16 L;
  7 yr/160k first then 4 yr/80k; both water pumps electric
- No accessory belt on the e-POWER — verified, documented as an
  "anti-part" entry (`drive-belt-none`)

## Unresolved items (Phase 3 candidates for closure)

1. Genuine 12V battery part number (24410-xxxxx family, LN2)
2. Genuine front rotor part number (40206-xxxx)
3. Inverter-circuit coolant bleed procedure (CONSULT pump activation?) —
   currently guide says "dealer recommended"; most-wanted contribution
4. Official brake fluid interval (convention: 2 yr with shaken)
5. Parking brake adjustment spec
6. Whether factory NISMO pad compound differs within shared part number
7. Passenger/rear genuine wiper blade numbers
8. Reduction gear oil: official policy/interval + part number (Matic
   Fluid S capacity 1.94 L known)
9. Rear drum alternate number 43206-3HA2A — exists in genuine catalogue
   with no fitment data; relationship to ED300 unresolved
10. Spark plug gap (1.0–1.1 mm single non-JP source), coolant concentrate
    KQ301-34102 (single source), reservoir capacities 0.85/0.57 L
    (unmapped to circuits), fuse box layout (single forum source)

## Practical notes

- Community suggestion flow works but has no submissions yet — seed it or
  publicise the site to JDM import owner groups when content is deeper.
- For genuine-number gaps: a Nissan dealer can look up the owner's exact
  car by frame number (kept in local memory, not this repo).
- e-POWER safety habit baked into all engine-bay guides: car fully OFF
  (not READY) — the engine can self-start any time in READY.
