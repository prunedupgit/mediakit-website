# CLAUDE.md — mediakit-website

This file is the memory for this project. Read it at the start of every session before making any changes.

---

## Who this site is for

**Assem Ongarbayeva** — commercial strategy and operational delivery professional in Australia's energy sector. Based in Melbourne. Actuarial by training, operator by nature. This is her personal profile/brand website, not a company site.

Her background: wholesale electricity markets, distributed energy (Birdwood Energy), climate-tech start-ups (UPowr), AGL Energy (7 years), board observership. Focused on the net-zero transition.

She has ADHD, works alone, values clarity and directness. Hates generic output, AI-sounding writing, and fluff.

---

## Folder structure

```
mediakit-website/
├── index.html       — the entire website (single page)
├── style.css        — all styles
├── main.js          — scroll effects, mobile menu, form handling
├── CLAUDE.md        — this file
└── 1611013360824.jpeg — Assem's profile photo (used in About section)
```

The site is hosted on **GitHub Pages** at:
`https://prunedupgit.github.io/mediakit-website/`

GitHub repo: `https://github.com/prunedupgit/mediakit-website`

To deploy changes: `git add -A && git commit -m "message" && git push`

---

## Design system

### Theme
Dark theme — inspired by Waking Up (wakingup.com) and structured like Sam Harris's personal site (samharris.org).

### Colors
```
--bg:          #08080f   (main background — very dark navy-black)
--bg-2:        #0d0d1a   (alternate section background)
--bg-3:        #111120   (third background tone)
--surface:     #14141f   (cards, inputs)
--border:      rgba(255,255,255,0.08)
--white:       #ffffff
--off-white:   #e8e6e1   (body text)
--muted:       rgba(232,230,225,0.5)  (secondary text)
--accent:      #7c6af5   (purple — CTAs, labels, highlights)
--accent-soft: rgba(124,106,245,0.15)
--accent-glow: rgba(124,106,245,0.25)
```

### Fonts
- **Fraunces** (Google Fonts) — serif, used for headings and the hero name. Italic variant used for emphasis within headings.
- **Inter** (Google Fonts) — sans-serif, used for all body text, nav, labels, buttons.

### Layout
- Max content width: `1160px`
- Nav height: `68px` (fixed, frosted glass blur on scroll)
- Section padding: `140px 0`
- Container padding: `0 40px` (desktop), `0 24px` (mobile)

### Buttons
- `btn--primary`: purple background `#7c6af5`, white text, rounded 6px
- `btn--ghost`: transparent, white border, white text

### Labels (section eyebrows)
Small uppercase text in accent purple, `0.7rem`, `letter-spacing: 0.2em`. Used above every section title.

---

## Page sections (top to bottom)

### 1. Nav
Fixed top bar. Logo: "A.O." Links: About, Experience, Focus Areas, Writing, Contact. Right CTA: "Get in Touch". Collapses to hamburger on mobile. Frosted glass effect on scroll.

### 2. Hero
Full-screen. Two ambient purple glow blobs (CSS animation). Eyebrow text: location + role. Large name in Fraunces serif. Bio paragraph. Two buttons: "View Experience" (primary) + "About Me" (ghost).

### 3. About
Two-column layout. Left: profile photo (`1611013360824.jpeg`) + 3 stats (12+ years, A$30m assets, 10 GW traded). Right: bio text (3 paragraphs from LinkedIn) + two CTA links. Background: `--bg-2`.

### 4. Experience
Four cards in a grid. Large featured card (full-width), two half-width cards, one full-width wide card. Each has a gradient image area, tag badge, year, title, and description. Cards:
1. General Manager, Distributed Energy — Birdwood Energy (2024–2025)
2. Vendor Governance Lead — AGL Retail Transformation (2023–2024)
3. Chief Strategy Officer & Chief of Staff — UPowr (2020–2023)
4. AGL Energy — 7 Years Across Four Roles (2013–2020)

### 5. Focus Areas
6-card grid (3 columns). Background: `--bg-3`. Cards:
1. Commercial Strategy
2. Distributed Energy
3. Operational Delivery
4. Corporate Governance
5. Start-up & Scale-up
6. Energy Markets

### 6. Writing
4 article cards in a 2-column grid. Currently placeholder titles — not yet published. Background: `--bg-2`.

### 7. Newsletter
Centred section with email signup form. Purple ambient glow in background. Background: `--bg`.

### 8. Contact
Two-column: left has contact text + links (email, LinkedIn, Twitter), right has a contact form (name, email, message). Background: `--bg-2`.

### 9. Footer
Three-row top: logo, nav links, social links. Bottom row: copyright + privacy policy link. Background: `--bg`.

---

## Animations & interactions
- **Scroll reveal**: elements fade up as they enter the viewport (IntersectionObserver, `opacity 0 → 1`, `translateY 24px → 0`)
- **Hero glows**: two blobs animate with `floatGlow` keyframes
- **Nav**: adds `.scrolled` class on scroll — triggers blur + border
- **Mobile menu**: slides down from top, links stagger in
- **Form submissions**: fake send with 1–1.2s delay, shows success message

---

## Assem's preferences for this site
- **No fluff, no AI-sounding copy** — writing must sound like a real person
- **Dark and minimal** — do not add bright colours or busy elements
- **Content-first** — design serves the writing, not the other way around
- **One change per prompt** — make changes incrementally, not in bulk
- **Always push to GitHub after changes** so the live site stays current

---

## What still needs doing
- [ ] Replace writing section placeholder articles with real published essays
- [ ] Add real email address to contact section (currently `hello@assem.co`)
- [ ] Add real Twitter/X and LinkedIn URLs to footer social links
- [ ] Consider adding a custom domain (e.g. `assem.co`) — just needs Namecheap purchase + DNS config
- [ ] Add education section (actuarial degree background)
