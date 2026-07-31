# Fix Visual Monotony & Layout Inconsistency on CrossFit Prestige Landing Page

All changes are in a single file: [demo-preview.astro](file:///Users/orguetta/Downloads/crossfit_prestige_links/src/pages/demo-preview.astro) (1760 lines of HTML + SCSS).

## Current Page Section Flow (problem)

| # | Section | Background | Text Align | Layout |
|---|---------|-----------|-----------|--------|
| 1 | Hero | Dark charcoal | RTL (right) | text-right / video-left grid |
| 2 | Marquee | Dark | center | ticker strip |
| 3 | About ("בית הכוח") | Dark charcoal | RTL (right) | text-right / image-left grid |
| 4 | Why Us ("הגדרנו מחדש") | Dark charcoal | center (`.center`) | centered header + 3-col card grid |
| 5 | Studio (פילאטיס) | **Cream** ✓ | RTL (right) | text-right / image-left grid |
| 6 | Coaches | Dark charcoal | **center** ← bug | centered header + 2-col cards |
| 7 | Schedule | Dark charcoal | **center** ← bug | centered header + iframe |
| 8 | Contact/Presale | Dark charcoal | **center** ← bug | 2-col grid (info + form) |

**Problems identified:**
1. Sections 1→3→4 are all dark with similar text-right + sidebar layout = monotonous
2. Only one light section (Studio) feels isolated, not part of a rhythm
3. Sections 6, 7, 8 use `.section-header.center` — center-aligned headers after the light section. The Coaches and Schedule section headers have the `center` class explicitly, which breaks RTL consistency.

## Proposed Changes

### 1. Convert "Why Us" (section 4) to cream/Wellness world

This is the single highest-impact change. Right now the page goes: dark → dark → dark → cream → dark → dark → dark. By making "Why Us" light cream, it becomes: dark → dark → **cream** → dark → **cream** → dark → dark → dark — a proper alternating rhythm with two "breathing" breaks before the second half.

#### [MODIFY] [demo-preview.astro](file:///Users/orguetta/Downloads/crossfit_prestige_links/src/pages/demo-preview.astro)

**HTML (lines 160–213):** No structural HTML change needed — only CSS.

**SCSS (`.why-us` block, lines 1081–1185):** Add Wellness-world treatment:
- Set `background-color: $color-cream-white` and `color: $color-dark-charcoal`
- Override `.eyebrow` color for light bg
- Override `.section-title`, `.section-desc` to charcoal
- Override `.grid-card` background to `$color-cream-white`, text to charcoal
- Override `.card-icon` background to `$color-dark-charcoal` with sand SVG fills
- Override `.card-number`, `.card-title`, `.card-text` colors for light bg
- Give grid cards a subtle border in gold/sand instead of the bronze gutter

---

### 2. Flip About section grid to image-LEFT / text-RIGHT (visual variation)

Currently Hero and About both do `text-right / visual-left` (in RTL, text on the start side, image on the end side). We flip About so the **image** is on the RTL start side (right) and text is on the end side (left). This gives variety between Hero → About even though both are dark.

#### [MODIFY] [demo-preview.astro](file:///Users/orguetta/Downloads/crossfit_prestige_links/src/pages/demo-preview.astro)

**SCSS (`.about-grid`, line 936–941):** Reverse the column order. Change `grid-template-columns: 1.2fr 1fr` to `grid-template-columns: 1fr 1.2fr` and add an `order` swap so `.about-visual` comes first (visually on the right in RTL) and `.about-copy` second (visually on the left).

---

### 3. Fix alignment bug — make Coaches & Schedule right-aligned (RTL)

Remove the `center` class from the `.section-header` in Coaches (line 258) and Schedule (line 288) sections so they match the RTL right-alignment of the rest of the page. The only section that should be centered is the Contact/Presale form title (deliberate focal point).

#### [MODIFY] [demo-preview.astro](file:///Users/orguetta/Downloads/crossfit_prestige_links/src/pages/demo-preview.astro)

**HTML changes:**
- Line 258: `<div class="section-header center">` → `<div class="section-header">`
- Line 288: `<div class="section-header center">` → `<div class="section-header">`

---

### 4. Add RTL `text-align: right` to contact section info block

Ensure the contact info block (location, WhatsApp) is right-aligned per RTL. The form itself can stay centered as a deliberate focal point.

#### [MODIFY] [demo-preview.astro](file:///Users/orguetta/Downloads/crossfit_prestige_links/src/pages/demo-preview.astro)

**SCSS (`.contact-section`):** The contact grid is already a 2-col layout and the info block should naturally be RTL. Verify `.contact-info` doesn't inherit any center alignment. The `.form-title` center alignment (line 1512) is fine — that's the form's deliberate focal point.

---

## Final Page Rhythm After Changes

| # | Section | Background | Text Align | Layout variation |
|---|---------|-----------|-----------|-----------------|
| 1 | Hero | Dark | RTL | Text-right, video-left |
| 2 | Marquee | Dark | center | Strip (fine) |
| 3 | About | Dark | RTL | **Image-right, text-left** (flipped from hero) |
| 4 | **Why Us** | **Cream** ✓ | RTL | Card grid (light world) |
| 5 | Studio | **Cream** ✓ | RTL | Text-right, image-left |
| 6 | Coaches | Dark | **RTL** ✓ fixed | 2-col cards |
| 7 | Schedule | Dark | **RTL** ✓ fixed | Iframe embed |
| 8 | Contact | Dark | RTL + centered form | Lead capture |

Rhythm: **Dark → Dark → Cream → Dark(ish marquee?) → Cream → Dark → Dark → Dark**

> [!IMPORTANT]
> Two consecutive cream sections (Why Us → Studio) could feel like one long block. To prevent this, the existing Marquee strip between About and Why Us (which is dark-tinted) acts as a separator. But Why Us and Studio are adjacent with no separator. I'll add a thin dark charcoal divider strip between them (a subtle `border-top` or a narrow horizontal rule element) to make each light section feel distinct.

## Open Questions

1. **Two cream sections back-to-back (Why Us → Studio):** The marquee sits between About and Why Us, providing a dark break. But Why Us and Studio will be consecutive cream sections. Should I insert a small dark separator between them, or are you okay with them flowing together as one light "wellness" zone before returning to dark?

2. **Schedule section alignment:** The Arbox iframe is a third-party widget that may look better centered. Should I keep the section header right-aligned (RTL) but leave the iframe centered below it?

## Verification Plan

### Manual Verification
- Open the demo-preview page in browser and scroll through to confirm:
  - Dark/light rhythm feels varied and deliberate
  - About section grid is visually flipped vs hero
  - All Hebrew text after the light sections is right-aligned
  - Color tokens match exactly (no new colors introduced)
  - Cards in the now-cream Why Us section are readable with proper contrast
  - Mobile responsiveness is preserved
