# Nissan Note e-POWER HE12 (2016-2020) — Tires/Wheels, NISMO Fitment, JP Maintenance Schedule

Research date: 2026-07-02. Owner's car: 2018 Note e-POWER NISMO S (HE12).

**IMPORTANT DISAMBIGUATION FOUND DURING RESEARCH:** There are TWO different "NISMO S" Notes:
1. The **gasoline E12 NISMO S** (non-HE12 chassis, ~2014-2017): 1.6L NA 4-cyl, 140PS, 5-speed MT, 17-inch wheels, rear DISC brakes. This is an older, discontinued model on the pre-facelift/petrol-only E12 platform.
2. The **e-POWER NISMO S** (HE12 chassis, launched Sept 25, 2018): 1.2L 3-cyl series-hybrid, single-speed reduction gear (no manual), 16-inch wheels, rear DRUM brakes.

The owner's car (2018, HE12, e-POWER) is definitively **#2**. Several general web sources (e.g. nextage.jp article on Note NISMO grades) describe spec #1 and will give WRONG wheel/brake data if conflated with the owner's car. All specs below are for the **e-POWER NISMO / NISMO S (HE12)** unless explicitly marked otherwise.

---

## 1. Tire sizes and OE tires by grade

### Standard e-POWER grades (S / X / Medalist / Autech)
- **Tire size: 185/65R15 88S** — confirmed across multiple independent listings for S, Medalist, X, and Autech trims, all HE12, 2016-2020.
  - Confidence: **verified**
  - Sources:
    - https://spectank.jp/whl/002111865.html (Note 2WD e-power S, DAA-HE12) — "185/65R15 front and rear, 15in x 5.5J, +40mm offset"
    - https://cars-japan.net/tire/n002113202.html (e-power Autech), https://cars-japan.net/tire/n002113205.html (e-power Medalist), https://cars-japan.net/tire/n002111867.html (e-power Medalist, 2016-2017)
    - https://tire.bridgestone.co.jp/search/car/4/369/16553/19054/ (E-POWER X)
    - https://wheel-size.jp/size/nissan/note/e12-2016-2022/ — lists "185/65R15 88S" as OE for 1.2 Hybrid (DAA-HE12)

### NISMO and NISMO S (e-POWER, HE12)
- **Tire size: 195/55R16 87V** — same size for both NISMO and NISMO S.
  - Confidence: **verified**
  - Sources:
    - https://tire.bridgestone.co.jp/search/car/4/369/4784/16571/19072/ (E-POWER NISMO S BLACK LIMITED, 2019-2020) — 195/55R16 87V, wheel 6.5J
    - https://tire.bridgestone.co.jp/search/car/4/369/4779/16536/19037/ (E-POWER NISMO, 2016-2020) — 195/55R16 87V
    - https://spectank.jp/whl/002112835.html (Note 2WD e-power NISMO S, DAA-HE12) — 195/55R16, 16x6.5J, ET46
    - https://car-me.jp/reviews/articles/12565 — confirms 195/55R16

### OE tire brand/model fitted from factory
- **Standard grades: Bridgestone B250** (per car-me.jp comparison article, referenced as the baseline tire that NISMO's Yokohama replaces)
  - Confidence: **probable** (single clear source; not independently cross-checked)
  - Source: https://car-me.jp/reviews/articles/12565
- **NISMO / NISMO S: Yokohama DNA S.Drive** (195/55R16) — chosen for grip/cost-performance balance.
  - Confidence: **verified**
  - Sources: https://car-me.jp/reviews/articles/12565 ; https://clicccar.com/2019/01/23/687652/ (confirms both NISMO and NISMO S use identical Yokohama DNA S.Drive 195/55R16 tires)

### Recommended tire pressures (door placard)
- **Front: 230 kPa / Rear: 210 kPa** — reported as the door-jamb placard value and stated to apply across grades (gasoline and e-POWER).
  - Confidence: **verified** (2 independent owner blog sources both citing the placard label, consistent numbers)
  - Sources:
    - https://minkara.carview.co.jp/userid/1309997/car/3469351/7565693/note.aspx — owner quotes label: front 210→230 kPa, rear 195→210 kPa (i.e., placard = 230F/210R)
    - https://minkara.carview.co.jp/car/nissan/note_e_power/qa/unit192475/ — Q&A confirms 230 kPa front / 210 kPa rear on the door label for e-POWER NISMO; note one respondent flags that JATMA load tables would suggest higher pressure (~250F/240R) is technically correct for the 185/65R15 load index, but the door label itself reads 230/210.
  - Caveat: could not independently confirm whether NISMO/NISMO S (larger 195/55R16 tire) uses a different placard pressure than standard grades — the sources above treat 230/210 as blanket for e-POWER trims, but this was not verified against a NISMO-specific door label photo. **Treat NISMO-specific number as probable, not fully verified.**

### Spare tire / puncture repair kit
- The HE12 e-POWER does **not carry a spare tire**; it is equipped with a puncture repair kit (sealant bottle + electric air compressor) instead, consistent with typical JDM practice for cars with underfloor battery/inverter packaging.
  - Confidence: **probable** (multiple consistent owner-forum/blog references; official Nissan manual page located but not text-extracted)
  - Sources:
    - https://www.nissan.co.jp/OPTIONAL-PARTS/NAVIOM/NOTE_SPECIAL/E-POWER/1611/PG/guid-cfdfd482-4136-4bda-9322-e630a64a267a.html (official Nissan e-POWER manual page titled "応急修理のしかた" / "How to do emergency repair" — indicates a repair-kit procedure page exists, but full content not extracted due to PDF/JS rendering)
    - https://minkara.carview.co.jp/car/nissan/note_e_power/note/?bi=1&sci=1&ci=6 (owner maintenance-log index confirms puncture-kit-only, no spare)

```yaml
name_en: OE Tire (Standard grades — S/X/Medalist/Autech)
name_jp: タイヤ
system: tires-wheels
oem_number: "185/65R15 88S"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["S", "X", "Medalist", "Autech"]
  years: "2016-2020"
alternatives: ["Bridgestone B250 (OE-fitted brand, per car-me.jp)"]
confidence: verified
sources:
  - url: "https://spectank.jp/whl/002111865.html"
    note: "Wheel/tire spec table for e-power S grade, HE12: 185/65R15, 15x5.5J, ET40"
  - url: "https://wheel-size.jp/size/nissan/note/e12-2016-2022/"
    note: "Confirms 185/65R15 88S as OE tire for 1.2 Hybrid DAA-HE12"
notes: "Bridgestone B250 cited as factory-fit brand for standard grades per car-me.jp; not independently cross-checked with a second source."
```

```yaml
name_en: OE Tire (NISMO / NISMO S, e-POWER)
name_jp: タイヤ
system: tires-wheels
oem_number: "195/55R16 87V"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["NISMO", "NISMO S"]
  years: "2016-2020"
alternatives: ["Yokohama DNA S.Drive (OE-fitted brand/model)"]
confidence: verified
sources:
  - url: "https://tire.bridgestone.co.jp/search/car/4/369/4784/16571/19072/"
    note: "NISMO S BLACK LIMITED tire search result: 195/55R16 87V, wheel 6.5J"
  - url: "https://tire.bridgestone.co.jp/search/car/4/369/4779/16536/19037/"
    note: "NISMO tire search result: 195/55R16 87V"
  - url: "https://car-me.jp/reviews/articles/12565"
    note: "Confirms Yokohama DNA S.Drive as OE brand/model on e-POWER NISMO"
  - url: "https://clicccar.com/2019/01/23/687652/"
    note: "Confirms both NISMO and NISMO S share identical 195/55R16 Yokohama DNA S.Drive tires"
notes: "Same size/brand shared by both NISMO and NISMO S grades."
```

---

## 2. Wheel specs by grade

### Standard grades (S / X / Medalist / Autech)
| Spec | Value | Confidence | Source |
|---|---|---|---|
| Rim size | 15 x 5.5J | verified | spectank.jp/whl/002111865.html |
| Offset (inset) | ET40 (+40mm) | verified | spectank.jp/whl/002111865.html; wheel-size.jp/size/nissan/note/e12-2016-2022/ |
| PCD | 100mm x 4 holes | verified | spectank.jp/whl/002111865.html |
| Center bore (hub bore) | 60mm | probable | spectank.jp/whl/002111865.html (single detailed source) |

### NISMO / NISMO S (e-POWER, HE12)
| Spec | Value | Confidence | Source |
|---|---|---|---|
| Rim size | 16 x 6.5J | verified | spectank.jp/whl/002112835.html; tire.bridgestone.co.jp (both NISMO and NISMO S pages list 6.5J) |
| Offset (inset) | ET46 (+46mm) | verified | spectank.jp/whl/002112835.html (both front/rear +46mm) — cross-checked against a websearch aggregation citing "+46mm" for e-power NISMO S |
| PCD | 100mm x 4 holes | verified | spectank.jp/whl/002112835.html |
| Center bore (hub bore) | 60mm | probable | spectank.jp/whl/002112835.html (single detailed source) |

Note: general wheel-size.jp queries for "Note E12/HE12" also surface **unrelated regional/older variants** (e.g. Mexico 1.6L models at 7Jx16 ET40/ET30, and the older gasoline NISMO S DBA-E12 at 7Jx16 ET45/205-55R16) — these are NOT the JDM HE12 e-POWER NISMO/NISMO S and were excluded from the table above. Use spectank.jp and Bridgestone (JDM-specific databases) as the authoritative source over wheel-size.jp's aggregated multi-region tables.

### Lug nuts: size, thread, torque
- **Thread: M12 x 1.25**, taper-seat (60° cone) — standard Nissan pattern (shared across Nissan/Subaru/Mazda/Suzuki/Daihatsu/Mitsubishi taper-seat nuts).
  - Confidence: **probable** (consistent across multiple retail/reference sources; not pulled from a primary Nissan parts catalog page for this specific chassis, but Nissan-genuine M12x1.25 nut listings and generic taper-seat reference pages agree)
  - Sources:
    - https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10143006325 (notes Nissan pitch is 1.25mm, distinct from Toyota/Honda's 1.5mm)
    - https://www.amazon.co.jp/NISSAN-%E3%83%8B%E3%83%83%E3%82%B5%E3%83%B3-%E7%B4%94%E6%AD%A3%E3%82%A2%E3%83%AB%E3%83%9F%E3%83%9B%E3%82%A4%E3%83%BC%E3%83%AB%E7%94%A8%E3%83%8A%E3%83%83%E3%83%88-20%E5%80%8B%E5%85%A5%E3%82%8A-M12%C3%971-25/dp/B071ZZ8BNJ (Nissan-genuine alloy-wheel nut, M12x1.25)
    - https://mitsuchi.xsrv.jp/2025/05/07/wheel-nuts/ (Nissan = taper-seat, 60° cone standard)

- **Wheel nut torque: 108 N·m (11 kgf·m)** — cited as the standard Nissan factory spec, sourced from Nissan's own online owner's manuals, and the Note is explicitly named as one of the models this applies to.
  - Confidence: **verified** (source explicitly states it compiled the figure from Nissan's official owner's-manual pages, and names Note among the models covered)
  - Source: https://yk-base.com/wheel-nut-tightening-torque-and-torque-wrench/ — "108 N·m is the standard wheel nut tightening torque figure per Nissan owner's manuals available on Nissan's website... Note, Serena, X-Trail, etc. use this specification" (compiled from manuals 2010+)
  - Corroborating (lower-tier) sources: https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10143006325 ; https://kuruma-lifehack.com/wheel-nut-torque-j-car/

```yaml
name_en: Wheel Nut (Lug Nut) — all grades
name_jp: ホイールナット
system: tires-wheels
oem_number: "M12x1.25 taper-seat, torque 108 N·m (11 kgf·m)"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["S", "X", "Medalist", "Autech", "NISMO", "NISMO S"]
  years: "2016-2020"
alternatives: []
confidence: probable
sources:
  - url: "https://yk-base.com/wheel-nut-tightening-torque-and-torque-wrench/"
    note: "108 N.m compiled from Nissan owner's manuals; explicitly lists Note as a covered model"
  - url: "https://www.amazon.co.jp/NISSAN-%E3%83%8B%E3%83%83%E3%82%B5%E3%83%B3-%E7%B4%94%E6%AD%A3%E3%82%A2%E3%83%AB%E3%83%9F%E3%83%9B%E3%82%A4%E3%83%BC%E3%83%AB%E7%94%A8%E3%83%8A%E3%83%83%E3%83%88-20%E5%80%8B%E5%85%A5%E3%82%8A-M12%C3%971-25/dp/B071ZZ8BNJ"
    note: "Nissan genuine alloy wheel nut, M12x1.25 thread"
notes: "Torque figure not pulled directly from a Nissan-hosted HE12 owner's manual page (manual is PDF/JS and could not be text-extracted in this session) — treat as probable pending direct primary-source confirmation."
```

---

## 3. Jacking points and jack/tool locations (HE12)

- The Nissan owner's manual describes use of the factory **pantograph (scissor) jack, one wheel at a time**, at designated body jack points — it does **not** document floor-jack usage for lifting the whole car.
  - Confidence: probable
  - Source: https://minkara.carview.co.jp/userid/3038655/car/2649701/5008914/note.aspx

- **Front floor-jack point:** a round recessed/dimpled point on the underbody, centered between the front wheels.
- **Rear floor-jack point (as shown in some references):** a U-shaped downward-facing channel section centered between the rear wheels — **however, two independent owner sources explicitly warn this rear point is NOT safe for floor-jack use**, reporting it can bend the torsion beam. Recommended alternative: use the **rear tow hook** or lift around the **rear spring perch/torsion-beam mounting area** instead.
  - Confidence: **probable** (2 independent forum/blog sources both raising the same specific caution — consistent, but still owner-forum-tier, not a factory service manual excerpt)
  - Sources:
    - https://minkara.carview.co.jp/userid/3038655/car/2649701/5008914/note.aspx — commenters state the rear center point "will bend" ("曲がります") and recommend the tow hook or rear spring area instead
    - https://minkara.carview.co.jp/userid/337241/car/2711934/5858485/note.aspx — separately warns against jacking at the center of the torsion beam, noting "the torsion beam reinforcement has been omitted and lacks strength, making it quite dangerous," and recommends using the tow hook as the rear jack point instead. This post covers the E12/K13 platform generally (not HE12-specific), but the underbody design carries over.

- **e-POWER-specific underbody/battery caution:** no source found made an explicit statement about the e-POWER's lithium-ion battery pack or inverter location creating additional jacking restrictions versus the gasoline Note. Neither of the two jacking-point posts referenced any e-POWER-specific hazard.
  - Confidence: **unconfirmed** (absence of evidence, not evidence of absence — the official service manual, which was not accessible in this research, would be the authoritative source for any e-POWER-specific caution)

- Could not extract the official Nissan owner's manual PDF text (binary/embedded-font PDF, ~9.5MB, not machine-readable via the tools available in this session) to confirm the factory-diagrammed jack points directly. The index page exists at:
  - https://www.nissan.co.jp/OPTIONAL-PARTS/NAVIOM/NOTE_SPECIAL/E-POWER/1807/index.html (2018MY e-POWER manual index — links to a full PDF and an HTML "Visual Search" tool, but section content could not be extracted this session)

**Recommendation for reference table:** Mark the jacking-point section as needing verification against the Nissan factory service manual (dealer-only resource) or a legible photo of the manual's jack-point diagram page before treating it as final.

---

## 4. NISMO vs NISMO S (e-POWER, HE12) — differences summary

| Area | NISMO (e-POWER) | NISMO S (e-POWER) | Confidence | Source(s) |
|---|---|---|---|---|
| Motor output/torque | Baseline e-POWER NISMO tune | **100 kW (136PS) @ 2,985-8,000rpm / 320 N·m @ 0-2,985rpm** — approx. 25% more power / 26% more torque than NISMO, via retuned inverter, VCM, lithium-ion battery computer (LBC), and a strengthened reduction gear | verified | https://car.watch.impress.co.jp/docs/news/1143586.html ; https://response.jp/article/2018/09/25/314318.html ; https://ennori.jp/5452/nissan-note-e-power-nismo-s |
| Drive modes | D range only, with S/ECO sub-modes | D **and** B range, each with Normal/S/ECO (6 total patterns); B-range "S" mode tuned for aggressive one-pedal control, B-range "ECO" tuned for snow/gentle acceleration | probable | https://clicccar.com/2019/01/23/687652/ |
| Front brakes | Ventilated disc | Ventilated disc (same) | probable | https://car.watch.impress.co.jp/docs/news/1143586.html (spec table for NISMO S; not independently confirmed for base NISMO but implied identical) |
| Rear brakes | Leading-trailing drum | **Leading-trailing drum (same as NISMO — NOT disc)** | verified | https://car.watch.impress.co.jp/docs/news/1143586.html (explicit spec table: "leading-trailing" rear drum for e-POWER NISMO S) — corroborated by dedicated web search explicitly distinguishing this from the older *gasoline* NISMO S's rear disc setup |
| Suspension | Front strut independent / rear torsion beam, NISMO-tuned dampers/springs | **Identical — "専用サスペンションも共通" (dedicated suspension shared)** | verified | https://car.watch.impress.co.jp/docs/news/1143586.html ; https://ikikuru.com/news/issue-nissan-note-2/ |
| Body reinforcement | Front cross bar, front suspension-member (tunnel) stay, tunnel stay, rear suspension-member stay, rear cross bar | **Identical set of 6 reinforcement points, shared with NISMO** | verified | https://ikikuru.com/news/issue-nissan-note-2/ ("このニスモ専用補強はノート e-POWER ニスモSにも共通で採用されています") |
| Wheels/tires | 16x6.5J ET46, 195/55R16 Yokohama DNA S.Drive | Identical | verified | https://clicccar.com/2019/01/23/687652/ ; https://tire.bridgestone.co.jp (both) |
| Exterior | Blue-accented front grille, "NISMO" badge | Silver-accented items differ per some sources; NISMO S adds standard LED headlights (optional on base NISMO) | probable | https://car.watch.impress.co.jp/docs/news/1143586.html |
| Seats | NISMO-spec sport seats standard | Same seats standard; **optional NISMO-tuned RECARO sport seats** (front) — hard-shell, dial backrest adjust, no hip-point height adjustment, less easy entry/exit but more lateral support | verified (official Nissan brand source) | https://www3.nissan.co.jp/brand/note-nismo-quick-facts.html |
| Interior common items | Both grades: red-centered leather/Alcantara steering wheel; dedicated aluminum pedals and footrest (e-POWER NISMO/NISMO S) | same | verified | https://www3.nissan.co.jp/brand/note-nismo-quick-facts.html |
| Weight | 1,110 kg (per one source, but see caveat below) | Same body/chassis; heavier battery/inverter tune, exact delta not confirmed | unconfirmed | conflicting figures found only for the discontinued gasoline NISMO S — no reliable e-POWER-specific weight comparison located |

**Caveat repeated:** Any source describing a 1.6L, MT, 17-inch-wheel, rear-disc-brake "NISMO S" refers to the **older, non-HE12 gasoline model** (roughly 2014-2017) and is a different car from the owner's 2018 e-POWER NISMO S. The nextage.jp article (https://www.nextage.jp/model_guide/nissan/306863/) that surfaced during this research describes that older gasoline car and should **not** be used for HE12 e-POWER specs.

```yaml
name_en: NISMO-spec Body Reinforcement Set (shared NISMO/NISMO S)
name_jp: ニスモ専用ボディ補強
system: body
oem_number: "N/A (reinforcement kit: front cross bar, front susp. member/tunnel stay, tunnel stay, rear susp. member stay, rear cross bar)"
superseded_numbers: []
applicability:
  chassis: ["HE12"]
  grades: ["NISMO", "NISMO S"]
  years: "2018-2020"
alternatives: []
confidence: verified
sources:
  - url: "https://ikikuru.com/news/issue-nissan-note-2/"
    note: "States reinforcement set is identical/shared between e-POWER NISMO and NISMO S"
  - url: "https://car.watch.impress.co.jp/docs/news/1143586.html"
    note: "NISMO S launch article confirms 'dedicated body reinforcement' and 'dedicated suspension' as differentiators vs standard grades (not vs NISMO)"
notes: "Confirms NISMO and NISMO S differ from standard e-POWER grades in body/suspension, but NOT from each other — the NISMO S upgrade is powertrain-only (motor/inverter tune) plus optional Recaro seats."
```

---

## 5. Japanese maintenance schedule (Note e-POWER, HE12)

### Engine oil (1.2L e-POWER 3-cylinder)
| Condition | Interval |
|---|---|
| Normal driving | 1 year or 15,000 km (whichever first), oil-only change |
| Severe conditions (≥30% rough-road/mountain driving, or repeated short trips <8km) | 6 months or 7,500 km |

- Oil grade: **API SN, 0W-20**
- Capacity: ~3.2L (oil only) / ~3.4L (with filter change) for the e-POWER 1.2L engine
- Confidence: **probable** (single official Nissan FAQ page, high-authority domain, but page content was rendered via WebFetch summarization rather than raw HTML review)
- Source: https://faq2.nissan.co.jp/faq/show/13788?category_id=9&site_domain=default

### Coolant (Super Long Life Coolant / SLLC)
- Nissan mandates **Nissan Genuine Super Long Life Coolant** only.
- Change interval: **1st change at 7 years / 160,000 km from new; subsequent changes every 4 years / 80,000 km.**
- e-POWER models have **two separate coolant circuits**: engine coolant (~6.78L for 2WD e-POWER) and a separate **inverter coolant circuit (~4.16L)** — both use the same SLLC per available sources, and owner logs describe changing both together.
- Confidence: **verified** (2 independent official Nissan domains agree on the 7yr/160,000km + 4yr/80,000km cadence)
- Sources:
  - https://www.nissan.co.jp/SERVICE/MAINTE/SHOMOHIN-ENGINE/ (general Nissan maintenance page: "Long-life type: 7 years/160,000 km from purchase; thereafter 4 years/80,000 km")
  - https://faq2.nissan.co.jp/faq/show/13789?category_id=63&site_domain=default (Note E12/HE12-specific FAQ: engine coolant ~6.78L, inverter coolant ~4.16L for e-POWER 2WD, "Nissan genuine super long-life coolant" specified)
  - Corroborating owner log: https://minkara.carview.co.jp/userid/267995/car/3167213/7965255/note.aspx ("engine and inverter coolant change" — confirms two separate circuits are serviced together in practice)

### CVT / reduction-gear fluid
- e-POWER uses **"Matic Fluid S"** in the single-speed reduction-gear unit (not a true CVT), capacity ~1.94L for 2WD.
- Change interval: Nissan's general maintenance page states CVT-type intervals "vary by model — consult vehicle-specific maintenance note or dealer." No universal figure found.
- Confidence: probable (capacity from official FAQ; interval unconfirmed)
- Sources: https://faq2.nissan.co.jp/faq/show/13789?category_id=63&site_domain=default ; https://www.nissan.co.jp/SERVICE/MAINTE/SHOMOHIN-ENGINE/

### Brake fluid
- Type: **Nissan Genuine Fluid No.2500 (DOT 3)**
- Confidence (fluid type): probable — from official FAQ page
- Interval: No official Nissan-published interval was located in this session. Owner consensus (forum-level only) is roughly every 2 years, often tied to shaken (24-month inspection).
- Confidence (interval): **unconfirmed** (forum-only, conflicting comments: some report 2-year, some 3-year cadence)
- Sources: https://faq2.nissan.co.jp/faq/show/13789?category_id=63&site_domain=default (fluid type); https://minkara.carview.co.jp/userid/990787/car/3117993/7684686/note.aspx and https://minkara.carview.co.jp/userid/3485166/car/3337725/8134646/note.aspx (owner interval anecdotes, unconfirmed)

### Spark plugs
- **Conflicting information found — flagging as unresolved:**
  - Nissan's general maintenance page (non-model-specific) states standard-car spark plugs are replaced every **20,000 km** ("普通車は20,000km走行ごと"), which would apply to conventional plugs.
  - However, multiple Note e-POWER owner reports state their maintenance note specifies **iridium plugs with a 100,000 km scheduled replacement interval**, consistent with iridium/platinum long-life plug practice, and report plugs showing minimal wear even at 120,000 km.
  - Confidence: **unconfirmed** — could not access the vehicle-specific maintenance note (メンテナンスノート) to resolve which interval Nissan actually specifies for the e-POWER HE12's plugs specifically.
  - Sources: https://www.nissan.co.jp/SERVICE/MAINTE/SHOMOHIN-ENGINE/ (generic 20,000km figure) vs. owner reports summarized from search of minkara.carview.co.jp (100,000km iridium interval, unconfirmed via direct page fetch)

### Legal inspections (12-month / 24-month / shaken)
- Standard JP legal inspection structure applies: **12-month inspection (法定12ヶ月点検)** and **24-month inspection (車検 / shaken)**.
- For e-POWER (EV-drivetrain) models, Nissan's inspection checklist substitutes/adds EV-specific items in place of pure-ICE items:
  - EV-exclusive device checks: cooling-fluid (motor/inverter) leak check, charging port condition
  - EV-recommended diagnostics: battery capacity assessment, drive-system diagnostic scan
  - Motor cooling-water leak check (replaces conventional engine-only checks)
  - Standard shared items: brake pedal play/response, parking brake, brake lines/hoses, brake fluid leaks, disc/pad wear, drum/shoe wear, tire condition (pressure, tread depth, abnormal wear), wheel bolt/nut tightness
- Confidence: **verified** (direct fetch of official Nissan inspection page)
- Source: https://www.nissan.co.jp/SERVICE/TENKEN/HOUTEI12/

---

## Summary of unresolved / lower-confidence items

1. **NISMO/NISMO S-specific tire pressure placard value** — assumed same 230F/210R as standard e-POWER grades, but not confirmed against an actual NISMO door-label photo.
2. **Wheel nut torque (108 N·m)** — well-corroborated across secondary sources citing Nissan manuals, but not confirmed by directly reading a Nissan-hosted HE12 manual page in this session (PDF was not machine-readable).
3. **Rear floor-jack point** — owner-forum consensus says avoid the obvious rear underbody point (risk of bending torsion beam) and use the tow hook instead, but this was not verified against the factory service manual.
4. **e-POWER-specific jacking cautions re: battery/inverter placement** — no source found; absence of evidence only, not confirmed absent risk.
5. **Brake fluid and CVT/reduction-gear fluid change intervals** — no official Nissan-published figures located.
6. **Spark plug interval** — conflicting 20,000 km (generic Nissan page) vs. 100,000 km (owner-reported iridium plug interval for this model) — unresolved.
7. **NISMO S weight** — no reliable e-POWER-specific curb weight comparison vs. NISMO found (only figures for the unrelated older gasoline NISMO S surfaced).
