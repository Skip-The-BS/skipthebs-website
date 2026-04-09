# Skip the BS — Agent Context

This file gives AI agents full organisational context for the **skipthebs-website** repo. Read it before touching anything. For design system details, copy decisions, and per-file constraints also read `CLAUDE.md`.

---

## The organisation

**Skip the BS** is an independent software operation building focused, ethical mobile apps. One app at a time. Each one does a single thing well — no ads, no subscriptions, no dark patterns. Core functionality is free forever. Extras are available as a one-time purchase. That's the whole model.

The brand site (`skipthebs.app`) is the umbrella. Individual apps get their own domains and repos. Currently there is one app:

| App | Domain | Repo |
|-----|--------|------|
| NO BS IF (intermittent fasting timer) | nobsif.app | `nobsif-website` |

---

## The manifesto (8 points — do not paraphrase or soften)

1. Apps should **do the thing** — not sell you coaching, community, or a personality.
2. Your data is yours. Not our product. Not our leverage. Stays on your phone.
3. Free forever means **free forever**. Core functionality is not a trial. There is no expiry date.
4. One-time purchase means **once**. You bought it. You own it. We will not invent a subscription tier next year.
5. No dark patterns. No "are you sure?" when you cancel. No confetti when you pay. No guilt when you don't.
6. Notifications ask permission and deliver facts. No motivational spam. Just the time.
7. Good software is craft. We ship when it's ready. We don't ship features to justify a subscription.
8. Accessibility is not a feature. **It's the floor.** Every app we build supports the full range of assistive technologies, by default, without exception.

---

## Organisation-level standards

These three standards apply to every app Skip the BS ships. They are defined canonically on this site and mirrored (denormalised) to each app's own website so it is self-contained. If these pages change here, the app sites should be updated to match.

### Privacy policy (`/privacy`)
**Canonical page.** One policy covers all apps. Key commitments:
- No data collection of any kind
- All user data stays on-device, never transmitted to any server
- No analytics, no crash reporting, no advertising identifiers, no third-party SDKs that phone home
- Purchases processed entirely by Apple/Google — we never see payment info
- Email contact only: we receive the address, reply, and don't retain longer than needed
- No mailing lists, no sharing, ever
- This will never change. If it ever did, we would be explicit and give users a choice.

### Accessibility commitment (`/accessibility`)
**Canonical page.** Every app is held to this standard before shipping:
- VoiceOver (iOS) and TalkBack (Android) — full support, meaningful labels, timers read in plain language
- Voice Control — every action completable without touch
- Dynamic Type — full range of system font sizes, nothing clips
- Reduced Motion — respects system preference, motion is always decorative never functional
- WCAG 2.1 AA contrast — every theme, free or paid, validated before release
- Colour is never the only signal — every state uses shape, weight, or text in addition
- Light mode always free — accessibility is never paywalled
- All touch targets ≥ 44×44pt
- Logical focus order throughout

### FAQ (`/faq`)
**To be created.** Generic questions that apply across all apps regardless of which one the user has. Covers: business model, privacy, pricing philosophy, accessibility, support, data ownership, platform availability. App-specific FAQs live on the app's own site but link here for org-level questions.

---

## Content architecture

```
skipthebs.app/              ← brand homepage (hero, apps, manifesto, support)
skipthebs.app/privacy       ← canonical privacy policy (all apps)
skipthebs.app/accessibility ← canonical accessibility commitment (all apps)
skipthebs.app/faq           ← canonical FAQ (org-level, all apps)
```

Each app site (`nobsif.app`, etc.) mirrors privacy, accessibility, and FAQ content so users never need to leave the app's domain to find this information. The app site versions may include app-specific additions but must not contradict the org-level standards.

---

## Voice and tone

**Confident, direct, dry. Not arrogant. Not preachy.**

- Write like someone with standards and a sense of humour, not a marketing team.
- Never: motivational jargon, subscription guilt, wellness-guru language, excessive exclamation marks.
- Short sentences preferred. Every word earns its place.
- "A real person reads every message" — not "one person". Scalable, honest.

---

## Technical setup

- Pure HTML/CSS/JS — no frameworks, no build step, no npm required to run
- `npm start` runs a local dev server (configurable via `PORT` env var)
- Deploy: drag folder to Netlify or push to GitHub (`skipthebs-app` org)
- DNS: Namecheap. Email: `hello@skipthebs.app` forwards to owner's inbox.
- Fonts: Space Mono 700/400 (headings, labels), DM Sans 300/400 (body) — Google Fonts
- Do not use Inter, Roboto, Arial, or system fonts on any web page

---

## What NOT to do

- No cookie banner (no cookies)
- No analytics (philosophy, not oversight)
- No newsletter signup
- No social media links (deliberate omission)
- No SKY theme without explicit instruction
- No utility links (privacy, accessibility, faq) in the sticky nav — footer only
- No font-size below 14px for anything a human needs to read
- Do not change `#bada55` — it is intentional
