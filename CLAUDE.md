# Skip the BS — Site Context for Claude

This file gives you full context on the project. Read it before touching anything.

---

## What this repo is

Static website for **skipthebs.app** — the brand umbrella for a suite of NO BS mobile apps. No frameworks, no build step, no npm. Pure HTML/CSS/JS. Deployable by dragging a folder onto Netlify or pushing to GitHub Pages.

Two pages ship with this repo:
- `index.html` — single long-scroll homepage with sticky nav
- `privacy.html` — privacy policy, plain English

Logo and brand assets:
- `skipthebs-wordmark-dark.svg` — wordmark on dark bg
- `skipthebs-wordmark-transparent.svg` — wordmark, transparent bg
- `nobsif-icon.svg` — NO BS IF app icon, Ocean theme
- `nobsif-icon.png` — raster version for favicon/meta
- `skipthebs-wordmark.png` — raster wordmark

---

## Brand philosophy (read this, it informs every decision)

NO BS is a suite of mobile apps that do one thing well. No ads, no subscriptions, no dark patterns. Core functionality is free forever. One-time purchase for extras. That's the whole model.

The name and positioning are the product. Every word on the site should feel like it was written by someone with standards and a sense of humour — not a marketing team.

**Voice:** Confident, direct, dry. Not arrogant. Not preachy. Not a wellness guru.
**Never:** Motivational jargon, subscription guilt, dark patterns, excessive exclamation marks.

---

## Design system

### Colours — Brand site (graphite)
```
--bg:      #0f0f0f   /* near-black graphite, no hue */
--surface: #161616   /* card backgrounds */
--border:  #202020   /* borders */
--border2: #2a2a2a   /* hover borders */
--text:    #f0ede8   /* parchment — never pure white */
--muted:   #909090   /* secondary text — must be legible */
--dimmed:  #606060   /* tertiary text, labels */
--faint:   #303030   /* decorative only, not readable text */
--green:   #bada55   /* MOSS accent — used sparingly on brand site */
--orange:  #e8673a   /* alert/warning only */
```

### Colours — NO BS IF app (Ocean theme, default)
```
accent:  #2a8fa0
bg:      #080f11
surface: #0d1a1e
border:  #122228
```

### Full theme roster (NO BS IF)
| Theme    | Accent    | Bg        | Type         | Status       |
|----------|-----------|-----------|--------------|--------------|
| OCEAN    | #2a8fa0   | #080f11   | Dark         | FREE DEFAULT |
| MOSS     | #bada55   | #0d1a0f   | Dark         | One-time     |
| ICE      | #1a8aa8   | #f8fdff   | **Light**    | One-time     |
| SOIL     | #8b5e3c   | #110c08   | Dark         | One-time     |
| GLAM     | #d47fa6   | #1a0d14   | Dark         | One-time     |
| SOLAR    | #d4aa3a   | #1a1608   | Dark         | One-time     |
| CRIMSON  | #c45c6a   | #1a080a   | Dark         | One-time     |
| GRAPHITE | #8a8a8a   | #0f0f0f   | Dark         | One-time     |

Note: GRAPHITE is the brand site's own default. MOSS is the Growing App's default (separate app, not yet built). SKY theme is parked — do not add without instruction.

### Typography
- **Space Mono 700** — wordmark, headings, labels, timers, all-caps UI text
- **Space Mono 400** — secondary labels, metadata
- **DM Sans 300/400** — body copy, descriptions
- **System/SF Pro** — used inside the React Native app itself, not on the web

### Minimum font sizes (accessibility baseline)
- Body copy: 18px (16px mobile)
- Nav links: 14px
- Section labels: 14px
- Micro-labels (decorative only): 11-12px — never use for anything that needs to be read

---

## Site structure

### index.html — single scroll page

Four sections reachable via sticky anchor nav:
```
#hero       — headline, tagline, platform badges
#apps       — app cards + "more coming" card
#manifesto  — 7-point manifesto
#support    — support cards + email
```

Sticky nav items: APPS · MANIFESTO · SUPPORT
Nav active state: tracks scroll position via IntersectionObserver

**Do not add nav links to /privacy or any other utility page.** Those are linked from body copy only.

### privacy.html — standalone

Linked from:
- Support section body copy: "Read our privacy policy"
- Footer of index.html

Has its own nav with a ← BACK link. Matches index.html visual style exactly.

---

## Key copy decisions (do not change without instruction)

**App tagline (NO BS IF):**
> "Start a fast fast. Fix the time if you forgot. Keep the rest out of the way."

**More coming card:**
> "More apps are in the works. Each one will follow the same principle — one job, done well, no nonsense. We don't need a roadmap to prove it."

**Footer:**
> "© 2026 — made with craft and mild indignation"

**Analytics line in privacy.html:**
> "We have no idea how many people use our apps, which features they use, or how long their sessions are. In fact, we have no idea if anyone uses them at all. Our friends and family might be lying to us."

**Support tone:**
> "A real person reads every message" — NOT "one person". Scalable, honest, still better than a bot.

---

## What NOT to do

- Do not add a cookie banner. We have no cookies.
- Do not add analytics. Philosophy, not oversight.
- Do not add a newsletter signup. No.
- Do not add social media links. Deliberate omission.
- Do not change `#bada55` to anything else. It is a real hex code. It ships intentionally.
- Do not add a SKY theme without explicit instruction — it is parked.
- Do not use Inter, Roboto, Arial, or system fonts on the web pages.
- Do not put utility links (privacy, contact) in the sticky nav.
- Do not use `font-size` below 14px for anything a human needs to read.

---

## Cloudflare email mangling — known issue

When editing `index.html` or `privacy.html` through the Claude.ai interface, Cloudflare's CDN sometimes replaces `mailto:hello@skipthebs.app` links with obfuscated markup and injects a script tag. It also occasionally truncates the file.

**If you see** `<span class="__cf_email__">` or `/cdn-cgi/` anywhere in the file — fix it. Replace with plain `mailto:hello@skipthebs.app`. Remove any injected `<script data-cfasync="false" src="/cdn-cgi/...">` tags. Verify `</script>`, `</body>`, and `</html>` are present at the end of the file.

This does not happen when editing locally. It is a Claude.ai environment issue, not a code issue.

---

## Deployment

Target: static hosting — Netlify or GitHub Pages (org: `skipthebs-app`)
DNS: managed via Namecheap, pointed at hosting provider
Email: `hello@skipthebs.app` forwards to owner's personal inbox via Namecheap email forwarding
No server, no database, no build step required.

---

## App repo context

The mobile app (NO BS IF) lives in a separate repo. The app product page will live at `nobsif.app` — a separate domain and separate repo. Do not build the app product page in this repo.

---

## Files in this repo

```
index.html                          ← brand homepage, do not rename
privacy.html                        ← privacy policy, standalone
skipthebs-wordmark-dark.svg         ← wordmark on dark background
skipthebs-wordmark-transparent.svg  ← wordmark, transparent background
nobsif-icon.svg                     ← NO BS IF app icon (Ocean theme)
nobsif-icon.png                     ← raster version for favicon/meta use
skipthebs-wordmark.png              ← raster wordmark
CLAUDE.md                           ← this file
README.md                           ← human-readable project overview (to be written)
```

---

*Last updated: March 2026*
