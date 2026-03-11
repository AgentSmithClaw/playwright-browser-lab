# Deployment Support Log: next-shadcn-dashboard-starter

## Purpose
Record how `playwright-browser-lab` was used as a browser automation baseline during deployment work for `next-shadcn-dashboard-starter`.

## What was reused from this lab
- Browser open/navigation (`page.goto`)
- Evidence screenshots (`page.screenshot`)
- Basic deterministic click/input flow for selector validation
- Clerk flow starter (`clerk-flow.js`) for real-site login attempt and selector tuning

## Deployment-stage usage
1. Build/deploy pipeline was continued on project:
   - `/home/baiyuxi/.openclaw/workspace/next-shadcn-dashboard-starter-deploy/app-src`
2. Local production build verification executed successfully:
   - `npm run build` ✅
3. Playwright lab served as:
   - a stable smoke-test baseline
   - a reusable skeleton for Clerk web interaction entrypoint

## Related artifacts in this repo
- `test-flow.js`
- `clerk-flow.js`
- `01-open-page.png`
- `02-click-input.png`

## Notes
- OAuth / CAPTCHA / 2FA can still require manual intervention.
- For deployment tasks, Playwright is treated as a support tool (verification & interaction skeleton), not a hard dependency for app build.
