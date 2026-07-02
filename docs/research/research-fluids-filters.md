# Fluids & Filters Research — Nissan Note e-POWER HE12 (2018 NISMO/NISMO S)

Chassis: DAA-HE12, HR12DE 1.2L + EM57 traction motor (e-POWER series-hybrid).
All part numbers below were pulled from live web sources during this research session (July 2026). None are quoted from memory alone. Where a source could not be fetched directly (Amayama returned HTTP 403 to automated fetch on every attempt), corroborating retailer/aftermarket-maker listings were used instead and this is flagged.

---

## Service specs

### Engine oil (HR12DE-EM57, e-POWER)

- **Viscosity/grade (JDM, MY2016-2020 incl. 2018):** SAE 0W-20, API SN, ILSAC-marked. (Later cars, ~2020+, shifted to API SP "SP Strong Save X"; the 2018 car should use the SN-era spec.)
- **Nissan genuine oil product:** SN Strong Save X (SNストロングセーブ・X), chemically synthetic, 0W-20, part number **KLAN0-00204** (4L can). Meets API SN / ILSAC GF-5.
- **Capacity:**
  - Oil only: **3.2 L**
  - Oil + filter change: **3.4 L**
  (Figures agree between an AI-summarized fetch of Nissan's own FAQ page and an independent Japanese oil-data reference site — verified.)
- **Change interval:** 1 year or 15,000 km, whichever comes first — same interval for oil-only and oil+filter service, and Nissan JP does not appear to publish a different interval for e-POWER despite the engine running intermittently (the FAQ page groups e-POWER under the same E12/HE12 schedule as gasoline models). Severe-condition triggers (short trips <8 km repeatedly, mountain/dusty roads, etc.) call for more frequent checks per usual Nissan guidance, but I did not find an e-POWER-specific shortened interval.
- Note: a WebFetch AI summary of one page suggested oil could also be labeled "5W-30" for some Note variants — this conflicts with the 0W-20 figure that recurs everywhere else and is very likely a page-summarization artifact (that source was mixing HR12DDR supercharged and HR16DE NISMO-S 1.6 figures into one table). Treat the 0W-20 SN figure as the reliable one for 1.2L HR12DE-EM57.

Sources:
- https://faq2.nissan.co.jp/faq/show/13788?category_id=9&site_domain=default (Nissan JP official FAQ — oil grade/capacity/interval for E12/HE12)
- http://oildata.car.coocan.jp/oil-data/nissan-oil/note-oil.html (independent JP reference table, matches capacity figures)
- https://kurumania.tokyo/oil/nissan-oil/note-oil.html (third independent JP reference table, same 3.2/3.4 L figures)
- https://store.shopping.yahoo.co.jp/carweb2/nissan-parts000214.html and https://www.monotaro.com/g/03063752/ (genuine oil product KLAN0-00204, SN Strong Save X 0W-20)

### Drain plug torque

- **~35 N·m** (approx. 3.5 kgf·m) — cited independently by two owner DIY blogs (minkara) doing oil changes on Note e-POWER. This is consistent with Nissan's standard drain-plug torque used across many small-engine models, but I could not find it on an official Nissan service-manual page, so treat as **probable, not verified**.
- Drain washer/gasket must NOT be reused — both DIY sources explicitly note replacing it every oil change.

Sources:
- https://minkara.carview.co.jp/userid/2798104/car/2427129/4805984/note.aspx (owner DIY oil+filter change, states "締め付けトルクは約35N.m")
- https://minkara.carview.co.jp/userid/3459709/car/3303931/7966007/note.aspx (references tightening-torque.com for the car)

### Oil filter installation

- Hand-tighten until gasket contacts, then per one JP source, turn an additional 3/4 turn (270°) with a filter wrench — standard Nissan spin-on filter practice, not a torque-wrench spec. No exact N·m figure found for the filter itself; owners describe "not too tight, not too loose."

---

## Parts

```yaml
# slug: engine-oil-filter
name_en: Engine Oil Filter
name_jp: オイルエレメント / オイルフィルター
system: filters
oem_number: "15208-65F00"
superseded_numbers: ["15208-65F01", "15208-65F0A", "15208-65F0B", "15208-65F0C", "15208-65F0D", "15208-65F0E", "15208-3J400", "15208-9F600"]
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: Pitwork (Nissan genuine aftermarket brand)
    number: "AY100-NS004"
    note: "Genuine cross-reference number; explicitly listed by HKS and BLITZ product pages as the OEM equivalent for Note e-POWER HE12/SNE12 HR12DE+EM57"
  - brand: HKS
    number: "52009-AK005"
    note: "Hybrid Sports oil filter, explicitly listed for NISSAN NOTE E12/HE12 HR12DE and Serena HFC27 HR12DE-EM57 (same engine family)"
  - brand: BLITZ
    number: "18704-63 / 18704-64"
    note: "Racing Oil Filter, product explicitly titled for NISSAN NOTE e-POWER HE12 SNE12 HR12DE+EM57 (standard) and NISMO HE12 (64 variant)"
  - brand: AC Delco
    number: "PF307J"
    note: "Cross-ref listing cites genuine 15208-65F00 / 1N03-14-302 / 1N08-14-302 and AY100-NS004"
  - brand: generic/PIAA aftermarket (JDM)
    number: "OILF08 (AY100-NS004 compatible)"
    note: "Amazon.co.jp listing explicitly for 'HE12 ノート e-POWER HR12DE'"
confidence: verified
sources:
  - url: "https://www.blackhawkjapan.com (BLITZ 18704-63/64 product listings, via search snippet)"
    note: "Product titles explicitly state fitment: NISSAN NOTE e-POWER HE12 SNE12 HR12DE+EM57, and NISMO HE12 variant"
  - url: "https://www.amazon.co.jp/PITWORK... AY100-NS004 / Yahoo Shopping m0000071657"
    note: "Retailer listing explicitly: 'オイルフィルター 日産 ノート e-POWER HE12 互換 純正品番 AY100-NS004'"
  - url: "https://www.norauto.jp/c/maintenance/oilfilter/pf307j"
    note: "AC Delco cross-reference sheet ties 15208-65F00 to AY100-NS004 for Nissan/Mazda"
  - url: "https://www.nissanpartsdeal.com/parts/nissan-oil-filter~15208-65f0e.html and parts.nissanusa.com"
    note: "US-market Nissan parts stores confirm 15208-65F0E is the current superseding number for the whole 65F00/65F01/65F0A-D family across most Nissan models (USDM catalog, not JDM-specific, but confirms the family relationship)"
price_jpy: 900
notes: "Filter body dims commonly cited as ~75mm height x 70mm OD, M20xP1.5 thread. JDM retailers consistently reference 15208-65F00 (older casting) as the 'primary' number for this application with AY100-NS004 as the Pitwork/genuine cross-ref; US Nissan parts catalogs show 15208-65F0E as the latest superseding number for the same physical filter family. Could not confirm via Amayama directly (site returned HTTP 403 to all automated fetch attempts in this session) — treat the specific 15208-65F00 vs -65F0E distinction as unconfirmed, though the filter FAMILY fitment to HE12/HR12DE-EM57 is verified by 3+ independent JDM-specific sources (BLITZ, HKS, Yahoo/Pitwork retailer)."
```

```yaml
# slug: oil-drain-plug
name_en: Oil Pan Drain Plug
name_jp: ドレンプラグ / ドレンボルト
system: filters
oem_number: "11128-01M00"
superseded_numbers: ["11128-01M0B"]
applicability:
  chassis: ["HE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: PIAA
    number: "B22 (SAFETY drain plug, OEM-compatible 11128-01M00)"
    note: "Bolt size 12mm x 1.25mm, comes with washer; explicitly cross-referenced to 11128-01M00 for Nissan/Mazda/Subaru/Isuzu"
  - brand: ATS
    number: "R7A58-15 (magnetic neodymium drain bolt)"
    note: "M12 P1.25 H12; product listings target Serena HC27/HFC27 HR12DE e-POWER and March K13/NK13 HR12DE (same engine family as Note HE12); a separate Amazon listing bundles this style of magnetic drain bolt specifically with a HE12/HR12DE oil filter kit"
confidence: probable
sources:
  - url: "https://www.nissanpartsdeal.com/parts/nissan-plug-drain~11128-01m00.html"
    note: "Confirms part number, notes supersession to 11128-01M0B, and shows broad Nissan small-engine applicability (not HE12-specific — US catalog covers 200SX/240SX/Altima/etc. sharing the same bolt/thread spec)"
  - url: "https://www.amazon.co.jp/PIAA-...-B22.../dp/B00ALO2DAK"
    note: "PIAA aftermarket drain plug states genuine cross-ref 11128-01M00 for Nissan (among others)"
notes: "Bolt spec M12 x P1.25. Could not find a source that explicitly names 'HE12' + '11128-01M00' together in the same listing — confidence kept at probable rather than verified. The engine-family (HR12DE/EM57) fitment across Note/March/Serena is well established, and this drain plug/bolt spec is consistent across all of them, so risk of a wrong number is low but not zero."
```

```yaml
# slug: oil-drain-washer
name_en: Oil Drain Plug Washer/Gasket
name_jp: ドレンパッキン / ドレンワッシャー
system: filters
oem_number: "11026-01M02"
superseded_numbers: ["11026-01M00", "11026-JA00A"]
applicability:
  chassis: ["HE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: Pitwork
    number: "AY740-NS002"
    note: "Cited as cross-reference to 11026-01M02 in a JP retailer's compatibility notes"
confidence: probable
sources:
  - url: "https://www.monotaro.com/p/2942/4763/"
    note: "MonotaRO (major JP industrial/auto parts retailer) lists 11026-01M02 as 'オイルパンドレンコックG/K' for Nissan — same family as the drain plug above"
  - url: "https://item.rakuten.co.jp/dreammax/184/ and https://yabumoto1.jp/shopdetail/000000036701/"
    note: "Multiple JP retailers list 11026-01M02 as the generic Nissan drain washer, 12mm ID x 18mm OD x 3.0mm thick, since 1983-era Nissan models"
notes: "As with the drain plug, no source explicitly ties this washer p/n to 'HE12' by name — it's a very widely shared Nissan washer across decades of models, cross-referenced from the 11128-01M00 drain plug pages. Owner DIY blogs confirm the washer must be replaced every oil change but don't quote the part number."
```

```yaml
# slug: engine-air-filter
name_en: Engine Air Filter Element
name_jp: エアクリーナーエレメント / エアフィルター
system: filters
oem_number: "16546-5WK0A"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: Pitwork (genuine aftermarket)
    number: "AY120-NS067"
    note: "Genuine cross-ref number; Amazon.co.jp product explicitly titled 'PITWORK NISSAN NOTE (HE12/SNE12) Air Filter NS067'"
  - brand: MAHLE
    number: "LX5795"
    note: "Product listing explicitly states fitment to Note e-POWER HE12/SNE12, cross-refs AY120-NS067 / 16546-5WK0A; MAHLE described as OEM filter-maker product (Nissan's air filters are MAHLE-manufactured for this model)"
  - brand: AZUMI (Australia)
    number: "A22027"
    note: "Cross-refs 16546-5WK0A / AY120-NS067"
  - brand: G-PARTS (JP aftermarket)
    number: "LA-2545V"
    note: "Explicitly fits DAA-HE12 (Nov 2016 - Dec 2020), cross-refs AY120-NS067 / 16546-5WK0A"
confidence: verified
sources:
  - url: "https://www.amazon.co.jp/PITWORK-.../dp/B0CZ8QX8MB"
    note: "Product title: 'PITWORK NISSAN NOTE(HE12/SNE12) Air Filter NS067'"
  - url: "https://brettstruck.com.au/products/a2201-air-filter-nissan-azumi-filters-australia-a22027-nissan-16546-5wk0a...ay120ns067"
    note: "Independent AU retailer cross-reference confirms same 16546-5WK0A / AY120-NS067 pairing"
  - url: "aliexpress.us and onestopautogarage.co.ke and madukani.co.ke and sparesmall.co.ke listings for 16546-5WK0A"
    note: "Multiple independent international retailers all describe this part number as fitting Note E2/HE12 HYBRID HR12DE-EM57 2017-2020"
price_jpy: 1500
notes: "Element dimensions and OEM number are well corroborated across many independent listings from different countries/retailers — this is the highest-confidence part number in this research batch."
```

```yaml
# slug: cabin-air-filter
name_en: Cabin (A/C) Air Filter
name_jp: エアコンフィルター
system: filters
oem_number: "27277-1HD0A"
superseded_numbers: ["27277-1HE0E", "27277-1HD0B"]
applicability:
  chassis: ["HE12", "E12", "NE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: Pitwork (genuine, 3 grades)
    number: "AY684-NS018 (pollen-only, base)"
    note: "花粉対応タイプ — basic pollen-blocking grade"
  - brand: Pitwork
    number: "AY685-NS018 (pollen+odor+allergen)"
    note: "Mid grade with odor/allergen treatment"
  - brand: Pitwork
    number: "AY686-NS018-01 (premium)"
    note: "Premium grade — PM2.5/PM1.0 + Vitamin-C release function"
  - brand: Denso
    number: "DCC2014 (014535-2960)"
    note: "Cited in a search-engine summary as compatible; not independently confirmed by a fetched retailer page — treat this specific code as unconfirmed"
  - brand: Bosch Aeristo
    number: "AF-N11"
    note: "Cited in a search-engine summary as compatible; not independently confirmed by a fetched retailer page — treat as unconfirmed"
confidence: verified
sources:
  - url: "https://www.monotaro.com/p/6395/7592/"
    note: "MonotaRO listing: '27277-1HD0A (27277)フィルター キット、エアー' — genuine JP retailer confirms part number and 'filter kit, air' description"
  - url: "https://www.amazon.co.jp/... AUTO SPEC listing"
    note: "Amazon.co.jp listing explicitly: '適合品番 AY684-NS018 AY685-NS018 AY686-NS018 27277-1HD0A' for Note E12 series incl. NE12/HE12"
  - url: "https://www.amazon.co.jp/... PITWORK AY686-NS018-01 listing"
    note: "'ピットワーク エアコンフィルター 日産 ノート E12用 AY686-NS018-01 プレミアムタイプ'"
notes: "Task hint mentioned 'Pitwork AY68x-' series — confirmed exactly: AY684/685/686-NS018 are the three Pitwork grades (base/mid/premium) all sharing genuine cross-ref 27277-1HD0A. Denso and Bosch specific product codes above came only from an AI-summarized search result, not a page I fetched directly — flagged unconfirmed, would need direct retailer page confirmation before using them in a parts list."
```

```yaml
# slug: engine-oil-genuine
name_en: Engine Oil (Nissan Genuine, SN Strong Save X)
name_jp: エンジンオイル（日産純正 SNストロングセーブ・X）
system: fluids
oem_number: "KLAN0-00204"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["all (HR12DE-EM57 e-POWER)"]
  years: "2016-2020"
alternatives:
  - brand: Nissan Genuine (later grade)
    number: "KLAP0-00204"
    note: "SP Strong Save X 0W-20 — newer API SP-grade genuine oil, introduced after HE12's production run ended; usable as an upgrade but not the period-correct spec for a 2018 car"
confidence: probable
sources:
  - url: "https://store.shopping.yahoo.co.jp/carweb2/nissan-parts000214.html"
    note: "JP retailer: '日産純正 品番:KLAN0-00204 SNストロングセーブ・X 化学合成油 ガソリンエンジンオイル 0W-20 荷姿:4L'"
  - url: "https://www.monotaro.com/g/03063752/"
    note: "MonotaRO listing: 'KLAN0-00204 日産ガソリンオイル ストロングセーブX SN 0W-20 1箱(4L×6本) PITWORK(日産)'"
price_jpy: 3500
notes: "4L can price varies ~3000-4000 JPY depending on retailer/quantity. This is the mineral/chemically-synthetic SN-grade product; there is also a 'E Special' fully synthetic variant (KLAN6-05304 in 5W-30) which is NOT the correct viscosity for this engine — flagged so it isn't confused with the 0W-20 product."
```

---

## Notes on e-POWER-specific fluids (not deep-dived per instructions)

- **Reduction gear / "gearbox" oil (減速機オイル):** e-POWER's single-speed reduction unit was originally documented by Nissan as effectively "no scheduled replacement" in early HE12-era literature (~2016-2018). Reporting suggests this guidance shifted over time toward "replace based on condition for high-mileage/long-term-owned vehicles" by ~2020, and owner reports describe drained fluid on high-mileage cars as "considerably dark/cloudy" with reports of smoother operation after a change around 50,000+ km / 5-7 years. I did NOT find a specific Nissan JP part number or fluid spec for this fluid in this session — flagging for a possible separate research pass if the owner wants the reduction gear oil covered in depth.
- **Washer fluid:** No e-POWER-specific washer fluid spec found; Note e-POWER owner's manual has a standard washer fluid refill section (nissan.co.jp owner's manual portal), no unusual notes encountered.
- Source for the above: https://faq2.nissan.co.jp/faq/show/13788 and general search results discussing e-POWER reduction gear oil service history (no single authoritative Nissan JP page found stating current official policy — treat as unconfirmed/needs follow-up).

---

## Unresolved / needs follow-up

1. **Amayama.com blocked all automated fetches (HTTP 403)** for every part page and catalog page attempted this session, including the oil filter, air filter, and cabin filter pages. All confirmations above rely on secondary retailer/aftermarket-maker sources instead of the "best source" Amayama genuine catalogue. A follow-up session with a real browser session (the Chrome extension was not connected in this environment) could get authoritative Amayama fitment screenshots.
2. **Drain plug (11128-01M00) and drain washer (11026-01M02)** are not explicitly confirmed against "HE12" in any single source — they're inferred from the shared HR12DE/EM57 engine family and generic Nissan drain-plug compatibility databases. Confidence: probable, not verified.
2b. Note also that Note HE12 (NISMO/NISMO S specifically) applicability was not separately distinguished in any source found — all filter/fluid parts appear identical across S/X/Medalist/NISMO/NISMO S grades since they share the same HR12DE-EM57 powertrain architecture (NISMO S's engine tune affects output mapping, not physical filter/drain hardware). No source explicitly flagged a NISMO-S-specific difference for any fluid/filter part in this cluster.
3. **Denso/Bosch cabin filter codes** (DCC2014, AF-N11) came from an AI search-summary only, not a fetched page — needs direct verification before treating as reliable.
4. **Oil filter number ambiguity**: JDM retailers consistently use 15208-65F00 + AY100-NS004 as "the" number for HE12; US Nissan parts catalogs show 15208-65F0E as the current supersession of the whole 65F00/65F01/65F0A-D family. These are very likely the same physical filter under different regional catalog revisions, but I could not verify this explicitly via Amayama (blocked) — worth a follow-up if the owner needs the single "current" number for an actual parts order.
