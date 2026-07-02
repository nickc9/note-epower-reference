# Spark Plugs, Coolant & Drive Belt — Nissan Note e-POWER HE12 (2016-2020)

Chassis: DAA-HE12, HR12DE 1.2L 3-cyl generator engine + EM57 traction motor (e-POWER series-hybrid). NISMO/NISMO S share the same engine hardware (tune-only difference), so all findings below apply across grades.
All part numbers below were pulled from live web sources during this research session (July 2026). None are quoted from memory alone. WebFetch on several Rakuten/Amazon product pages returned only JS-shell content (no product data) — where that happened, the WebSearch result-snippet text (which does surface page titles/meta-description text server-side) was used instead and is flagged as such.

---

## 1. Spark plugs

### Specs & interval resolution

- **Genuine Nissan OEM number: `22401-ED815`** — confirmed by 3+ independent sources: nissanpartsdeal.com product page, 1stoemparts.com listing, and multiple Amazon.co.jp retailer listings explicitly titled "NGKプラグ 2016/10～ ノート HE12 ■エンジン：HR12DE (e-POWER)". **Verified.**
- **NGK equivalent: `LKAR6ARX-11P` (NGK stock #95674), "Premium RX" line** (ruthenium-alloy center electrode + platinum-tipped oval outer electrode — NGK's premium long-life plug, positioned above standard iridium in NGK's current lineup). Confirmed by: Amazon.co.jp listing titled "日本特殊陶業(NGK)プレミアムRXプラグ 日産 ノート 型式HE12用 LKAR6ARX-11P (95674) 3本セット", Yabumoto (プロツールショップヤブモト) shop listing titled "ノート HE12 プレミアム RXプラグ 3本 e-POWER NGK 日本特殊陶業 95674 LKAR6ARX-11P", MonoTaro product page, and a Minkara owner parts-review explicitly cross-referencing genuine 22401-ED815 to LKAR6ARX-11P. **Verified (4+ independent sources).**
  - Note: I could not reach NGK's own fitment-search tool interactively (it's a JS search form, not a fetchable static page), so NGK's own site is not among the direct sources — but the convergence of four independent retailer/owner sources on the same cross-reference is strong.
- **Quantity: 3** (3-cylinder engine) — consistent across every listing.
- **Thread/mechanical spec (NGK Premium RX line generic spec, not HE12-specific page):** M12×1.25 thread, 26.5mm reach, 14mm hex, heat rating 6, integrated terminal.
- **Gap:** Autodoc.parts/auto-doc.ie listings for Note E12/HE12 e-Power give 1.0–1.1mm — **unconfirmed against an NGK JP primary spec sheet**, flagged as probable only.
- **Torque:** ~20 N·m (some sources say 20 N·m ±10, others cite NGK's generic "1/2 turn from hand-tight" or "15–20 N·m" spec for this plug family). Owner DIY logs (minkara) consistently reference ~20 N·m or a fractional-turn method. **Probable**, not from an official Nissan torque table.
- **Price:** ~¥2,400–2,700 for a 3-plug set at retail (Rakuten/Amazon, per owner review).

### Interval conflict — RESOLVED

Nissan's own official FAQ (faq2.nissan.co.jp) draws an explicit distinction that resolves the conflict directly:
- **Conventional (non-precious-metal) plugs:** "一般のスパークプラグは、定期交換部品ではありません" — NOT a scheduled replacement item; inspected/cleaned/replaced only as needed at regular service.
- **Platinum and iridium-family plugs:** "走行距離10万km毎の定期交換部品です" — a scheduled replacement item every **100,000 km** for passenger cars (light-vehicle/kei-car intervals vary and are listed in that vehicle's maintenance notebook instead).

Since the HE12 e-POWER factory-fit plug (22401-ED815) cross-references to NGK's **Premium RX** line — a precious-metal (ruthenium + platinum) plug, i.e. squarely in the "platinum/iridium" bucket — Nissan's own FAQ logic places it on the **100,000 km** interval, not the generic 20,000 km figure. The 20,000 km figure the user found is most likely a generic/older maintenance-schedule table entry (commonly used for base/conventional-plug Nissan models, or possibly an inspection-only checkpoint rather than a replacement interval) and does not apply to the e-POWER's factory precious-metal plug.

This is corroborated by owner DIY evidence (gold-standard per the task brief):
- **Minkara log "10万キロ記念その2 プラグ交換"** (100,000km-milestone plug change, `userid/2803942/car/2447923/7086143`): owner pulled the original plugs at exactly 100,000 km as a planned "main event" of scheduled maintenance — not because of a failure. The removed plugs showed normal wear (soot/discoloration) but were explicitly described as "still sufficiently usable / no signs of severe consumption," i.e. not overdue. Replaced with NGK Premium RX LKAR6ARX-11P (matching the OE cross-reference). This owner also found the original plugs under-torqued (~5 N·m vs spec) after 5+ years — a torque-creep observation, not a wear/interval issue.
- **Minkara log by "いざいこ"** (`userid/3459709/car/3303931/12838006`): owner installed NGK Premium RX LKAR6ARX-11P at 36,000 km (3-year inspection) and again at ~90,000 km as routine preventive maintenance, explicitly cross-referencing the genuine 22401-ED815 part.
- **Minkara log by "サウ"** (`userid/384190/car/2983906/7532798`): plug changed at 49,038 km with NGK Premium RX LKAR6ARX-11P, described as routine (non-symptom-driven) maintenance.

**Conclusion: 100,000 km is the correct interval for the HE12 e-POWER's factory iridium/ruthenium-family plug. Confidence: verified** (1 official Nissan FAQ source + convergent NGK OE cross-reference + 3 independent owner DIY logs all consistent with a ~90-100k km replacement cadence with no wear-driven urgency).

```yaml
name_en: Spark Plug (HR12DE e-POWER)
name_jp: スパークプラグ
system: engine
oem_number: "22401-ED815"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: NGK
    number: "LKAR6ARX-11P"
    note: "Premium RX line, NGK stock #95674, ruthenium center electrode + platinum-tipped oval outer electrode. Explicit OE cross-reference for HE12 HR12DE e-POWER on 4+ independent retailer listings and owner parts reviews."
confidence: verified
sources:
  - url: "https://www.nissanpartsdeal.com/parts/nissan-plug-spark~22401-ed815.html"
    note: "Genuine Nissan 22401-ED815 spark plug listing"
  - url: "https://1stoemparts.com/shop/nissan-note-e-power-22401-ed815-genuine-spark-plug/"
    note: "Genuine part titled 'Nissan Note E-Power 22401-ED815 Genuine Spark Plug'"
  - url: "https://www.amazon.co.jp/dp/B07WP1M2J3"
    note: "NGK Premium RX LKAR6ARX-11P listing explicitly titled '日産 ノート 型式HE12用', 3-plug set"
  - url: "https://yabumoto1.jp/shopdetail/000000082138/"
    note: "Shop listing 'ノート HE12 プレミアム RXプラグ 3本 e-POWER NGK 日本特殊陶業 95674 LKAR6ARX-11P'"
  - url: "https://www.monotaro.com/p/7403/5824/"
    note: "MonoTaro LKAR6ARX-11P product page with mechanical specs (M12x1.25, 26.5mm reach, 14mm hex, heat rating 6)"
  - url: "https://minkara.carview.co.jp/userid/3459709/car/3303931/12838006/parts.aspx"
    note: "Owner parts review explicitly cross-referencing genuine 22401-ED815 to LKAR6ARX-11P; installed at 36,000km and ~90,000km"
  - url: "https://faq2.nissan.co.jp/faq/show/3174?category_id=63&site_domain=default"
    note: "Official Nissan FAQ: conventional plugs = inspect-as-needed (not scheduled); platinum/iridium plugs = 100,000km scheduled replacement for passenger cars"
price_jpy: 2500
notes: "Price is for a 3-plug aftermarket NGK Premium RX set at retail (owner-reported, Rakuten with coupon ¥2,400); genuine Nissan 22401-ED815 individual unit price via nissanpartsdeal.com was $18.21 (~¥2,800) each, i.e. genuine full set would run considerably higher than the NGK aftermarket set."
```

```yaml
name_en: Spark Plug replacement interval (iridium/ruthenium OE plug)
name_jp: スパークプラグ交換時期
system: engine
oem_number: "N/A (maintenance interval, not a part)"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives: []
confidence: verified
sources:
  - url: "https://faq2.nissan.co.jp/faq/show/3174?category_id=63&site_domain=default"
    note: "Official Nissan distinction: conventional plugs not scheduled; platinum/iridium plugs = 100,000km for passenger cars"
  - url: "https://minkara.carview.co.jp/userid/2803942/car/2447923/7086143/note.aspx"
    note: "Owner pulled OE-equivalent plug at 100,000km as scheduled milestone maintenance; plug still in usable condition (not overdue)"
price_jpy: 0
notes: "100,000 km is the applicable interval for the factory precious-metal plug on HE12 e-POWER. The commonly-cited 20,000km figure applies to generic/conventional-plug Nissan maintenance-schedule tables, not to this vehicle's factory iridium/ruthenium plug."
```

---

## 2. Coolant

### Genuine Nissan Super Long Life Coolant (S-LLC) part numbers

- **Pre-mixed (50% diluted, ready-to-use), 2L eco-pack, blue: `KQ301-34002`** — confirmed via Amazon.co.jp product listing title "NISSAN(ニッサン)日産純正部品スパーク..." (note: cross-checked against a second independent retailer, Rakuten shop "n2factory" listing the identical part number under the same product name) and PITWORK branding. Composition per Amazon listing: ethylene glycol 45-50%, anti-corrosion additive package, freeze point −36°C, marked "do not dilute further" (it's sold pre-diluted). **Verified (2 independent retailer listings).**
- **Concentrate (原液), part number `KQ301-34102`** — found via a Rakuten (n2factory) product-title snippet: "日産 スーパーロングライフクーラント（S-LLC）原液". WebFetch could not pull the live page content (JS shell only), so this rests on the search-snippet title alone. **Probable, single-source — flag for direct confirmation before use.**
- US-market equivalent for reference only (NOT the JDM part number, different catalog): `999MP-L25500P` (Nissan USA "Long Life Coolant Blue," 1 gallon) — not applicable to a JDM HE12 parts order, included only to show Nissan's coolant is consistently blue/silicate-free/amine-free across markets.
- Nissan's official FAQ explicitly states: use Nissan genuine Super Long Life Coolant only; do not add commercial leak-stop additives.

### Two circuits & maintenance intervals

Per user's brief, engine circuit ≈6.78L and inverter circuit ≈4.16L were already verified prior to this task and are not re-derived here.

- The e-POWER HE12 has **two fully separate coolant circuits with separate reservoir tanks and separate piping**: one for engine cooling, one for inverter (power electronics) cooling. Multiple independent sources agree on this (minkara maintenance-info pages, repair-shop blogs). **Verified.**
- Reservoir tank capacities found in one source: **0.85L and 0.57L** for the two tanks respectively (source did not specify which tank is which) — **unconfirmed which circuit maps to which capacity figure**, treat as probable/needs cross-check.
- **Replacement interval (both circuits, per multiple minkara owner logs and consistent with Nissan's SLLC schedule):** first change at **7 years / 160,000 km**, then every **4 years / 80,000 km** thereafter. This figure recurred identically across 3+ independent owner maintenance logs. **Verified.**
- Typical dealer service cost reported by owners: SLLC 5L ≈¥7,700, labor ≈¥3,300, drain cock ≈¥715, gasket ≈¥198 (total ≈¥11,900 incl. tax) — from one specific owner's invoice; treat as illustrative, not a fixed price.

### Drain / bleed / inverter-circuit procedure

This is the weakest-evidenced part of this cluster — I could not find a detailed step-by-step owner DIY teardown of the *inverter* coolant circuit specifically (several promising-looking minkara log titles, e.g. "備忘録 エンジン及びインバーター冷却水 交換" and "スーパーロングライフクーラント初交換", turned out on fetch to be **dealer-performed services logged by the owner**, not DIY procedures — so no bleed/tooling detail was captured in the text available to WebFetch's summarizer). What could be established:

- **General engine-circuit air-bleed method** (from a Nissan-adjacent generic engine-coolant air-bleed procedure document and owner logs, not HE12-specific): set heater/AC temperature to max hot, run engine, cycle it, top up as level drops, repeat until stable — the standard "run with heater on hot, top up, repeat" bleed method used on most modern Nissan engines. No mention found of a special vacuum-fill tool being required for the *engine* circuit specifically.
- **Inverter circuit — electric water pump activation:** Confirmed the inverter circuit has its own **dedicated electric water pump** (genuine part `21581-5WZ0B`, per a Yahoo Shopping listing titled "★ノート E-POWER X HE12★インバーター ウォーター ポンプ 電動 21581-5WZ0B HR12DE"). Because this pump is electronically controlled (not belt/engine driven), refilling/bleeding this circuit plausibly requires the pump to be commanded to run via a diagnostic tool (CONSULT) to purge air pockets — this is a reasonable technical inference given the architecture, but **I found no owner log or service document that explicitly confirms a CONSULT-commanded bleed step or a vacuum-fill requirement for the inverter circuit. Flag as unconfirmed.**
- **Engine-side is ALSO electric, not mechanical:** A repair-shop blog (shiromahhacars.com, Okinawa) documenting an actual failure/replacement explicitly diagnosed "エンジン側電動ウォーターポンプ異常" (engine-side electric water pump abnormality) via scan tool, and states the replacement part is "電動タイプのウォーターポンプ...従来のベルト駆動式とは異なる" (an electric-type water pump, distinct from conventional belt-driven types). This means **both circuits use electric (not belt-driven) water pumps** — directly relevant to the belt question in section 3 below. **Verified** (this source + the Motor-Fan Tech engineering article in section 3).
- **No explicit "dealer-only" warning found.** Owner logs show most owners get inverter/engine coolant changed at the dealer, but the searches turned up no explicit statement that DIY is impossible or void-inducing — the pattern looks more like "most owners choose the dealer for convenience / because the HV inverter assembly is heavy and awkward to work around" rather than a hard lockout. One source specifically warns that **radiator/upper-core work requires care because the HV inverter sitting nearby is heavy** — a physical caution, not an electronic/procedural lockout. **Unconfirmed either way on a hard dealer-only requirement** — treat this as an open item.
- Radiator cap / reservoir **physical locations** (front-of-engine-bay layout, which tank is which) were not pinned down to a specific verified diagram in this research session — flagged as an unresolved item requiring the owner's manual diagrams or a parts-catalog exploded view.

```yaml
name_en: Super Long Life Coolant (S-LLC), premixed
name_jp: スーパーロングライフクーラント（希釈済み）
system: cooling
oem_number: "KQ301-34002"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives:
  - brand: PITWORK (Nissan genuine parts brand)
    number: "KQ301-34002"
    note: "Same part; PITWORK is Nissan's genuine-parts subsidiary brand, sold under both Nissan and PITWORK labeling"
confidence: verified
sources:
  - url: "https://www.amazon.co.jp/dp/B01CRQ3L1O"
    note: "NISSAN genuine Super Long Life Coolant, premixed, part KQ301-34002, blue, 2L eco-pack"
  - url: "https://item.rakuten.co.jp/auc-n2factory/kq301-34002/"
    note: "Independent retailer (n2factory) listing same part number, same product name/spec"
price_jpy: 1500
notes: "Applies to both engine and inverter circuits (same fluid spec used Nissan-wide for S-LLC per official FAQ guidance not to substitute); exact JDM concentrate part number KQ301-34102 found only as a single-source snippet, needs confirmation."
```

```yaml
name_en: Super Long Life Coolant (S-LLC), concentrate
name_jp: スーパーロングライフクーラント（原液）
system: cooling
oem_number: "KQ301-34102"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives: []
confidence: unconfirmed
sources:
  - url: "https://item.rakuten.co.jp/auc-n2factory/kq301-34102/"
    note: "Product title snippet only ('日産 スーパーロングライフクーラント（S-LLC）原液'); WebFetch could not retrieve live page content (JS-rendered shell), so part number/volume not independently cross-checked"
price_jpy: 0
notes: "Single-source, needs a second confirming source before treating as reliable."
```

```yaml
name_en: Inverter circuit electric water pump
name_jp: インバーター用電動ウォーターポンプ
system: cooling
oem_number: "21581-5WZ0B"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives: []
confidence: probable
sources:
  - url: "https://store.shopping.yahoo.co.jp/partsportap-2nd/a202402152.html"
    note: "Used-parts listing titled 'ノート E-POWER X HE12 インバーター ウォーター ポンプ 電動 21581-5WZ0B HR12DE'; single retailer source"
price_jpy: 0
notes: "Supplementary finding (not directly requested) — included because it's directly relevant to confirming the beltless/all-electric auxiliary architecture (see section 3). Only one source seen for this exact part number; treat as probable pending a second source."
```

---

## 3. Drive / accessory belt

### Conclusion: the HE12 e-POWER HR12DE generator engine has NO accessory drive belt at all.

This is a genuine, well-supported finding, not just an inference:

1. **Motor-Fan Tech engineering article** (car.motor-fan.jp/tech/10006143), a respected Japanese automotive-technology publication covering Nissan's HR engine family, states explicitly (as summarized/quoted from the fetched article): *"The external appearance feature of the e-POWER HR12DE is the complete absence of belt-driven auxiliary equipment"* — friction-reduction and other engineering changes are described as going further than the conventional (belt-equipped) HR12DE/HR12DDR versions specifically because the accessory belt and its drag were eliminated.
2. **Engine-side water pump is electric, not belt-driven.** A repair-shop diagnostic blog (shiromahhacars.com) documents an actual failure of the "engine-side electric water pump" (エンジン側電動ウォーターポンプ異常, diagnosed via CONSULT/scan tool) and explicitly contrasts the replacement "electric-type water pump" against "conventional belt-driven types" — i.e. this shop confirms in the course of real repair work that the HE12 e-POWER engine's own water pump is electric.
3. **Inverter-circuit water pump is also electric** (part `21581-5WZ0B`, section 2 above) — expected, since this circuit has no mechanical connection to the engine at all.
4. **No alternator** — the e-POWER architecture's generator motor (part of the EM57/traction system) handles all charging duty; there is no separate belt-driven alternator on this engine. (Consistent with the vehicle's fundamental series-hybrid architecture — the engine drives only the generator via its crankshaft coupling, not any belt-driven accessories.)
5. **A/C compressor is electric, not belt-driven.** Rebuilt/replacement A/C compressor listings for HE12/SNE12 e-POWER consistently cite genuine part `92600-5WK0B` as a self-contained electric compressor unit (multiple retailer listings: Rakuten "富士オートパーツ", fujiautoparts.com, Yahoo Shopping — all describing it as an AC compressor for e-POWER SNE12/HE12 without any belt/pulley-drive language, consistent with an electrically-driven scroll compressor as used in hybrid/EV climate systems).
6. **Contrast with the earlier, non-hybrid Note (E12, pre-e-POWER, same HR12DE engine code used in the conventional 1.2L NA gasoline Note)**: that version DOES have a conventional accessory belt — multiple retailer listings for "ファンベルト 日産 ノート 型式E12" (7PK1125, 6PK2082V+3PK800 for the supercharged HR12DDR variant, etc.) exist for the **gasoline** E12, because that version retains a belt-driven alternator/water pump/AC compressor. This is an important distinction: **the HR12DE engine *code* is shared between the conventional gasoline Note (E12) and the e-POWER generator engine (HE12), but the accessory-drive hardware is fundamentally different between the two** — the gasoline version has a belt, the e-POWER generator version does not. Searches that don't carefully filter for "HE12"/"e-POWER" will surface belt part numbers that are for the wrong (gasoline, non-hybrid) car — I made this mistake in an early search pass and want to flag it clearly here so it isn't repeated downstream.

**Confidence: verified** (1 technical/engineering article explicitly stating the beltless design + 1 independent repair-shop diagnostic confirming an electric, non-belt-driven engine-side water pump + corroborating absence of belt-driven alternator by architecture + electric A/C compressor part number). No source found anywhere describing a "ファンベルト" or "補機ベルト" part number specifically for the **HE12** chassis (as opposed to the visually-similar but mechanically distinct gasoline E12) despite direct, repeated targeted searching.

```yaml
name_en: Accessory / Drive Belt (HR12DE e-POWER)
name_jp: 補機ベルト / ファンベルト
system: engine
oem_number: "N/A — not applicable, no belt exists on this engine variant"
superseded_numbers: []
applicability:
  chassis: ["HE12", "SNE12"]
  grades: ["all"]
  years: "2016-2020"
alternatives: []
confidence: verified
sources:
  - url: "https://car.motor-fan.jp/tech/10006143"
    note: "Engineering article on Nissan HR engine family; explicitly states the e-POWER HR12DE's distinguishing external feature is complete absence of belt-driven auxiliary equipment"
  - url: "https://www.shiromahhacars.com/syuri_264.html"
    note: "Repair-shop diagnostic blog: confirms engine-side water pump on HE12 e-POWER is electric ('電動タイプのウォーターポンプ...従来のベルト駆動式とは異なる'), diagnosed via CONSULT scan tool"
  - url: "https://item.rakuten.co.jp/fujiautoparts/92600-5wk0b-01/"
    note: "Rebuilt A/C compressor for Note e-POWER SNE12/HE12, genuine part 92600-5WK0B — electric compressor, no belt/pulley drive referenced"
price_jpy: 0
notes: "FINDING, not a part to source: the HE12 e-POWER HR12DE generator engine has no accessory/drive belt of any kind. All auxiliaries (engine-circuit water pump, inverter-circuit water pump, A/C compressor) are electrically driven; there is no belt-driven alternator because the traction/generator motor handles charging. This removes 'belt inspection/replacement' as a maintenance item entirely for this specific chassis+engine combination. Caution: many retailer search results for '日産 ノート E12 ファンベルト' are for the earlier/parallel CONVENTIONAL GASOLINE Note (chassis E12, non-hybrid, same HR12DE engine code but belt-driven accessories) — these do NOT apply to the HE12 e-POWER and should be disregarded for this vehicle."
```

---

## Unresolved / needs further confirmation

1. **Coolant concentrate part number `KQ301-34102`** — single-source (search-snippet title only), needs a second confirming retailer or the Nissan parts EPC.
2. **Inverter-circuit coolant bleed procedure** — no owner DIY log with explicit step-by-step detail was found (the two most promising-looking minkara titles turned out to be dealer-serviced, logged by the owner without procedural detail). Whether a CONSULT-commanded electric water pump activation is required to purge air from the inverter circuit is a reasonable technical inference (given the pump is electronic) but is **not directly confirmed** by any source found.
3. **Whether inverter-circuit coolant work is "dealer-only"** — no explicit statement found either way; owner behavior (mostly dealer-serviced) is circumstantial, not proof of a hard requirement.
4. **Reservoir tank physical locations** (which tank/cap is engine vs. inverter, where each sits in the bay) — not pinned to a diagram in this session.
5. **Spark plug gap** for LKAR6ARX-11P — 1.0–1.1mm cited by non-JP retailer (Autodoc) only; not cross-checked against an NGK JP primary spec sheet (their fitment tool is JS-only and not fetchable with the tools available this session).
6. **Reservoir capacities 0.85L/0.57L** — found but not mapped to which circuit is which.
