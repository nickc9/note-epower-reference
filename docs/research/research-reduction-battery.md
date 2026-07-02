# Research: Reduction Gear Oil, Traction Battery, 12V Battery — Note e-POWER HE12

Scope: DAA-HE12 (2016-2020), focus on 2018 NISMO/NISMO S. All part numbers below come from
fetched pages or WebSearch result snippets with URLs recorded; nothing from model memory.
WebSearch's own AI-summaries are treated as "search snippet, unfetched" unless a WebFetch of the
underlying page corroborates them — flagged accordingly below.

---

## A. Reduction gear oil (減速機オイル)

### Fluid spec
- **Name (JP):** 日産純正マチックフルードS / Nissan Genuine Matic Fluid S ("Matic S")
- **Name (EN):** Nissan Matic Fluid S (NOT Matic Fluid D/J — those are different Nissan ATF
  grades for other transmission families; confirmed distinct from KLE22-series "Matic Fluid D").
- Multiple independent minkara DIY logs (3 separate owners, 3 separate cars) all state the
  factory-specified fluid is Matic Fluid S, with Aisin AFW+ cited by owners as an accepted
  equivalent (per Aisin's own fitment chart, which lists e-POWER compatibility — per owner
  claims, not independently verified against Aisin's chart directly).
  - https://minkara.carview.co.jp/userid/2288020/car/2719682/7363975/note.aspx
  - https://minkara.carview.co.jp/userid/1562029/car/2747933/7791968/note.aspx
  - https://minkara.carview.co.jp/userid/990787/car/3117993/7650956/note.aspx
  - https://minkara.carview.co.jp/userid/1983699/car/3100093/7204615/note.aspx
- **Confidence: verified** for "fluid = Matic Fluid S" (4 independent owner sources agree, zero
  conflicting claims found; this is a series-hybrid-specific spec, distinct from petrol-Note CVT
  fluid NS-2/NS-3 — the "wrong car" trap does not appear to have contaminated these results, none
  of the 4 sources describe a CVT).

### Genuine part number (candidate)
- **KLE27-00002** — Nissan Matic Fluid S, 20L pail, labeled "ハイブリット車専用" (hybrid-vehicle
  dedicated).
  - https://www.monotaro.com/p/7184/8194/ (fetched: confirms "hybrid vehicle compatibility",
    lists applications as V36 Skyline Coupe, E51 Elgrand post-facelift, Y50 Fuga — i.e. Nissan's
    earlier non-e-POWER hybrids. Does NOT explicitly list Note e-POWER/HE12 as an application.
    Also shows "sales suspended by manufacturer" status at time of fetch.)
  - https://www.askul.co.jp/p/E708851/ (fetched: same part number, same description)
  - WebSearch snippet (unfetched) explicitly states Nissan requires genuine Matic Fluid S for
    e-POWER reduction gear/rear final drive, and that this is a *different* product code from
    Matic Fluid D (KLE22-series).
- **Confidence: probable, not verified.** The fluid *name* (Matic Fluid S) is verified by 4
  independent owner logs, and KLE27-00002 is confirmed as "the" genuine Matic Fluid S product
  code in two independent retail listings — but no source explicitly ties KLE27-00002 to the
  HE12 parts catalog by chassis code, and the "sales suspended" status plus non-e-POWER
  application list is a yellow flag (could mean a newer/updated part number superseded it, or
  that retail application charts simply haven't been updated for e-POWER). Treat KLE27-00002 as
  the best available candidate, not confirmed-correct — recommend cross-checking against Amayama
  or a JP dealer parts lookup before publishing as authoritative.
- No smaller-pack (1L/4L) Matic Fluid S part number was found in this session (only Matic Fluid D
  KLE22-0000401 4L turned up, which is the WRONG fluid).

### Capacity
- **1.94 L** (公称/規定量, "as a guideline") — stated identically across 2 independent minkara
  posts, and a third gives "~2L" and a fourth "~2L (half of a 4L bottle)". Consistent.
  - https://minkara.carview.co.jp/userid/2288020/car/2719682/7363975/note.aspx
  - https://minkara.carview.co.jp/userid/1562029/car/2747933/7791968/note.aspx
- **Confidence: verified** (2+ independent forum sources, consistent figure, corroborated by
  earlier research pass in `docs/research/research-fluids-filters.md` line 239 which flagged
  1.94L as previously-reported-but-unconfirmed; now corroborated).

### Official interval/policy
- Nissan's original HE12-era position: **no scheduled replacement interval** for the reduction
  gear ("交換不要" in early literature) — consistent with the earlier fluids-filters.md finding
  citing https://faq2.nissan.co.jp/faq/show/13788 (re-fetched this session: confirmed this FAQ
  page covers ENGINE oil only — 1yr/15,000km normal, 6mo/7,500km severe — and contains NO mention
  of reduction gear oil at all, so it is not itself the source of the "no replacement needed"
  claim; that claim comes from secondary/dealer-explainer articles, not this FAQ page directly).
- Dealer-service explainer (unfetched WebSearch snippet, single source): describes reduction gear
  oil change as "推奨 (recommended) but not 必須 (mandatory)"; suggests doing it if the car has
  ~66,000 km / 8 years; cites dealer cost of **¥6,000–9,000** including labor + fluid, ~30 min
  job. Source: WebSearch result summarizing content at naspo.jp (URL:
  https://www.naspo.jp/e-power-oilchange/ — NOT independently fetched/verified this session,
  flag as unconfirmed single source).
- **What JP owners actually do (minkara logs, all forum-grade):**
  | Mileage at change | Oil condition found | Source |
  |---|---|---|
  | ~18,000 km | Discolored, "reasonable amount" of iron particles | https://minkara.carview.co.jp/userid/1983699/car/3100093/7204615/note.aspx |
  | ~40,000 km | "iron powder clumps ~1mm" despite Nissan saying no change needed | https://minkara.carview.co.jp/userid/990787/car/3117993/7650956/note.aspx |
  | ~50,000+ km | Sludge, dark/thin oil, rattling noise prompted the change | https://minkara.carview.co.jp/userid/2288020/car/2719682/7363975/note.aspx |
  | ~54,000 km | Heavily contaminated, "covered in iron powder" | https://minkara.carview.co.jp/userid/1562029/car/2747933/7791968/note.aspx |
  - Consistent pattern across all 4 independent logs: contamination/metal particulate is visible
    well before any official interval would suggest a problem, and multiple owners report the
    car feeling/sounding smoother post-change. None reported adverse effects from *not*
    changing it, so this remains a "some owners do it preventively, Nissan doesn't require it"
    situation — present it as such in the guide, not as a mandatory service.

### Drain/fill plug locations, washer, torque
- **Two bolts**, both 10mm hex (some owners report the fill bolt lacks a magnetic insert while
  the drain bolt has one): drain bolt underneath, fill bolt accessible from engine bay (top-down
  or bottom-up access varies by write-up — one owner needed bottom access for the filler, another
  did it from above). Consistent across all 4 minkara sources.
- **Torque (forum-grade, single source):** drain plug torqued to **34.5 N·m** —
  https://minkara.carview.co.jp/userid/1562029/car/2747933/7791968/note.aspx (only one of the 4
  logs states a torque figure; treat as forum-grade/unconfirmed against factory spec, flag
  clearly in guide text per CLAUDE.md rule 3).
- **Washer/gasket:** no specific Nissan part number found for the drain plug crush washer in this
  session. Owner logs consistently say "replace the washer/gasket each time, do not reuse,
  crush-type" but none quote a part number; one owner sourced an aftermarket-generic washer
  rather than a genuine Nissan one. Flag as open question.

---

## B. Traction (drive) battery — explainer content, not a parts entry

### Chemistry / capacity
- **Lithium-ion**, total capacity commonly cited as **~1.5 kWh** (WebSearch snippets, unfetched
  primary source; multiple search summaries converge on this figure attributing it to press
  coverage of the E13-generation redesign describing "no change from the E12/HE12 generation").
  This figure should be treated as **probable, not verified** — it appears in aggregated
  WebSearch summaries referencing car.watch.impress.co.jp, response.jp, and autocar.jp reporting,
  but I was not able to WebFetch a primary article that states the number in raw, quotable text
  (the autocar.jp piece I fetched directly did NOT contain a kWh figure despite search snippets
  attributing one to it — see below). Treat 1.5 kWh as "commonly reported in JP automotive press,
  not independently confirmed against a primary spec sheet in this session."
  - https://www.autocar.jp/post/600195 (fetched directly: confirmed this page discusses e-POWER
    being architecturally different from Leaf but contains NO quantitative kWh figure — the
    "1.5kWh" attribution to this URL in WebSearch's aggregated summary appears to be search-tool
    conflation with other sources, not present on the page itself)
  - https://bbs.kakaku.com/bbs/K0001314788/SortID=24594948/ (fetched: forum thread discussing
    "approximately 1.5kWh" as the delta/description across E12→E13 generations, itself citing
    autocar.jp and a Vehicle Energy Japan press release — so this is a forum's paraphrase of a
    press release, not primary-source-verified in this session)
- minkara spec page for the e-POWER (fetched) explicitly shows battery capacity fields as blank
  ("—") — Nissan does not publish this figure on consumer-facing spec sheets:
  https://minkara.carview.co.jp/car/nissan/note_e_power/spec/unit141061/
- **Confidence: unconfirmed/probable at best.** Recommend one more fetch pass at the Vehicle
  Energy Japan press release (https://www.incj.co.jp/newsroom/20201216_VehicleEnergy_J.pdf,
  found in search results but not fetched this session) before publishing a number in an
  explainer article.

### Supplier
- First-generation HE12 (2016-2018 production): **Panasonic**-supplied cells per WebSearch
  summary (unfetched primary source).
- Later production (2020+/E13 generation): switched to **Vehicle Energy Japan** (ビークルエナジ
  ージャパン, a JV spun out of the former AESC/Panasonic-adjacent Nissan battery business) per
  the same aggregated search summary and a VEJ press release title found in search results:
  https://www.incj.co.jp/newsroom/20201216_VehicleEnergy_J.pdf (title only, not fetched).
- **Do NOT** describe this as "AESC" — AESC batteries are associated with the Leaf, and one
  search explicitly warned that early press coverage conflates e-POWER's battery with Leaf
  technology; the CLAUDE.md-style trap here is treating "Nissan hybrid battery" as automatically
  AESC/Leaf-sourced when it is not. Confidence: unconfirmed (single aggregated-search source per
  generation, no primary spec sheet fetched).

### Location, cooling, NISMO S differences
- Location: consistent with earlier HE12 research — under-floor/rear seat area packaging
  (inferred from tires-nismo.md prior research noting "underfloor battery/inverter packaging" and
  absence of a spare tire well; not independently re-confirmed with a diagram this session).
- Cooling: **not conclusively determined.** One WebSearch aggregation (unfetched) claims the
  Note/Fit-hybrid/Aqua class of vehicles use a single cooling fan for the drive battery (vs. two
  fans on Serena e-POWER), implying **air-cooling via cabin-air intake** rather than liquid
  cooling — consistent with typical small-hybrid-battery packaging (Aqua/Fit hybrid precedent).
  A Facebook video title surfaced in search results ("2020 Nissan Note e-POWER HE12 High Voltage
  Battery Cooling System Service...") corroborates that there IS a distinct HV battery cooling
  service procedure, but the video itself was not fetchable/viewable in this session. Confidence:
  unconfirmed — flag for follow-up, do not state cooling method definitively without a primary
  source (e.g. Nissan service manual or a fetched teardown article).
- **NISMO S vs other grades:** no source found stating any traction-battery difference between
  NISMO S and other e-POWER grades (chemistry, capacity, or cooling). The performance uplift in
  NISMO S (100kW/136PS vs NISMO's 80kW/109PS per the tires-nismo.md research) is attributed to
  "retuned inverter, VCM, lithium-ion battery computer (LBC), and a strengthened reduction gear" —
  i.e. control/software and reduction-gear hardware changes, NOT a stated battery
  chemistry/capacity change. Treat "same battery pack across grades, NISMO S gets more aggressive
  control software" as the working assumption, flagged unconfirmed since no source explicitly
  rules out a pack difference.

### Degradation, replacement cost, owner reports
- Nissan's stated position (WebSearch summary, unfetched primary): drive battery needs "no
  replacement under normal use for at least 100,000 km"; degradation symptoms described as
  reduced charge capacity, worse fuel economy, and shorter EV-only running time.
- **Replacement cost reports (JP), all forum/aggregator-grade, unfetched primary sources:**
  - Cited range: **¥200,000+**, with a wider quoted range of **¥500,000–800,000** in one
    aggregator, and **¥200,000–800,000** post-warranty (warranty = 8 years/160,000 km) in
    another. These figures conflict/overlap loosely rather than agreeing tightly — treat the
    real-world number as "high five to low six figures in JPY, wide uncertainty," not a specific
    figure, until a primary dealer quote or an actual minkara replacement-invoice log is found.
  - A specific minkara post title turned up describing a traction-battery replacement due to
    flood/water damage — a real (if unusual) owner replacement event, but NOT fetched for cost
    detail this session: https://minkara.carview.co.jp/userid/129351/car/2562696/8088901/note.aspx
    (recommend fetching this in a follow-up pass — it's a directly relevant real-world data point
    that was found but not read).
- No p/n was seen anywhere for the traction battery pack or its sub-components (expected — packs
  are not typically small-parts-catalog items and would be dealer-quoted).

### 12V-flat vs. traction-battery-flat behavior, jump-start
- Two batteries, distinct roles (Nissan official FAQ, fetched):
  https://faq2.nissan.co.jp/faq/show/5294?category_id=9&site_domain=default
  - Traction (lithium-ion) battery: stores energy from the generator engine and regenerative
    braking, powers the drive motor and the A/C compressor motor.
  - 12V battery: powers e-POWER system startup and conventional electrics (audio, lights, etc).
    Charged via DC/DC converter from the traction battery — but **only while the system is
    powered ON/READY**. Merely having charge in the traction battery does NOT recharge the 12V
    battery while parked — this is the key mechanism behind 12V-flat incidents (confirmed by a
    second independent source, a JP blog explaining the same DC/DC behavior):
    https://xn--1ck4axg801pj1o.net/e-power/serena-e-power-butteryup.html (Serena e-POWER, same
    architecture family — WebSearch snippet, unfetched primary, but consistent with the fetched
    Nissan FAQ).
- **Jump-start procedure (Nissan official owner's-manual page, fetched):**
  https://www.nissan.co.jp/OPTIONAL-PARTS/NAVIOM/NOTE_SPECIAL/E-POWER/1807/PG/he12j1-9e6dacbe-7d49-4abc-a593-42369d05f816.html
  - Only ever jump the 12V battery via the fuse-box ⊕ terminal under the hood (NOT the traction
    battery, which is inaccessible/not intended for this).
  - Rescue vehicle must itself be a conventional 12V-battery vehicle.
  - Explicit warning: **do not use an e-POWER car as the rescue vehicle** for another car — the
    12V circuit/fuses are not rated for cranking-amperage loads and can be damaged, with a stated
    risk of expensive inverter damage (this last risk claim came from a WebSearch-summarized
    secondary source, not the Nissan page itself, which stops at "don't use this vehicle as a
    rescue vehicle" without explaining why).
  - Push-starting is explicitly stated as not possible.
  - This procedure resolves a 12V-flat only; it will not help if the traction battery itself is
    faulted (different failure mode, dealer/service-only remedy).

---

## C. Genuine 12V battery part number

### Primary candidate
- **24410-0542R** — ATLAS-branded (Korean manufacturer, common Renault-Nissan-alliance OEM
  supplier), 12V, L2/LN2 size, 60Ah, 510A(EN).
  - Cross-referenced explicitly as fitting "Nissan Note e-Power (2017-2020)" on a NZ retailer's
    product page (fetched): https://superstart.net.nz/products/nissan-note-e-power-hybrid-auxiliary-battery-2017-onwards
    — page text: "Replaces: 12V - L2 60Ah 510A (EN), 24410-0542R, EFB60-LN2, PSIN-6C, ENJ 375
    LN2, SLX-6C and more..."
  - Independently, the prior research pass (`docs/research/research-electrics-wipers.md` line 80)
    already flagged a single minkara mention of "Atlas 24410 0542R" as the factory-stamped number
    on an owner's actual battery.
  - This session's WebSearch aggregation also surfaced the same number attributed to multiple JP
    battery-retailer/blog pages (togoplz.hatenablog.com, jidoshaseibi.com-adjacent sources) as
    "the OEM part for Note e-POWER (E12/HE12)" — but I was unable to get an unambiguous
    ATLAS/24410-0542R statement out of a direct fetch of togoplz.hatenablog.com (that page, when
    fetched, mentioned ATLAS BX as the brand but did NOT surface the part number text in the
    fetch summary) or readinesscoder.com (fetched: no part number present on page despite
    appearing in aggregated search summaries).
  - **Caution / conflicting fitment:** the SAME number 24410-0542R is also listed by
    crdi.online (fetched) as OEM for **Renault Korea** SM3/SM5/SM6/XM3/QM6 — i.e. this appears to
    be a Renault-Samsung-catalog part number for a shared Renault-Nissan-Alliance battery, not a
    JDM-Nissan-catalog number per se. This is plausible (the alliance shares components/part
    numbering for common items) but was NOT confirmed against an actual JDM Nissan parts catalog
    (Amayama) — Amayama searches for "24410-0542R" this session returned no matching part page
    (only unrelated 24410-xxxxx numbers for other Nissan models: 24410-AU005, 24410-ET00B,
    24410-36M7A, etc. — none matched HE12 Note e-POWER in the snippets returned).
  - **Confidence: probable.** Two independent fetched retailer/product pages plus prior-session
    forum corroboration point to the same number for the same vehicle, which would normally meet
    the "verified" bar — but I'm holding this at "probable" because (a) no primary JDM Nissan
    parts-catalog page confirmed it, (b) the same number's cross-listing under a Renault Korea
    catalog raises a small chance of an alliance-wide generic number being mis-attributed to Note
    e-POWER by a chain of retailers copying each other, and (c) direct fetches of the two JP blog
    posts most often cited as the source of this number did NOT actually contain the number when
    I read their full text. Recommend a lead browser-verification pass on
    `amayama.com/en/part/nissan/244100542r` (candidate URL, untested — 403s WebFetch) before
    treating this as settled.

### LN1 number (base "e-POWER S" grade)
- **Not found.** No source in this session surfaced a specific 24410-xxxxx number for the LN1
  battery fitted to the base e-POWER S grade. Only the LN1 *size class* (208×175×190mm, ~50Ah) is
  confirmed from prior research (car-battery.jp, Panasonic/Nissan FAQ fitment charts, already in
  research-electrics-wipers.md). Report as "not found" per instructions rather than guess.

### Aftermarket LN2 EFB equivalents (JP owners), with prices
| Brand/model | Notes | Price | Source |
|---|---|---|---|
| GS Yuasa ENJ-375LN2-IS | IS = idle-stop rated | not priced in this session | prior research, re-confirmed present in jidoshaseibi.com fetch this session |
| GS Yuasa ENJ-375LN2 | non-IS variant also cited | — | jidoshaseibi.com (fetched) |
| Panasonic N-370LN2/PA | Caos-adjacent hybrid-aux line | — | jidoshaseibi.com (fetched) |
| Furukawa 375LN2-ISS | cited as compatible alternative in a battery-retailer blog aggregation | — | WebSearch summary re: 24410-0542R page, unfetched primary |
| Brite Star EFB60-LN2 | explicitly named as the direct OEM-superseding replacement for a failed factory Atlas battery | **¥20,000 (tax incl.) battery + ¥2,200 labor** | https://www.vasques.com/blog/toritsuke/post-4094/ (fetched) |
| G&Yu HV-L2 (LN2) | ~15% higher capacity than OEM per seller claim (from prior research pass) | — | research-electrics-wipers.md (prior session) |

### Cost comparison (12V battery, all grades)
- Dealer replacement (LN1 example, from a fetched aggregator article): **¥35,000+ battery + ~
  ¥1,000+ labor ≈ ¥36,000+ total**.
- Online/DIY: **¥10,000+** total, often "less than half of dealer price."
  - Source: https://jidoshaseibi.com/repair-case/note-epower-battery/ (fetched)
- Separately, another aggregator (unfetched WebSearch summary) cited **¥20,000–40,000 parts +
  ¥5,000–10,000 labor ≈ ~¥30,000 typical**, and **replacement standard interval 2-5 years**
  (consistent directionally with the "3 years / 50,000 km" figure already in prior research).

---

## Open questions (for follow-up before publishing)

1. **Reduction gear oil genuine part number** — KLE27-00002 is the best candidate for Matic
   Fluid S but no source explicitly ties it to the HE12 Note e-POWER parts catalog (its listed
   applications are older non-e-POWER Nissan hybrids, and it shows as sales-suspended). Needs a
   dealer parts-lookup or Amayama/lead-browser check.
2. **Reduction gear drain-plug crush washer part number** — not found; owners say "replace it,
   don't reuse" but no p/n surfaced.
3. **Reduction gear official interval/policy** — the "no scheduled change" claim is not sourced
   to a fetched primary Nissan document in this session (the one FAQ page checked, 13788, doesn't
   cover it at all). Needs the actual owner's manual maintenance schedule table or dealer service
   menu, not just secondary blog claims.
4. **Traction battery capacity (kWh)** — "~1.5 kWh" is repeatedly cited in aggregated search
   results but I could not verify it against a primary-source page in this session (the autocar.jp
   page most often cited as the source does not actually contain the figure when read directly).
   Worth trying the Vehicle Energy Japan press release PDF
   (https://www.incj.co.jp/newsroom/20201216_VehicleEnergy_J.pdf) or the Nissan recycle/removal
   manual PDF for the HE12 (https://www.nissan-global.com/JP/SUSTAINABILITY/ENVIRONMENT/A_RECYCLE/BATTERY/PDF/NOTE_e-Power_e12_manual.pdf
   — fetched this session but returned unreadable binary/PDF-structure content rather than parsed
   text; a proper PDF text extraction or the lead's own PDF viewer may succeed where WebFetch
   failed).
5. **Traction battery cooling method** — air vs liquid not conclusively determined; one weak
   signal (single-fan vs dual-fan comparison to Serena) suggests air-cooled, unconfirmed.
6. **Traction battery supplier by production year** — Panasonic (early) → Vehicle Energy Japan
   (later) is plausible but rests on unfetched aggregated search summaries; the VEJ press release
   PDF above would help pin down exactly which HE12 production years it applies to.
7. **12V genuine part number 24410-0542R** — held at "probable" per the caution above; a
   lead-browser check of `amayama.com/en/part/nissan/244100542r` (untested candidate URL) would
   let this be upgraded to verified or ruled out.
8. **LN1 genuine part number** (base e-POWER S grade) — not found at all this session; not
   applicable to the owner's NISMO S car but worth one more targeted search pass if the site
   wants to document base-S-grade fitment too.
9. **Minkara flood-damage traction-battery-replacement log** found but not read for cost detail:
   https://minkara.carview.co.jp/userid/129351/car/2562696/8088901/note.aspx — worth a follow-up
   fetch, it's a rare real owner replacement data point.
