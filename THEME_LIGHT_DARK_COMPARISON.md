# NetworkChuck Academy Theme – Light vs Dark Comparison

This document compares the **light mode** (`theme-light.css`) and **dark mode** (`theme-dark.css`) token files. Both define the **same set of CSS variables**; only the values differ.

For each logical group below, think **left = light mode**, **right = dark mode**.

---

## 1. Fonts

| Token             | Light value                              | Dark value                               |
| ----------------- | ---------------------------------------- | ---------------------------------------- |
| `--heading-font`  | Montserrat + system fallbacks            | Montserrat + system fallbacks            |
| `--body-font`     | Oxygen + system fallbacks                | Oxygen + system fallbacks                |
| `--planner-font`  | `var(--body-font)`                       | `var(--body-font)`                       |

Usage: `style.css` uses these on `body` and all headings so typography is identical in both themes.

---

## 2. Core Backgrounds

| Token                | Light                                      | Dark                                      |
| -------------------- | ------------------------------------------ | ----------------------------------------- |
| `--body-background`  | `#ffffff`                                  | `#171723` (cinder)                        |
| `--dark-background`  | `#f2f2f2`                                  | `#171723`                                 |
| `--light-background` | `#f2f2f2`                                  | `#1f1f30` (ebony‑clay)                    |
| `--planner-bg`       | `#efefef`                                  | `#171723`                                 |
| `--planner-surface`  | `#ffffff`                                  | `#2a2a36` (charade)                       |
| `--planner-surface-muted` | `#fafafa`                             | `#1f1f30` (ebony‑clay)                    |
| `--planner-border`   | `#e0e0e0`                                  | `#333a46` (dark grey)                     |
| `--planner-border-soft` | `rgba(0,0,0,0.03)`                      | `rgba(39,39,60,0.6)`                      |
| `--header-background`| `rgba(255,255,255,0.85)`                  | `rgba(23,23,35,0.9)`                      |

Effect: Sections (.hero, .learn, cards, accordions) sit on lighter neutrals in light mode and deep slate surfaces in dark mode.

---

## 3. Text & Links

| Token                 | Light                                    | Dark                                     |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| `--dark-text`         | `#171723`                                | `#f7f7f7`                                |
| `--planner-text`      | `#333333`                                | `#f2f2f2`                                |
| `--planner-text-muted`| `#757575`                                | `#c6c6c6`                                |
| `--light-text`        | `#ffffff`                                | `#ffffff`                                |
| `--link-text`         | `#bf6233`                                | `#e5a03b` (brand gold)                   |

Effect: Body copy uses a neutral gray (`--planner-text`), muted text uses a softer gray, and links pick up warm accent colors.

---

## 4. Brand & Accent Colors

| Token                    | Light                                 | Dark                                  |
| ------------------------ | ------------------------------------- | ------------------------------------- |
| `--brand-primary`        | `#e5a03b`                             | `#e5a03b`                             |
| `--brand-primary-hover`  | `#cf871b`                             | `#ca9f43`                             |
| `--academy-orange`       | `#e8a651`                             | `#e5a03b`                             |
| `--academy-orange-border`| `#e8a651`                             | `#e5a03b`                             |
| `--academy-orange-light` | `#f5d7b0`                             | `#3a2f1a`                             |
| `--accent-1`             | `#bf6233`                             | `#bf6233`                             |
| `--accent-2`             | `#b3c977`                             | `#9fbf6f`                             |
| `--accent-2-soft`        | `rgba(179,201,119,0.18)`              | `rgba(159,191,111,0.25)`              |
| `--accent-3`             | `#fdf9b2`                             | `#2f2a1b`                             |

Usage:
- Buttons use `--brand-primary` / `--brand-primary-hover`.
- Section borders, left bars, and highlight chips use `--academy-orange` / `--accent-3`.
- Tag and bullet marker colors use `--accent-1` / `--accent-2`.

---

## 5. Accent Effects & Shadows

| Token                         | Light                                  | Dark                                   |
| ----------------------------- | -------------------------------------- | -------------------------------------- |
| `--planner-accent`           | `var(--academy-orange)`                | `var(--academy-orange)`                |
| `--planner-accent-soft`      | `rgba(232,166,81,0.15)`                | `rgba(232,166,81,0.18)`                |
| `--planner-accent-border`    | `var(--academy-orange)`                | `rgba(232,166,81,0.6)`                 |
| `--planner-accent-shadow`    | `rgba(232,166,81,0.2)`                 | `rgba(0,0,0,0.45)`                     |
| `--planner-accent-shadow-strong` | `rgba(232,166,81,0.3)`              | `rgba(0,0,0,0.65)`                     |

Usage: Primary buttons, featured pricing cards, and hover shadows use these tokens — warm glows in light mode, deeper drop‑shadows in dark mode.

---

## 6. Video Background Spots

| Token           | Light                                      | Dark                                      |
| --------------- | ------------------------------------------ | ---------------------------------------- |
| `--video-spot-1`| `rgba(232,166,81,0.20)`                    | `rgba(232,166,81,0.20)`                  |
| `--video-spot-2`| `rgba(191,98,51,0.18)`                     | `rgba(191,98,51,0.20)`                   |
| `--video-spot-3`| `rgba(179,201,119,0.18)`                   | `rgba(159,191,111,0.22)`                 |

Usage: `.video-frame` gradient, giving the hero preview a subtle brand‑colored backdrop in both themes.

---

## 7. Quiz / Tag Colors

| Token             | Light                                   | Dark                                    |
| ----------------- | --------------------------------------- | --------------------------------------- |
| `--quiz-border`   | `rgba(191,98,51,0.35)`                  | `rgba(217,119,69,0.6)`                  |
| `--quiz-background`| `rgba(191,98,51,0.10)`                 | `rgba(217,119,69,0.18)`                 |

Usage: `.tag.quiz` uses these to visually distinguish quiz lessons in the curriculum accordion.

---

## 8. Hands‑On Labs Tokens

| Token                 | Light                                | Dark                                  |
| --------------------- | ------------------------------------ | ------------------------------------- |
| `--hands-card-background` | `rgba(255,255,255,0.65)`          | `rgba(23,23,35,0.85)`                 |
| `--hands-background`  | `#fdf5ec` (soft warm neutral)        | `var(--accent-3)` (deep warm surface) |

Usage:
- `.hands-on` uses `--hands-background` for the band.
- `.hands-card` uses `--hands-card-background` to make the lab card pop off the band in both modes.

---

## 9. Footer Tokens

| Token                 | Light                                   | Dark                                   |
| --------------------- | --------------------------------------- | -------------------------------------- |
| `--footer-background` | `#171723`                               | `#05060a`                              |
| `--footer-text`       | `rgba(255,255,255,0.9)`                 | `rgba(255,255,255,0.9)`                |
| `--footer-text-strong`| `#ffffff`                               | `#ffffff`                              |
| `--footer-text-muted` | `rgba(255,255,255,0.65)`                | `rgba(255,255,255,0.6)`                |
| `--footer-link`       | `#f5d7b0`                               | `#f5d7b0`                              |
| `--footer-link-hover` | `#ffffff`                               | `#ffffff`                              |
| `--footer-border`     | `rgba(255,255,255,0.12)`                | `rgba(148,163,184,0.4)`                |

Usage: `.footer` and `.footer-bottom` pull these tokens so the footer feels like a stable dark band in both themes (even when the page body is light).

---

## 10. States / Warnings

| Token              | Light         | Dark         |
| ------------------ | ------------- | ------------ |
| `--planner-warning`| `#dc2626`     | `#f87171`    |

Usage: `.warn` text and any warning callouts (e.g., prerequisites notes) rely on this token; it’s a slightly softer red in dark mode.

---

## 11. Scoping & Defaults

- **Light mode file (`theme-light.css`)**
  - Scoped to `:root, [data-theme="light"] { … }`.
  - This makes light mode the **baseline**: if no `data-theme` is present, the site appears in light mode.

- **Dark mode file (`theme-dark.css`)**
  - Scoped to `[data-theme="dark"] { … }`.
  - Dark mode only activates when JavaScript sets `data-theme="dark"` on `<html>` (via the `#themeToggle` button).

Because both files define the **same 46 variables**, any component defined in `style.css` can assume those tokens exist and will automatically adapt to whichever theme is active.

