# Phase 4 Research — Body & Interior Parts (HE12 e-POWER)

Research date: 2026-07-03. Tools used: WebSearch + WebFetch only (no browser tools per
instructions). Amayama part pages consistently returned **403 Forbidden** to WebFetch
(confirms the note in CLAUDE.md) — every Amayama URL I tried to fetch directly failed;
I only have Amayama data as it appears in WebSearch result *titles/snippets*, which I
have NOT treated as a verified fetched source. `nissan.epc-data.com` also 403'd/429'd
and its Note section only covers the older E11/NE11/ZE11 chassis, not E12/HE12 — no
usable JDM parts-diagram source was accessible for this task.

A general caution on method: several WebSearch calls returned an AI-generated summary
asserting a specific part number fit a specific chassis *without* a matching source
in the underlying result list. I did not trust those summaries at face value — where I
could not independently WebFetch a page containing the actual fitment text, I've
flagged the number as unconfirmed below, per the "never publish from memory/unverified
synthesis" rule.

---

## 1. Door mirrors

**Base mirror assembly (housing):** Genuine Nissan door mirror assemblies for this
generation of Note use the **96301-xxxxx** (one side) part-number family, with the
exact suffix depending on paint color, turn-signal-lamp integration, and
camera/blind-spot-monitor equipment — there is no single "the" number.

- Directly fetched and confirmed: **ecoparts.jp** listing (https://ecoparts.jp/?pid=168711316)
  for part **96301-5VA0C** — Murakami-brand OEM mirror, explicitly listed as fitting
  "ノート /E12/HE12/NE12/SNE12" (Note E12/HE12/NE12/SNE12), 12-line integrated turn
  signal, camera-equipped, Shining Blue color code, ¥6,980 (¥7,678 tax in). Note: the
  listing title says "左ドアミラー" (left mirror) but my fetch summary read the page as
  "right side" — this is likely a translation ambiguity in the fetched summary, not
  resolved; treat the L/R side as unconfirmed and check the source directly before
  ordering.
- Additional 96301-series numbers seen only in Amayama page **titles** via WebSearch
  (pages themselves 403'd, so NOT independently confirmed): 96301-5VA0B (RH, per
  Nengun Performance), 96301-9MB0A, 96301BH00C ("for Nissan Note" — no chassis
  specified), 96301WE121, 96301JD14A. These are plausible siblings in the same family
  but I could not confirm exact HE12/e-POWER fitment for any single one of them.

**Mirror covers (sold separately from the housing) — CONFIRMED:**
- Fetched directly from **NISMO's official parts catalogue**
  (https://www.nismo.co.jp/products/web_catalogue/exterior/carbon_door_mirror_cover.html):
  dry-carbon door mirror cover, part **9637S-RNE20**, listed for "Note E12
  ('14/10~) & E13" — status shown as production-discontinued (superseded by
  9637S-RNE30 for the newer E13 Note/Note Aura). An earlier pre-facelift E12 version
  was 9637S-RNZ00 (¥61,600 tax in, listed active at time of catalogue page).
- Cross-confirmed on **shop.nissan.co.jp** (fetched, product 2986): same part number
  9637S-RNE20, described as a carbon mirror cover with aerodynamic shaping, "UV-cut
  clear coat," fitting "ノート(E12) '14/10~". Neither source differentiates by grade
  (NISMO vs NISMO S vs base) or powertrain (gasoline vs e-POWER) — it's sold as a
  bolt-on cover for the whole facelifted E12/HE12/NE12/SNE12 family.
- This confirms mirror covers ARE a separate service/accessory part from the mirror
  housing assembly, as suspected — glass/lens itself (e.g., a "96365"-style lens-only
  number) was not found in this research pass.

**Confidence:** Mirror cover 9637S-RNE20 = **verified** (2 independent directly-fetched
sources, NISMO catalogue + Nissan shop, agreeing on number and generic E12/HE12
fitment). Mirror housing assembly 96301-5VA0C = **probable** (one directly-fetched
retailer source explicitly naming HE12, but it's a single retailer, and the L/R side
labeling in my fetch was ambiguous). Other 96301-series numbers = **unconfirmed**
(title-only, not independently fetched).

---

## 2. Interior/body trim clips

As anticipated, there is **no single clip number** — Nissan uses many distinct
part numbers under a shared "01553-xxxxx" (and separately "76848-xxxxx") family for
different locations (door trim panel, kick panel, liftgate trim, body-side molding
retainer, fender-liner grommets, etc.). Report below preserves that ambiguity rather
than picking one arbitrarily, per instructions.

- **Directly fetched and confirmed as Note E12-specific:** JDM Yamato listing
  (https://jdmyamato.com/products/eg027660) — part **01553-05933**, described simply
  as "clip," explicitly listed for "NISSAN NOTE E12" (JDM parts reseller; fitment not
  narrowed to a specific interior location in the listing).
- Other 01553-series numbers found via WebSearch (mostly on parts.nissanusa.com /
  Amayama titles, US-market catalog, NOT independently confirmed as Note/HE12-fitting
  — these are generic Nissan-wide clip part numbers used across many models, shown
  here only as reference for the family/format):
  01553-30001 (door trim panel clip), 01553-2DR9A (push-type retainer),
  01553-10701 (door trim panel clip), 01553-10621 (body-side molding retainer clip),
  01553-00051, 01553-10501, 01553-09791 (finisher clip), 01553-06851, 01553-09571,
  01553-10051.
- Separately, a **76848-xxxxx** family covers fender-liner/splash-shield grommets.
  One number surfaced in a Yahoo Chiebukuro (forum Q&A, forum-grade) answer:
  **76848-6P020**, described as a fender-liner-related grommet for Note E12, sold in
  packs of 16 for ¥290 — I could not independently fetch a page confirming this, so
  treat as forum-grade/unconfirmed. Amayama also lists 76848-35F00 as "Clip" (title
  only, page 403'd, chassis fitment not visible to me).

**Confidence:** 01553-05933 = **probable** (single directly-fetched JDM retailer
source explicitly naming Note E12, no second independent source). All other numbers
listed = **unconfirmed** (either generic-catalog/no-chassis-confirmation, or
forum-grade only). **Explicitly could not determine** which specific number applies to
which specific interior location (door card vs. engine bay liner vs. kick panel) for
this car — a owner should match by visual/OEM diagram lookup at point of use rather
than rely on a single number from this research.

---

## 3. Mudguards / splash guards

Genuine Nissan JDM mudguard sets for this generation of Note use the
**F38E0-xxxxx** part-number family (NOT the US-market "999J2-xxxxx" family, which is a
different regional catalog code used on Frontier/Pathfinder/Altima/370Z/Rogue etc. —
confirmed those 999J2 hits are for different vehicles entirely, not this JDM Note, and
are excluded from the JDM numbers below per the "reject wrong car" rule).

- Multiple independent retailer listings (WebSearch, snippet-level, consistent
  pattern) show F38E0 as the base number with a color-code suffix:
  F38E0-5WJ0A/1A/2A...5WJ8A/0B (Note E12/HE12-era colors — e.g. Brilliant White
  Pearl, Brilliant Silver, Super Black, etc.), and **F38E0-6XJ1C** specifically
  labeled for **Note e-POWER**, Aurora Flare Blue Pearl.
- Corroborated by an actual owner's **minkara parts review** on a Note e-POWER car
  (title: "日産(純正) マッドガード のパーツレビュー | ノート e-POWER") confirming this is a
  genuine Nissan-branded product actually fitted to an e-POWER car (forum-grade
  confirmation of real-world fitment, not a catalog fetch).
- Genuine mudguards appear to be sold as a full body-color-matched **set** (front +
  rear together under one color-coded number) in this JDM numbering scheme, unlike
  the US 999J2 scheme which splits front/rear into separate part numbers — I could not
  fully confirm whether F38E0 numbers cover 2-piece (front only) or 4-piece
  (front+rear) sets; retailer listings used the word "セット" (set) without a piece count
  breakdown I could verify.
- Official Nissan accessories page reference (title only, not fetched):
  www3.nissan.co.jp/optional-parts/vehicles/note/exterior/exterior_parts.html — likely
  the authoritative source for exact colors/prices but I did not manage to pull real
  content from it in this pass.

**Confidence:** F38E0 base family for Note/HE12 = **probable-to-verified** for the
general pattern (2+ independent retailer sources agree on format + one real owner
review on an e-POWER car), but the **exact suffix for the owner's specific paint
color** was not individually verified and must be matched to the car's paint code
before ordering. Piece-count (front-only vs. front+rear) per number = **unconfirmed**.

---

## 4. Genuine floor mats (incl. NISMO / NISMO S question)

**Directly fetched from NISMO's official parts catalogue**
(https://www.nismo.co.jp/products/web_catalogue/interior/floor_mat.html) — four Note
E12/HE12-generation floor mat SKUs, all now shown as production-discontinued:

| Part number | Fitment |
|---|---|
| 74900-RNE20 | All grades, through Nov 2016 (pre-facelift) |
| 74900-RNE21 | Nov 2016 onward, **gasoline** |
| 74900-RNE22 | Nov 2016 onward, **e-POWER** (excludes cold-climate spec and 4WD) |
| 74900-RNE23 | Nov 2016 onward, **e-POWER cold-climate spec** (excludes 4WD) |

All are 5-mat sets with "NISMO logo (current logo), red stitching." Cross-confirmed on
**shop.nissan.co.jp** product page 3698 (fetched), which lists the same
74900RNE21/74900RNE22 numbers, describes it as fitting "Note (E12) post-facelift, all
grades, excluding e-POWER cold-climate spec," and explicitly names it a **NISMO**
accessory product (aluminum NISMO logo plate), price ¥30,250.

**Answering the specific question asked:** I found **no evidence of a floor mat SKU
that is exclusive to the NISMO S grade** as factory-standard equipment. The
NISMO-logo embroidered/plated mat set is sold as a dealer-fit **accessory** available
to order for any Note E12/HE12-generation grade (differentiated only by facelift
timing, gasoline vs. e-POWER, and cold-climate spec) — not gated to NISMO S
specifically. If NISMO S actually ships with these as standard fitment from the
factory (vs. them being an orderable option like on any other grade), I could not
confirm that distinction from these two catalogue/shop pages alone.

**Confidence:** **Verified** (2 independent directly-fetched official sources —
NISMO's own catalogue and Nissan's own accessory shop — agreeing exactly on part
numbers and fitment text). The "is it NISMO-S-exclusive" question is answered
negative with reasonable confidence, but not to "verified" standard since I did not
find an explicit factory equipment/spec-sheet statement addressing standard vs.
optional fitment for NISMO S specifically.

---

## 5. Recaro seat care for NISMO S (guide-content research, not a part number)

**What the Recaro option is:** Multiple Japanese auto-media sources confirm the
Note e-POWER NISMO/NISMO S offers an optional NISMO-tuned RECARO semi-bucket sport
seat (front seats only) — directly fetched confirmations:
- car.watch.impress.co.jp (Car Watch, fetched): "NISMO専用チューンRECAROスポーツシート
  27万5000円" (NISMO-tuned RECARO sport seat, ¥275,000).
- caranddriver.co.jp (fetched): confirms the RECARO option exists and gives an
  overlapping but not identical price figure seen elsewhere in search snippets
  (¥396,000 quoted by a different secondary source, not independently fetched) — I
  could not reconcile these two price figures from directly-fetched text, so **treat
  the exact option price as uncertain / possibly varying by model year or whether it's
  quoted as a delta over standard seats vs. an all-in price**.
- car-me.jp (fetched): "レカロ(RECARO)社と共同開発をしたセミバケットタイプのスポーツシート"
  ("a semi-bucket sport seat co-developed with RECARO"), confirming it's a genuine
  RECARO collaboration, not just RECARO-badged.

**Material (fabric/leather/Alcantara) — NOT independently confirmed by direct fetch.**
I attempted to fetch the three most relevant articles (Car Watch, Car and Driver
Japan, CarMe) specifically looking for a material-composition statement, and **none
of the passages I actually pulled from those pages state the seat material**. A
WebSearch-generated summary (not a page I could independently verify) repeatedly
asserted "leather + Alcantara combination," and I did find that the standard-seat
NISMO trim and the NISMO steering wheel are documented elsewhere as
leather/Alcantara — but I could not get a primary source to state this explicitly for
the RECARO seat itself. **Flag this as unconfirmed** — do not publish "leather +
Alcantara" as a verified material claim for the Recaro seat without a better source
(a Nissan official spec PDF or brochure would be the right target for a follow-up
pass).

**Cleaning/maintenance guidance:** No Note/HE12/Recaro-specific official cleaning
guidance was found. General (non-Note-specific) Recaro/Alcantara care guidance from
generic sources (Recaro's own consumer FAQ page, and enthusiast detailing forums)
converges on: damp-cloth wipe for routine care; if deeper cleaning is needed, use a
fabric-safe cleaner made for suede/Alcantara-type material, spray onto a microfiber
cloth (not directly onto the seat), blot rather than scrub; avoid solvents, household
degreasers, silicone/oil-based products, wax, steam cleaners, and abrasive pads; no
protectant products on Alcantara; always spot-test first. This guidance is **generic
Alcantara-care best practice**, not confirmed to be Nissan- or Note-specific, and its
relevance depends on the unconfirmed material question above.

**Reupholstery / seat covers:** No specific genuine Nissan or RECARO reupholstery kit
or dedicated seat-cover product was found for this seat in this research pass. One
retailer (trial.co.jp, Osaka) sells/installs aftermarket RECARO seats for Note owners
generally, but that's an installation shop, not a reupholstery/cover product for the
factory-fitted NISMO S seat.

**Confidence:** Existence of the RECARO option and general description =
**verified** (3 independent directly-fetched sources). Exact price = **unconfirmed**
(conflicting figures, not reconciled). Material composition = **unconfirmed** (no
directly-fetched primary source found stating it). Cleaning guidance = generic,
**not Note-specific**, usability contingent on the unresolved material question.

---

## 6. Horn

Nissan's general part-numbering convention (confirmed across many models, generic —
not Note-specific) is: **25610-xxxxx = "High Note Horn"** (high tone), **25620-xxxxx =
"Low Note Horn"** (low tone) — this pattern is well-attested across dozens of
retailer listings (parts.nissanusa.com, nissanoempartscenter.com, etc.) for many
different Nissan models, so the high/low ↔ 25610/25620 split itself is reliable, but
none of those specific listings I found were for the Note.

**For the Note/HE12 specifically:** I found repeated retailer references (Yahoo
Shopping listings, title/snippet level) to a genuine part **25620-5WK0A**, labeled
"日産純正ホーン ノート" (genuine Nissan horn, Note), ¥6,160. However, **I was not able to
independently WebFetch a page containing the actual fitment text** for this number —
one attempted fetch (monotaro.com) timed out, another (a Rakuten page) returned only a
Cloudflare stub with no real content. The "-5WK0A" suffix is independently confirmed
(by a directly-fetched source, see mount section below) as the HE12/DAA-HE12
chassis-code suffix used across several other genuine parts (washer tank, hybrid
battery, generator motor, ADAS control unit, airbag cover), which makes 25620-5WK0A
*plausible* as the HE12-specific low-tone horn — but this is circumstantial pattern-
matching, not a direct confirmation of that specific number, and per the project's
rules I am **not** elevating it above "unconfirmed."

I could not find a corresponding 25610-xxxxx (high tone) number for the Note/HE12 at
all — no candidate number surfaced in any search.

**Confidence:** High/low = 25610/25610 convention = verified (generic Nissan
convention, well-attested, not Note-specific). Specific low-tone number 25620-5WK0A
for Note HE12 = **unconfirmed** (plausible by suffix-pattern inference only; no
directly-fetched fitment text obtained). High-tone counterpart = **not found**.

---

## 7. Engine mounts / motor mounts (highest-value item — largely unresolved)

This was the hardest item, as anticipated in the brief, and the results below are
**explicitly partial**.

### The "two NISMO S" trap actually encountered here
A cluster of NISMO-branded reinforced mount part numbers turned up repeatedly:
**11210-RSK30** (front, RH), **11220-RSK30** (front, LH), **11360-RSK30** (torque
rod) — marketed as a 3-piece "強化エンジンマウント" (reinforced engine mount) set for
"March (K13) NISMO S / Note (E12) NISMO S." One search result's own generated summary
explicitly stated these are for "the Nissan Note NISMO S (**excluding e-Power
versions**) model E12 with **HR16DE** engine" — i.e., these are for the **petrol**
NISMO S (manual, HR16DE), a different car from the e-POWER NISMO S per the project's
chassis rules. **I am explicitly rejecting these three numbers for e-POWER use** —
they should not appear in the e-POWER parts database, only (if at all) as a clearly-
labeled petrol-NISMO-S cross-reference/comparison note.

### What I could NOT confirm for the e-POWER powertrain
No genuine OEM part number was confirmed by direct fetch for any of: the HR12DE
generator-engine mount, the drive-motor mount, the reduction-gear/transaxle mount, or
a torque rod, specific to the e-POWER HE12 powertrain. Specifically:
- A number **"11220-5WK0A"** surfaced repeatedly in WebSearch's own generated summaries
  as a "Nissan genuine engine mount... compatible with Note DAA-HE12," but every
  attempt to independently verify this via WebFetch either failed (Cloudflare block on
  a Rakuten listing page) or returned no matching content. I am treating this as
  **not confirmed** and explicitly flagging that the repeated claim may be a search-
  engine synthesis artifact rather than a real listing — it should not be published
  without independent verification (e.g., an actual Amayama JDM parts-diagram page,
  which 403'd for me every time).
- I could not access any JDM parts-diagram source for the HE12 "ENGINE & TRANSMISSION
  MOUNTING" catalog section (Amayama JDM 403'd repeatedly; nissan.epc-data.com only
  covers the older E11/NE11/ZE11 Note chassis, not E12/HE12; nissan-europe.epc-data.com
  and the Amayama "nissan-general"/Thai-market RHD catalog cover different regional
  variants of the petrol E12, not the JDM e-POWER HE12).

### What I DID confirm (context, not mount numbers)
Directly fetched confirmation that the **"-5WK0A" suffix is Nissan's chassis-specific
code for genuine DAA-HE12 parts**, via a real fetched retailer page
(store.shopping.yahoo.co.jp/yasudasangyocarac) for washer tank **28910-5WK0A**,
explicitly listed against "ノート... DAA-HE12... HR12DE." Other parts using the same
suffix (seen at title/snippet level, not independently fetched, but consistent):
hybrid traction battery 295B0-5WK0A, generator/drive motor unit 290C0-5WK0A ("ジェネ
レーションモーター," sold by a used-parts reseller), ADAS control unit 284E7-5WK0A,
steering wheel airbag cover K8510-5WK0A. This strongly supports that if/when a genuine
e-POWER-specific mount number exists, it will very likely also carry a "-5WK0A" (or a
closely related HE12-era) suffix — useful as a search strategy for future research,
but **not itself a mount part number**.

**Bottom line for this item:** No engine mount / motor mount / reduction-gear mount
part number for the e-POWER powertrain met this project's bar for even "probable"
confidence. The petrol-NISMO-S reinforced mount numbers found are real but belong to
a different car and should be excluded or clearly flagged. This item needs a follow-up
pass with actual access to a JDM Nissan parts diagram (Amayama JDM catalog via browser,
or a dealer parts-counter lookup) — WebSearch/WebFetch alone could not get past the
403s on the one catalog source (Amayama) that would likely have this.

**Confidence:** Petrol NISMO S reinforced mount set (11210/11220/11360-RSK30) =
**verified but wrong car — explicitly do not use for e-POWER**. e-POWER-specific
mount numbers = **not found / unconfirmed**, including the "11220-5WK0A" claim, which
I am flagging as possibly unreliable search synthesis rather than a real number.

---

## Summary table

| Item | Best number found | Confidence | Caveat |
|---|---|---|---|
| Door mirror (housing) | 96301-5VA0C | Probable | Single retailer source; L/R side ambiguous in my fetch; many color/feature variants exist |
| Door mirror cover (accessory) | 9637S-RNE20 | Verified | 2 independent fetched sources (NISMO + Nissan shop); not grade-specific |
| Interior/body trim clip | 01553-05933 | Probable | Single JDM retailer source; many other clip numbers exist for other locations, not disambiguated |
| Mudguards (splash guards) | F38E0-xxxxx family (e.g. F38E0-6XJ1C for e-POWER) | Probable–Verified (pattern), suffix unconfirmed per-color | Exact color-code suffix must be matched to car's paint; front/rear piece count unclear |
| Genuine floor mats | 74900-RNE22 (e-POWER) | Verified | Not NISMO-S-exclusive; it's an accessory option across the E12/HE12 range, all now discontinued |
| Recaro NISMO S seat | N/A (no part #) | Existence verified; material/price unconfirmed | Leather+Alcantara claim NOT confirmed by direct fetch; treat as unverified |
| Horn (high/low) | 25620-5WK0A (low tone, unconfirmed) | Unconfirmed | Only the generic 25610=high/25620=low convention is verified; no confirmed Note-specific number for either |
| Engine/motor/reduction-gear mounts | None confirmed | Not found | Petrol NISMO S mount numbers (11210/11220/11360-RSK30) found but explicitly belong to the wrong car (HR16DE, not e-POWER); "11220-5WK0A" claim could not be verified and should not be trusted |
