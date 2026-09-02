---
name: CrossFit Prestige
description: Brand design specification for CrossFit Prestige by HYPR — visual identity, typography, color, iconography, and layout for AI-assisted design tooling.
---

# CrossFit Prestige — design.md

> Brand design specification for **CrossFit Prestige by HYPR**.
> This document describes all visual, typographic, color, and iconographic decisions for AI-assisted design tooling, component generation, and asset production.

---

## Overview

**CrossFit Prestige** is a premium fitness club combining CrossFit, Yoga, and Pilates under three core brand pillars: **Power**, **Wellness**, and **Community**. The visual identity balances raw athletic strength (dark, high-contrast, bold typography) with calm wellness (warm neutrals, organic curves, breath-like spacing). The logo — a dynamic running figure built from the letter _P_ — serves as the DNA for all icon and layout derivations.

---

## Brand Identity

### Name & Tagline

| Field      | Value                                         |
| ---------- | --------------------------------------------- |
| Brand Name | CrossFit Prestige                             |
| Sub-brand  | By HYPR                                       |
| Pillars    | Power · Wellness · Community                  |
| Tone       | Premium, bold, human, motivating              |
| Language   | Hebrew (primary) + English (branding/display) |

### Core Values

- **POWER (CrossFit):** Strength, discipline, perseverance, and breaking physical/mental limits.
- **WELLNESS (Yoga & Pilates):** Balance, control, precision, conscious movement, and recovery.
- **COMMUNITY:** The emotional core connecting all members, fostering belonging and support.

### Logo

The logo is a **circular emblem** with the brand name arced at the top, and "POWER · WELLNESS · COMMUNITY" arced below a central figurative icon. A rectangular badge reading "BY HYPR" sits below the circle.

**Icon anatomy:**

1. **Round head** — symbolizes humanity; a recurring constant element across all icons
2. **Flowing, rounded lines** — organic movement; forms the arms, legs, and body posture
3. **Sharp, dynamic edges** — retained from the logo's DNA; conveys speed, strength, and progression

**Logo variants:**

- `color` — Dark charcoal (#272521) + gold (#8B6540) on cream (#EDE4D9)
- `mono-dark` — White on black
- `mono-light` — Black on white
- `3d-embossed` — Gold relief on warm beige wall (premium signage use)

### Logo Assets

Three SVG variants in `public/images/SVG/`:

| File                         | Background | Use                                  |
| ---------------------------- | ---------- | ------------------------------------ |
| `CF Prestige_logo_white.svg` | Dark       | Sidebar, dark panels                 |
| `CF Prestige_logo_black.svg` | Light      | Cream panels, wellness theme         |
| `Signage_prestige.svg`       | Any        | Horizontal lockup — signage, headers |

---

## Color Palette

All colors are extracted directly from the brand book.

```css
/* CrossFit Prestige — Color Tokens */
--color-charcoal: #272521; /* Primary dark — backgrounds, text */
--color-gold: #8b6540; /* Brand accent — highlights, CTAs, icon fills */
--color-sand: #dbcebe; /* Secondary neutral — section backgrounds */
--color-cream: #ede4d9; /* Primary light background */
```

| Token              | Hex       | Usage                                             |
| ------------------ | --------- | ------------------------------------------------- |
| `--color-charcoal` | `#272521` | Backgrounds (Power world), body text on light     |
| `--color-gold`     | `#8B6540` | Accents, icon fills, Wellness section, CTAs       |
| `--color-sand`     | `#DBCEBE` | Icon backgrounds (circles), Wellness section tint |
| `--color-cream`    | `#EDE4D9` | Primary page/slide background, light mode         |

### Color by Section / World

| Section                   | Background           | Text                 | Accent            |
| ------------------------- | -------------------- | -------------------- | ----------------- |
| Power / CrossFit          | `#272521` (charcoal) | `#EDE4D9` (cream)    | `#EDE4D9` (cream) |
| Wellness / Yoga & Pilates | `#EDE4D9` (cream)    | `#272521` (charcoal) | `#8B6540` (gold)  |
| Community                 | `#272521` (charcoal) | `#EDE4D9` (cream)    | `#8B6540` (gold)  |
| Neutral / Docs            | `#EDE4D9` (cream)    | `#272521` (charcoal) | `#8B6540` (gold)  |

---

## Typography

### Typefaces

| Language          | Font Family            | Weights                | Role                                          |
| ----------------- | ---------------------- | ---------------------- | --------------------------------------------- |
| English (display) | **Anton**              | Regular (display only) | Hero titles, section labels (POWER, WELLNESS) |
| Hebrew (display)  | **Tel Aviv Brutalist** | Light · Regular · Bold | All Hebrew headings and body                  |
| Hebrew (body)     | **Tel Aviv Brutalist** | Light                  | Body text, descriptions                       |

### Anton (English Display)

- All-caps, condensed sans-serif
- Used exclusively for large-format English labels: `POWER`, `WELLNESS`, `COMMUNITY`
- Never used below 48px in print; never mixed with body text

### Tel Aviv Brutalist (Hebrew)

- Geometric, modern Hebrew typeface with strong structural character
- Three weights in use: Light (captions), Regular (body), Bold (subheadings + emphasis)
- Fonts stored in `public/fonts/` (woff2 + ttf)
- Direction: RTL; text-align: right for all Hebrew content

### Type Scale (display / editorial)

```plaintext
Hero:        120–200px  Anton / Tel Aviv Bold
Section:     48–80px    Anton / Tel Aviv Bold
Subheading:  24–32px    Tel Aviv Bold
Body:        16–18px    Tel Aviv Regular
Caption:     12–14px    Tel Aviv Light
```

---

## Theme System

Three switchable themes via `data-theme` attribute on `<html>`:

| Theme               | Style                                                                       |
| ------------------- | --------------------------------------------------------------------------- |
| `unified` (default) | Dark charcoal (#272521) + gold (#8B6540) + sand (#DBCEBE) + cream (#EDE4D9) |
| `power`             | Monochrome black (#000) / white (#FFF) — raw CrossFit intensity             |
| `wellness`          | Warm cream (#EDE4D9) + sand (#DBCEBE) — calm Yoga/Pilates aesthetic         |

The sidebar remains dark across all themes. Theme toggle is in the sidebar (desktop) and bottom nav (mobile).

---

## Iconography

All icons are **custom-derived** from the logo's figurative DNA. They are not pulled from generic libraries.

### Design Principles

- **Round head** — present in every human figure icon; no sharp top
- **Fluid, rounded lines** — organic, flowing silhouettes; avoid jagged angles
- **Sharp accent edges** — used for motion lines, equipment, and non-human elements
- **Monochromatic** — single fill color (#272521 on light, #EDE4D9 on dark)
- **Circular container** — each icon is enclosed in a circle with a `--color-sand` fill bg

### Icon Set

#### Power | CrossFit

| Name             | Description                               |
| ---------------- | ----------------------------------------- |
| `olympic-lift`   | Figure overhead-pressing a barbell        |
| `air-squat`      | Figure in squat stance with arms extended |
| `jump-rope`      | Figure jumping, rope looped around        |
| `ring-muscle-up` | Figure hanging from gymnastic rings       |
| `row`            | Figure seated at rowing machine           |
| `kb-swing`       | Figure performing kettlebell swing        |

#### Wellness | Yoga & Pilates

| Name           | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `hundred`      | Figure in Pilates hundred position (legs raised, reclined) |
| `swan`         | Figure in swan/cobra extension                             |
| `warrior-ii`   | Figure in Warrior II yoga pose (arms spread, lunge)        |
| `tree-pose`    | Figure in tree pose (one leg raised, arms overhead)        |
| `downward-dog` | Figure in downward dog (inverted V)                        |

### Icon Container Spec

```plaintext
Shape:        Circle
Size:         120×120px (default), 80×80px (compact)
Background:   --color-sand (#DBCEBE) — Power set
              --color-sand (#DBCEBE) — Wellness set
Border:       1.5px solid --color-charcoal
Icon fill:    --color-charcoal
Padding:      16px internal
```

---

## Layout Principles

### Power World (CrossFit)

- **Background:** `#272521` (charcoal)
- **Text color:** `#EDE4D9` (cream)
- **Typography:** Anton (EN headers), Tel Aviv Bold (HE headers), Tel Aviv Regular (body)
- **Large ghost text:** Oversized, low-opacity repeating section title (e.g., "POWER") fills the background at ~15% opacity
- **Photography:** Monochrome athlete photography overlaid on dark bg, cropped to bleed edges
- **Layout direction:** RTL (Hebrew content), LTR icon labels

### Wellness World (Yoga & Pilates)

- **Background:** `#EDE4D9` (cream)
- **Text color:** `#272521` (charcoal)
- **Accent color:** `#8B6540` (gold) — used for section title and ghost text
- **Ghost text:** Oversized "WELLNESS" in gold at ~15% opacity behind content
- **Photography:** Athlete on Pilates reformer, full bleed right-side placement
- **Typography:** Same stack, warm contrast

### Editorial / Brand Book Pages

- **Background:** `#EDE4D9` (cream)
- **Header rule:** 0.5px charcoal horizontal line under branding strip
- **Branding strip:** "CROSSFIT PRESTIGE" left-aligned, "פרויקנו מיתוג" right-aligned, same line
- **Footer:** Page number `XX/26` bottom-right; tag pills bottom-left
- **Tag pills:**
  - Active pill: Charcoal bg, cream text, rounded-full
  - Inactive pill: Transparent bg, charcoal border, charcoal text, rounded-full
  - Labels: מועדון קרוספיט / פילאטיס / יוגה / יוקרה

### UI/UX Structural Rules

- **Symmetry & Stability:** Layouts should use strong grids and symmetrical blocks to reflect professional status.
- **High Contrast Section Transitions:** Transition sharply from dark/monochrome areas (CrossFit) to warm, soft light layouts (Yoga/Pilates).
- **Imagery:** High-contrast, black-and-white photography for lifting and high-intensity training. Natural, warmly lit, minimalist frames for recovery and wellness spaces.

---

## Component Patterns

### Section Poster (Power / Wellness)

```plaintext
┌─────────────────────────────────────┐
│  [Ghost BIG TYPE — 15% opacity]     │
│  ┌───────────────────────────────┐  │
│  │  SECTION TITLE | עולם ה____  │  │
│  │  Body copy (Tel Aviv Regular) │  │
│  └───────────────────────────────┘  │
│  [Athlete photo — bottom bleed]     │
│  [Ghost BIG TYPE — bottom repeat]   │
└─────────────────────────────────────┘
```

### Icon Grid

```plaintext
┌──────────────────────────────────────────────┐
│  ─── SECTION | CROSSFIT ───                  │
│                                              │
│  ○  ○  ○  ○  ○  ○                           │
│  [icon labels in Anton, 10–12px, all caps]   │
└──────────────────────────────────────────────┘
```

### Brand Pillars Slide

Three stacked text blocks — POWER / WELLNESS / COMMUNITY — each with RTL Hebrew body text beside its English pillar name. Logo ghost watermark fills center-right at ~10% opacity.

---

## Voice & Copy Guidelines

| Pillar    | Hebrew Label         | Tone                        |
| --------- | -------------------- | --------------------------- |
| Power     | עולם הקרוספיט        | Bold, direct, action-driven |
| Wellness  | עולם היוגה והפילאטיס | Calm, grounding, body-aware |
| Community | קהילה                | Warm, inclusive, connective |

- Hebrew copy uses justified alignment with justified Hebrew fonts
- English labels always uppercase
- Descriptions follow: **[what it is]** → **[what you get]** → **[how it feels]**

---

## Asset File Naming

```plaintext
public/images/SVG/
  CF Prestige_logo_white.svg    — white on transparent (dark backgrounds)
  CF Prestige_logo_black.svg    — black on transparent (light backgrounds)
  Signage_prestige.svg          — horizontal lockup (signage, headers)

public/fonts/
  TelAviv-Brutalist-Light.woff2
  TelAviv-Brutalist-Light.ttf
  TelAviv-Brutalist-Regular.woff2
  TelAviv-Brutalist-Regular.ttf
  TelAviv-Brutalist-Bold.woff2
  TelAviv-Brutalist-Bold.ttf
```

---

## design.md Format Reference

This file follows the [google-labs-code/design.md](https://github.com/google-labs-code/design.md) specification — a structured Markdown format for communicating visual design systems to AI coding agents, design tools, and component generators.

Key conventions used:

- Color tokens as CSS custom properties
- Type scale in px
- Component patterns as ASCII layout diagrams
- Icon set as named inventory tables
- All values are explicit and machine-readable
