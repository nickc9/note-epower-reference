# Brakes — JDM Nissan Note e-POWER HE12 (2016–2020), incl. e-POWER NISMO / NISMO S

## Headline conclusion: NISMO vs standard grades

**Front brakes (rotor + pad + caliper) and rear drum brakes appear to be SHARED hardware across all HE12/SNE12 e-POWER grades (S/X/Medalist/NISMO/NISMO S).** No source found describes a NISMO-specific front caliper, rotor, or pad part number that differs from standard grades. Key evidence:

- Multiple aftermarket catalogue listings for the SAME part number explicitly state fitment across the whole range **including NISMO/NISMO S**, rather than listing a separate NISMO SKU:
  - DIXCEL rotor **3212111** (PD/SD types): "ノート E12/NE12/HE12 2012/9〜 **NISMO含む**" and "...**NISMO/NISMO S含む**" (Amazon, PayPay Mall listings).
  - Pitwork-cross pad AY040-NS series / D1060-1HH00 / D1060-5WK0A: listed against chassis "HE12 SNE12" (e-POWER FF and 4WD) as one product, no NISMO split.
- NISMO's own accessory catalogue sells a single "S-tune" performance front pad (**D1060-1HA00**, ¥14,000+tax) explicitly fitted to "**Note E12 全車**" (all E12-generation Note grades) — i.e., NISMO itself treats the caliper/pad interface as identical across grades, otherwise it would need a NISMO-specific SKU.
- Rear brakes: established fact (per brief) that NISMO/NISMO S share leading-trailing drum brakes with standard grades (unlike the older E12改 petrol NISMO S, which had rear discs — correctly excluded from this research).

Confidence: **probable** (based on 1 solid catalogue source type — Dixcel/aftermarket cross-fitment listings — corroborated by the NISMO S-tune catalogue's "all grades" fitment; no official Nissan parts-catalogue diagram was directly viewed to give this "verified" status).

---

## Parts

```yaml
name_en: Front Brake Pads
name_jp: フロントブレーキパッド
system: brakes
oem_number: "AY040-NS167"
superseded_numbers: ["AY040-NS140", "AY040-NS149", "AY040-NS157", "AY040-NS161", "AY040-NS168", "AY040-NS182", "D1060-1HH00", "D1060-5WK0A", "D1060-1HA00"]
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]   # S/X/Medalist/NISMO/NISMO S — no distinct NISMO OEM number found
  years: "2016-2020"
alternatives:
  - brand: Pitwork (Nissan OEM-equivalent)
    number: "AY040-NS167"
    note: "Current Pitwork cross-ref; several older/alt Pitwork numbers (NS140/149/157/161/168/182) also cross to this fitment depending on supersession batch."
  - brand: Akebono
    number: "AN-761WK (maker ref H04006)"
    note: "Sold as 'メーカー純正採用' (OEM-supplying manufacturer) pad for HE12 1200cc e-POWER"
  - brand: NISMO (S-tune)
    number: "D1060-1HA00"
    note: "NISMO accessory-catalogue performance pad, non-asbestos, listed for 'Note E12 全車' (all E12-gen grades, not NISMO-exclusive). Allowable temp ambient–500°C. ¥14,000+tax retail."
  - brand: Dixcel
    number: "M-type / ES-type / Z-type front (exact type-specific number not confirmed by direct fetch)"
    note: "Search results indicate Dixcel M-type front pads listed for Note E12 series incl. NISMO/NISMO S, 2012/09-2020/12; exact catalogue number not independently verified — treat as unconfirmed pending direct dixcel.co.jp fitment-table fetch (site fitment search could not be reached directly in this session)."
confidence: probable
sources:
  - url: "https://store.shopping.yahoo.co.jp/autopartssunrise/ns140bp-1-01007.html"
    note: "Cross-ref list (AY040-NS140/149/157/161/167/168, D1060-1HH00/5WK0A/1HA00, AY040-NS182) explicitly fitted to chassis 'HE12 SNE12', 2016/11-2020/11, engine HR12DEEM57 (e-POWER)."
  - url: "https://www.amazon.co.jp/PIT-WORK-%E3%83%8E%E3%83%BC%E3%83%88-%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AD%E3%83%91%E3%83%83%E3%83%89%E3%83%BB%E3%82%B7%E3%83%A5%E3%83%BC-AY040-NS167/dp/B078LXN6WP"
    note: "Genuine Pitwork product listing for AY040-NS167 front pad/shoe for Note."
  - url: "https://www.nismo.co.jp/products/web_catalogue/brake/s-tune_brake_pad.html"
    note: "NISMO official parts catalogue: S-tune front pad D1060-1HA00, fits Note E12 全車 (all grades), ¥14,000 (+tax)."
  - url: "https://www.blackhawkjapan.com/products/nismo-d1060-1ha00-1"
    note: "Retailer confirmation of D1060-1HA00 as NISMO S-tune pad for Note E12."
  - url: "https://www.amazon.co.jp/%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AD%E3%83%91%E3%83%83%E3%83%89-H28-11-1200cc-%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC%E7%B4%94%E6%AD%A3%E6%8E%A1%E7%94%A8-%E3%82%A2%E3%82%B1%E3%83%9C%E3%83%8E%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AD%E3%80%90H04006%E3%80%91/dp/B0BLTPRF3F"
    note: "Akebono AN-761WK OEM-supply pad for HE12 e-POWER 1200cc from 2016/11."
price_jpy: 1750
notes: "Price shown (¥1,750) is aftermarket compatible-part pricing (2-piece front set), not genuine Nissan dealer price, which was not found. Whether NISMO/NISMO S factory-fit pad compound differs from standard-grade compound (friction material spec) while sharing the same physical pad shape/OEM number could NOT be confirmed or ruled out — flagged as open question."
```

```yaml
name_en: Front Brake Rotor (Disc)
name_jp: フロントブレーキローター（ディスク）
system: brakes
oem_number: "UNCONFIRMED — no verified Nissan D40206-series/40206-series number found via direct source fetch"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12", "E12", "NE12"]
  grades: ["all"]   # aftermarket catalogues explicitly include NISMO/NISMO S under one SKU
  years: "2016-2020"
alternatives:
  - brand: Dixcel
    number: "PD3212111 / SD3212111 (PD-type / SD-type)"
    note: "Front-only, 2-piece set. Listed for 'ノート E12/NE12/HE12/SNE12' and separately confirmed 'NISMO含む' and 'NISMO/NISMO S含む' by two independent retailer listings."
  - brand: Brembo (Prime line, EU aftermarket)
    number: "09.C543.11"
    note: "Listed for Note E12 1.2 (petrol); dimensions match Zimmermann listing independently — used here as best available spec source, NOT confirmed JDM/e-POWER specific."
  - brand: Zimmermann
    number: "(front rotor for Note E12, product page)"
    note: "Independently corroborates 260mm/22mm/20mm-min spec; page does not distinguish e-POWER/HE12/NISMO variants explicitly."
confidence: probable
sources:
  - url: "https://www.amazon.co.jp/DIXCEL-%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AD%E3%83%AD%E3%83%BC%E3%82%BF%E3%83%BC-%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88-NISMO%E5%90%AB%E3%82%80-%E5%93%81%E7%95%AA3212111/dp/B091PKHDQ8"
    note: "Title: 'DIXCEL SD ブレーキローター フロント ノート E12/NE12/HE12 2012/9～ NISMO含む 品番3212111' — confirms single rotor number spans standard + NISMO."
  - url: "https://paypaymall.yahoo.co.jp/store/yabumoto/item/sd3212111s-011/"
    note: "'ノート E12 NE12 HE12 12/09〜 NISMO/NISMO S含む' listing for DIXCEL SD3212111S, explicitly naming NISMO S."
  - url: "https://www.bremboparts.com/europe/en/catalogue/nissan-note-e12-1-2/000058980-1"
    note: "Brembo Prime 09.C543.11: outer diameter 260mm, thickness 22mm, minimum thickness 20mm, ventilated, front axle."
  - url: "https://www.zimmermann-bremsentechnik.eu/zimmermann-brake-disc-for-nissan-note-e12-front.html?language=en"
    note: "Independent corroboration: 260mm OD / 22mm thick / 20mm min thick, ventilated, 4-bolt 100mm PCD, 61mm hub bore."
price_jpy: null
notes: "260mm OD / 22mm nominal / 20mm minimum thickness is corroborated by 2 independent EU aftermarket catalogues (Brembo, Zimmermann) for the Note E12 1.2 petrol platform. Extension to HE12 e-POWER and to NISMO/NISMO S grades rests on the Dixcel/retailer cross-fitment listings (same Dixcel part number spans E12/NE12/HE12 incl. NISMO/NISMO S), not on a directly-fetched Nissan factory diagram — treat the exact dimension figures as probable-not-verified for the JDM e-POWER-specific rotor. Genuine Nissan OEM rotor part number could not be confirmed this session (search snippets surfaced unrelated numbers like 40206-3U80A that were not verified as HE12-specific via direct page fetch — discarded as unreliable)."
```

```yaml
name_en: Rear Brake Shoe (Drum)
name_jp: リアブレーキシュー（ドラム）
system: brakes
oem_number: "AY360-NS106 (Pitwork)"
superseded_numbers: ["AY360-NS089 (older Note E11-era cross, likely NOT correct for HE12 — flagged, see notes)"]
applicability:
  chassis: ["HE12", "E12", "NE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: MK Kashiyama
    number: "KN1264"
    note: "Cross-referenced to AY360-NS106/NS093/NS103/NS096 family; retailer states compatibility with Note E12/HE12 Sept 2012 - Aug 2021."
  - brand: Akebono
    number: "NN2080R (half-kit)"
    note: "Listed specifically for Note NE12 (petrol facelift); included for cross-reference, not confirmed for HE12 e-POWER specifically."
confidence: probable
sources:
  - url: "https://www.amazon.co.jp/PIT-WORK-%E3%83%8E%E3%83%BC%E3%83%88-%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AD%E3%83%91%E3%83%83%E3%83%89%E3%83%BB%E3%82%B7%E3%83%A5%E3%83%BC-AY360-NS106/dp/B078LTBN6G"
    note: "Genuine Pitwork listing: AY360-NS106 for 'Nissan Note, Mazda Familia Van' applications."
  - url: "https://www.kaisekiyado-shiori.com/ralliform1857991.html"
    note: "MK Kashiyama KN1264 rear shoe, cross-referenced against AY360-NS106/NS093/NS103/NS096; states fitment to Juke YF15 and by extension the shared Nissan B-platform drum family used on Note."
  - url: "https://store.shopping.yahoo.co.jp/carpart83/sn11681020he12.html"
    note: "Listing title explicitly: 'ブレーキシュー リア ノート E12 HE12 ドラムブレーキシュー ブレーキライニング 4枚セット' confirming HE12 drum shoe fitment (product SN1168-10/20, aftermarket lining, not Pitwork-branded)."
price_jpy: null
notes: "AY360-NS106 fitment to HE12 specifically (vs. only E12 petrol) was not confirmed via a page explicitly listing HE12 in the same breath as AY360-NS106 — the strongest direct HE12 confirmation found was for a non-Pitwork aftermarket lining kit (SN1168-10/20). Treat AY360-NS106-for-HE12 as probable, not verified. No evidence found of a NISMO/NISMO S-specific rear shoe part number — consistent with established fact that NISMO/NISMO S share standard drum rear brakes."
```

```yaml
name_en: Rear Brake Drum
name_jp: リアブレーキドラム
system: brakes
oem_number: "43206-ED300 (unconfirmed — see notes)"
superseded_numbers: []
applicability:
  chassis: ["HE12", "E12"]
  grades: ["all"]
  years: "2016-2020"
alternatives: []
confidence: unconfirmed
sources:
  - url: "https://www.amazon.co.jp/NISSAN-%E7%B4%94%E6%AD%A3%E9%83%A8%E5%93%81-%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AD-%E3%82%A2%E3%82%AF%E3%82%B9%E3%83%AB-%E5%93%81%E7%95%AA43206-ED300/dp/B01LYWRKLU"
    note: "Genuine Nissan rear axle brake drum listing; search-result snippet indicated 'applicable model codes including Note E12 and HE12' but the product page itself returned HTTP 500 and could not be directly verified in this session."
  - url: "https://jdmyamato.com/products/eg030722"
    note: "JDM parts exporter listing a genuine rear axle drum '43206-3HA2A' for 'Nissan Note E12' — a DIFFERENT part number than 43206-ED300 found elsewhere, suggesting supersession/variant confusion. Not independently resolved which one (or both) apply to HE12 e-POWER specifically."
price_jpy: null
notes: "Two different OEM drum numbers surfaced (43206-ED300 vs 43206-3HA2A) without a source that resolves supersession or grade-specific applicability for HE12. Drum friction-surface diameter estimated at approx. 203mm inner diameter (outer ~234-244mm depending on listing) per aggregated UK parts-catalogue data for 'Note E12' generally — NOT verified against a Nissan factory spec sheet and NOT confirmed HE12-specific. Treat all drum figures in this entry as unconfirmed pending a direct Nissan parts-diagram or service-manual source."
```

```yaml
name_en: Rear Wheel Cylinder
name_jp: リアホイールシリンダー
system: brakes
oem_number: "44100-3HA0B (unconfirmed — cross-ref only)"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: Seiken
    number: "130-50703"
    note: "Cross-referenced (per search-result summary, not directly page-verified) to OEM 44100-3HA0B for Note E12, common left/right."
  - brand: Miyako
    number: "WC-N500"
    note: "Rakuten listing title explicitly states fitment 'ノート HE12 平成28年11月-令和2年11月' (Nov 2016 - Nov 2020) — matches HE12 e-POWER production span exactly, but product page content could not be fetched (empty/blocked response) to verify further detail or price."
confidence: unconfirmed
sources:
  - url: "https://item.rakuten.co.jp/d-box/mbacwcn500-1-6/"
    note: "Listing title: 'ホイールシリンダー HE12 平成28年11月-令和2年11月 ミヤコ自動車 WC-N500' — page body could not be retrieved (blocked/empty), so OEM cross-ref number on this specific listing was not independently confirmed."
price_jpy: null
notes: "Genuine Nissan OEM wheel-cylinder part number not confirmed via a directly-fetched source in this session; 44100-3HA0B appears only in an unfetched search-summary and should be treated as low-confidence until verified against a parts catalogue page."
```

```yaml
name_en: Brake Fluid
name_jp: ブレーキフルード
system: brakes
oem_number: "KN100-30005 (0.5L, Nissan No.2500)"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12", "E12", "NE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: DOT4 fluid (generic)
    number: "n/a"
    note: "Not confirmed either way in this session whether Nissan explicitly permits DOT4 as a substitute for No.2500 (DOT3) on this chassis; general industry guidance is that DOT4 is backward-compatible with DOT3 systems (higher boiling point, same glycol-ether base), but no Nissan-specific statement for HE12 was found — flag as unconfirmed, do not present as official Nissan guidance."
confidence: probable
sources:
  - url: "https://www.amazon.co.jp/NISSAN-%E3%83%8B%E3%83%83%E3%82%B5%E3%83%B3-No-2500-%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AD%E3%83%95%E3%83%AB%E3%83%BC%E3%83%89-KN100-3000511/dp/B01GQ0VXOY"
    note: "Nissan genuine 'No.2500' brake fluid, DOT3 spec, 0.5L, part number KN100-30005."
  - url: "https://www.yodobashi.com/product/100000001007124233/"
    note: "Independent retailer (Yodobashi) confirms same product: 'ブレーキフルード No.2500 BF-3 DOT-3 500ml KN100-30005'."
  - url: "https://www.monotaro.com/g/01282716/"
    note: "Monotaro listing for 'ブレーキフルード No2500(DOT3) ニッサン' — confirms product exists under this designation; could not fetch page body (timeout) to extract full size/price table."
price_jpy: null
notes: "'No.2500' is Nissan's designation referring to dry boiling point ≥250°C, exceeding the DOT3 minimum of 205°C dry / 140°C wet. Part number family is KN100-30xxx (0.5L = KN100-30005; other sizes such as 1L/18L exist per search snippets, e.g. KN100-30018, but were not individually verified via direct fetch). NOTE: this KN100- prefix contradicts the brief's guessed 'KLE21-00xxx' family — no KLE21-prefixed brake fluid part number was found in any source; KLE21 appears to be an incorrect assumption and should be discarded in favor of the verified KN100- prefix."
```

```yaml
name_en: Parking Brake
name_jp: パーキングブレーキ（サイドブレーキ）
system: brakes
oem_number: "n/a (mechanical assembly, no single part number)"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives: []
confidence: probable
sources:
  - url: "https://carview.yahoo.co.jp/ncar/catalog/nissan/note/chiebukuro/detail/?qid=12278009887"
    note: "Forum Q&A discussion distinguishing first-generation Note e-POWER (HE12) mechanical lever-type parking brake from the redesigned second-generation Note (E13) electronic parking brake switch."
  - url: "https://bbs.kakaku.com/bbs/K0000920632/SortID=24777167/"
    note: "Kakaku.com owner discussion thread titled 'about electronic parking brake' for Note e-POWER — cross-checked, thread content (per search snippet) reinforces that HE12-generation retained a conventional hand lever, with electronic parking brake associated with the later model."
notes_confidence_caveat: "Neither source was directly page-fetched in full; both are search-engine-summarized. This conclusion (HE12 = mechanical lever, integrated with rear drum shoes via cable actuation, NOT electronic) is consistent with the rear-drum architecture already established for this chassis, but should be treated as probable rather than verified until a direct owner's manual excerpt is read."
price_jpy: null
notes: "Type: mechanical hand-lever parking brake, actuating the rear drum shoes (leading-trailing) via cable — standard 'drum-integrated lever' parking brake architecture consistent with rear drum service brakes. No adjustment procedure/spec (e.g., number of lever clicks, cable tension) was found from a reliable source in this session — flagged as an open item requiring a service-manual source."
```

---

## Specs & procedures

### Front rotor dimensions
- **260mm outer diameter / 22mm nominal thickness / 20mm minimum (wear-limit) thickness, ventilated design.**
  - Source 1: [Brembo Parts catalogue](https://www.bremboparts.com/europe/en/catalogue/nissan-note-e12-1-2/000058980-1) — Prime 09.C543.11, front axle.
  - Source 2: [Zimmermann Bremsentechnik](https://www.zimmermann-bremsentechnik.eu/zimmermann-brake-disc-for-nissan-note-e12-front.html?language=en) — independently corroborates identical 260/22/20mm figures, plus 4×100mm PCD, 61mm hub bore.
  - Caveat: both sources are for "Note E12" generally (catalogued against the 1.2/1.5dCi petrol/diesel EU-market variants), not JDM HE12 e-POWER specifically. Extension to HE12/NISMO relies on the Dixcel single-part-number cross-fitment evidence in the Front Rotor entry above. Confidence: **probable**.

### Front pad wear limit
- No Note/HE12-specific pad wear-limit spec was found. General Japanese consumer-advice sources cite the common **2mm remaining thickness = replace immediately** / **3mm = plan replacement** guidance, and "new pad thickness typically 7–10mm" as an industry generality — **not Nissan/Note-specific**. Source: [ug-tokyo.com](https://ug-tokyo.com/brakepad/) (general JIS-adjacent guidance, not vehicle-specific — confidence: **unconfirmed as Note-specific**, only useful as generic reference).

### Rear drum diameter
- Aggregated European parts-catalogue data (not JDM-source-verified) suggests roughly **203mm** friction-surface (inner) diameter, outer drum body varying ~234–244mm depending on listing. Source: search aggregation of UK parts retailers (autopartspro.co.uk, onlinecarparts.co.uk) — **confidence: unconfirmed**, no single authoritative page was directly fetched to pin this down, and no JDM-specific (Nissan Japan) source with this figure was found.

### Brake fluid change interval
- No official Nissan "メンテナンスノート" (maintenance note) page or PDF was successfully fetched with an explicit interval figure for Note/HE12.
- Multiple independent but non-authoritative sources (workshop blogs, minkara logs) converge on **approximately every 2 years, commonly tied to shaken (car inspection) cycles**, consistent with the general Nissan-wide pattern reported for other Nissan models (e.g., Leaf maintenance note reportedly specifies 2 years, 3 years for the first interval). Sources:
  - [nishihara-motors.com blog](https://nishihara-motors.com/blog/20230725-1475/) — workshop describing 2-year replacement practice for Note e-POWER specifically.
  - Kakaku.com Leaf owner thread (cited in aggregated search) — describes Nissan maintenance-note interval of "2 years (3 years for first change)" for a related Nissan EV/HEV model, offered here only as directional corroboration of Nissan's general fluid-interval philosophy, NOT as a direct Note/HE12 citation.
- **Confidence: unconfirmed / probable at best.** This is the weakest-sourced fact in this cluster — recommend treating "2 years" as the working assumption but flagging it as not directly sourced from an official Nissan HE12 maintenance schedule document in this research pass.

### Parking brake adjustment
- No adjustment procedure, spec value (lever travel/clicks, cable tension), or torque figure was found from a reliable source. **Unresolved** — would require a workshop/service manual (e.g., Nissan's paid technical information portal) not accessible via the search/fetch tools used in this session.

---

## Unresolved / flagged items (explicit)

1. **Genuine Nissan OEM front rotor part number** — not confirmed by direct source fetch (only Dixcel/aftermarket cross-numbers verified).
2. **Genuine Nissan OEM rear drum part number** — two conflicting candidates (43206-ED300 vs 43206-3HA2A) found, neither resolved against HE12 specifically via a directly-fetched, HE12-labeled page.
3. **Rear wheel cylinder OEM number** — only cross-ref/search-summary level evidence (44100-3HA0B via Seiken cross-ref); Miyako WC-N500 listing title matches HE12 date range exactly but page content was inaccessible to confirm the OEM number it cross-references.
4. **Whether NISMO/NISMO S friction material (pad compound) differs from standard grades while sharing the same physical pad/rotor** — genuinely unresolved; all evidence found addresses physical/dimensional fitment (same part numbers fit all grades), not friction-material specification, which Nissan/NISMO would not necessarily disclose via a shared part number if using a different compound under the same casting. Treat as an open question, not a "no difference confirmed" finding.
5. **DOT4 compatibility statement** — no explicit Nissan/HE12-specific permission or prohibition found.
6. **Official Nissan fluid-change interval document** — not directly located/fetched for HE12 Note.
7. **Parking brake adjustment spec** — not found.
8. **Dixcel exact pad-type part numbers (M/ES/Z type catalogue numbers)** — general type-level information found via search summaries, but the dixcel.co.jp fitment database itself could not be directly navigated/fetched in this session (attempts to reach product-specific dixcel.co.jp URLs did not surface a usable fitment table); only third-party retailer resale listings referencing Dixcel numbers were used.
