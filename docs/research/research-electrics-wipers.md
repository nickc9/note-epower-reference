# Electrics & Wipers Research — Nissan Note e-POWER HE12 (DAA-HE12), 2016-2020, MY2018 NISMO/NISMO S

## Important grade-lineage clarification (verified)

Official Nissan spec/equipment sheets show that "NISMO" and "NISMO S" exist as **two different lineages** sharing the Note NISMO marketing name:

- **e-POWER NISMO** — chassis `DAA-HE12`, engine `HR12DE-EM57` (hybrid). This is the e-POWER hybrid NISMO.
- **e-POWER NISMO S** — chassis `DAA-HE12`, engine `HR12DE-EM57` (hybrid), a hotter-tuned e-POWER variant (more motor power, 100kW/136PS vs 80kW/109PS). This grade was **added later** — it appears in the Oct-2019 Nissan NISMO spec sheet but is **absent** from the Sept-2017 (1709) spec sheet, consistent with it being new for MY2018/2019.
- **NISMO** (petrol) — chassis `DBA-E12`, engine `HR12DDR`, CVT.
- **NISMO S** (petrol) — chassis `DBA-E12改`, engine `HR16DE` (NISMO S-specific tune), 5-speed manual.

Since the owner's car is e-POWER (HR12DE + EM57) on chassis HE12, "2018 NISMO/NISMO S" almost certainly means **e-POWER NISMO** or **e-POWER NISMO S**, both on `DAA-HE12`, base grade underneath = e-POWER X. This distinction matters for battery type (see below) and headlight equipment.

Sources:
- https://www.nissan-cdn.net/content/dam/Nissan/jp/vehicles/note/1709/pdf/note_nismo_specification.pdf (Sept 2017 sheet — only e-POWER NISMO / NISMO / NISMO S, no "e-POWER NISMO S")
- https://history.nissan.co.jp/ARCHIVES/PDF/NOTE/E12/20191028/note_nismo_specsheet.pdf (Oct 2019 sheet — four columns: e-POWER NISMO / e-POWER NISMO S / NISMO / NISMO S, with full equipment table)

---

## 1. 12V Auxiliary Battery

```yaml
name_en: 12V Auxiliary Battery (standard/wide grades — e-POWER NISMO, NISMO S, Medalist, X)
name_jp: 補機バッテリー
system: electrical
oem_number: "24410-xxxxx (exact JDM Nissan suffix not confirmed; OEM battery is Atlas-branded, stamped '24410 0542R' per one owner log — see confidence note)"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["e-POWER NISMO", "e-POWER NISMO S", "Medalist", "X", "e-POWER (non-S trims)"]
  years: "2016-2020"
alternatives:
  - brand: GS Yuasa
    number: "ECO.R ENJ-375LN2-IS"
    note: "Idling-stop (IS/EFB) type, 60Ah/20hr, 570A CCA, 242x175x190mm, 17.0kg. Sold specifically as Note e-POWER HE12 fitment by KTS online shop."
  - brand: GS Yuasa
    number: "ECO.R ENJ-375LN2 (non-IS also cited)"
    note: "Cited generically as LN2 fitment; verify IS suffix needed for idle-stop compatibility."
  - brand: Panasonic
    number: "N-370LN2/PA (Caos)"
    note: "Panasonic official fitment chart entry for e-POWER grades other than S, both standard and cold-climate spec."
  - brand: Bosch
    number: "PSIN-6C / Black EFB BLE-60-L2"
    note: "PSIN-6C used in one shop replacement (taiyakan.co.jp). BLE-60-L2 (EFB) used in a minkara DIY log, 242x175x190mm, 16.1kg — chosen deliberately for idle-stop EFB duty."
  - brand: AC Delco
    number: "PREMIUM EN LN2"
    note: "Used as replacement in a minkara log after original G&Yu LN2 battery (3yr9mo life)."
  - brand: G&Yu
    number: "ecoba-HV HV-L2 (LN2)"
    note: "Hybrid-auxiliary LN2, ~15% higher capacity than OEM, sold as direct HE12 fit."
confidence: probable
sources:
  - url: "https://faq2.nissan.co.jp/faq/show/13808?site_domain=default"
    note: "Official Nissan FAQ: e-POWER (HR12DE-EM57) standard = LN1, capacity 12-50V·Ah, for S grade only (incl. no-auto-AC S from 2016/11, S w/auto-AC from 2017/9); LN2, 12-60V·Ah for all other e-POWER configs and the 4WD (SNE13) from 2018/7."
  - url: "https://car-battery.jp/car-type-post/%E3%83%8E%E3%83%BC%E3%83%88-e-power-%E6%8E%92%E6%B0%97%E9%87%8F-1200cc/"
    note: "Confirms LN1 (208x175x190mm) for base S w/o auto A/C, LN2 (245x175x190mm) for S-and-above."
  - url: "https://www.rakuten.ne.jp/gold/hakuraishop/tk/p5/panasonic/nissan/b5500/s263d1.html"
    note: "Panasonic official fitment chart: e-POWER S = LN1, e-POWER non-S = N-370LN2/PA / LN2; SNE13 4WD e-POWER = same LN2 spec."
  - url: "https://shop.kts-web.com/products/enj-375ln2-is-qq-e-9400k"
    note: "GS Yuasa ENJ-375LN2-IS sold explicitly for Note e-POWER HE12."
  - url: "https://togoplz.hatenablog.com/entry/battery_HV"
    note: "GSYuasa ENJ-375LN2 cited as OEM-equivalent replacement; confirms trunk-floor location, LN2/EN format, hydrogen vent hose."
  - url: "https://www.taiyakan.co.jp/shop/shikatsu/recommend/1772737/"
    note: "Confirms trunk-floor location, LN2 standard / (their note) LN1 for 'Nismo S' variant — see caveat below, install/removal sequence, hydrogen vent hose critical."
  - url: "https://minkara.carview.co.jp/userid/384190/car/2983906/6921900/note.aspx"
    note: "DAA-HE12 owner replacement log; used Bosch Black EFB BLE-60-L2 (242x175x190mm, 16.1kg) confirming EFB/idle-stop-rated battery is the appropriate replacement class."
  - url: "https://minkara.carview.co.jp/userid/3459709/car/3303931/7579829/note.aspx"
    note: "DIY replacement log: prior battery was G&Yu LN2 (3yr9mo life), replaced with AC Delco Premium EN LN2; details memory-backup procedure."
price_jpy: 15000
notes: |
  IMPORTANT — grade split confirmed from 2+ sources (Nissan official FAQ + Panasonic official fitment + car-battery.jp):
  - e-POWER "S" grade (the cheapest/base e-POWER trim, NOT to be confused with "NISMO S") uses the SMALLER **LN1** battery (~50Ah class).
  - ALL other e-POWER grades (X, Medalist, e-POWER NISMO, e-POWER NISMO S per fitment charts, and 4WD SNE13) use the LARGER **LN2** battery (60Ah class).
  - One retailer page (taiyakan.co.jp) asserts "Nismo S variant uses LN1" — this conflicts with the Panasonic/GS-Yuasa/Nissan-FAQ grade split above and may be confusing "e-POWER S" with "e-POWER NISMO S". Flagged as unconfirmed/conflicting; the weight of evidence (2 independent catalog sources) favors LN2 for e-POWER NISMO/NISMO S since they are built on the higher-content X/Medalist base, not the stripped S grade.
  - The battery is a European "DIN/EN" format (LN1/LN2), NOT a Japanese JIS size — this is a key difference vs petrol E12 Note grades, which use JIS sizes (e.g. Q-85 for 1.2L petrol, 55B24L-HR for 1.6L NISMO S petrol per Nissan FAQ 13808).
  - Confirmed EFB/idling-stop-rated type is expected/recommended (GS Yuasa "-IS" suffix, Bosch "Black EFB" line) since all e-POWER Note grades have idling-stop (though e-POWER's idle-stop behaves differently — engine can restart even when parked, per NISMO spec sheet note 12).
  - Location: under the trunk/boot floor (NOT engine bay), accessed by lifting the trunk floor panel. Battery has a hydrogen-gas vent hose that MUST be reconnected after replacement (fire/explosion risk if omitted — enclosed trunk space).
  - Disconnect order: negative terminal first, then positive; reconnect positive first, then negative.
  - No CONSULT/dealer registration or reset was reported as necessary after replacement in any sourced DIY log.
  - OEM Nissan part number (24410-xxxxx exact suffix) could NOT be confirmed via Amayama/PartSouq JDM catalog lookups (blocked by 403/binary responses in this session) — only the aftermarket-equivalent numbers above are verified. One minkara reference states the factory-fit battery is Atlas-branded, stamped "24410 0542R", 12V L2 60Ah 510A(EN) with Renault-Nissan markings — unconfirmed (single forum mention).
```

```yaml
name_en: 12V Auxiliary Battery (e-POWER S base grade only)
name_jp: 補機バッテリー（e-POWER S専用）
system: electrical
oem_number: "unconfirmed"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["e-POWER S (base, non-NISMO)"]
  years: "2016-2020"
alternatives:
  - brand: GS Yuasa
    number: "ECO.R ENJ-355LN1"
    note: "Sold specifically for 'ノートe-POWER S HE12' by KTS online shop."
  - brand: Panasonic
    number: "N-50LN1/A3 or N-52LN1 (cited)"
    note: "Cited in aggregated search result as Panasonic fitment-chart entries for e-POWER S HE12; not independently confirmed by direct page fetch — treat as probable only."
  - brand: VARTA
    number: "552-400-047 (Blue Dynamic, LN1)"
    note: "Sold by retailer specifically for 'ノート [E12] 1.2i e-POWER Nismo S DAA-HE12' — NOTE: this retailer listing labels the LN1 fitment as \"Nismo S\", which conflicts with the Nissan-FAQ/Panasonic grade split above (LN1 = base S only). Likely retailer mislabeling of trim name; flagged unconfirmed."
confidence: probable
sources:
  - url: "https://faq2.nissan.co.jp/faq/show/13808?site_domain=default"
    note: "Official: LN1, 12-50V·Ah for e-POWER S grade only."
  - url: "https://shop.kts-web.com/products/enj-355ln1-qq-e-9097k"
    note: "GS Yuasa ENJ-355LN1 sold for Note e-POWER S HE12."
confidence_note: "This is NOT the owner's grade (owner has NISMO/NISMO S which use LN2 per the primary battery entry above), included for completeness/to resolve confusion in retail listings."
price_jpy: 13000
notes: "Not applicable to owner's NISMO/NISMO S car — included to document why some retailers list an LN1 battery under a confusingly similar trim name."
```

---

## 2. Key Fob (Intelligent Key) Battery

```yaml
name_en: Intelligent Key / Remote Key Battery
name_jp: インテリジェントキー電池
system: electrical
oem_number: "N/A (commodity coin cell)"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: generic
    number: "CR2025"
    note: "OEM factory-fit cell per Nissan official FAQ."
  - brand: generic
    number: "CR2032"
    note: "Physically fits and is commonly substituted by owners (slightly thicker than CR2025, but works) — confirmed by an independent owner DIY log."
confidence: verified
sources:
  - url: "https://faq2.nissan.co.jp/faq/show/6717?category_id=10&site_domain=default"
    note: "Official Nissan FAQ for Note E12/HE12 (2012/09-2020/11): battery type CR2025; positive terminal faces down; recommends dealer replacement to avoid damaging key; do not touch internal circuit/contacts."
  - url: "https://minkara.carview.co.jp/userid/3098032/car/2719541/7184561/note.aspx"
    note: "Owner DIY log for Note e-POWER: '元々CR2025が入っているが、今回は手元にあったCR2032を投入' — confirms factory cell is CR2025, and CR2032 is a workable substitute; applies to the standard mechanical/remote key fob (not a proximity-only Intelligent Key card)."
price_jpy: 100
notes: |
  - Grade note: higher HE12 grades (Medalist, e-POWER NISMO/NISMO S) come with a full proximity "Intelligent Key" (driver/passenger door + back door sensing) per the Oct-2019 NISMO equipment sheet ("インテリジェントキー（運転席・助手席・バックドア感知...）(注3)" listed as standard on e-POWER NISMO/NISMO S). Base grades may have a simpler remote-entry key. Both use the same coin-cell battery type (CR2025).
  - Replacement procedure (per Nissan FAQ): remove mechanical blade key, pry key shell apart at the seam with a cloth-wrapped flathead screwdriver, swap cell with + side down, reassemble, re-insert blade key, verify all functions.
  - Nissan explicitly recommends dealer replacement to avoid internal damage; DIY is commonly done by owners per minkara logs, in under 30 minutes.
```

---

## 3. Wiper Blades

```yaml
name_en: Front Wiper Blades (driver + passenger) and Rear Wiper Blade
name_jp: フロントワイパーブレード（運転席・助手席）／リヤワイパーブレード
system: wipers
oem_number: "28890-5WJ0A (front driver blade, cited for DBA-E12; likely shared across E12/HE12 — not independently confirmed for HE12 specifically). Genuine rear blade number not confirmed."
superseded_numbers: ["28890-3VA0D (cited as possible current replacement/superseding number for 28890-5WJ0A, unconfirmed)"]
applicability:
  chassis: ["HE12", "E12", "NE12", "SNE12"]
  grades: ["all"]
  years: "2012-2021 (2nd-gen Note platform, wiper sizes shared across E12/HE12/NE12/SNE12 including e-POWER)"
alternatives:
  - brand: PIAA
    number: "WMR650 (driver, 650mm) / WMR300 (passenger, 300mm)"
    note: "Aero/flat-blade full assemblies, explicitly listed as fitting E12/HE12/NE12/SNE12 2012.9-2021.8 including e-POWER (Amazon.co.jp product listing)."
  - brand: PIAA
    number: "SMR650 / SMR300 (refill rubber only, super silicone-coat), 呼番 111/100"
    note: "Refill-only silicone rubber inserts for OEM-style blade frames, sold as a driver+passenger pair for Note e-POWER E12/HE12."
  - brand: NWB
    number: "MB65GN (driver refill, 650mm) / MB30GN (passenger refill, 300mm) / GR41-TN30G (rear refill)"
    note: "Graphite-coated refill rubber, 10mm width front / 6mm width rear (per smartcustom.net compatible-parts listing), explicitly fits E12/HE12/NE12/SNE12 2012.9-2021.8 incl. e-POWER. NWB is the JDM OEM-grade wiper supplier."
  - brand: NWB
    number: "MB65HB / MB30HB"
    note: "Water-repellent-coat (撥水コート) version of the same refill, same fitment (E12/HE12/NE12/SNE12, from 2012.9)."
  - brand: Bosch
    number: "not captured in this session — Bosch JDM fitment-search page (bosch.co.jp) returned a search-result stub only; not independently verified"
    note: "unconfirmed"
confidence: verified
sources:
  - url: "https://faq2.nissan.co.jp/faq/show/13810?category_id=67&site_domain=default"
    note: "Official Nissan FAQ, authoritative: フロントワイパー 運転席側650mm／助手席側300mm、リヤワイパー305mm. No part numbers given."
  - url: "https://www.amazon.co.jp/-/en/dp/B0DG2NHNNK"
    note: "PIAA WMR650/WMR300 explicit fitment listing for Note E12/HE12/NE12/SNE12, 2012.9–2021.8 incl. e-POWER."
  - url: "https://www.amazon.co.jp/dp/B0FG758VMW"
    note: "NWB graphite refill MB65GN/MB30GN, explicit fitment for E12/HE12/NE12/SNE12 2012.9-2021.8 incl. e-POWER."
  - url: "https://www.norauto.jp/c/wiper/smr650-smr300-2-2"
    note: "PIAA SMR650/SMR300 refill rubber set (呼番111/100), sold for Note e-POWER E12."
  - url: "https://smartcustom.net/products/note-e12-..."
    note: "Aggregator page listing widths (10mm front, 6mm rear) and confirms 3-piece refill set (2 front + 1 rear) fits E12/HE12/NE12/SNE12 including NISMO."
  - url: "https://www.amazon.co.jp/NISSAN-.../dp/B01MQGWMKN"
    note: "Genuine Nissan front wiper blade 28890-5WJ0A, listed for Note DBA-E12; HE12-specific genuine number not separately confirmed — front wiper hardware is very likely shared across E12/HE12 given identical 650/300mm blade lengths across all sub-chassis codes, but treat OEM number as probable, not verified, for HE12 specifically."
price_jpy: 3500
notes: |
  - Blade lengths (verified via official Nissan FAQ, applies across E12/HE12/NE12/SNE12 including all e-POWER grades and NISMO — no grade-specific length difference found in any source): Driver 650mm, Passenger 300mm, Rear 305mm.
  - Refill widths: front 10mm, rear 6mm (per NWB/smartcustom compatible-parts data).
  - No NISMO-specific wiper blade differences were found in any source — NISMO/NISMO S share the same blade lengths/frames as other HE12 e-POWER grades. All grades get front intermittent wipers with mist function and heated rear window w/ timer (per Oct-2019 equipment sheet, listed under "全車標準装備").
  - Genuine Nissan OEM blade part numbers are only confirmed for the DBA-E12 (petrol) chassis in sourced listings (28890-5WJ0A); no HE12-specific genuine part number was found via direct catalog fetch in this session (Amayama catalog pages returned HTTP 403). Given identical blade lengths, it is very likely the same frame/number is used, but this is NOT independently verified for HE12 — treat as probable at best.
```

---

## 4. Bulbs / Lighting

```yaml
name_en: Headlight System (Low/High Beam) and Fog Lamp
name_jp: ヘッドランプ／フォグランプ
system: electrical
oem_number: "N/A (bulb-type entry; specific Nissan headlamp assembly part numbers not researched)"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["e-POWER NISMO / e-POWER NISMO S: LED low beam standard", "e-POWER X / e-POWER S / e-POWER Medalist and petrol NISMO/NISMO S: halogen low beam (H11) standard on non-LED-optioned trims"]
  years: "2016-2020"
alternatives: []
confidence: verified
sources:
  - url: "https://faq2.nissan.co.jp/faq/show/13814?category_id=16&site_domain=default"
    note: "Official Nissan FAQ, gives full bulb table for latest (2018-2020) LED-headlamp-equipped cars: Low beam = LED, High beam = HB3 60W (halogen), Fog = H8 35W standard / H11 55W option; and separately for halogen-headlamp cars: Low beam H11 55W, High beam HB3 60W."
  - url: "https://history.nissan.co.jp/ARCHIVES/PDF/NOTE/E12/20191028/note_nismo_specsheet.pdf"
    note: "Official equipment sheet: e-POWER NISMO and e-POWER NISMO S list 'LEDヘッドランプ（ロービーム、オートレベライザー付、プロジェクタータイプ、LEDポジションランプ付）' + 'ハイビームアシスト' + 'インテリジェント オートライトシステム' as standard equipment (blue = standard-equipment column), while petrol NISMO/NISMO S list 'ハロゲンヘッドランプ（マニュアルレベライザー付、プロジェクタータイプ）' instead. Also: NISMO専用LEDハイパーデイライト (LED daytime running light, linked to position lamp) is standard on all four NISMO variants."
  - url: "https://www.fcl-hid.com/blog/staffroom/ledhid_comparison26"
    note: "Aftermarket LED-upgrade shop comparison confirms halogen low-beam (H11) is standard on non-LED e-POWER trims, contrasted with genuine LED and upgraded-halogen options."
price_jpy: null
notes: |
  - CONFIRMED: e-POWER NISMO and e-POWER NISMO S (owner's likely grades) get LED low-beam headlights standard (projector type, auto-leveling, LED position/parking light integrated) plus high-beam assist and an automatic intelligent headlight system.
  - High beam remains halogen (HB3/9005, 60W) even on LED-low-beam cars.
  - Fog lamp: H8 35W standard, H11 55W was an upgrade option on some trims.
  - Petrol NISMO/NISMO S (DBA-E12/E12改, NOT the owner's car) use halogen low beam (H11, manual leveler) instead.
  - Medalist grade is also reported (secondary source, single-source/probable) to get LED headlights + fog lamps as standard, matching Medalist's position as top non-NISMO trim.
```

```yaml
name_en: Exterior/Interior Serviceable Bulbs (position, turn signal, brake/tail, reverse, plate, interior)
name_jp: 各種バルブ（ポジション、ウインカー、ブレーキ／テール、バックランプ、ナンバー灯、室内灯）
system: electrical
oem_number: "N/A (generic bulb types, not proprietary Nissan part numbers)"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["all — table below is for the '2018-2020 latest' LED-headlamp-equipped spec"]
  years: "2018-2020"
alternatives: []
confidence: verified
sources:
  - url: "https://faq2.nissan.co.jp/faq/show/13814?category_id=16&site_domain=default"
    note: "Official Nissan FAQ, per-position bulb table (LED-headlamp / latest 2018-2020 spec): Front turn signal = PY21W 21W; Position/clearance = LED; Tail = W5W 5W; Reverse = W16W 16W; Rear turn signal = WY21W 21W; Brake = LED; License plate = W5W 5W."
  - url: "https://shingen.jp/fit/maker3/255/3787/"
    note: "Aftermarket LED fitment-table site, cross-checks: Low beam H11 (halogen cars), High beam HB3(9005), Fog H8, Position/parking T10, Front turn S25 (single amber), Rear turn T20 (LED-compatible), Brake/tail T20 double + T10 tail-only, Reverse T16, License plate T10, Room lamp (front/mid) T10 — note this source uses generic/older bulb-shape naming (T10/T20/S25) rather than the OE-spec wattage names (PY21W/W5W/etc.) used by the Nissan official FAQ; both describe the same physical fitments under different naming conventions (T20/S25 wedge-base naming vs. PY21W/W16W European OE naming) so treat as consistent, not conflicting."
price_jpy: null
notes: |
  - Two independent sources agree on socket types even though they use different naming conventions (generic wedge-base T-numbers vs. OE PY21W/W5W/W16W/WY21W naming) — confidence: verified.
  - Position lamp and rear/high-mount brake lamp are LED from the factory on LED-headlamp-equipped cars (i.e., NISMO/NISMO S/likely Medalist); tail, reverse, front/rear turn signal, and license plate remain conventional filament bulbs (serviceable by the owner).
  - Interior/room lamp: T10-type bulb, front/middle row confirmed; rear room lamp bulb type not separately confirmed in sourced pages.
  - Owner-serviceable positions (filament bulbs, no special tools needed on most): front turn signal (PY21W), tail (W5W), reverse (W16W), rear turn signal (WY21W), license plate (W5W). Position lamp and brake lamp are LED and not simple bulb-swap serviceable on NISMO/NISMO S grades.
```

---

## 5. Horn and Fuses (light touch)

**Horn:** No specific Nissan horn part number or spec was found in this research pass; not pursued further given time constraints. If needed, check Nissan FAQ series (faq2.nissan.co.jp) under Note E12/HE12 "ホ" (horn) category, not yet queried.

**Fuses:**

```yaml
name_en: Fuse Boxes and Fuse Types
name_jp: ヒューズボックス
system: electrical
oem_number: "N/A"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives: []
confidence: unconfirmed
sources:
  - url: "https://minkara.carview.co.jp/userid/3459709/car/3303931/7474822/note.aspx"
    note: "Owner log (forum-grade, single source): identifies FOUR fuse locations total on e-POWER Note: (1) front engine compartment — includes jump-start terminals + six 10A Micro2 fuses; (2) a 'hidden' fuse box under a bento-box-style cover, containing rear tail/brake-light fuses (10A low-profile type) — noted that a blown brake-light fuse also disables regenerative braking; (3) dash-area box (documented in owner's manual); (4) rear luggage-room box near the battery (battery-related fuses). Two fuse form-factors used: low-profile (mini) and Micro2 (smaller than mini, historically hard to source in Japan)."
price_jpy: null
notes: |
  - This is single-source (one minkara post), so flagged unconfirmed/forum-grade per the task's confidence rules — worth independent verification against the owner's manual before relying on it, especially the claim of 4 physical fuse box locations (official manual apparently documents only 2).
  - Notable/actionable point if true: a blown rear brake-light fuse also kills the e-POWER regenerative braking function — worth knowing for diagnosing brake-feel changes.
  - Dash fuse box is reported to be accessible by opening the passenger door and removing a cover on the left side of the dashboard (per a separate search-result snippet, not independently fetched/verified this session).
```

---

## Specs & Procedures Summary

**Battery replacement (12V aux):**
1. Location: under trunk/boot floor panel (not engine bay).
2. Disconnect negative first, then positive. Reconnect positive first, then negative.
3. Reconnect the hydrogen-gas vent hose securely — this is safety-critical in the enclosed trunk space.
4. No CONSULT/dealer scan-tool registration reported as required.
5. Recommended: use a memory-backup device (9V or multi-cell backup clipped to the OBD/cigarette socket or directly to terminals) to preserve infotainment, clock, trip computer, and — notably — the power-window one-touch auto-up/down function.
6. If memory backup is not used, after reconnecting: cycle the driver's power window fully open then fully closed (holding switch ~3+ seconds at the top) to re-teach the anti-pinch/auto function; trip meter, average economy, drive time, and clock will reset to default.
7. Use an EFB/idling-stop-rated battery (GS Yuasa "-IS" suffix, Bosch "Black EFB" line) — standard flooded batteries are not well-suited to the frequent charge/discharge cycling of e-POWER idle-stop operation.

Sources: https://togoplz.hatenablog.com/entry/battery_HV , https://www.taiyakan.co.jp/shop/shikatsu/recommend/1772737/ , https://minkara.carview.co.jp/userid/3459709/car/3303931/7579829/note.aspx

**Key fob battery swap:**
1. Remove the mechanical emergency blade key from the back of the fob.
2. Insert a cloth-wrapped flathead screwdriver into the case seam and gently pry the two halves apart.
3. Replace with CR2025 (factory) or CR2032 (confirmed physically compatible substitute), positive side down.
4. Do not touch the internal circuit board or contacts.
5. Reassemble, reinsert blade key, test all functions (lock/unlock/back-door/engine start if push-start equipped).
6. Nissan recommends dealer service to avoid case damage; owners commonly DIY it in <30 min per minkara logs.

Source: https://faq2.nissan.co.jp/faq/show/6717?category_id=10&site_domain=default , https://minkara.carview.co.jp/userid/3098032/car/2719541/7184561/note.aspx

**Fuse box locations:** front engine bay (jump-start terminals + Micro2 fuses), a secondary "hidden" box under a bento-box cover (tail/brake fuses), dash-side box (passenger side, behind a dash cover), and a rear luggage-room box near the 12V battery. Source: single minkara post, unconfirmed — see fuse section above.

---

## Open items / unresolved

1. **Exact JDM Nissan OEM battery part number** (24410-xxxxx) for HE12 LN1 and LN2 variants — not confirmed via catalog lookup in this session (Amayama returned HTTP 403 on direct catalog pages; PartSouq required interactive session tokens not obtainable via WebFetch). Only a single unconfirmed forum mention of "Atlas 24410 0542R" was found.
2. **HE12-specific genuine wiper blade part number** — only the DBA-E12 (petrol) number 28890-5WJ0A was confirmed; HE12-specific number not independently verified (though very likely identical given shared blade lengths).
3. **Horn part number/spec** — not researched this pass.
4. **Fuse amperage list per circuit** — not obtained; only fuse box locations and form factors (low-profile, Micro2) from a single forum source.
5. **LN1-vs-LN2 conflict for "Nismo S"** — flagged in section 1; recommend the owner physically check the label on the currently-installed battery to resolve definitively before ordering a replacement.
