# Karis Cascade

Workplan execution engine — a tool inside [Karis Mind](https://karismind.com).
Deployed at `cascade.karismind.com`.

## Structure

```
/                     Landing page
/login.html           Sign in
/signup.html          Create account
/forgot.html          Password reset
/app/index.html       Input flow — 4-path wizard
/app/output.html      Cascade output screen
/app/sessions.html    Sessions dashboard
/app/settings.html    Account & settings
/assets/css/          karis-cascade.css — shared design system
/assets/js/           nav.js — shared nav behaviour
/vercel.json          Clean URL rewrites + security headers
/.gitignore
```

## Build status — ALL PAGES COMPLETE ✅

| # | Page | Status |
|---|------|--------|
| 1 | `index.html` | ✅ |
| 2 | `login.html` | ✅ |
| 3 | `signup.html` | ✅ |
| 4 | `forgot.html` | ✅ |
| 5 | `app/index.html` | ✅ |
| 6 | `app/output.html` | ✅ |
| 7 | `app/sessions.html` | ✅ |
| 8 | `app/settings.html` | ✅ |

**Audit: 0 broken links · 0 undefined CSS vars · 0 tag imbalances · valid vercel.json**

## Deploy to Vercel — drag & drop

1. Go to github.com → create a new repo (e.g. `karis-cascade`)
2. Drag the **contents** of this folder into the repo's upload area (or use git below)
3. In Vercel → Import the repo → Framework preset: **Other** → Deploy
4. Add custom domain `cascade.karismind.com`
5. DNS: add CNAME `cascade → cname.vercel-dns.com`

### Or via git

```bash
git init
git add .
git commit -m "feat: Karis Cascade — all pages complete"
git remote add origin https://github.com/YOUR-ORG/karis-cascade.git
git push -u origin main
```

## Design system

- **Fonts:** DM Serif Display (headings) · Inter (UI) — Google Fonts CDN
- **Icons:** Tabler Icons — CDN
- **Brand accent:** Violet `#7C5CBF`
- **Base CSS:** `assets/css/karis-cascade.css`

## Wire up checklist (before go-live)

- [ ] Replace `setTimeout` in `app/index.html` with real generate API call
- [ ] Uncomment `window.location.href = 'app/index.html'` in login/signup after auth
- [ ] Wire Google SSO `handleSSO()` to your OAuth provider
- [ ] Replace `GOALS_DEMO` array in `app/index.html` with document-parse API response
- [ ] Connect export buttons in `app/output.html` and `app/sessions.html`
- [ ] Wire `forgot.html` submit to your password-reset API
- [ ] Replace `sessionStorage` session state with your backend
