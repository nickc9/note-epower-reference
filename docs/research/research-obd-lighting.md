# Research: OBD/Diagnostics + Lighting/Bulbs — Nissan Note e-POWER (DAA-HE12)

Cluster: OBD/diagnostics for imported JDM cars + lighting/bulbs.
Rules followed: WebSearch + WebFetch only (no browser tools). Amayama WebFetch 403'd as
expected (per CLAUDE.md) — candidate URLs recorded for lead browser verification.
Cross-checked against existing site research before duplicating: `docs/research/research-electrics-wipers.md`
section 4 ("Bulbs / Lighting") already has a **verified** writeup for headlight/bulb bulb-types by
grade — see "Existing site research" note below. This file supplements it (fog lamp, LED assembly
part numbers/prices, aftermarket conversions) and is the primary source for the OBD/diagnostics guide,
which had no prior coverage.

---

## A. OBD / DIAGNOSTICS ON A JDM HE12

### A1. Does the HE12 speak standard OBD-II PIDs?

**Confidence: probable** (multiple independent owner reports, consistent with known Nissan behavior on
other models, but no single authoritative technical source found).

- Generic ELM327 dongles connect and pair without issue (Bluetooth and WiFi variants both reported
  working). Source: minkara owner logs (below).
- However, a UK Note Owners Club forum thread states plainly: **"Nissan has implemented protection on
  the protocol used, so the Engine Control Unit can only be interfaced through ConsultIII systems used
  at Nissan service centers."** Some users report better luck by manually forcing the ELM327
  app/adapter to protocol **ISO 14230-4 ("Fast Init", 10.4 kbaud)** instead of "auto" — this is
  Nissan's KWP2000-based CONSULT-II-era protocol, and generic tools (Torque, "Car Gauge Pro") can
  sometimes read basic engine data once forced to this protocol.
  - Source: https://www.noteownersclub.co.uk/threads/obd-scanner-reader.3371/ (search-snippet only —
    direct WebFetch to this domain returned HTTP 402 "payment required" via an anti-scraping gateway
    (tollbit.noteownersclub.co.uk) both for this thread and the companion
    "diagnostic-tool-software.4243" thread; only Google's cached search snippet was available, so
    treat this specific technical claim as forum-grade/unconfirmed pending direct-page verification).
  - Generic technical background (not HE12-specific, industry knowledge with citations): ISO
    14230/KWP2000 Fast Init, Tester addr 0xFC, dest addr 0x10, physical addressing, is the documented
    Nissan CONSULT-II/generic-diagnostic protocol on many Nissan ECUs of this era.
    Source: search results referencing Nissan ECU RE wiki (https://nissanecu.miraheze.org/wiki/Connect) —
    snippet-level only, not independently fetched this session.
- **What owners in Japan actually do**: Bluetooth or WiFi ELM327 dongles (e.g. "OBDSPACE" branded
  ELM327 v1.5, or ELM327 v2.1 WiFi) plugged into the OBD-II port are used successfully by multiple
  owners for two distinct purposes:
  1. Generic-ish live data / hybrid battery data via **LeafSpy Lite/Pro** (see A3).
  2. **Nissan-specific "hidden menu" feature coding** (not diagnostics per se) — disabling the reverse
     parking-sensor beep/warning light, adjusting auto-lock speed threshold, auto-headlight timing,
     door-mirror auto-fold, etc. — via apps that expose Nissan's dealer configuration bits over OBD.
     This confirms the OBD port on HE12 is NOT locked down to reading trouble codes only; feature-coding
     write-access is achievable with consumer tools, at least for body/comfort ECUs.
  - Sources (fetched, verified — owner DIY logs, Japan):
    - https://minkara.carview.co.jp/userid/2898927/car/2518034/4625960/note.aspx — ELM327 v1.5
      install; OBD port ("OBDIIメスコネクター") location description; Bluetooth pairing; <30 min DIY.
    - https://minkara.carview.co.jp/userid/2602823/car/2545155/4718814/note.aspx — ELM327 WiFi v2.1 +
      Leaf Spy Pro (¥2,400 app) used to disable the reverse-alert beep/warning light; port described
      as located **"under the steering wheel on the driver's side"** (this matches the standard/generic
      OBD-II location and is corroborated by a separate search snippet — "運転席足元のアクセルペダルの
      上の方" / "運転席ハンドル下" — driver's footwell, above/near the accelerator pedal, under the
      steering column). NOTE: one fetched summary from the companion post
      (4625960 above) described the port as "to the left of the fuel filler-lid opener" — this
      contradicts the driver-footwell descriptions from two other sources and is very likely a
      WebFetch/translation artifact of the source Japanese text, not a real second port location.
      **Treat the driver's-footwell/under-steering-column location as the reliable one (2+ consistent
      sources); discard the fuel-door claim.**
  - Confidence on port location: **verified** (standard driver-footwell/under-column location, 2
    independent consistent sources).
  - Confidence on protocol/feature-coding write-access claims: **probable** (consistent multiple owner
    reports, but no factory documentation fetched).

### A2. Nissan-specific tools: CONSULT-III Plus

**Confidence: verified** (general capability) / **unconfirmed** (HE12-specific bleed procedure).

- CONSULT-III Plus (C-III Plus) is Nissan's official dealer/workshop diagnostic and reprogramming tool,
  covering Nissan/Infiniti/Renault vehicles roughly MY1995+, including hybrid/EV functions (battery
  monitoring requirements during service operations, ECM/TCM/BCM reprogramming).
  Source: https://www.nissan-techinfo.com/dept.aspx?dept_id=25 (fetched via search; official Nissan
  tech-info listing) and general diagnostic-tool marketplace pages (diagnoex.com product pages,
  search-snippet level).
- **Specific job requiring it on e-POWER (inference, not directly confirmed this session):** the
  existing site research file `docs/research/research-plugs-coolant-belt.md` already flags — as
  **unconfirmed** — that bleeding air from the inverter coolant circuit's dedicated electric water pump
  (genuine part 21581-5WZ0B) plausibly requires a CONSULT-commanded pump-activation cycle. This session
  found a closely analogous **confirmed** procedure for Toyota Prius/Aqua inverter coolant systems
  (diagnostic tool commands the inverter water pump to run ~1 min on/1 min off, repeated ~3 cycles,
  until pump sound quiets and no bubbles are visible in the reserve tank) — this is standard practice
  across Japanese hybrid inverter-cooling designs and supports (but does not prove) the same requirement
  on HE12. Source: g-scan.jp Prius air-bleed procedure PDF (http://g-scan.jp/wp-content/uploads/2022/08/01029.pdf)
  and multiple Prius repair-shop blogs — **not HE12-specific, cite only as corroborating context, not
  as an HE12 fact.**
  - Separately, `research-plugs-coolant-belt.md` already cites a **verified** Okinawa repair shop blog
    (shiromahhacars.com) that diagnosed an HE12 "engine-side electric water pump abnormality" via
    CONSULT/scan tool — confirming CONSULT (or an equivalent capable of reading Nissan hybrid-specific
    DTCs) is genuinely used in real HE12 shop diagnostics, not just theoretically.
- **Clones**: Chinese/aftermarket "Consult III Plus" clone interfaces are widely sold ($150–$600 range
  reported) but forum consensus across several independent threads is strongly negative — reports
  include failure to read VIN, dropped communication, and in at least one reported case, ECM/BCM module
  damage attributed to a clone tool during use. General industry-forum consensus: "there are no true
  clones for Consult — it's either the real interface or a waste of money," with genuine dealer-level
  C-III Plus setups costing several thousand USD/CAD. This is **general Nissan-tool-clone-risk
  information, not HE12-specific**, but directly relevant to an import owner deciding whether to buy a
  clone. Sources: https://cartechnology.co.uk/showthread.php?tid=9579 ("DO NOT BUY or use Nissan
  Consult III+ chinese clone!"), https://www.titanxdforum.com/threads/chinese-consult-3-plus.44444/,
  https://forums.nicoclub.com/clone-consult-iii-plus-any-experiences-t623360.html (search-snippet
  level, consistent across threads — treat as probable/forum-consensus, not independently deep-verified
  per-thread).

### A3. Nissan DataScan / LeafSpy-analogues / Car Scanner — what hybrid data is visible

**Confidence: probable** (owner-report-level, single tool/app family confirmed working; broader Car
Scanner e-POWER-specific PID support not confirmed).

- **LeafSpy Lite (Android)** is used successfully by at least one HE12 e-POWER owner over a Bluetooth
  ELM327 to display **battery state-of-charge (SOC)**. Critical setup quirk: the app's "year" setting
  in LeafSpy must be set to **"BMS"** — any other value causes LeafSpy Lite to force-close on this car.
  This confirms e-POWER's small lithium-ion drive battery is readable via the same PID set LeafSpy uses
  for the Nissan Leaf's BMS, which makes sense given e-POWER reuses Leaf-derived battery/motor
  technology.
  Source (fetched): https://minkara.carview.co.jp/userid/2898927/car/2518034/4626005/note.aspx
- No source found this session confirming **engine-hours** or other hybrid-specific PIDs (motor RPM,
  inverter temp, generator output) being readable via consumer ELM327 tools on e-POWER specifically —
  flag as **open question / not found**.
- **Car Scanner ELM OBD2** (the general-purpose Android/iOS app) is listed as having vehicle-specific
  EV/hybrid profiles for several Nissan models (explicitly Leaf), and is referenced as supporting the
  Note e-Power HE12 in its own documentation, but no session source confirmed exactly which HE12-specific
  hybrid PIDs (SOC, battery temp, etc.) that profile exposes beyond the general claim. Source:
  search-result title only ("carscanner.info" category pages) — **not independently fetched/verified,
  treat as unconfirmed**.
- **Carista OBD** explicitly lists "1st gen (E12) Year 2012+" Note e-Power support, with general feature
  categories (seat belt warning tone, gauge needle sweep, remote-lock beep, warning-light readout for
  ABS/SRS/Engine/Transmission, service/oil reset, TPMS reset, **battery registration**) — the "battery
  registration" function is notable and directly relevant to the site's existing 12V-battery-replacement
  guide content (idle-stop battery type registration is a known Nissan/Toyota requirement pattern,
  though the existing site research says no CONSULT/dealer registration was reported necessary for the
  12V aux battery on this car — Carista's generic feature list doesn't confirm this applies to
  e-POWER specifically). Source (fetched): https://carista.com/apps/supported-cars/nissan/note-e-power

### A4. DTC families owners report / dashboard fault indicators

**Confidence: unconfirmed / mixed quality — flag down.**

- A Japanese Q&A/blog aggregator claims **P0400** (EGR-related) is a "tendency fault" reported on E12
  Note — but this source is discussing the **petrol E12** generally, not confirmed HE12-specific, and
  the e-POWER's HR12DE runs differently (generator-only, no belt accessories per project's existing
  research) so an EGR-code trend from petrol Note should NOT be assumed to transfer. Source:
  Yahoo!知恵袋 aggregator snippet, search-level only — **do not publish as an HE12 fact.**
  https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13327745898
- English-language "common problems" blog content for "Nissan Note e-Power" (driversadvice.com,
  autodoc.co.uk, breakeryard.com, mycarly.com) reads as **low-quality/generic SEO content that conflates
  the petrol Note with e-POWER** — e.g. one page attributes a "high-pitched whistling sound" to a
  "slipping or worn drive belt" and mentions "torque converter" gear-slip issues. The e-POWER has **no
  accessory belt and no torque-converter transmission** (single-speed direct drive, confirmed elsewhere
  in this project's own research — `research-plugs-coolant-belt.md`). **These generic blogs are
  unreliable for this car and should not be cited as fact anywhere on the site.** Recorded here only as
  a warning for future researchers, not as sourced content.
  (driversadvice.com page itself 404'd on direct fetch attempt; findings above are from the search-result
  summary only.)
- A genuinely useful, mechanism-level finding (already partially known to the project via
  `research-electrics-wipers.md`'s fuse section): **a blown rear brake-light fuse also disables
  regenerative braking** on this car — i.e., the brake-light circuit and the regen-braking permission
  logic are linked, so a diagnosable "reduced regen / harder pedal feel" symptom can trace back to a
  blown low-profile brake-light fuse rather than a hybrid-system fault. This was already flagged
  unconfirmed/forum-single-source in that file; no additional corroborating source was found this
  session despite searching specifically for it. Still forum-grade/single-source — **confidence
  unchanged (unconfirmed)**.
- Regenerative-braking brake-light **behavior itself** (not a fault, but relevant for import owners
  wondering if their brake lights are malfunctioning) is officially documented by Nissan: brake lights
  illuminate proportionally to deceleration rate under lift-off regen in S/ECO mode, per Japanese legal
  thresholds (must NOT illuminate below 0.7 m/s² deceleration; optional 0.7–1.3 m/s²; MUST illuminate
  above 1.3 m/s²), and turn off just before a full stop unless the brake pedal itself is pressed.
  **Confidence: verified** (official Nissan owner-info pages).
  Sources: https://www.nissan.co.jp/OPTIONAL-PARTS/NAVIOM/NOTE_SPECIAL/E-POWER/1809/PG/guid-4307e9a2-784b-4268-b75d-cbf24568a025.html ,
  https://www.nissan.co.jp/OPTIONAL-PARTS/NAVIOM/NOTE_SPECIAL/E-POWER/1611/PG/he12j1-c5bf4e68-aa3b-445b-96d1-00be47b45c7c.html

### A5. Emissions-test / "service mode" quirk — directly useful for import owners

**Confidence: probable** (two independent, detailed, mechanically-consistent Japanese sources).

This is arguably the single most actionable diagnostics-adjacent finding for an import owner or a
non-JP workshop: **the e-POWER engine does not idle continuously**, so a standard static
emissions/idle test (as used at Japanese shaken inspection stations, and potentially relevant to other
countries' import roadworthiness/emissions tests) cannot simply "read the tailpipe while the car sits in
gear" — the engine will shut off under normal ECO-mode logic.

Two independently-sourced procedures to force the engine into a sustained-run "test/maintenance mode":

- **Simplest fix reported**: just crack the hood open slightly (not fully) while the engine is running —
  apparently enough to change the ECU's operating assumptions in some inspection contexts. Source:
  https://morimori-y.com/【日産e-power】整備モードは必要？ユーザー車検で排ガス測定できない時の対処法/
- **If that fails, an explicit "maintenance mode" entry procedure** (reported in two slightly different
  step sequences by two different sources, both plausible/consistent with each other — treat the general
  shape as probable, exact button sequence as owner-report-level):
  1. Shift to P, power on (push-start button, without touching brake).
  2. Shift to N (or cycle P→N with accelerator pedal fully-open/fully-closed input repeated ~2×, per one
     source; a "gentle double-press of the accelerator" per the other).
  3. Dash meter displays "メンテナンスモード" (maintenance mode) / the e-POWER system warning indicator
     flashes to confirm entry.
  4. Powering off exits the mode automatically.
  - No CONSULT or special tool is required for this — it's a driver-input sequence built into the car's
    own ECU logic.
  - One source explicitly notes this mirrors the Toyota Prius/hybrid-group service-mode pattern.
  - Sources (both fetched):
    https://ameblo.jp/garage-g801/entry-12619086085.html (detailed numbered procedure) and
    https://morimori-y.com/【日産e-power】整備モードは必要？ユーザー車検で排ガス測定できない時の対処法/
    (confirms applicability across Note/Serena/Kicks/Aura/X-Trail e-POWER, and explicitly notes
    S-Hybrid Serena variants do NOT need this since they idle conventionally).
  - **Recommend presenting this in the future guide as "if your test station needs the engine to hold
    running, try this" rather than exact button-count instructions**, since the two sources don't fully
    agree on step details (fully-open/closed pedal ×2 vs. gentle double-press) — average/summarize,
    flag as owner-forum-grade, not a factory procedure.

### A6. What non-JP workshops need to know (synthesis, not a new source)

- **Radio/nav is irrelevant** per task brief — correctly out of scope.
- **Diagnostic coverage reality**: generic ELM327 + apps (Torque, Car Scanner, LeafSpy) can likely read
  basic engine/generator data and possibly SOC (via LeafSpy's Leaf-BMS profile), but deep hybrid-system
  DTCs (inverter, motor, HV battery faults) most likely require Nissan CONSULT-III Plus or an equivalent
  professional multi-brand tool with real Nissan hybrid coverage — this mirrors the general pattern for
  all Nissan hybrid/EV models, not something disproven for HE12 by any source found.
  **Confidence: probable**, based on convergence of the noteownersclub protocol-lockout claim (forum,
  unconfirmed direct source) + the independently-verified real-world CONSULT-diagnosed water-pump fault
  case in `research-plugs-coolant-belt.md` (verified) + general industry knowledge about Nissan ECU
  protocol gating (search-corroborated, not HE12-primary-sourced).
- A workshop should expect: standard OBD-II port in the normal driver-footwell location (confirmed);
  DTC read/clear on body/comfort systems achievable with consumer tools; engine/hybrid-system deep
  diagnostics likely need CONSULT-III Plus (genuine strongly preferred over clone, per A2); the
  emissions-test engine-run quirk (A5) if the workshop needs sustained idle for a gas analyzer.

---

## B. BULBS / LIGHTING FOR HE12 BY GRADE

### Existing site research (do not duplicate — already verified, see file for full YAML)

`docs/research/research-electrics-wipers.md` §4 already contains **verified**, two-source-cross-checked
entries for:
- Headlight system: **NISMO / NISMO S get LED low-beam standard** (projector, auto-leveling, integrated
  LED position lamp, high-beam assist, intelligent auto-light, LED hyper-daytime-running-light linked to
  position lamp — standard on all 4 NISMO variants incl. petrol NISMO). Non-NISMO e-POWER grades (X, S,
  Medalist) get halogen low beam (H11) standard, with Medalist reported (single-source/probable) to
  optionally/standardly get LED + fog lamps. **High beam is halogen HB3/9005 60W even on LED-low-beam
  cars, on ALL grades.**
- Fog lamp: **H8 35W standard bulb type**, H11 55W was an upgrade option on some trims (confirmed via
  official Nissan FAQ table).
- Full serviceable-bulb table (official Nissan FAQ, cross-checked against an aftermarket fitment site):
  front turn signal PY21W, tail W5W, reverse W16W, rear turn signal WY21W, license plate W5W (all
  filament, owner-serviceable); position lamp + brake lamp are LED on LED-headlamp-equipped grades
  (not simple bulb-swap serviceable).
- Interior/room lamp: T10, front/middle row confirmed; rear room lamp bulb type NOT confirmed anywhere
  (still open).

This session independently re-pulled the same aftermarket fitment table (shingen.jp, formerly
shingen.me — redirects) as a second cross-check; **it fully agrees** with the numbers above (H11 low
beam, HB3/9005 high beam, H8 fog, T10 position/tail/plate/room, S25 single-amber front turn, T20
single-amber rear turn, T20 double brake/tail, T16 reverse), confirming the existing site entry is
**doubly verified** now (3 independent sources total across both sessions: official Nissan FAQ +
fcl-hid.com + shingen.jp). Source (fetched, this session):
https://shingen.jp/fit/maker3/255/3787/ (title: "日産 ノート e-POWER E12系(HE12/NE12/E12) ヘッドライト
適合表", covers model years H28.11–R2.11 / HE12/NE12/E12, "halogen specification" table).

### B1. NEW — Genuine LED headlight assembly part numbers / prices (gap-filling attempt)

**Confidence: unconfirmed / candidate-only — not independently verified this session.**

- Amayama lists genuine Nissan headlamp assembly part **26060-5WK5A** ("Headlamp Assembly-Lh for Nissan
  Note", price from **$683.50**) — but WebFetch to the Amayama product page returned HTTP 403 (expected
  per project convention), so the "may fit to" model list and whether this is the LED (NISMO/NISMO S)
  or halogen assembly could NOT be confirmed this session. Two other Amayama part numbers
  (260605DC3B, 26060EK025) also appeared in search results for "headlamp assembly" queries but were
  not resolved to specific chassis/spec either.
  **Recorded per CLAUDE.md convention as "candidate for lead browser verification"**:
  - https://www.amayama.com/en/part/nissan/260605wk5a ($683.50, "for Nissan Note")
  - https://www.amayama.com/en/part/nissan/260605dc3b
  - https://www.amayama.com/en/part/nissan/26060ek025
- A search snippet (not independently fetched — Monotaro parts-listing site) attributes part number
  family starting **26010-xxxxx** to "ヘッドライトAssy" for E12/HE12/NE12, made by **ICHIKOH**, described
  in one snippet as including an "LED level regulator" variant — consistent with the LED auto-leveling
  headlamp described in the verified equipment-sheet source above, but the exact full part number
  (with suffix) was not resolved. **Do not publish a specific number from this — treat as a lead only.**
- No price was found for a genuine LED headlamp assembly beyond the single Amayama $683.50 figure above
  (itself of unconfirmed grade/spec applicability) — **flag as an open question**; given LED
  projector headlamp assemblies are typically expensive dealer parts, this order-of-magnitude (high
  hundreds of USD each side) is plausible but unverified for THIS specific car/grade.

### B2. NISMO front fog lamps

**Confidence: unconfirmed.**

- A search-result summary (not independently fetched) claims genuine fog lamps for Note e-Power come in
  **two types, halogen and LED**, with the **LED version priced over ¥70,000** — and separately
  mentions a code "**HRC1S**" as "genuine fog lamp" in a search snippet, but this looks like it may be a
  grade/option code rather than a Nissan parts-catalog part number (Nissan OEM part numbers are
  typically 5-digit-dash-alphanumeric, e.g. 26150-xxxxx, not "HRC1S" format) — **do not trust "HRC1S" as
  a part number without independent verification.**
- Two real Nissan OEM fog-lamp part-number candidates surfaced via Monotaro (Japanese industrial-parts
  retailer) search-result titles: **26150WL00A** and **26150-89T0K** (both "(26150) フォグランプ" /
  fog lamp, 1 unit, ニッサン/Nissan). WebFetch to both Monotaro product pages **timed out** (60s) before
  fitment/chassis confirmation could be extracted — **neither number is confirmed to fit HE12
  specifically vs. some other Nissan model that also uses a 26150-prefix part**. Flag as leads only,
  not publishable part numbers.
  - https://www.monotaro.com/g/04537681/ (26150WL00A)
  - https://www.monotaro.com/p/6391/7595/ (26150-89T0K)
- A minkara DIY log documents an owner retrofitting genuine fog lamps onto a Note e-POWER **X grade**
  (non-NISMO, confirming fog lamps are a dealer-installable retrofit option even on lower trims,
  ~3 hours of labor for bumper/grille panel removal + bracket mounting + wiring), but the post does
  **not** state part numbers or cost. Source (fetched):
  https://minkara.carview.co.jp/userid/778741/car/2435383/4508739/note.aspx
- **NISMO-specific front fog lamp part number: NOT FOUND this session.** Whether NISMO/NISMO S use a
  visually/functionally distinct fog lamp housing from the retrofit-option fog lamp used on X/S/Medalist
  is unresolved — open question.

### B3. Rear fog lamp

**Confidence: unconfirmed — likely NOT fitted, but not conclusively ruled out.**

- No source found explicitly confirming a rear fog lamp exists on any HE12 e-POWER grade (JDM rear fog
  lamps are common on European-market cars but much rarer on JDM-market Japanese cars generally, which
  is consistent with finding no evidence of one here).
- One search-result summary vaguely claimed "wiring was routed to where fog lamps could be installed" —
  but this was talking about front fog lamp retrofit wiring provisions (consistent with B2's retrofit
  DIY log), not a rear fog — **do not interpret as rear fog lamp evidence.**
- Recommend the future guide state this as "no rear fog lamp confirmed on any JDM HE12 grade; the single
  rear lamp cluster's high-mount/brake functions are LED per the existing verified bulb table" rather
  than asserting an absence outright, since JDM factory documentation wasn't directly fetched for this
  specific point this session.

### B4. Tail light — LED assembly?

Per the already-verified existing entry: **position lamp and rear/high-mount brake lamp are LED** on
LED-headlamp-equipped grades (i.e., grades that get the LED headlight package: NISMO, NISMO S, and
reportedly Medalist). **Tail light (dedicated red tail-only bulb) and reverse are conventional filament
bulbs (T10 tail per the fitment-table cross-check, W5W per official Nissan FAQ — consistent, different
naming conventions for the same physical bulb) even on LED-headlamp grades.** So no grade gets a fully
LED rear light assembly (tail/reverse still filament everywhere); only the brake/high-mount and position
functions are LED, and only on LED-equipped grades. This is a synthesis of the existing verified data,
re-confirmed by this session's independent fitment-table pull — no new contradicting information found.

### B5. Owner-popular LED conversion kits (aftermarket)

**Confidence: probable (aftermarket practice is well-documented across many independent owner posts,
consistent in bulb-type targeting; specific product/brand claims are aftermarket, not OEM, by
definition).**

- Multiple minkara DIY logs document owners converting **halogen H11 low-beam headlights to LED** on
  Note E12/HE12 (i.e., on the halogen-equipped non-NISMO grades), using aftermarket brands including
  **"Polarg"** (¥8,000-ish for headlight + position-lamp LED kit combo, per one log, bought via Amazon)
  and generic H11 LED bulb kits from shops like **fcl. (fcl-hid.com)**. One fcl.-published guide notes a
  specific mechanical quirk on "late/後期" E12 headlight units: the low-beam socket is a tubular design
  with a **waterproof cap that must be re-seated**, and the bulb-insertion hole sits slightly higher/
  offset than expected — a practical fitment note worth including in a future LED-conversion guide
  section.
  Sources (fetched/search-confirmed):
  https://minkara.carview.co.jp/userid/1959393/car/1475476/7663692/note.aspx (Polarg LED conversion,
  ~¥8,000, Amazon-sourced),
  https://www.fcl-hid.com/blog/staffroom/notee-power-head (E12/HE12 late-model low-beam LED conversion
  guide, notes tubular-socket + waterproof-cap fitment quirk),
  https://shingen.jp/fit/maker3/255/3787/ (compatible-product fitment table cross-reference).
- A separate Rakuten listing markets a NISMO-look **"デイライトユニット" (daytime-running-light unit)**
  aftermarket kit specifically to make LED position lamps function as a NISMO-style daytime running
  light on non-NISMO cars ("NOTE NISMO専用...LEDポジションのデイライト化に最適") — i.e. aftermarket
  owners on lower grades try to replicate the NISMO hyper-daylight look. Purely aftermarket/cosmetic,
  ¥5,000 range. Source (search-result only, not fetched):
  https://item.rakuten.co.jp/atv-yours/yf905-6378/ — **do not treat as OEM-equivalent, note as
  aftermarket-only in any guide text.**
- **Caveat for any future guide text**: since NISMO/NISMO S already have genuine LED low-beam from the
  factory (per the existing verified entry), the LED-conversion-kit material above is only relevant to
  owners of halogen-equipped grades (X/S/Medalist non-LED trims) — make this explicit to avoid implying
  NISMO owners need to do this conversion.

---

## Open questions (honest gaps)

1. **HE12 CONSULT-III-only ECU lockout claim** — the specific "Nissan protocol-protection, ConsultIII
   systems only" statement comes from a forum-thread search snippet whose source page could not be
   directly fetched (tollbit gateway returned HTTP 402 on both noteownersclub.co.uk threads tried).
   Needs re-verification via a different route (e.g. browser tool, or Google cache) before being stated
   as fact in a guide.
2. **Exact hybrid-specific PIDs readable via consumer tools** (motor RPM, inverter temp, generator
   output, engine-hours) — not found. Only battery SOC via LeafSpy's Leaf-BMS profile is confirmed.
3. **Whether Car Scanner's e-Power vehicle profile exposes SOC/hybrid data beyond generic PIDs** — app
   is confirmed to list some Note e-Power support but the specific PID set wasn't independently verified.
4. **DTC code list / common fault codes specific to HE12 hybrid system** — not found; the one
   candidate (P0400/EGR) is petrol-E12-sourced and explicitly should NOT be assumed to transfer to
   e-POWER. No HE12-specific hybrid DTC list (e.g. inverter/motor P0AA6-class codes) was found despite
   targeted JP-language searching.
5. **Genuine LED headlamp assembly part number(s) and prices for HE12/NISMO** — only unconfirmed
   Amayama/Monotaro candidates surfaced (WebFetch 403/timeout blocked verification); flagged as browser-
   verification candidates per project convention.
6. **NISMO-specific front fog lamp part number** — not found; only generic (non-NISMO-confirmed)
   candidate numbers 26150WL00A / 26150-89T0K surfaced, unverified.
7. **Rear fog lamp fitment** — probably absent on all JDM HE12 grades (consistent with JDM norms) but
   not conclusively confirmed via a directly-fetched factory source.
8. **Rear room lamp bulb type** — still unconfirmed (carried over as an existing gap from
   `research-electrics-wipers.md`, not resolved this session either).
9. **Exact maintenance-mode/emissions-test button sequence** — two sources describe slightly different
   step details (accelerator full-open/closed ×2 vs. gentle double-press); the overall existence and
   purpose of the mode is probable/well-corroborated, but exact steps should be presented as
   "approximately this, verify against your dash display response" rather than an exact numbered
   procedure, OR both variants should be presented with attribution.
10. **Blitz OB-LINK / OBD adapter Nissan compatibility PDF** (blitz.co.jp) could not be parsed by
    WebFetch (raw PDF binary returned); may contain a useful explicit HE12/NISMO S model-year/engine-code
    compatibility confirmation for a commercial OBD adapter product — worth a follow-up fetch attempt
    with a PDF-capable tool if this becomes relevant.
