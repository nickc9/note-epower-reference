# Suspension & NISMO-specific parts research — Note e-POWER HE12 / NISMO / NISMO S

Research date: 2026-07-02. Target car: 2018 Note e-POWER NISMO S, DAA-HE12.

**Trap check performed throughout:** every source below was checked against the
two-NISMO-S trap (petrol NISMO S = DBA-E12改, 1.6L HR16DE, 5MT, 17", rear
DISCS — a different car). Sources describing that car are explicitly flagged
and excluded from OEM number claims for the owner's car. One trap example was
caught and rejected below (§F).

---

## A. Baseline fact established from a primary Nissan document (high confidence)

Fetched: `https://history.nissan.co.jp/ARCHIVES/PDF/NOTE/E12/20191028/note_nismo_specsheet.pdf`
(official Nissan archived spec sheet, "ノート NISMO主要装備一覧/主要諸元", covering
e-POWER NISMO, e-POWER NISMO S, NISMO (petrol E12), NISMO S (petrol E12改)).

| Item | e-POWER NISMO | e-POWER NISMO S | Confidence |
|---|---|---|---|
| Chassis | DAA-HE12 | DAA-HE12 | verified |
| Curb weight | 1250 kg | 1250 kg | verified (contradicts earlier research file's "unconfirmed" note — now resolved, both grades identical) |
| Ground clearance | 130 mm | 130 mm | verified |
| Front suspension | 独立懸架ストラット式 (independent strut) | same | verified |
| Rear suspension | トーションビーム式 (torsion beam) | same | verified |
| Front brake | Ventilated disc | same | verified |
| Rear brake | Leading-trailing drum | same (NOT disc — confirms trap) | verified |
| Tire | 195/55R16 87V | same | verified |
| Wheel | 16×6.5J, inset+46, PCD100/4H | same | verified |
| "NISMO専用サスペンション" (NISMO-dedicated suspension tune) row | e-POWER専用 (merged cell — identical between e-POWER NISMO and NISMO S) | same | verified — corroborates prior tires-nismo.md finding that NISMO/NISMO S share identical suspension tune |
| Stabilizer front/rear row | **"フロント強化"** (front bar reinforced vs. base grades) | **"フロント強化"** | verified — front anti-roll bar is factory-uprated on NISMO/NISMO S vs. standard e-POWER grades; rear unchanged |

Petrol NISMO S (DBA-E12改) row on the same sheet: curb weight 1080kg, ground
clearance 120mm, rear brake **ディスク式 (disc)**, tire 205/45R17 84W — this is
the trap car, correctly excluded.

**Practical implication for the site:** owners should be told the NISMO/NISMO S
front stabilizer bar is a distinct (thicker) part from standard e-POWER S/X
front stabilizer bars — relevant if researching stabilizer bar OEM p/n later
(not found this session — see open questions).

---

## B. OEM part numbers found (with fetched source)

### B1. Rear shock absorber — CANDIDATE ONLY, grade uncertain
- **P/N: E6210-A16E**
- Source: minkara post, fetched — https://minkara.carview.co.jp/userid/915740/car/3268798/8124335/note.aspx
  - Owner states this number was "confirmed via Nissan dealership" (ディーラーで確認)
  - Failure mode: oil leak discovered at pre-inspection (車検前点検), early signs of wear noted around 100,000 km
  - Lower shock bolt torque quoted: 98 N·m (matches independently-sourced torque list, see D)
- **Confidence: probable, but grade NOT confirmed.** The post doesn't state NISMO/NISMO S vs. standard grade, and §A above confirms NISMO/NISMO S have a factory-dedicated suspension tune, so this number should be treated as most likely correct for **standard e-POWER grades (S/X/Medalist/Autech)** only until a NISMO-specific number is found. Do not publish as NISMO/NISMO S-confirmed.
- A second minkara post (https://minkara.carview.co.jp/userid/990787/car/3117993/6819296/note.aspx) confirms the owner's car IS an e-POWER NISMO S and describes rear shock oil leakage after ~30 months/18,000km, but does **not** give an OEM part number (went aftermarket — KYB Lowfer Sports Plus). Useful only as a symptom/interval data point, not a part number.

### B2. Front stabilizer link (sway bar end link)
- **P/N: 54618-JX00A**
- Cross-referenced across multiple independent Japanese aftermarket parts retailers, all citing this as the OEM number for Note E11/NE11/E12/NE12/**HE12** front stabilizer link (front L/R common):
  - https://store.shopping.yahoo.co.jp/yabumoto1/gmb1002-03801-013.html
  - https://store.shopping.yahoo.co.jp/solltd/54618jx00aset-008.html (also lists an alternate/superseded number **54618-ED000**)
  - https://ritemas.jp/item/id/GSL-N-06-2-08/4841P57ET3
  - https://yabumoto1.jp/shopdetail/000000040076/
- **Confidence: probable.** Multiple independent retailer catalogue cross-references agree (4+), which is reassuring, but none of these is a genuine Nissan/Amayama catalogue fetch, and none explicitly distinguishes NISMO/NISMO S from standard grades (stabilizer *links* are less likely to differ by grade than the bar itself, but this is inference, not confirmed).
- Two numbers appear (54618-JX00A vs 54618-ED000) across listings — likely an old/new supersession pair; not resolved which is current for HE12 specifically.

### B3. Front strut/shock assembly — NOT CONFIRMED for HE12 e-POWER
- Searched extensively; genuine JDM Nissan strut kit part numbers use the "54302-xxxxx" (RH) / "54303-xxxxx" (LH) pattern for this Note generation, but every concrete number found was for the **petrol** E12:
  - Example (explicitly petrol, rejected): a parts-reseller listing for "E12 ノート X 5HB H24年式 HR12 CVT" (petrol, non-hybrid X grade) lists strut set 54302-3VA1A / 54303-3VA2A / 56210 — https://store.shopping.yahoo.co.jp/tkrpparts222/r6-7-23e12c289.html. **This is NOT the e-POWER/HE12 part and must not be used** (trap avoidance — different subframe/motor-generator packaging on e-POWER could plausibly change the strut lower mount even if the bolt pattern is shared; not verified either way).
  - Amayama listings surfaced for "Strut Kit, Front Suspension" under numbers E4302-1A11E and E4302-1V10A "for Nissan Note" (https://www.amayama.com/en/part/nissan/e43021a11e , https://www.amayama.com/en/part/nissan/e43021v10a) — **Amayama candidates only, not fetched (403 per policy), fitment/chassis not confirmed from the search snippet.** Needs browser verification against the HE12 e-POWER fitment table on the actual Amayama part page before use.
- **Verdict: report as "not found" for OEM front strut p/n this session.** Do not guess between the petrol number and the Amayama candidates.

### B4. Coil springs (front/rear) — NOT CONFIRMED (OEM)
- No genuine Nissan OEM coil spring part number located for HE12 e-POWER despite multiple searches. Aftermarket-only data found (see §E).

### B5. Strut mounts / bump stops / dust boots — NOT CONFIRMED
- No OEM numbers surfaced. Torque spec for the strut upper mount nut was found (see §D) but not a part number.

### B6. Front lower control arm / bushings — NOT CONFIRMED
- Only tangential material found: a mechanic's blog (https://ts-kk-base.net/2026/01/04/tie-rod-end-boot-replacement-for-note-e-power-he12/, fetched) covers **tie rod end boot** replacement on a HE12 e-POWER (registered Sept 2017, HR12-EM57 — grade not stated), using aftermarket Ohno Rubber DC-1536 boot + TN-5001 lock nut in place of the OEM boot (OEM boot ID given as 32.05mm, tie rod OD 32.08mm). No OEM part number given for the boot, tie rod end, or lower arm itself. Tie rod nut torque: 34.4 N·m (non-reusable nut).
- A second blog post specifically about **lower arm ball joint boot replacement** on a HE12 e-POWER (http://ornis1975.com/2024/11/03/...) could not be fetched — TLS certificate mismatch on the host. Flagging as a lead for a future session (title translates to "HE-12 Note e-POWER — ball joint boot replacement").

### B7. Rear torsion beam bushings — likely not separately serviceable via OEM; aftermarket workaround documented
- Fetched a minkara post (https://minkara.carview.co.jp/userid/2333151/car/2133321/7685995/note.aspx) about torsion beam bushing replacement — **but the car in that post is a petrol E12 (7 years old, 140,000km), not confirmed HE12.** Flagging as petrol-only, informational not authoritative for e-POWER.
  - Notable technique: owner used **PowerFlex "Rear Beam Mounting Bush" (PowerFlex catalogue no. 11160)**, cross-verified by dimension against Nissan Cube (Z12) parts, since no easy standalone OEM replacement bushing was found — implies OEM sells the bushing only pressed into the beam/bracket assembly, not as a discrete serviceable part. This pattern is common for torsion-beam bushings generally and is plausible for HE12 too but **not verified for HE12 specifically this session.**
- **Verdict: report as unconfirmed/no OEM p/n for HE12; note the PowerFlex 11160 lead for aftermarket poly bushing if the site ever covers non-OEM options.**

---

## C. NISMO-brand suspension products for HE12 (verified against official NISMO sources)

### C1. NISMO "全長調整式スポーツサスペンションキット" (Full-length Adjustable Sports Suspension Kit) — genuine NISMO product, confirmed HE12 e-POWER fitment
- Source: NISMO official news release, fetched — https://www.nismo.co.jp/news_list/2020/news_flash/20004.html
- **Explicitly compatible with: March K13 NISMO S, Note (E12/HE12) NISMO S (petrol), e-POWER NISMO, AND e-POWER NISMO S** — this is the closest thing to an "S-tune kit" NISMO currently sells for the owner's car, though NISMO does not use the "S-tune" name for it (S-tune per NISMO's own catalogue is a different, older product line sold only for Z34/Elgrand — confirmed absent for Note/HE12, see C2).
- Base: Öhlins-based damper, NISMO tuning. 20-stage damping adjustment. Full-length ride-height adjustable, approx. −30 to −10mm range (varies slightly by model).
- Price: **¥371,000 (excl. tax)**, same figure quoted across all four compatible variants in the release (no separate per-grade SKU/price breakout given in this source).
- Spring rate figures given in the release: front 49 N/mm (5.0 kgf/mm) [quoted against March in the fetched text — needs re-check whether this is March-specific or shared]; rear 58 N/mm (6.0 kgf/mm) for e-POWER variants.
- Release date: 2020-02-28. Sold/fitted via NISMO Omori Factory and NISMO Performance Center.
- **Separately, the NISMO "Factory Line" catalogue page** (https://www.nismo.co.jp/products/factory_line/sports_suspension/index.html, fetched) lists a **different-looking entry: "Note E12 NISMO S" only, part number 53110-RPE21, price ¥497,750 incl. tax (¥452,500 excl.)** — same spring rates (49/58 N/mm) and 20-stage damping as the news release, but this table does **not** list e-POWER NISMO or e-POWER NISMO S as separate rows, only "Note E12 NISMO S." It is unclear from what was fetched whether this ¥497,750 SKU covers the e-POWER cars under the "E12 NISMO S" label or is petrol-only — **the price mismatch (¥371,000 excl. tax in the 2020 news release vs. ¥452,500 excl. tax in the current Factory Line catalogue) suggests either a price increase since 2020 or genuinely two different kit tiers.** Flagging as an open question — see below.
- Confidence: **verified that NISMO sells/sold a genuine full-length adjustable coilover for the e-POWER NISMO/NISMO S** (two independent official NISMO pages agree it exists for this car); **probable/unconfirmed** on the exact current price and whether one or two part numbers apply to the e-POWER cars specifically.

### C2. NISMO "S-tune Suspension Kit" — CONFIRMED NOT AVAILABLE for Note/HE12
- Source: https://www.nismo.co.jp/products/web_catalogue/suspension/s-tune_suspension_kit.html (fetched)
- Only lists Fairlady Z34, Elgrand E52 (QR25 and VQ35). **No Note/HE12 entry exists in NISMO's actual S-tune line.** Do not conflate with C1 above — different product name/line.

### C3. NISMO Titanium Tower Bar — ambiguous HE12 fitment, likely NOT for e-POWER
- Source: NISMO parts catalogue for Note (https://www.nismo.co.jp/products/web_catalogue/model_note.html, fetched) lists "Titanium Tower Bar [for March K13, Note E12]" and a "Sports Suspension Kit" both marked "○" for "E12" and "−" for "E13" (Note's next generation, unrelated to HE12).
- The catalogue text does not distinguish petrol E12 from e-POWER HE12 within the "E12" column — genuinely ambiguous from what was fetched. Given a tower bar bridges the front strut towers/engine bay, and the e-POWER's motor/inverter packaging differs from the petrol engine bay, **do not assume fitment without checking the tower bar's actual product page** (not done this session). No part number captured.

### C4. Aftermarket NISMO-adjacent parts confirmed fitting HE12 (Cusco, official Cusco PDF fetched)
- Source: https://www.cusco.co.jp/download/file/20180423_NOTE_E-POWER_HE12_PARTS.pdf (fetched via Read tool as PDF, 3 pages)
- Fitment stated on every page: **"ノート HE12 / e-POWER / e-POWER NISMO"** — note **e-POWER NISMO S is not separately listed**, only e-POWER and e-POWER NISMO. Given §A's finding that NISMO and NISMO S share an identical suspension tune, it's reasonable to expect these fit NISMO S too, but this is inference, not stated on the Cusco document.
- **Front solid stabilizer (sway bar), 22mm, p/n 2A1 311 A22, ¥25,000 (excl. tax), JAN 4996338062321.** Footnote: "純正比はe-POWERのもの。e-POWER NISMOは純正比135%" — i.e. this bar is 185% the rate of base e-POWER's stock front bar, but only 135% the rate of the **already-uprated** NISMO stock front bar — direct aftermarket-side corroboration of Nissan's own "フロント強化" (front reinforced) spec note in §A.
- **Rear add-on stabilizer bar, solid 16mm, p/n 2A1 311 B16, ¥18,000, JAN 4996338062338.**
- **Front strut brace (oval alloy, "type OS"), p/n 278 540 A, ¥15,000, JAN 4996338278098.**
- **Power Brace (chassis stiffening bars) — front-member-front p/n 278 492 FMF ¥14,000; front-member-rear p/n 278 492 FMR ¥19,000; rear p/n 278 492 R ¥25,000.** Footnote: "NISMOは純正バー部と交換" — on NISMO-grade cars these bolt-in in place of the factory-fitted reinforcement bar (NISMO already ships with some of these body-stiffening bars stock, consistent with the "NISMO専用ボディ補強" line items on the official Nissan spec sheet in the tires-nismo.md research).
- **Folding tow hook, p/n 278 017 F, ¥9,800, JAN 4996338103703.**
- **Cusco "Street Zero" coilover kit, p/n 278 62P CBF, ¥128,000 (excl. tax).** Front: fixed damping, spring rate 6K (kgf/mm, ~59N/mm), ride-height range −45 to −15mm. Rear: 14-way adjustable damping, full-length adjustable (screw-type), spring rate 4K (kgf/mm, ~39N/mm), ride-height range −30 to −5mm.
- All prices excl. Japanese consumption tax, document dated 2018-04-23 ("第4版 2018/4月").

### C5. NISMO S-tune-adjacent: no evidence of "tower bar owners popularly fit" beyond what's above
- Additional aftermarket tower bars found for HE12 fitment during search (not NISMO-branded, price/spec not independently verified — listed for completeness only):
  - CUSCO Strut Bar Type OS — same p/n 278540A as C4 above.
  - TANABE Sustec Strut Tower Bar — p/n **NSN44**, listed for HE12 2016/11–2021/08 (search snippet only, not fetched).
  - BLITZ Strut Tower Bar — p/n **96140**, but this listing is explicitly for "NISSAN NOTE NISMO E12 HR16DE" — **that HR16DE reference is the petrol engine code, so this is likely a petrol-NISMO-only fitment; do not assume it covers HE12 e-POWER.**
  - KAWAI WORKS Front Strut Bar Type STD — p/n NS0950-FTS-00, explicitly listed "FOR NISSAN NOTE HE12 E-POWER" (https://www.blackhawkjapan.com/products/kawai-works-ns0950-fts-00, search snippet only, not fetched/verified).

---

## D. Torque specs (forum/aggregator-grade — flag accordingly)

Source: https://tightening-torque.com/noteepower-he12/ (fetched). This is a
third-party torque-spec aggregator site, not an official Nissan factory
manual — **treat as forum-grade/probable per project rule 3, not verified**,
though the 98 N·m rear shock lower bolt figure independently matches a
minkara owner's post (B1), which is modest cross-corroboration.

**Front:**
- Strut upper mount nut: 40 N·m (non-reusable)
- Spring seat/fixing nut: 45 N·m
- Strut-to-knuckle bolts: 165 N·m (non-reusable)
- Lower control arm rear mount bolt: 103 N·m
- Lower control arm front mount bolt: 89 N·m (non-reusable nut)
- Lower arm ball joint bolt: 55 N·m (non-reusable nut)
- Stabilizer link upper/lower: 39 N·m each
- Tie rod end nut: 34.4 N·m (non-reusable) — cross-checked against ts-kk-base.net (B6), matches exactly
- Driveshaft nut: 228 N·m (one-time use)
- Wheel nuts: 108 N·m

**Rear:**
- Torsion beam/axle mounting bolts: 90 N·m (non-reusable nuts)
- Rear shock lower bolt (beam connection): 98 N·m — matches minkara owner post (B1)
- Rear shock upper mount nut: 20 N·m (non-reusable)
- Rear hub spindle bolts: 55 N·m; spindle nut: 200 N·m (non-reusable)

---

## E. Aftermarket lowering springs sold for HE12 (context/pricing only, not OEM)

Espelir official parts list page (http://www.espelir.co.jp/item_search_pages/NISSAN/note_he12.html) **could not be fetched — SSL error.** Numbers below are from search-result snippets only, not independently fetched/confirmed; treat as unconfirmed:
- **ESN-3185** — explicitly listed for "ノートNISMO 1.2 e-power HE12" (i.e. e-POWER NISMO grade specifically) per an Amazon.co.jp listing title.
- **ESN-4949** — for e-POWER S/X grades, H28.11–, front down 20–25mm / rear down 15–20mm.
- **ESN-2728**, **ESN-6717** — other HE12 e-POWER fitments/model-year splits (exact grade cutoffs unclear from snippets).
- Tanabe Sustec NF210 also sold as a genuine-OEM-style coil spring option for "Note HE12 HR12-EM57" per an eBay listing (not independently verified).

## F. Trap example explicitly caught and rejected this session

A parts-reseller listing for a strut set (54302-3VA1A / 54303-3VA2A / 56210)
is titled "E12 ノート X 5HB H24年式 HR12 CVT 2WD" — this is the **petrol** Note X
grade (H24 = 2012, CVT, non-hybrid). It surfaced when searching for HE12
front strut numbers and was excluded — flagged here so it doesn't get
mistakenly reused as an HE12 e-POWER number in a future research pass.

---

## Open questions / gaps for a future pass

1. **No confirmed OEM part number for the front strut/shock assembly, coil
   springs (front or rear), strut mounts, or bump stops on HE12 e-POWER** —
   the biggest gap. Amayama part pages (E4302-1A11E, E4302-1V10A) are
   candidates but need browser verification (WebFetch 403s Amayama) against
   the actual HE12 e-POWER fitment table on their part pages.
2. **Rear shock E6210-A16E — grade not confirmed.** Need a source that
   states explicitly whether this is the standard e-POWER number, or
   whether NISMO/NISMO S use a different number (plausible given §A's
   "NISMO専用サスペンション" finding, though that Nissan sheet only calls out
   the *stabilizer* as different, not explicitly the dampers — the "dedicated
   suspension" line could mean spring/damper tuning only, bar only, or both;
   not disambiguated this session).
3. **Front lower control arm bushing and ball joint OEM part numbers** —
   not found. The ornis1975.com blog post (ball joint boot replacement,
   HE12-specific) could not be fetched due to a TLS cert mismatch on that
   host; worth retrying with a different fetch method/browser.
2. **Rear torsion beam bushing OEM part number for HE12** — not found; only
   a petrol-E12 minkara post using PowerFlex aftermarket bushings was located.
5. **NISMO Full-Length Adjustable Sports Suspension Kit — price/SKU
   reconciliation.** Two official NISMO sources give different prices
   (¥371,000 excl. tax in the 2020 news release vs. ¥452,500 excl. tax on
   the current Factory Line catalogue page) and the current catalogue page
   only labels the row "Note E12 NISMO S" without an explicit e-POWER NISMO
   S line — worth a follow-up NISMO dealer/catalogue check before quoting a
   price on the site.
3. **Titanium Tower Bar and several third-party tower bars (BLITZ 96140
   especially)** — fitment ambiguous or explicitly petrol (HR16DE) in one
   case; don't publish as HE12-fitting without further checking.
4. Espelir's own catalogue page couldn't be fetched (SSL error) — the down-sus
   part numbers above are search-snippet-only and should be re-verified
   directly from espelir.co.jp before publishing.
9. Confirm whether NISMO/NISMO S front stabilizer bar has its own distinct
   OEM part number vs. standard e-POWER grades (Nissan's own document
   confirms the *spec* differs — "フロント強化" — but no OEM p/n for either
   bar was located this session).
