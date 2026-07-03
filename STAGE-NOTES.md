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
- **Phase 4 — research done, integration NOT started (session budget
  checkpoint hit at ~78% before writing began — deliberately stopped here,
  see "Phase 4 research findings" below and the two archived files in
  `docs/research/`). A fresh session should pick up integration next:
  write the new parts YAML + guides, update existing entries per the
  findings below, draft community-seeding content, then re-update this
  file's Status/Key-facts/Unresolved sections and ship.

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

## Phase 4 research findings (NOT YET INTEGRATED into parts/guides — do that first in the next session, using these plus the full archived files)

Two research files: `docs/research/research-phase4-body-interior.md` and
`docs/research/research-phase4-unresolved-sweep.md`. Highlights:

- **Door mirror cover** (accessory) 9637S-RNE20 — verified, 2 independent
  fetched sources (NISMO + Nissan shop). **Mirror housing** 96301-5VA0C —
  probable, one fetched retailer source naming HE12 (needs a 2nd source to
  upgrade).
- **Interior trim clip** 01553-05933 — probable, one JDM retailer, genuine
  Note E12 clip (there are likely several distinct clip numbers by
  location — this is only one of them).
- **Mudguards** F38E0-xxxxx family, e.g. F38E0-6XJ1C for one e-POWER paint
  code — probable/verified pattern, but exact SKU depends on the car's
  paint code, so present as a family, not a single number.
- **Floor mats** 74900-RNE22 for e-POWER — verified via NISMO's own
  catalogue (directly fetched); NOT NISMO-S-exclusive, it's an accessory
  across the whole E12/HE12 range.
- **Rejected (two-NISMO-S trap correctly caught):** reinforced engine
  mounts 11210/11220/11360-RSK30 are for the **petrol** NISMO S (HR16DE)
  only — one source explicitly said "excluding e-Power versions." Do not
  use these numbers for the e-POWER car.
- **Still unresolved:** horn number (25620-5WK0A recurs in searches but
  was never confirmed by a direct fetch — treat as unverified, not a
  citable number yet); e-POWER engine/motor/reduction-gear mount numbers
  (biggest remaining gap — Amayama 403'd on every attempt; a WebSearch-
  synthesized "11220-5WK0A" claim could not be independently verified and
  should NOT be used); Recaro seat material for NISMO S (existence of the
  option is verified via 3 articles, but none stated the actual fabric —
  don't guess leather vs Alcantara).
- **Useful lead for later:** the "-5WK0A" suffix is confirmed (via a
  directly-fetched washer-tank listing) to be a real DAA-HE12-specific
  Nissan numbering block — worth checking against future mount-number
  candidates.
- **Passenger wiper blade** — partial progress: 28895-3VA0E's own retail
  listing title explicitly says "アシスト" (assist/passenger side), which
  is real new evidence it's the passenger-side part — but it's a refill
  insert, not a full blade assembly, and still has no confirmed HE12
  fitment data. No genuine rear (305 mm) blade number found at all, still
  aftermarket-only (NWB GR41-TN30G).
- **Rear drum 43206-3HA2A vs 43206-ED300 — possible confidence reversal,
  needs lead verification before touching the live entry.** New research
  found 43206-3HA2A looks like the more Note-E12-specific number (two
  independent retailers, plus sibling revisions 3HA1B/3HA9A cross-listed
  as mutual replacements), while ED300's own primary fitment turned out
  to be the older Tiida Latio platform — Note only appears in a broad
  shared-parts list for ED300. This is a signal to re-examine, not a
  confirmed flip; verify directly (Amayama browser check on 3HA2A) before
  changing `rear-brake-drum.yaml`.
- **Traction battery — RESOLVED for voltage/cells/weight.** A genuine
  Nissan Motor Co. PDF (dated April 2020, "Note e-POWER E12-type" battery
  removal/recycling manual for licensed dismantlers) was directly fetched
  and states **292 V, 4 modules (80 cells), 41.8 kg pack weight** — a
  strong primary source. The 1.47 kWh capacity figure itself is still NOT
  confirmed by any primary document (evidence suggests Nissan never
  published an exact kWh figure at 2016 launch) — keep that specific
  number at probable/attributed-to-FAQ, but the V/cell/weight figures can
  move to verified with this new source cited.
- **Headlamp assembly by grade** — still unresolved. Only sibling
  revisions of the known number were found (26060-5WK5B, -5WK5D); no
  right-side 26010- counterpart and no grade/bulb-type mapping found.
- **NISMO suspension kit — RESOLVED for grade applicability.** NISMO's own
  live current parts catalogue has an explicit grade-applicability matrix
  showing 53110-RPE21 (¥497,750 incl. / ¥452,500 excl. tax) is listed for
  **e-POWER NISMO and e-POWER NISMO S specifically**, not just petrol —
  update `nismo-sports-suspension-kit.yaml` confidence accordingly. Price
  history vs the 2020 ¥371,000 launch figure is still unresolved
  (web.archive.org was unreachable this session) — treat current price as
  ¥452,500 excl. tax and drop the "ambiguity" framing, just note it may
  have risen since 2020.

## Unresolved items (carried into next session)

1. OEM front strut, coil spring, strut mount, bump stop numbers for HE12
   e-POWER (biggest gap; NISMO tune means standard numbers can't be
   assumed; dealer frame-number lookup would resolve)
2. Rear shock number for NISMO/NISMO S specifically (vs E6210-A16E)
3. NISMO front stabilizer BAR part number (spec difference verified,
   number unknown)
4. Inverter-circuit coolant bleed procedure (CONSULT pump activation?) —
   still the most-wanted contribution
5. Genuine passenger wiper blade ASSEMBLY number and genuine rear wiper
   blade number — still not found (see Phase 4 findings above for the
   partial refill-side lead)
6. Rear drum 43206-3HA2A vs ED300 — needs a direct Amayama browser check
   on 3HA2A before deciding whether to flip the live entry (see Phase 4
   findings above)
7. Spark plug gap for 22401-ED815 (1.0-1.1 mm single non-JP source)
8. NISMO factory pad compound question (no evidence either way)
9. Reduction gear crush washer p/n; factory torque specs generally
   (current table is aggregator-grade)
10. Traction battery: exact kWh figure (1.47) still lacks a primary
    source, even though V/cells/weight are now resolved (see above)
11. Genuine LED vs halogen headlamp assembly number mapping by grade
12. NISMO kit price history vs 2020 launch figure (grade applicability
    now resolved, see above)
13. LN1 genuine battery number (base S grade — low priority)
14. Rear room lamp bulb type; fuse box second source
15. Horn genuine part number (25620-5WK0A unverified, don't cite yet)
16. e-POWER engine/motor/reduction-gear mount numbers — new biggest gap
    alongside front struts; Amayama 403'd every attempt this session
17. Recaro seat material for NISMO S (option existence verified, fabric
    type not confirmed — don't guess for the care guide)
18. Second source for mirror housing 96301-5VA0C to upgrade from probable

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
