# Note e-POWER Reference — working conventions

English-language reference site for JDM Nissan Note e-POWER (HE12) owners:
OEM part numbers with confidence flags + maintenance guides.
Live: https://nickc9.github.io/note-epower-reference/ (GitHub Pages,
auto-deploys from `main` via Actions). Owner's car: 2018 e-POWER NISMO S,
DAA-HE12 (frame/engine numbers in local Claude memory, NOT in this repo).

## Architecture

- Astro 7, static output, `base: '/note-epower-reference/'` — all internal
  links must use `import.meta.env.BASE_URL`.
- Content collections (`src/content.config.ts`, zod-validated):
  - `src/content/parts/*.yaml` — one part per file. Required: name_en,
    system (enum: engine|filters|electrical|wipers|tires-wheels|brakes|
    suspension|body|fluids), oem_number (string), applicability
    {chassis, grades, years}, confidence (verified|probable|unconfirmed),
    sources (min 1, `url` must be a valid URL).
  - `src/content/guides/*.md` — frontmatter: title, description,
    difficulty (easy|moderate|involved), time_minutes, phase (number),
    optional interval/tools/parts (slugs into parts collection)/
    torque_specs/fluids.
- Search: Pagefind, runs inside `npm run build` (`astro build && pagefind
  --site dist`).
- Community alternatives: GitHub issue form (label `alternative-suggestion`)
  + 👍 reactions, rendered client-side on part pages from the GitHub API.
  Promote well-voted, verified suggestions into the YAML with credit.

## Data integrity rules (non-negotiable)

1. **Never publish a part number without a source that was actually
   fetched.** No numbers from model memory.
2. Confidence flags: `verified` = 2+ independent sources or genuine
   catalogue (Amayama) fitment; `probable` = 1 solid catalogue source;
   `unconfirmed` = forum-only/conflicting. When in doubt, flag down.
3. Owner-forum data (minkara etc.) is forum-grade: usable, but say so in
   the entry/guide text (e.g. torque figures not from factory manuals).
4. **The "two NISMO S" trap:** petrol NISMO S (DBA-E12改, 1.6L 5MT, 17",
   rear discs) is a DIFFERENT CAR from the e-POWER NISMO S (DAA-HE12,
   16", rear drums). Also: base grade "e-POWER S" ≠ "NISMO S" (battery
   sizes differ: LN1 vs LN2). Reject any source describing the wrong car.
5. Petrol E12 shares the HR12DE engine *code* but has belt-driven
   accessories; the e-POWER has NO belt (all-electric auxiliaries).
   Filter fitment usually shared; accessory hardware is not.
6. Keep JP terms alongside English (name_jp etc.) so owners can order
   from JP vendors.

## Research workflow

- Fan out research to Sonnet general-purpose subagents by cluster, with
  the YAML schema and confidence rules in the prompt; they write findings
  to files and must include real fetched URLs. Guide writing and final
  integration stays with the lead (accuracy judgment).
- Copies of all research files live in `docs/research/` — check them
  before re-researching anything.
- Amayama: direct part pages (`amayama.com/en/part/nissan/<number>`)
  work in the browser and show genuine descriptions + "may fit to" model
  lists; the catalogue browser is CAPTCHA-gated (user must click);
  frame-number lookup does NOT cover JDM frames (tested; PartSouq same).
- WebFetch: Amayama 403s, many Rakuten/Amazon pages return JS shells —
  browser (Claude in Chrome) is the fallback for those.

## Verify before shipping

`npm run build` must pass (schema validation). After push: check
`gh run list`, then curl new pages on the live site (200). Spot-check new
part numbers against their cited sources.
