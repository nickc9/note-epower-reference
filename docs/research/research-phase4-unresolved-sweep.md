# Phase 4 unresolved-items research sweep

Pure research pass (no browser tools) attempting to close out five outstanding
research questions for the Note e-POWER (HE12) reference site. WebSearch and
WebFetch only. Amayama direct-part-page WebFetch was tried a couple of times
and reliably 403s, as expected — noted where relevant, not repeated further.

---

## 1. Passenger-side front wiper blade genuine part number (and rear wiper)

**Not resolved to a confirmed genuine passenger blade ASSEMBLY number.** Some
useful new context was found, summarized below.

### What was found

- The driver-side blade family for the Note e-POWER (HE12) uses the casting
  code **3VA0**: `28890-3VA0D` (confirmed previously) with sibling revisions
  `28890-3VA0A` and `28890-3VA0B` all cross-listed as mutual genuine
  replacements on YoshiParts, fitment given only as generic "Nissan Note E12,
  2nd Gen • 2012–2020" (no HE12/e-POWER-specific distinction, no grade split).
  Source: https://yoshiparts.com/parts/nissan-288903VA0D (fetched) — lists
  28890-5WJ0A and 28890-3VA0A as alternates.
- A genuine refill part **`28895-3VA0E`** exists and its own product title on
  MonotaRO explicitly reads **"リフイル，ワイパー ブレード アシスト"** —
  "Refill, Wiper Blade, **ASSIST**" (アシスト = assist = passenger side in
  Nissan's own terminology). This is a meaningfully stronger signal than
  before: it's not just a same-casting-family guess, it's Nissan's own retail
  listing explicitly labeling the part as the assist-side refill.
  Source: https://www.monotaro.com/g/03207727/ (page title confirmed via
  search-snippet fetch; direct WebFetch of the product page timed out twice —
  content read via search result title/snippet instead, so treat the
  fitment-detail portion as unconfirmed, only the title text is solid).
- Cross-reference pattern check: on the US-market Versa Note (same E12
  platform, different casting family "3WC0/3WC1"), Nissan's own parts
  numbering uses `28890-3WC0A/B` for the **driver** blade and `28890-3WC1A`
  for the **assist/passenger** blade — i.e., the suffix digit right after the
  casting code (`0` vs `1`) distinguishes driver vs assist across many Nissan
  platforms (also confirmed for `28895-1AA0A` driver refill vs `28895-1AA1A`
  assist refill; `28890-3JA0A` vs `28890-3JA1A`). Sources fetched:
  https://www.nissanpartsdeal.com/oem-nissan-versa_note-wiper_blade.html,
  https://www.nissanpartsdeal.com/parts/nissan-blade-asmy-wind~28890-3wc1a.html
  (title literally "Left Windshield Wiper Blade Assembly", specs field says
  "Passenger Side" — Nissan's US site itself has an internal
  left/passenger-side labeling inconsistency, noted for what it's worth),
  https://www.nissanpartsdeal.com/parts-list/2018-nissan-versa_note/body_electrical/windshield_wiper.html
  (full diagram: `28890-3WC0B`/`28890-3WC1A` blades, `28895-3WC0B`
  driver refill / `28895-3WC1A` "assist" refill, `28881-3WC1A`/`28886-3WC1A`
  arms).
- **By analogy**, a JDM `28890-3VA1x` (blade assembly, assist) or
  `28895-3VA1x` would be the expected passenger-side sibling of the
  `28890-3VA0x` driver family — but no such part number was found in any
  retailer database, YoshiParts, NissanPartsDeal, Amazon.co.jp, or Yahoo
  Shopping search. Searched explicitly: `"28890-3VA1A"`, `"28895-3VA1A"`,
  `"28895-3VA1"`, `"3VA1" nissan wiper` — no hits. This may mean the JDM
  Note doesn't follow the same "0 vs 1" suffix convention as the US Versa
  Note (different casting families can have different internal numbering
  logic), or it may mean the passenger side simply reuses `28895-3VA0E` as
  a combined/shared refill without a distinct "3VA1" family existing at all.
- KIMBLADE (Japanese wiper-fitment chart site) explicitly lists the Note
  E12/HE12/NE12 (incl. e-POWER) passenger-side front wiper as **"300mm
  (対応製品なし)"** — "no compatible [aftermarket KIMBLADE] product" — and
  gives no OEM part number. Source:
  https://kimblade.jp/products-code/code-nissan/ (fetched).

### Rear wiper (305mm)

No genuine part number found at all, confirming the existing gap. Searched:
`"28790-3VA0" nissan note rear wiper` (only found `28790-3NF0A` for LEAF and
`28790-1FA0A` for US Versa Note — different casting families, not
transferable), and Japanese-language search for `日産 ノート HE12
リアワイパー ブレード 純正 品番 28790` (no genuine number surfaced, only
confirms 305mm size from Nissan's own FAQ index).

### Confidence assessment

- `28890-3VA0D` (driver blade): **verified** (unchanged from before — 2+
  sources, genuine catalogue-style listings).
- `28895-3VA0E` (assist/passenger refill): can be nudged from "unconfirmed"
  toward **probable** — it now has an explicit Nissan-side "アシスト" (assist)
  label on its own retail title, which is a genuine descriptive fact about
  the part, not just casting-family inference. However, this is still **not**
  a confirmed fitment to the Note HE12 specifically (no source was fetched
  that lists year/chassis fitment for this exact number) and it's a REFILL,
  not the full blade assembly the question asked about. I did **not** find
  a source explicit enough to call it "verified" per the project's 2-source
  rule — recommend `probable` at most, with a note that it's the refill
  insert, not a full blade assembly.
- Passenger-side full blade **assembly** number: **unresolved**, no number
  found. Do not publish one.
- Rear wiper blade genuine number: **unresolved**, no number found at all
  (aftermarket NWB `GR41-TN30G` remains the only known number).

---

## 2. Rear brake drum: 43206-3HA2A vs 43206-ED300

**Partially resolved** — new evidence suggests 3HA2A is the more
Note-E12-specific number and ED300 is an older, broadly-shared part number,
but no source explicitly states supersession.

### What was found

- `43206-3HA2A` fitment (YoshiParts, fetched directly):
  "Nissan Note E12, 2nd Gen • 2012 — 2020" — filed under Rear Axle, with two
  sibling/alternate genuine part numbers shown: **`43206-3HA1B`** and
  **`43206-3HA9A`**. Fetched all three individually
  (https://yoshiparts.com/parts/nissan-432063HA2A,
  https://yoshiparts.com/parts/nissan-432063HA1B,
  https://yoshiparts.com/parts/nissan-432063HA9A) — each cross-lists the
  other two as "Genuine Nissan Replacement" alternates, all with the same
  generic Note E12 2012–2020 fitment (no grade/e-POWER/petrol/HE12
  distinction given by the retailer). This pattern (mutual cross-listing as
  replacements) is the same pattern seen with the wiper blade casting-family
  siblings, and most likely represents production-run engineering revisions
  of the same physical part rather than distinct specs for different grades.
- `43206-3HA2A` is also confirmed sold specifically as a "JDM NISSAN NOTE E12
  Brake rear axle drum" by JDM Yamato
  (https://jdmyamato.com/products/eg030722, fetched) and appears bundled in
  a larger "Nissan Note E12 Rear Brake & Axle / 2WD" used-parts listing
  alongside hub/bearing/ABS-sensor part numbers in the `1HA0A`/`1HA1A` family
  and drum-shoe numbers in the `44000-3HA2F`/`44010-3HA2F` family
  (https://jdmyamato.com/products/egnp000263, fetched) — i.e., 3HA2A is
  a real, currently-stocked Note E12 part, not a typo or unrelated model
  number.
- `43206-ED300` fitment (YoshiParts, fetched directly):
  **primary/first-listed fitment is "Nissan Tiida Latio SNC11, 1st Gen •
  2004 — 2012"** (the Note's *predecessor* platform), with a broad
  "compatible models" list spanning March, Cube, Bluebird Sylphy, Cube
  Cubic, Tiida, **Note**, Wingroad, and AD — i.e., a shared B-platform-era
  part reused across many old/unrelated Nissan compacts, with Note only
  appearing as one entry in a long generic "may also fit" list, not as the
  primary/specific application. This is exactly the kind of loose
  multi-model fitment list the project's CLAUDE.md already warns about
  (Amayama "may fit to" lists needing verification) — it raises real doubt
  about whether ED300 is actually the best/correct number for the HE12
  specifically, as opposed to being a broadly-compatible legacy number that
  happens to physically interchange.
- No cross-reference/superseding-number database entry was found that
  explicitly states "3HA2A supersedes ED300" or vice versa. Searched:
  `43206-ED300 43206-3HA2A cross reference nissan`, PartSouq search for
  `432063HA2A` (no results surfaced), and Japanese-language searches
  (`"43206-3HA2A" ノート ブレーキドラム`) — none produced a direct
  supersession statement.
- A visually-similar but confirmed-**different** number, `43206-1HA0A`, was
  found to be for the unrelated Sunny/Micra/Almera (N17) platform, not
  the Note — noted only to rule it out as a red herring
  (https://www.carico-auto.com/products_intro?cpt=28842, fetched via search
  snippet).

### Confidence assessment

- `43206-3HA2A`: evidence now leans toward this being the more
  Note-E12-specific/correct number (two independent retailers — YoshiParts
  and JDM Yamato — both list it specifically and only for "Nissan Note E12,"
  with no legacy-platform baggage). Still **cannot call it "verified" for
  HE12 e-POWER specifically** — no source distinguishes e-POWER from petrol
  E12, or NISMO from standard grade, for any of the 3HA-family numbers. I'd
  suggest **probable**, arguably stronger than ED300's existing "probable."
- `43206-ED300`: given its primary/first-party fitment is actually the
  *previous-generation* Tiida Latio with Note only in a broad multi-model
  list, I'd suggest this be **reconsidered down**, not left as-is — it may
  still be correct (it does physically fit per that Amayama-sourced
  "probable" from before), but the new YoshiParts fitment data is weaker
  supporting evidence than previously assumed, not stronger.
- **Not resolved**: which (if either) is specifically correct for NISMO vs
  standard grade, or whether the `3HA1B`/`3HA2A`/`3HA9A` trio represents
  running changes vs different specs (e.g., drum width for different brake
  systems). Recommend flagging this explicitly in the parts entry rather
  than picking one number with unwarranted confidence.

---

## 3. Traction battery capacity primary source — RESOLVED (strong primary source found)

**This one is resolved with a genuine, directly-fetchable Nissan primary
document.**

### What was found

Nissan Motor Co.'s official "リチウムイオンバッテリー取り外し・回収マニュアル
ノートe-POWER（E12型）" (Lithium-ion battery removal/recovery manual, Note
e-POWER E12-type), dated **2020年4月 (April 2020)**, published by Nissan
Motor Co., Ltd. (Vehicle Production Engineering Development Division,
Environment & Facility Engineering Dept.), copyright notice "©Copyright2020
NISSAN MOTOR Co. Ltd." This is a real, currently-live PDF on Nissan's own
domain, written for licensed vehicle dismantlers under Japan's End-of-Life
Vehicle Recycling Law — i.e., a genuine engineering/compliance document, not
marketing copy, and it explicitly covers the E12/HE12-generation Note
e-POWER (distinct manuals exist per generation; this one predates the E13
manual).

**URL (fetched directly, PDF downloaded and read):**
https://www.nissan-global.com/JP/SUSTAINABILITY/ENVIRONMENT/A_RECYCLE/BATTERY/PDF/NOTE_e-Power_e12_manual.pdf

Section 8 ("リチウムイオンバッテリー仕様" / "Lithium-ion battery
specifications"), page 16 of the document, gives this exact table:

| 項目 (Item) | 仕様 (Spec) |
|---|---|
| 種類 (Type) | リチウムイオン電池 (Lithium-ion battery) |
| 構成 (Construction) | **4 モジュール（80 セル）** — 4 modules (80 cells) |
| 定格電圧 (Rated voltage) (V) | **292** |
| 重量 (Weight) (kg) | **41.8** |
| パック外形寸法 (Pack outer dimensions) | A: 850.0mm, B: 235.0mm, C: 187.4mm, D: 193.0mm, E: 506.4mm |

This directly and independently confirms **292V nominal and 80 cells (in 4
modules)** from Nissan's own engineering documentation — matching the
figures previously sourced only from the JS-gated FAQ page. It also adds new,
previously-unsourced data: **pack weight 41.8 kg** and full pack outer
dimensions.

It does **not** state the kWh capacity directly (no Ah or Wh figure is given
in this document) — so the "1.47 kWh" figure specifically is still not
confirmed by this primary source. Section 7 of the same manual states the
system operates at "**最大 350V 程度**" (approximately max 350V) — this is
the boosted/system-max voltage (via the boost converter to the motor
inverter), not the battery pack's own rated voltage of 292V; don't conflate
the two if citing this document.

### Other sources tried

- `faq2.nissan.co.jp/faq/show/5325?category_id=242&site_domain=default` —
  fetched twice, confirmed JS-gated as expected per the task brief (renders
  as generic FAQ-portal chrome, no battery content extracted either time).
- Nissan Japan press release for the Nov 2016 e-POWER launch
  (`global.nissannews.com/ja-JP/releases/161102-01-j`) — WebFetch returned
  empty content (likely JS-rendered); not resolved.
- Green Car Congress article (Nov 20, 2016,
  "Nissan introduces series-hybrid powertrain with Note e-POWER in Japan")
  — could not fetch directly (DNS/404 issues on both www and non-www forms),
  but its content was recoverable via search-result summary: it states the
  battery is roughly **1.5 kWh** (an order-of-magnitude figure, "1/20th the
  size" of the LEAF's 30 kWh pack, per chief powertrain engineer Naoki
  Nakada), explicitly **not an official spec** — Green Car Reports'
  companion piece (https://www.greencarreports.com/news/1106846...,
  fetched successfully) states outright: *"Nissan deliberately withheld
  detailed technical specifications in its press materials"* and that the
  1.5 kWh figure is the journalist's own back-of-envelope inference from the
  "1/20th" quote, not a cited Nissan number. This is useful negative
  evidence: it suggests the precise "1.47 kWh" figure did **not** come from
  Nissan's original 2016 press kit, and is likely a later-derived/calculated
  number (possibly cell capacity × cell count × voltage, computed by a third
  party from teardown or spec-sheet data) rather than something Nissan
  itself published as a headline spec.
- Nissan Technical Review No.87 (2021) PDF was fetched but its content is
  about generation-3 e-POWER (Note Aura/newer systems per the topic index),
  and the fetch could not extract readable battery-spec text for the
  HE12-era pack specifically — not useful for this question.
- kakaku.com forum thread (`e-Power・リチウムイオンバッテリーの容量は？`)
  turned up in search as forum-grade discussion citing 1.5kWh/292V — not
  fetched directly, forum-grade, not needed given the primary source above.

### Confidence assessment

- **292V nominal, 80 cells (4 modules), 41.8 kg pack weight**: now
  **verified** — genuine Nissan primary engineering document, directly
  fetched, unambiguous.
- **1.47 kWh capacity figure specifically**: still not independently
  confirmed by a primary Nissan document in this search. Recommend keeping
  it flagged as derived/secondary rather than citing the recycling manual
  for the kWh number — cite the recycling manual only for V/cell-count/
  weight, and keep whatever existing secondary sourcing (FAQ 5325 or other)
  for the kWh figure, clearly labeled as such.

---

## 4. Genuine headlamp assembly numbers by grade

**Not resolved.** No grade mapping found; one additional sibling part number
surfaced but doesn't add fitment resolution.

### What was found

- `26060-5WK5A` (left/"Lh" per Nissan's own vehicle-relative labeling
  convention — note this means the *left side of the car as built*, which
  on a RHD JDM Note is the **passenger side**, not driver side; flagging
  this explicitly since it's a common source of confusion) fitment, fetched
  directly from YoshiParts: "Nissan Note E12, 2nd Gen • 2012 — 2020" —
  generic, no grade distinction, no bulb-type note.
  https://yoshiparts.com/en/parts/nissan-260605WK5A
- Two sibling numbers found and individually fetched: **`26060-5WK5B`**
  and **`26060-5WK5D`**, both cross-listed on each other's pages as
  "Genuine Nissan Replacement" alternates, both with the identical generic
  "Note E12, 2012–2020" fitment and no grade/bulb-type distinction.
  https://yoshiparts.com/en/parts/nissan-260605WK5B (fetched)
- As with the wiper and brake-drum cases, this A/B/D suffix pattern most
  plausibly represents production-run engineering revisions of the same
  physical headlamp, not different parts for different grades — but no
  source states this explicitly, so it remains an inference, not a fact.
- **No right-side (`26010-` prefix) counterpart number was found at all**
  for the Note E12/HE12, despite explicit searches (`"26010-5WK5" nissan
  note headlamp right`, `yoshiparts nissan note headlamp 26010 5WK`). This
  is a real gap — currently only one side's part number is known at all.
- **No halogen-specific (X/S grade) part number was found**, and no source
  anywhere distinguished which of the LED-projector NISMO headlamp vs the
  H11/HB3 halogen X/S headlamp corresponds to which number, or whether they
  share a housing casting with different bulb hardware only (which is a
  plausible hypothesis but wholly unconfirmed).
- Official Nissan spec page confirms the bulb-type-by-grade split already
  known (NISMO/NISMO S: LED low beam, projector type, auto-leveler, LED
  position lamp; implicitly different from X/S) but does not give part
  numbers: https://www3.nissan.co.jp/vehicles/new/note/specifications/nismo.html
  (referenced via search snippet, not independently re-fetched this
  session — this matches what was already established/verified previously).

### Confidence assessment

- `26060-5WK5A` (and siblings `-5WK5B`, `-5WK5D`): fitment to "Note E12"
  generically remains **probable** at best — same as before, no upgrade,
  since no source ties it to a specific grade or bulb type.
  Grade-specificity: still **unconfirmed** — do not assert this is the
  NISMO/LED headlamp specifically, nor the X/S halogen one.
- Right-side number, and any distinct halogen-specific number: **unresolved
  — not found**. Do not publish a number for these.

---

## 5. NISMO suspension kit price/SKU

**Resolved with reasonable confidence** — current, live NISMO catalogue page
explicitly assigns the single SKU to e-POWER NISMO/NISMO S as well as petrol.

### What was found

- NISMO's own current parts catalogue page for the Note NISMO lineup, fetched
  today (this session):
  https://www.nismo.co.jp/products/web_catalogue/model_nismo_note.html
  Contains a grade-availability table with four columns — **NISMO, NISMO S,
  e-POWER NISMO, e-POWER NISMO S** — and a legend "○：設定有り　-：設定無し"
  ("○ = available, - = not available"). The "Sports Suspension Kit" row
  shows **○ (available) in all four columns**, including both e-POWER
  columns. This is the clearest evidence found that the sports suspension
  kit is officially offered for the e-POWER NISMO and e-POWER NISMO S
  specifically, not just the petrol car, directly from NISMO's own current
  model-applicability table (not a "may fit" retailer inference).
  No publication date/version marker was found on the page itself, but it
  is the live production page at the time of this research (fetched
  successfully today), so it reflects NISMO's current-as-of-today
  applicability claim.
- NISMO's Sports Suspension Kit product page, fetched directly:
  https://www.nismo.co.jp/products/factory_line/sports_suspension/index.html
  Lists, for "**Note (E12) NISMO S**": part number **`53110-RPE21`**,
  price **¥497,750 (tax included)** / **¥452,500 (tax excluded)**. This
  page does **not** separately break out e-POWER vs petrol pricing or SKUs
  — it presents a single listing for "Note (E12) NISMO S," which per the
  model-applicability table above is meant to cover both the petrol and
  e-POWER NISMO S (and, per that table, also the non-S NISMO/e-POWER NISMO
  grades, since the same "Sports Suspension Kit" row applies across all
  four).
- Could not verify a date on which this price took effect, i.e. can't
  independently confirm whether ¥452,500 (excl. tax) is a genuinely
  *updated* price since the 2020 launch price of ¥371,000 (excl. tax) or
  whether the 2020 news release quoted a promotional/introductory price.
  Attempted to check the Wayback Machine for a historical snapshot of the
  NISMO product page to establish a price timeline — **web.archive.org is
  not reachable with the tools available in this session**, so this could
  not be independently dated.
- No independent 2023–2026 retailer or blog listing confirming this exact
  SKU + price combination was found (searched `"53110-RPE21" 通販 OR 購入
  OR ブログ 装着` — no relevant results; general suspension-kit searches
  surfaced other NISMO kits for other models — Leaf, Wingroad, Elgrand,
  Presage — but not independent confirmation for the Note kit specifically).

### Confidence assessment

- SKU **`53110-RPE21`** applying to e-POWER NISMO/NISMO S specifically:
  **probable→verified-leaning** — this now rests on NISMO's own current,
  live, official model-applicability table (a genuine first-party
  catalogue source, fetched directly today), which is a stronger source
  than the previously-available ambiguous catalogue row. I'd call this
  **verified** for the *SKU-applies-to-e-POWER* question specifically,
  since it's an explicit first-party grade/model applicability matrix, not
  an inference.
  price **¥497,750 incl. tax / ¥452,500 excl. tax**: **probable** — comes
  from the same first-party live page, but only one source (no independent
  corroboration), and its currency/date can't be pinned down beyond "live
  as of this research session, July 2026." Recommend citing it with an
  "as-viewed [date]" caveat rather than treating it as a fixed, dated
  price point.
- Whether this represents a genuine price increase since the 2020 ¥371,000
  (excl. tax) launch price, vs. the 2020 figure being an
  introductory/promotional price: **unresolved** — could not date the
  current price via Wayback Machine or any independent retailer listing.

---

## Summary table

| # | Item | Resolved? | Key finding | Confidence |
|---|---|---|---|---|
| 1 | Passenger wiper blade | Partial | `28895-3VA0E` confirmed by its own retail title to be labeled "assist" (passenger) refill — stronger than before, but still no confirmed full-assembly number, no confirmed HE12-specific fitment source, and no genuine rear-wiper number found at all | `28895-3VA0E`: probable (refill only, not full blade); passenger assembly + rear blade: unresolved |
| 2 | Rear brake drum 3HA2A vs ED300 | Partial | 3HA2A is a specific, currently-stocked Note-E12 number (2 independent retailers) with sibling revisions 3HA1B/3HA9A; ED300's primary fitment is actually the older Tiida Latio platform with Note only in a broad shared-parts list — weakens confidence in ED300 relative to before | 3HA2A: probable (leans stronger than ED300 now); neither confirmed HE12-specific or NISMO-specific |
| 3 | Traction battery capacity | Yes (V/cells/weight) | Genuine Nissan recycling-manual PDF (dated 2020/04, Note e-POWER E12) directly states 292V, 4 modules/80 cells, 41.8kg pack | Verified (V, cell count, weight); kWh figure (1.47) still not found in any primary doc — likely a derived/secondary number |
| 4 | Headlamp assembly numbers by grade | No | Only one side (`26060-`, vehicle-left = JDM passenger side) has a known number, with 3 generic sibling revisions (5WK5A/B/D); no right-side number found; no grade or bulb-type distinction found anywhere | Unresolved — do not assign to a specific grade |
| 5 | NISMO suspension kit SKU/price | Yes (SKU); partial (price currency) | NISMO's own live model-applicability table confirms `53110-RPE21` covers e-POWER NISMO and e-POWER NISMO S explicitly, not just petrol; current live price ¥497,750 incl./¥452,500 excl. tax, but couldn't date this against the 2020 launch price via Wayback Machine (not reachable this session) | SKU-to-e-POWER applicability: verified; price: probable (single source, undated relative to 2020 figure) |
