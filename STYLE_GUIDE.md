# NetworkChuck Academy – UI Style Guide (Playground Repo)

This document captures the design system and implementation conventions used in this repo for the NetworkChuck Academy (NCA) marketing/learning pages. It is based on the site-wide style guide you provided and the current implementation in:

- `index.html`
- `style.css`
- `theme-light.css`
- `theme-dark.css`
- `theme.js`

The same system is intended to work in both light and dark mode via CSS custom properties (design tokens).

---

## 1. Design Goals

- Dark‑first UI with warm gold/brick accents.
- Light mode that uses the same brand system (not a separate visual identity).
- Token‑driven theming: **all colors and typographic choices live in theme files**, while `style.css` is structural.
- Layout and component patterns that match LearnWorlds / course‑landing usage (hero → curriculum → pricing, etc.).

---

## 2. Typography

### 2.1 Primary Typefaces

- **Headings**: Montserrat  
  - Token: `--heading-font`
  - Fallbacks: `"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

- **Body / UI text**: Oxygen  
  - Token: `--body-font`
  - Fallbacks: `"Oxygen", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

- Historical / optional: **Barlow** can be used for special blocks, but only if explicitly loaded on the page.

### 2.2 Application in CSS

Defined in both theme files (`theme-light.css`, `theme-dark.css`):

- `--heading-font`
- `--body-font`
- `--planner-font` (alias of `--body-font` for compatibility)

Used in `style.css`:

- Body text:
  - `body { font-family: var(--body-font, var(--planner-font)); }`
- Headings (`h1`, `h2`, `h3`):
  - `font-family: var(--heading-font, var(--body-font, var(--planner-font)));`
  - `font-weight: 800` for strong, bold headings

### 2.3 Heading Scale (current page)

- `h1`: `clamp(28px, 3.2vw, 44px)`
- `h2`: `clamp(20px, 2.2vw, 28px)`
- `h3`: `18px`

Body copy uses `line-height: 1.55` on `body` and `margin-bottom: 14px` on `p` by default.

---

## 3. Color System & Tokens

The color system is implemented entirely through CSS custom properties (tokens) in:

- `theme-light.css`: light theme tokens
- `theme-dark.css`: dark theme tokens

Theme is applied by setting `data-theme` on `<html>`:

- Light: `<html data-theme="light">`
- Dark: `<html data-theme="dark">`

### 3.1 Brand Palette (Shared)

Core brand colors (from the global style guide):

- Primary accent (gold): `#e5a03b`
- Primary hover (darker gold): `#cf871b`
- Secondary accent (brick): `#bf6233`

Tokens:

- `--brand-primary`: `#e5a03b` (light + dark)
- `--brand-primary-hover`: `#cf871b`
- `--academy-orange`: `#e5a03b` / `#e8a651` (light)
- `--academy-orange-border`
- `--academy-orange-light` (soft backgrounds / gradients)
- `--accent-1`: brick (`#bf6233`)
- `--accent-2`: muted green (success/learning)
- `--accent-3`: yellowish surfaces (hands‑on areas)

### 3.2 Neutral & Surface Tokens

Light theme (`theme-light.css`):

- `--body-background`: `#ffffff`
- `--dark-background`: `#f2f2f2` (used for sections like pricing)
- `--light-background`: `#f2f2f2`
- `--planner-bg`: `#efefef` (page background blocks)
- `--planner-surface`: `#ffffff` (cards, main surfaces)
- `--planner-surface-muted`: `#fafafa` (sub‑sections inside cards)
- `--planner-border`: `#e0e0e0`
- `--planner-border-soft`: `rgba(0, 0, 0, 0.03)`
- `--header-background`: `rgba(255, 255, 255, 0.85)` (sticky header)

Dark theme (`theme-dark.css`), aligned with the global NCA guide:

- `--body-background`: `#171723`
- `--dark-background`: `#171723` (base dark)
- `--light-background`: `#1f1f30`
- `--planner-bg`: `#171723`
- `--planner-surface`: `#262636`
- `--planner-surface-muted`: `#1f1f30`
- `--planner-border`: `#2a2a36`
- `--planner-border-soft`: `rgba(23, 23, 35, 0.6)`
- `--header-background`: `rgba(23, 23, 35, 0.9)`

### 3.3 Text Tokens

Light:

- `--dark-text`: `#171723`
- `--planner-text`: `#333333`
- `--planner-text-muted`: `#757575`
- `--light-text`: `#ffffff`
- `--link-text`: `#bf6233` (brick)

Dark:

- `--dark-text`: `#f7f7f7`
- `--planner-text`: `#f2f2f2`
- `--planner-text-muted`: `#c6c6c6`
- `--light-text`: `#ffffff`
- `--link-text`: `#e5a03b` (gold)

### 3.4 Effects & Overlays

Shared tokens (used in `style.css`):

- `--planner-accent`: alias for `--academy-orange`
- `--planner-accent-soft`:
  - Light: `rgba(232, 166, 81, 0.15)`
  - Dark: `rgba(232, 166, 81, 0.18)`
- `--planner-accent-border`
- `--planner-accent-shadow`:
  - Light: `rgba(232, 166, 81, 0.2)`
  - Dark: `rgba(0, 0, 0, 0.45)`
- `--planner-accent-shadow-strong`:
  - Light: `rgba(232, 166, 81, 0.3)`
  - Dark: `rgba(0, 0, 0, 0.65)`

Additional helper tokens:

- `--accent-2-soft`: green glow for status dots:
  - Light: `rgba(179, 201, 119, 0.18)`
  - Dark: `rgba(159, 191, 111, 0.25)`
- Video background spots:
  - `--video-spot-1`, `--video-spot-2`, `--video-spot-3`
- Quiz tag:
  - `--quiz-border`, `--quiz-background`
- Hands‑on card:
  - `--hands-card-background`

### 3.5 Footer Tokens

Light:

- `--footer-background`: `#171723`
- `--footer-text`: `rgba(255, 255, 255, 0.9)`
- `--footer-text-strong`: `#ffffff`
- `--footer-text-muted`: `rgba(255, 255, 255, 0.65)`
- `--footer-link`: `#f5d7b0`
- `--footer-link-hover`: `#ffffff`
- `--footer-border`: `rgba(255, 255, 255, 0.12)`

Dark:

- `--footer-background`: `#05060a`
- `--footer-text`: `rgba(255, 255, 255, 0.9)`
- `--footer-text-strong`: `#ffffff`
- `--footer-text-muted`: `rgba(255, 255, 255, 0.6)`
- `--footer-link`: `#f5d7b0`
- `--footer-link-hover`: `#ffffff`
- `--footer-border`: `rgba(148, 163, 184, 0.4)`

### 3.6 State Tokens

- `--planner-warning`:
  - Light: `#dc2626`
  - Dark: `#f87171`

Use this token for “Heads up” / warning copy, not for critical errors.

---

## 4. Theming Model (Light & Dark)

The theme is controlled with `data-theme` and a small controller script.

### 4.1 DOM Contract

- `<html data-theme="light">` (default in `index.html`)
- `<html data-theme="dark">` for dark mode

`theme-light.css` and `theme-dark.css` both target this attribute:

- Light: `:root, [data-theme="light"] { ... }`
- Dark: `[data-theme="dark"] { ... }`

### 4.2 Theme Controller (`theme.js`)

Key behaviors:

- Stores user choice in `localStorage` under `nca-theme` (`"light"` or `"dark"`).
- On first load, falls back to `prefers-color-scheme: dark` when no stored value exists.
- Attaches to `#themeToggle` and toggles `data-theme` on `<html>` when clicked.
- Listens for OS theme changes via `matchMedia('(prefers-color-scheme: dark)')`, and updates only if the user hasn’t explicitly chosen a theme.

Implementation points:

- `setTheme(theme)` sets the attribute and persists to storage.
- `getInitialTheme()` handles storage + OS preference.

### 4.3 Implementation Rules

- **Never hard‑code colors in `style.css`** – always use tokens.
- Component styles should assume only tokens and `data-theme` exist; they do not know whether they’re in light or dark mode.
- New pages should include:
  - `style.css`
  - `theme-light.css`
  - `theme-dark.css`
  - `theme.js` (with `defer`)

---

## 5. Layout & Page Structure

The base page (`index.html`) follows the recommended NCA course landing layout:

1. **Header** (`.header`)
   - Sticky header: logo, primary nav, theme toggle button, primary CTA.

2. **Hero** (`.hero` → `.hero-grid`)
   - Left: title, course description, meta pills (`.pill`), primary/secondary CTAs.
   - Right: stats card and “You’ll build” card.

3. **Trust strip** (`.trust-strip`)
   - Instructor avatar + name, teaching style, last updated info.

4. **Course preview** (`.video`, `.video-top`, `.video-frame`, `details`)
   - Video frame placeholder and transcript in `<details>`.

5. **What you’ll learn** (`.learn`, `.learn-grid`)
   - Outcomes copy + bullet list (`ul.clean`).

6. **Curriculum** (`.accordion`, `.module`, `.lesson`)
   - `<details>` modules with meta and consistent lesson rows (tag, title, duration).

7. **Hands‑on practice** (`.hands-on`, `.hands-grid`, `.hands-card`)
   - Lab philosophy + practice list.

8. **Audience & prerequisites** (`.persona`, `.icon`, `.warn`)
   - Personas with numbered icons; prereq card with highlight warning.

9. **Proof / social proof** (`.proof-grid`, `.quote`, `.metric`)
   - Two quotes + one metric card.

10. **Pricing / Get Access** (`.pricing`, `.plans`, `.plan`, `.chip`)
    - Featured Premium plan + Standard plan, clear CTAs.

11. **Related courses** (`.related-grid`, `.course-card`)
    - Three course tiles for next steps.

12. **Community** (`.community`)
    - CTA section inviting users to join discussions.

13. **Footer** (`.footer`, `.footer-grid`, `.footer-bottom`, `.footer-title`)
    - Brand blurb, “Explore” links, “Support” links, copyright bar.

Spacing:

- Section padding (`.section`): `56px 0` (desktop).
- Compact sections (`.section.compact`): `28px 0`.
- Container width: `min(1120px, calc(100% - 48px))`.

---

## 6. Components

### 6.1 Header

- Classes: `.header`, `.header-inner`, `.logo`, `.logo-mark`, `.nav`, `.header-actions`.
- Behavior:
  - Sticky at top, with backdrop blur and subtle border.
- `logo-mark`:
  - Uses a conic gradient with brand/accent colors.
  - Dropshadow uses `--planner-accent-shadow-strong` for depth.

Guidelines:

- Keep a single primary CTA (e.g., “Start Learning”).
- Secondary actions should be text links or subtle buttons.

### 6.2 Buttons

- `.btn-primary` (gold):
  - Background: `--brand-primary`
  - Hover: `--brand-primary-hover`
  - Text: `--light-text`
  - Strong shadow based on theme (`--planner-accent-shadow` / `--planner-accent-shadow-strong`).

- `.btn-secondary`:
  - Background: `--planner-surface`
  - Border: `--planner-border` (hover `--academy-orange-border`).
  - Text: `--dark-text`

- `.btn-link`:
  - Text‑only CTA in `--link-text` using link hover behavior.

Keep primary buttons rare and explicit: “Start Free Trial”, “Enroll Now”, “Get Access”, etc.

### 6.3 Pills & Meta

- `.pill`:
  - Use for course metadata (level, duration, modules, labs, etc.).
  - Background: `--planner-accent-soft`
  - Border: `--planner-accent-border`
  - Optional `.dot` child with a glowing green (`--accent-2` + `--accent-2-soft` halo).

Usage guidelines:

- Keep to 4–6 pills in the hero; avoid long text.

### 6.4 Cards

Shared card behavior:

- `.card`:
  - Surface: `--planner-surface`
  - Border: `--planner-border`
  - Slight shadow: `--planner-border-soft`

Variants:

- `.hands-card`: uses `--hands-card-background` and accented border.
- `.quote`: left border in `--accent-1` for testimonials.
- `.metric`: accent background and border (`--planner-accent-soft`, `--planner-accent-border`).
- `.plan.featured`: stronger border + shadow for the primary plan.

### 6.5 Accordions (Curriculum)

- Structure:
  - `<details class="module">`
  - `<summary>` contains title + `.meta` block.
  - `.body` wraps `.lesson` rows.

Lesson rows:

- Left: `.tag` (type) + `.title` (clamped, ellipsis).
- Right: `.right` (duration).

Tag variants:

- Base `.tag`: neutral pill.
- `.tag.lab`: uses `--planner-accent-soft` + `--planner-accent-border` and `--academy-orange` text.
- `.tag.quiz`: uses `--quiz-border` + `--quiz-background` and `--accent-1` text.

### 6.6 Pricing

- `.plans`: 2-column grid (`1.1fr / 0.9fr`) on desktop, 1 column on small screens.
- `.plan.featured`:
  - Stronger border: `2px solid --academy-orange`
  - Shadow: `--planner-accent-shadow`
- `.chip`: small label pill (e.g. “BEST VALUE”) using `--accent-3` and `--academy-orange-border`.

Guidelines:

- Keep one featured plan; both plans should still look related.

### 6.7 Footer

- `.footer`: uses footer tokens (background, text, links, border).
- `.footer-grid`: three columns on desktop, stack to one column on mobile.
- `.footer-title`: section headings for Explore / Support columns.
- `.footer-bottom`: legal/copyright line with muted text and top border.

Links in the footer:

- Default: `--footer-link`
- Hover: `--footer-link-hover` + underline.

---

## 7. Responsive Behavior

Breakpoints in `style.css`:

- `@media (max-width: 980px)`:
  - Stacks most multi-column grids to single column:
    - `.hero-grid`, `.hands-grid`, `.learn-grid`, `.two-col`, `.proof-grid`, `.plans`, `.related-grid`
  - Shrinks `.lesson .title` width to `320px` for small screens.
  - Hides `.nav` for mobile (assumes a separate mobile nav pattern if needed).
  - Collapses `.footer-grid` to 1 column.

Additional platform breakpoints (from overall NCA style guide) to respect when integrating with LearnWorlds:

- `max-width: 900px` – main stack point for complex layouts.
- `max-width: 600px` – tighter spacing and typography.
- Platform ranges (use only when aligning with platform HTML):
  - `max-width: 500px`
  - `min-width: 501px and max-width: 767px`
  - `min-width: 768px and max-width: 990px`
  - `min-width: 991px and max-width: 1366px`

---

## 8. Conventions & Best Practices

1. **Tokens first**  
   - Add/adjust colors in `theme-light.css` / `theme-dark.css`, not in `style.css`.
   - If you need a new semantic color (e.g., “info banner”), add a token for it.

2. **Separation of concerns**  
   - Theme files = **design tokens** (colors, typography, effects).
   - `style.css` = **layout & component structure**.
   - Page files (`index.html`, etc.) = markup and content only, with minimal inline styles.

3. **Naming**  
   - Prefer semantic tokens (`--footer-text`, `--planner-warning`) over raw colors (`--red-500`).
   - For new complex components in the main app, use an `nca-*` prefix to avoid collisions with LearnWorlds’ generated CSS (e.g., `.nca-video-layout`).

4. **Avoid generated IDs**  
   - Do not rely on platform IDs like `#el_...` for anything that must be maintainable. Use classes.

5. **Accessibility**  
   - Maintain sufficient contrast in both light and dark modes. When in doubt, test both themes anytime you add a new token or background combination.

6. **Buttons & CTAs**  
   - Keep one primary CTA per visual region (header, hero, pricing).
   - Use `.btn-secondary` or text links for lower-priority actions.

---

## 9. Extending the System

When adding new pages or components:

- Include the shared theme + layout files (`theme-light.css`, `theme-dark.css`, `style.css`, `theme.js`).
- Reuse the same section order where possible (Header → Hero → Trust → Preview → Learn → Curriculum → Hands-on → Audience → Proof → Pricing → Related → Community → Footer).
- Introduce new tokens only when you need truly new semantics, not for minor one-off color tweaks.
- Keep the dark theme as the “source of truth” for overall feel, and ensure light mode is a faithful, legible variant of the same identity.*** End Patch ***!
