# NetworkChuck Academy Theme – Layout & Components (`style.css`)

This document explains how `style.css` works and which HTML elements / classes are used to build each section of the course pages. All visual colors come from the theme token files (`theme-light.css`, `theme-dark.css`); `style.css` is layout + structure only.

---

## 1. Base & Layout

- **Base reset**
  - `*`, `*::before`, `*::after` – `box-sizing: border-box`.
  - `html, body` – `height: 100%`.
  - `body` – uses `--body-background`, `--dark-text`, `--body-font`.
  - `a` – inherits `--link-text`, underline on hover.

- **Layout wrappers**
  - `.container` – centers content, max width `1200px`, horizontal padding.
  - `.section` – vertical spacing for each section.
  - `.section.compact` – smaller vertical padding.
  - `.grid` – simple generic CSS grid.
  - `.two-col` – two-column grid used for:
    - Overview vs sidebar cards
    - “Who this course is for” / “Prerequisites”
    - Instructor / Features blocks

---

## 2. Typography & Pills

- **Headings**
  - `h1, h2, h3` – use `--heading-font`, bold weights.
  - `h1` – hero titles.
  - `h2` – section titles (overview, curriculum, labs, etc.).
  - `h3` – card headings and smaller titles.

- **Body & Muted**
  - `p` – body copy using `--planner-text`.
  - `.muted` – secondary text using `--planner-text-muted`.

- **Kicker**
  - `.kicker` – small pill label above titles (“Course”, “Theme Playground”).
  - Used in hero and overview sections.

---

## 3. Cards & Buttons

- **Cards**
  - `.card` – generic card container:
    - Used for: At‑a‑glance stats, video frames, learn card, labs, prerequisites, pricing plans, quotes, metrics, related courses, study planner, etc.

- **Buttons**
  - `.btn-row` – flex row for grouping CTAs.
  - `.btn-primary` – gold CTA button; uses `--brand-primary` + shadow tokens.
  - `.btn-secondary` – neutral surface button with border.
  - `.btn-link` – textual CTA using `--link-text`.

- **Pills**
  - `.pill` – metadata pills (level, duration, skills, labs).
  - `.pill .dot` – small colored dot using `--accent-2` and `--accent-2-soft`.

---

## 4. Header & Navigation

- **Header**
  - `.header` – sticky top bar, blurred background, bottom border.
  - `.header-inner` – flex row containing logo, nav, and actions.

- **Logo**
  - `.logo` – wraps the logo image and brand text.
  - `.logo-image` – actual logo (`<img src="image.png" class="logo-image">`).

- **Navigation**
  - `.nav` – horizontal nav; hidden on small screens via media query.
  - Links point to section IDs, e.g. `#hero`, `#curriculum`, `#community`, `#instructor`.

- **Header Actions**
  - `.header-actions` – “Sign in”, “Sign up”, theme toggle.
  - `.theme-toggle-icon#themeToggle` – circular icon button that JS uses to toggle `data-theme` on `<html>`.

---

## 5. Hero Section

**HTML pattern:**

```html
<section class="hero" id="hero">
  <div class="container hero-grid">
    <div>… left hero content …</div>
    <aside class="hero-right">… video + stats …</aside>
  </div>
</section>
```

- `.hero` – gradient background and bottom border.
- `.hero-grid` – two‑column layout (content + sidebar).
- `.hero-top-meta` – instructor row with:
  - `.hero-instructor` – avatar + “Taught by …”.
  - `.avatar` – circular initials chip.
  - `.hero-updated` – updated date / meta line.
- `.hero-meta` – row of `.pill` elements for level, hours, skills, etc.
- `.hero-right` – vertical stack of:
  - `.card.video` – preview video card.
    - `.video-top` – title + “Course preview” label.
    - `.video-frame` – gradient background; can contain an `<iframe>`.
  - `.card` – “Course Stats” grid.
    - `.stats` – grid of `.stat` items with `.label` and `.value`.

---

## 6. Trust Strip & Preview Details

- **Trust strip**
  - `<section class="trust-strip section compact">`:
    - `.trust-inner` – flex wrapper for instructor summary and last‑updated info.
    - `.instructors` – instructor avatar + labels.

- **Details / transcript**
  - `details` / `summary` – used for transcripts and accordion content:
    - Styled with border, padding, and colored summary link.

---

## 7. “What You’ll Learn” Section

**HTML pattern (course template):**

```html
<section class="section learn">
  <div class="container">
    <div class="card learn-card">
      <div class="learn-card-header">…</div>
      <div class="learn-card-body">
        <ul class="clean">…</ul>
      </div>
    </div>
  </div>
</section>
```

- `.learn` – background + top/bottom borders for the outcomes band.
- `.learn-card` – two columns: copy on the left, bullet list on the right.
- `.learn-card-header` – title and intro text.
- `.learn-card-body` – bullet list container.
- `ul.clean` – generic bullet list style used across sections.

---

## 8. Curriculum / Accordion

**HTML pattern:**

```html
<section class="section" id="curriculum">
  <div class="container">
    <div class="accordion">
      <details class="module">…</details>
      …
    </div>
  </div>
</section>
```

- `.accordion` – stacked list of `<details>` modules.
- `.module` – card wrapper around each `<details>`.
- `.module summary` – clickable header with:
  - Module title and `.meta` (lessons, labs, duration).
  - Right‑aligned chevron / “▼” label.
- `.module .body` – inner body area with `.lesson` rows.
- `.lesson` – single lesson row:
  - `.left` – `.tag` (VIDEO / LAB / QUIZ) + `.title`.
  - `.right` – duration.
- `.tag.lab`, `.tag.quiz` – special colors for lab and quiz tags.

---

## 9. Hands‑On Labs Section

**HTML pattern:**

```html
<section class="section hands-on" id="labs">
  <div class="container hands-grid">
    <div>… description …</div>
    <div class="card hands-card">… lab highlights …</div>
  </div>
</section>
```

- `.hands-on` – background and border for “labs” band.
- `.hands-grid` – two‑column layout (copy + card).
- `.hands-card` – card variant with accent border/background.

---

## 10. Audience, Prerequisites, Proof

- **Audience / personas**
  - `.persona` – row card with icon + text.
  - `.icon` – square icon container with border and accent color.
  - `.warn` – red warning text (used in prerequisites).

- **Proof / social proof**
  - `.proof-grid` – 3‑column grid for quotes and metrics.
  - `.quote` – card with left accent border.
  - `.metric` – card with highlighted background and border.
  - `.metric .big` – large numeric metric.

---

## 11. Pricing & Related Courses

- **Pricing**
  - `.pricing` – section band background.
  - `.plans` – two‑column layout (featured + standard).
  - `.plan` – pricing card.
  - `.plan.featured` – emphasized card with stronger border and shadow.
  - `.plan .top` – title + chip row.
  - `.chip` – small “BEST VALUE” style pill.

- **Related courses / demo links**
  - `.related-grid` – 3‑up card grid (collapses in mobile).
  - `.course-card` – hover‑elevated card used in:
    - Related courses section on template.
    - Demo list on `index.html`.

---

## 12. Community & Footer

- **Community CTA**
  - `.community` – gradient section background used for “Join the community” or final CTA.

- **Footer**
  - `.footer` – global footer band using footer theme tokens.
  - `.footer-grid` – 3‑column layout (brand, explore, support).
  - `.footer-title` – small footer section heading.
  - `.footer-bottom` – copyright strip.

---

## 13. Responsiveness

Media queries at `max-width: 980px` adjust:

- `.hero-grid`, `.hands-grid`, `.learn-card`, `.two-col`, `.proof-grid`, `.plans`, `.related-grid` → single column.
- `.lesson .title` – reduced max width for smaller screens.
- `.nav` – hidden on small screens (leaving logo + header actions).
- `.footer-grid` – single column with increased gap.

Use these same class patterns when creating new course pages so they automatically inherit the shared responsive behavior and theming.

