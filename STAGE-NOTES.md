# Stage notes

## Status (July 2026)

- **Phase 1 — DONE:** oil & filter, air filter, cabin filter, wipers, 12V
  battery, key fob, tires/wheels, service intervals, model identification.
  13 parts + 9 guides.
- **Phase 2 — DONE:** brakes (pads/rotors/shoes/drum/cylinder/fluid),
  spark plugs, coolant/two-circuit cooling, drive belt (finding: none
  fitted). +10 parts, +4 guides, Phase 1 confidence upgrades via Amayama
  browser checks.
- **Phase 3 — DONE:** suspension & NISMO parts, reduction gear oil,
  traction battery explainer, OBD diagnostics for imports, lighting/bulb
  reference. +4 parts (front-stabilizer-link, rear-shock-absorber,
  reduction-gear-oil, nismo-sports-suspension-kit), +5 guides
  (suspension-reference, reduction-gear-oil-change,
  traction-battery-explainer, obd-diagnostics-imports,
  lighting-bulb-reference). Closed from the old unresolved list: genuine
  front rotor (40206-3U80A, Amayama-verified), coolant concentrate
  KQ301-34102 (verified), reservoir mapping (engine 0.85 L / inverter
  0.57 L, official), brake fluid interval (confirmed: no public official
  figure — FAQ defers to paper Maintenance Note), parking brake spec
  (forum-grade 10 mm nut / 11-12 clicks, E12-sourced), fuse box detail
  (10 A low-profile stop-lamp fuse in undocumented "hidden" box), 12V
  battery number (24410-0542R at probable).
- **Phase 4 — candidate scope:** body/exterior parts (mirrors, clips,
  mudguards), interior (mats, Recaro care for NISMO S), horn, drivetrain
  mounts, community seeding/publicising the site, closing remaining
  unresolved items below.

## Key facts already established (don't re-derive)

- Full research files with all sources: `docs/research/*.md`
- Oil: 0W-20 SN, 3.2/3.4 L, filter 15208-65F00 → JDM current 15208-ED50A
  (Pitwork AY100-NS004); drain plug 11128-01M00 + washer 11026-01M02
  (both Amayama-verified), drain torque ~35 N·m (owner-sourced)
- Air 16546-5WK0A / cabin 27277-1HD0A (Pitwork AY684/685/686-NS018)
- 12V battery: LN2 EFB for X/Medalist/NISMO/NISMO S (LN1 = base S only),
  boot floor, hydrogen vent hose critical; genuine p/n 24410-0542R
  (probable — Atlas-branded, alliance-shared number, not in Amayama JDM
  catalogue)
- Wipers 650/300/305 mm; current genuine driver blade 28890-3VA0D;
  28895-3VA0E = genuine refill rubber, no fitment data (candidate)
- Tires: NISMO/NISMO S 195/55R16 87V on 16×6.5J ET46, 4×100; lugs
  M12×1.25 @ 108 N·m; placard 230/210 kPa; no spare (repair kit)
- Brakes: shared across all HE12 grades incl. NISMO S (rear DRUMS);
  pads AY040-NS167, rotor **40206-3U80A** (Amayama Note+HR12DE, verified)
  260×22 min 20 mm, shoes AY360-NS106, drum 43206-ED300, cylinder
  44100-3HA0B, fluid No.2500 DOT3 KN100-30005; 40206-EG000 = wrong car
  (350Z/Murano); 43206-3HA2A exists genuine (~AU$130) but zero fitment
  data — relationship to ED300 still unresolved
- Plugs: 22401-ED815 (OE cross NGK LZKAR6AP-11 — browser-verified Phase 2;
  a Phase 3 agent wrongly flagged it as a red herring, it is NOT;
  Premium RX LKAR6ARX-11P is the upgrade), interval 100,000 km
- Coolant: S-LLC premixed KQ301-34002, concentrate KQ301-34102 (both
  verified); engine ~6.78 L (reservoir 0.85 L) + inverter ~4.16 L
  (reservoir 0.57 L) — official FAQ; 7 yr/160k then 4 yr/80k
- No accessory belt — verified, "anti-part" entry `drive-belt-none`
- Suspension: NISMO & NISMO S share IDENTICAL dedicated tune (official
  spec sheet); front stab bar factory-uprated vs standard grades; stab
  link 54618-JX00A (Amayama-verified, all grades); rear shock E6210-A16E
  (probable, standard grades, NISMO unconfirmed); front strut/springs/
  mounts OEM numbers UNKNOWN (all candidates found were petrol E11/E12);
  NISMO Öhlins kit 53110-RPE21 fits e-POWER NISMO/S (price/SKU ambiguity
  ¥371k excl. 2020 vs ¥452.5k excl. current); Cusco official HE12 PDF
  (22 mm front bar 2A1 311 A22 etc.); torque table from
  tightening-torque.com (forum-grade, 98 N·m rear shock bolt
  cross-checked)
- Reduction gear: Matic Fluid S ~1.94 L (verified), genuine code
  KLE27-00002 20 L pail (probable, exists in Amayama, no fitment list);
  no official interval (sealed-for-life); owner teardowns find iron
  particles by 40-54k km; drain torque 34.5 N·m single-source; washer
  p/n unknown
- Traction battery: ~1.47 kWh / 292 V / 80 cells attributed to Nissan FAQ
  5325 (page is JS-gated — probable, not directly rendered); 12V charges
  from pack ONLY in READY (official FAQ 5294); jump via engine-bay ⊕ only,
  never donor another car, no push-start (official manual page);
  replacement cost reports scatter ¥200-800k; NISMO S = inverter tune,
  same pack
- OBD: port driver's footwell (verified); LeafSpy Lite reads SOC (set
  year field to "BMS"); deep hybrid DTCs need CONSULT-III plus, clones
  dangerous (forum consensus); maintenance mode for emissions tests
  (2 sources, exact button sequence varies); English "common problems"
  articles usually describe the petrol Note
- Lighting: NISMO/NISMO S LED low beam + HB3 halogen high (verified);
  X/S H11 halogen; full bulb table in lighting guide; LH headlamp
  assembly 26060-5WK5A/5WK5D ~AU$1,000+/side (grade spec unconfirmed)

## Unresolved items (Phase 4 candidates)

1. OEM front strut, coil spring, strut mount, bump stop numbers for HE12
   e-POWER (biggest gap; NISMO tune means standard numbers can't be
   assumed; dealer frame-number lookup would resolve)
2. Rear shock number for NISMO/NISMO S specifically (vs E6210-A16E)
3. NISMO front stabilizer BAR part number (spec difference verified,
   number unknown)
4. Inverter-circuit coolant bleed procedure (CONSULT pump activation?) —
   still the most-wanted contribution
5. Passenger/rear genuine wiper blade numbers (28895-3VA0E refill is a
   candidate only)
6. Rear drum 43206-3HA2A vs ED300 relationship
7. Spark plug gap for 22401-ED815 (1.0-1.1 mm single non-JP source)
8. NISMO factory pad compound question (no evidence either way)
9. Reduction gear crush washer p/n; factory torque specs generally
   (current table is aggregator-grade)
10. Traction battery capacity primary source (FAQ 5325 is JS-gated;
    browser domain was blocked this session — try again with permission
    or find the VEJ press release, incj.co.jp was unresolvable/defunct)
11. Genuine LED vs halogen headlamp assembly number mapping by grade
12. NISMO kit current price/SKU confirmation (¥371k vs ¥452.5k excl.)
13. LN1 genuine battery number (base S grade — low priority)
14. Rear room lamp bulb type; fuse box second source

## Practical notes

- Community suggestion flow works but has no submissions yet — seed it or
  publicise the site to JDM import owner groups now that content is deep.
- For genuine-number gaps: a Nissan dealer can look up the owner's exact
  car by frame number (kept in local memory, not this repo).
- e-POWER safety habit baked into all engine-bay guides: car fully OFF
  (not READY) — the engine can self-start any time in READY.
- Browser sessions: faq2.nissan.co.jp was denied by Chrome-extension
  domain permissions this session; Amayama direct part pages fine.
- Subagent quirk seen twice: agents sometimes write output to a mistyped
  path (`/Users/nick/Claude/jobs/...`) — check there if a research file
  seems missing.
