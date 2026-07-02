# Research Closure Sweep — Note e-POWER HE12
Session date: 2026-07-02. WebSearch + WebFetch only, no browser tools. Targeted digging against 10 previously-open items from research-brakes.md, research-electrics-wipers.md, research-fluids-filters.md, research-plugs-coolant-belt.md.

---

## 1. Genuine front brake rotor part number (40206-xxxx family)

**Found:** Two candidate genuine numbers surfaced via search:
- `40206-EG000` — **fetched directly** (nissanpartsdeal.com/parts/nissan-rotor-disc-brak~40206-eg000.html). Fitment list explicitly: 2005-2008 Nissan 350Z, 2009-2012 Nissan 370Z, 2004-2007/2011-2014 Nissan Murano (VQ35DE/VQ35HR/VQ37VHR engines). **No mention of Note/E12/HE12 anywhere.** This is the WRONG rotor — ruled out.
- `40206-3U80A` / `40206-3U800` — appeared only in aftermarket-retailer search snippets (autoparts-sunrise.com) as a cross-reference claim for "Note E12", never independently confirmed via a directly-fetched page with full context.

Checked the Dixcel side (their PD3212111/SD3212111/3212111 rotor is the one confirmed via Amazon/Yahoo listings to fit "ノート E12/NE12/HE12/SNE12, NISMO/NISMO S含む" — already established in prior research):
- Fetched a KTS-web Dixcel product page directly — **no genuine Nissan OEM cross-reference number listed** on the product page (only Dixcel's own part number 3212111 and JAN code).
- Attempted to fetch Dixcel's official Nissan price-list PDF (dixcel.co.jp/pdf/kpkdks/nissan.pdf) — downloaded but is binary/font-encoded, unreadable by the fetch tool; could not extract the OEM cross-reference column.

**URLs fetched:**
- https://www.nissanpartsdeal.com/parts/nissan-rotor-disc-brak~40206-eg000.html
- https://shop.kts-web.com/products/pd3212111-qq-e-858k
- https://www.dixcel.co.jp/pdf/kpkdks/nissan.pdf (fetched but unreadable)

**Confidence:** Unconfirmed. 40206-EG000 actively ruled out as wrong-vehicle. No new positive confirmation for a genuine HE12 front rotor number.

**Verdict: STILL OPEN** (one candidate eliminated, no replacement found — net progress but not closed)

---

## 2. Passenger-side and rear genuine wiper part numbers

**Found:** A WebSearch synthesis surfaced `28895-3VA0E` as "ノート用『フロント』ワイパーラバーのみ... DAA-HE12" (front wiper **refill rubber**, not the whole blade assembly) — but this could not be corroborated by a direct page fetch; melobong.com/note8 (fetched directly) discusses only blade *lengths* (650/300/305mm) and explicitly does NOT give OEM part numbers. Nissan's own FAQ page (fetched directly) likewise only gives lengths, no part numbers.

No `28895-xxxx` (passenger blade) or `28790-xxxx` (rear blade) genuine number was found and confirmed via a directly-fetched page with full context this session — the one number found (28895-3VA0E) is unconfirmed (came from an AI-search-synthesis snippet, not a page I fetched and read myself), and it's also ambiguous whether "3VA0E" is a refill or a full blade.

**URLs fetched:**
- https://melobong.com/note8/ (sizes only, no part numbers)
- https://faq2.nissan.co.jp/faq/show/13810?category_id=67&site_domain=default (sizes only: driver 650mm / passenger 300mm / rear 305mm — official Nissan confirmation of sizes)

**Confidence:** Unconfirmed for passenger/rear numbers.

**Verdict: STILL OPEN**

---

## 3. Official brake fluid change interval

**Found:** Fetched the official Nissan JP FAQ page directly — this is the authoritative page covering "ミッションオイル・ブレーキフルード・冷却水(LLC)・ギヤボックスオイルの交換量・種類" for Note E12/HE12 (2012/09–2020/11). It explicitly states capacities/types but **for change timing says only**: "※油脂類の交換時期についてはメンテナンスノートをご確認ください" (for fluid change intervals, please refer to the physical Maintenance Note booklet). **Nissan does not publish the brake fluid interval on this public FAQ page** — it's gated behind the paper maintenance booklet that ships with the car.

This is a meaningful negative result: confirms no public official source exists online; the "2 years / with shaken" figure remains a widely-repeated industry convention (multiple Japanese consumer/shop blogs, not Nissan-specific), not an HE12-specific Nissan-published figure.

**URL fetched:** https://faq2.nissan.co.jp/faq/show/13789?category_id=628&site_domain=default

**Confidence:** Confirmed-negative (verified there is no public official interval; convention-only remains unverified).

**Verdict: CLOSED (as "no official public source exists" — convention figure stands unconfirmed)**

---

## 4. Parking brake adjustment spec

**Found:** Fetched a minkara owner DIY log directly (E12, same lever/cable/drum architecture as HE12). Details:
- Adjuster: a nut accessible through an opening at the base of the parking-brake lever inside the center console.
- Tool: 10mm (deep socket/wrench) per the post.
- Spec cited by the author: "the manufacturer specifies 11–12 notches (clicks) of lever travel as the standard."
- Warning: over-tightening causes drum drag/heat buildup and reduces effectiveness; author explicitly disclaims this as not an officially recommended DIY procedure.

This is forum-grade (single source, non-HE12-labeled — it's the E12 petrol chassis, though the parking-brake/rear-drum architecture is shared per the established "two NISMO S" distinction only applying to disc-vs-drum, not to lever mechanism). Treat as probable/forum-grade, not verified against an official service manual.

**URL fetched:** https://minkara.carview.co.jp/userid/1664599/car/1906151/3587514/note.aspx

**Confidence:** Forum-grade, single source, chassis E12 not HE12-specific.

**Verdict: PARTIALLY CLOSED** (a concrete spec — 10mm adjuster nut, 11–12 click target — now exists where none did before, but flag as forum-grade/E12-not-HE12 per site rules)

---

## 5. Rear drum 43206-3HA2A vs 43206-ED300

**Found:** Fetched/searched both numbers directly:
- `43206-3HA2A` — JDM Yamato listing (fetched): fitment given only as generic "NISSAN NOTE E12", no chassis-suffix granularity, no HE12 mention.
- `43206-ED300` — Amazon page returned HTTP 500 on direct fetch (both attempts); WebSearch snippet aggregation (not a full fetch) lists an extensive cross-model fitment: AD/AD Expert, Wingroad, Cube, Cube Cubic, Tiida, Tiida Latio, Note, Bluebird Sylphy, March — chassis codes AK12, BGZ11, BK12, BNK12, BNZ11, BZ11, C11, E11, E12, G11, JC11, JY12, K12, K13, KG11, NC11, NE11, NE12, NG11, NK13, NY12, NZ12, SC11, SJC11, SNC11, SZC11, VAY12, VJY12, VY12, VZNY12, Y12, YGNZ11, YGZ11, YK12, YZ11, Z12, ZE11 — a broad shared-drum-casting story consistent with a common Nissan B-platform part, but **"HE12" is not explicitly in the list** (only bare "E12").

Also found a minkara blog (E12, 2013, fetched directly) describing a factory **countermeasure/revised drum (対策品)** replacing an earlier design due to water-ingress noise — confirms a supersession DID occur in this drum family — but the post gives no part numbers, so it doesn't resolve which of the two candidate numbers is old vs. new, or whether it's even the same supersession pair.

**URLs fetched:**
- https://jdmyamato.com/products/eg030722 (43206-3HA2A)
- https://www.amazon.co.jp/.../dp/B01LYWRKLU (43206-ED300) — HTTP 500, could not fetch directly
- https://minkara.carview.co.jp/userid/1715158/blog/31628182/ (supersession context, no numbers)

**Confidence:** Unresolved; supersession is now corroborated as a real phenomenon in this parts family, but neither number is confirmed HE12-specific nor is the old/new relationship resolved.

**Verdict: STILL OPEN**

---

## 6. Spark plug gap for 22401-ED815 / NGK cross-reference

**Found — important discrepancy surfaced.** Prior research verified (4+ sources) that genuine `22401-ED815` cross-references to **NGK Premium RX `LKAR6ARX-11P`**. This session, a WebSearch against NGK's own vehicle-fitment search tool returned a snippet claiming 22401-ED815 corresponds to NGK **`LZKAR6AP-11`** (stock #6643) for a "**VZNY12, HR16DE 1.6L, from 2021/5**" vehicle — that is a **different chassis and different engine** (VZNY12/HR16DE looks like an AD Expert/Y12-family vehicle, not the e-POWER HE12/HR12DE). This is almost certainly a search-result mismatch/conflation, not a real second cross-reference for our car — flagging it explicitly so it isn't mistaken for a genuine finding. **Reaffirm LKAR6ARX-11P as the correct cross-reference per prior verified research; treat "LZKAR6AP-11" as spurious/wrong-vehicle.**

On the gap value itself: fetched NGK's own Premium RX product page directly — **it does not list electrode gap (プラグギャップ) figures at all**, only thread/hex/heat-range/terminal-type columns. No NGK JP primary source with the gap value was found. The 1.0–1.1mm figure remains sourced only to the non-JP Autodoc listing found previously; this session's Autodoc search did not surface an explicit gap figure either (just confirmed Autodoc lists a "Note E12 1.2 Hybrid e-Power ... HR12DE 2016-2026" spark plug fitment page, but the gap number wasn't extracted from a snippet this session).

**URLs fetched/searched:**
- https://www.ngk-sparkplugs.jp/ngk/sparkplugs/products/rx/ (fetched, no gap data)
- NGK vehicle-fitment search result snippet for 22401-ED815 (search only, not fetched — the VZNY12/HR16DE mismatch)
- https://www.autodoc.co.uk/car-parts/spark-plug-10251/nissan/note/note-e12/138404-1-2-hybrid-e-power (identified, not fetched for gap detail)

**Confidence:** Unconfirmed; new conflicting data point found and flagged as likely spurious.

**Verdict: STILL OPEN** (with an explicit warning about the LZKAR6AP-11 red herring)

---

## 7. Coolant concentrate KQ301-34102

**Found:** Now corroborated across multiple independent retailer listings, all consistent: Rakuten (n2factory), Yahoo Shopping (n2factory), Yahoo Shopping (t-joy), Yahoo Shopping (CarParts TSC), Yodobashi.com, ponparemall, and motorz-garage — all listing the same product: "日産（NISSAN）PITWORK スーパーロングライフクーラント S-LLC 原液補充用 2L（青/ブルー）KQ301-34102". This meets the "2+ independent sources" bar for verified.

**URLs found (search-confirmed, consistent across retailers):**
- https://item.rakuten.co.jp/auc-n2factory/kq301-34102/
- https://store.shopping.yahoo.co.jp/n2factory/kq301-34102.html
- https://store.shopping.yahoo.co.jp/t-joy/pitwork-kq301-34102.html
- https://www.yodobashi.com/product/100000001008335920/

Note: direct WebFetch of the Rakuten page itself returned only a placeholder/reference-number stub (JS shell), so the confirmation rests on the WebSearch snippet aggregation across the above listings rather than one clean full-page fetch — but the number/name/capacity/color are identically repeated across 5+ independent retailer titles, which is strong corroboration.

**Confidence:** Verified (multiple independent, consistent listings).

**Verdict: CLOSED**

---

## 8. Coolant reservoir capacities — which circuit is which

**Found — fully resolved.** Fetched the official Nissan JP FAQ page directly (same page as item 3): for e-POWER 2WD (2018+):
- "エンジン冷却水※1 約6.78L" — footnote: "※1リザーバータンク容量(0.85L)を含みます" → **Engine coolant circuit = 6.78L total, reservoir = 0.85L**
- "インバーター冷却水※2 約4.16L" — footnote: "※2リザーバータンク容量(0.57L)を含みます" → **Inverter coolant circuit = 4.16L total, reservoir = 0.57L**

This is a single source but it is Nissan's own official FAQ page — treat as verified per the "genuine catalogue/manufacturer source" bar.

**URL fetched:** https://faq2.nissan.co.jp/faq/show/13789?category_id=628&site_domain=default

**Confidence:** Verified (official Nissan primary source).

**Verdict: CLOSED**

---

## 9. Fuse box layout

**Found:** Fetched the same minkara owner post referenced in the prior research (single source, but read in full this time) directly:
- **4 physical fuse box locations** total on e-POWER Note, though the owner's manual documents only 2:
  1. Front engine bay — jump-start terminal area + six 10A Micro2-type fuses.
  2. A "hidden" box under a bento-box-style cover (not in the manual) — contains a **10A low-profile fuse for the stop lamp (brake light) circuit**. Owner reports that when this specific fuse blows, **regenerative braking also stops working** — confirms and sharpens the previously-noted quirk.
  3. Interior dash-area box (documented in the owner's manual; accessed via passenger-side dash cover per a separate search snippet, not independently fetched).
  4. Rear luggage-room box, next to the 12V battery.
- Two fuse form factors used: low-profile (mini) and Micro2 (smaller, historically hard to source domestically in Japan; the post notes a supplier, "Aemon," recently began stocking them).

This remains single-source/forum-grade (same one minkara post as before), so confidence is unchanged from prior research, but the content is now more fully extracted (fuse amperages for the front-bay and hidden-box fuses specifically, confirming the brake-light/regen link with more detail).

**URL fetched:** https://minkara.carview.co.jp/userid/3459709/car/3303931/7474822/note.aspx

**Confidence:** Forum-grade, single source (unchanged).

**Verdict: PARTIALLY CLOSED** (more detail extracted; still needs a second independent source or owner's-manual scan to fully verify)

---

## 10. NISMO/NISMO S factory pad compound difference

**Found:** No new evidence. Searches for "NISMO S 純正パッド 材質" and Nissan/NISMO archive spec sheets (history.nissan.co.jp NISMO spec PDF, nismo.co.jp parts catalogue pages) returned only the already-known NISMO **accessory** S-tune pad (D1060-1HA00, aftermarket upgrade, explicitly "Note E12 全車" — not NISMO-exclusive, and not the factory-fit pad) and general NISMO spec sheets with no friction-material disclosure. No source discusses whether the NISMO/NISMO S *factory-installed* pad uses a different compound under the same shared part number.

**URLs checked (no new information):**
- https://history.nissan.co.jp/ARCHIVES/PDF/NOTE/E12/20191028/note_nismo_specsheet.pdf
- https://www.nismo.co.jp/products/web_catalogue/model_nismo_note.html

**Confidence:** No evidence either way.

**Verdict: STILL OPEN** (unchanged from prior research — genuinely unknowable from public sources found so far)

---

## Summary table

| # | Item | Verdict |
|---|------|---------|
| 1 | Front rotor OEM number | STILL OPEN (40206-EG000 ruled out as wrong vehicle) |
| 2 | Passenger/rear wiper numbers | STILL OPEN |
| 3 | Brake fluid interval | CLOSED (confirmed no public official figure exists) |
| 4 | Parking brake adjustment | PARTIALLY CLOSED (10mm nut, ~11-12 clicks, forum-grade, E12 not HE12-specific) |
| 5 | Rear drum 43206-3HA2A vs 43206-ED300 | STILL OPEN (supersession confirmed to exist in this parts family, but not resolved between these two numbers) |
| 6 | Spark plug gap | STILL OPEN (plus new red-herring cross-ref LZKAR6AP-11 flagged as likely wrong-vehicle) |
| 7 | Coolant concentrate KQ301-34102 | CLOSED (5+ independent retailer listings) |
| 8 | Reservoir capacities engine vs inverter | CLOSED (official Nissan FAQ: engine=0.85L reservoir/6.78L total; inverter=0.57L reservoir/4.16L total) |
| 9 | Fuse box layout | PARTIALLY CLOSED (fuller detail extracted, still single-source) |
| 10 | NISMO pad compound | STILL OPEN (no evidence found) |

**Net this session: 3 fully closed (3, 7, 8), 2 partially closed with usable forum-grade specs (4, 9), 5 still open (1, 2, 5, 6, 10).**
