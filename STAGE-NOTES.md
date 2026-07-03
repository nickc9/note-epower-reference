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
- **Phase 4 — DONE:** body/exterior/interior parts, NISMO accessory
  grade-applicability reference, community-seeding drafts. +4 parts
  (door-mirror-assembly, door-mirror-cover, mudguards, floor-mats),
  +1 guide (body-exterior-interior-reference). Live Amayama/NISMO/
  Nissan-shop browser checks this session resolved several open
  questions: mirror housing 96301-5VA0C/96302-5VA0C upgraded to
  verified (genuine Amayama fitment, HR12DE engine); rear brake drum
  43206-ED300 re-confirmed correct (43206-3HA2A re-checked, still zero
  Amayama fitment — the retailer-based case for flipping it did not
  hold up); a proposed engine-mount number (11220-5WK0A) and a proposed
  horn number (25620-5WK0A) were checked directly and do not exist on
  Amayama — excluded, not published; NISMO suspension kit grade
  applicability upgraded to verified via NISMO's own live catalogue
  matrix, which also directly confirms NISMO's "Reinforced Engine
  Mounts" product excludes e-POWER entirely (petrol NISMO S only) —
  closes that question, though the STOCK e-POWER mount numbers remain
  unknown. An interior trim clip candidate (01553-05933) was checked
  and turned out to be a generic band/fastener shared across 95
  Nissan/Infiniti models — not published, not Note-specific enough to
  be useful. Community-seeding drafts (3 example GitHub issues + an
  owner-group post) written to `docs/community-drafts/` — NOT posted,
  for the user to review.

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
  data, re-checked Phase 4 (still zero) — ED300 remains the correct
  live entry
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
  NISMO Öhlins kit 53110-RPE21 fits e-POWER NISMO/S, **verified** via
  NISMO's own live grade-applicability matrix (Phase 4); current price
  ¥452.5k excl. tax/¥497.75k incl. (vs ¥371k excl. at 2020 launch — may
  be a real rise, undated); Cusco official HE12 PDF (22 mm front bar
  2A1 311 A22 etc.); torque table from tightening-torque.com
  (forum-grade, 98 N·m rear shock bolt cross-checked); NISMO's
  "Reinforced Engine Mounts" product is confirmed **petrol NISMO S
  only** — not offered for e-POWER at all (NISMO's own matrix, Phase 4)
- Reduction gear: Matic Fluid S ~1.94 L (verified), genuine code
  KLE27-00002 20 L pail (probable, exists in Amayama, no fitment list);
  no official interval (sealed-for-life); owner teardowns find iron
  particles by 40-54k km; drain torque 34.5 N·m single-source; washer
  p/n unknown
- Traction battery: **292 V / 4 modules (80 cells) / 41.8 kg — verified**
  via a genuine Nissan dismantler's recycling-manual PDF (Phase 4,
  directly fetched, dated April 2020); the ~1.47 kWh capacity figure
  itself is still not in any primary document (2016 press kit
  deliberately withheld a capacity spec — treat 1.47 kWh as a widely-
  repeated derived number, not verified); 12V charges from pack ONLY in
  READY (official FAQ 5294); jump via engine-bay ⊕ only, never donor
  another car, no push-start (official manual page); replacement cost
  reports scatter ¥200-800k; NISMO S = inverter tune, same pack
- OBD: port driver's footwell (verified); LeafSpy Lite reads SOC (set
  year field to "BMS"); deep hybrid DTCs need CONSULT-III plus, clones
  dangerous (forum consensus); maintenance mode for emissions tests
  (2 sources, exact button sequence varies); English "common problems"
  articles usually describe the petrol Note
- Lighting: NISMO/NISMO S LED low beam + HB3 halogen high (verified);
  X/S H11 halogen; full bulb table in lighting guide; LH headlamp
  assembly 26060-5WK5A/5WK5D ~AU$1,000+/side (grade spec unconfirmed)
- Body/exterior/interior (Phase 4): door mirror housing **96301-5VA0C
  (RH) / 96302-5VA0C (LH), verified** (Amayama, HR12DE); NISMO carbon
  mirror cover **9637S-RNE20, verified**, available across all 4 NISMO
  grades incl. both e-POWER; mudguards F38E0-xxxxx color-code family,
  e-POWER example F38E0-6XJ1C confirmed by a real owner purchase
  (probable); NISMO floor mats 74900-RNE22 (e-POWER)/-RNE21 (gasoline)/
  -RNE23 (e-POWER cold-climate), verified, available across all grades
  not NISMO-S-exclusive; Recaro NISMO S seat option existence verified,
  material/price unconfirmed; horn and e-POWER engine/motor mount
  numbers remain unresolved (candidates checked and rejected — see
  unresolved list)

## Phase 4 research archive

Full detail in `docs/research/research-phase4-body-interior.md` and
`docs/research/research-phase4-unresolved-sweep.md` (subagent research)
plus this session's live Amayama/NISMO/Nissan-shop browser
verification, which is what actually decided each entry above — the
research files include some leads (e.g. leaning toward flipping the
rear brake drum, or a plausible-looking engine mount number) that the
live browser check subsequently ruled out. Trust the Key-facts section
above and the live YAML over the raw research files if they conflict.

## Unresolved items

1. OEM front strut, coil spring, strut mount, bump stop numbers for HE12
   e-POWER (biggest gap; NISMO tune means standard numbers can't be
   assumed; dealer frame-number lookup would resolve)
2. Rear shock number for NISMO/NISMO S specifically (vs E6210-A16E)
3. NISMO front stabilizer BAR part number (spec difference verified,
   number unknown)
4. Inverter-circuit coolant bleed procedure (CONSULT pump activation?) —
   still the most-wanted contribution
5. Genuine passenger wiper blade ASSEMBLY number and genuine rear wiper
   blade number — still not found; best lead is 28895-3VA0E, whose own
   retail title says "アシスト" (assist/passenger), but it's a refill,
   not an assembly, and has no confirmed HE12 fitment
6. Spark plug gap for 22401-ED815 (1.0-1.1 mm single non-JP source)
7. NISMO factory pad compound question (no evidence either way)
8. Reduction gear crush washer p/n; factory torque specs generally
   (current table is aggregator-grade)
9. Traction battery: exact kWh figure (1.47) still lacks a primary
   source, even though V/cells/weight are now verified
10. Genuine LED vs halogen headlamp assembly number mapping by grade;
    no right-side (26010-) number found at all yet
11. NISMO suspension kit price history vs the 2020 ¥371k launch figure
    (grade applicability now resolved; web.archive.org unreachable both
    sessions so far)
12. LN1 genuine battery number (base S grade — low priority)
13. Rear room lamp bulb type; fuse box second source
14. Horn genuine part number — a candidate (25620-5WK0A) was checked
    directly on Amayama in Phase 4 and does not exist there; ruled out,
    not just unconfirmed. Still need a real number from a dealer invoice
15. e-POWER engine/motor/reduction-gear mount numbers — biggest gap
    alongside front struts. Confirmed in Phase 4: NISMO does not sell a
    reinforced mount for e-POWER at all (petrol NISMO S only, per
    NISMO's own grade matrix), and a candidate stock number
    (11220-5WK0A) was checked directly on Amayama and does not exist
    there — ruled out. Needs a dealer parts-counter lookup or working
    Amayama JDM catalogue access (403'd on every WebFetch attempt so
    far; the live browser session does load it, so a future session
    doing this by browser rather than WebFetch may have better luck)
16. Recaro seat material for NISMO S (option existence verified, fabric
    type not confirmed — don't guess for the care guide)
17. Mudguard 2WD front+rear fitment (the one confirmed purchase was
    4WD/AUTECH-spec, front only)

## Practical notes

- Community suggestion flow works but has no submissions yet — draft
  seed content is in `docs/community-drafts/phase4-community-seeding.md`
  (3 example GitHub issues + an owner-group post), NOT posted anywhere —
  needs the user's review before posting.
- For genuine-number gaps: a Nissan dealer can look up the owner's exact
  car by frame number (kept in local memory, not this repo).
- e-POWER safety habit baked into all engine-bay guides: car fully OFF
  (not READY) — the engine can self-start any time in READY.
- Browser sessions: faq2.nissan.co.jp was denied by Chrome-extension
  domain permissions in Phase 3; Amayama and NISMO/Nissan-shop direct
  pages work fine via the browser tool (screenshots blocked on
  shop.nissan.co.jp specifically — use get_page_text there instead).
  WebFetch reliably 403s on Amayama; the live browser session does not,
  so prefer the browser over WebFetch for Amayama lookups when available.
- Subagent quirk seen twice: agents sometimes write output to a mistyped
  path (`/Users/nick/Claude/jobs/...`) — check there if a research file
  seems missing.
- Live browser verification is valuable for killing plausible-looking-
  but-wrong numbers: this session directly ruled out two WebSearch-
  surfaced candidates (an engine mount and a horn number) that don't
  exist on Amayama at all, and confirmed a third (mirror housing) that
  research alone had only reached "probable" on. Worth doing a browser
  pass on any "recurred in search but never independently fetched"
  candidate before publishing or dismissing it.
