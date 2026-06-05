# Office Tracker — Website

Marketing + legal pages for the Office Tracker iOS app.

## Pages

| Path | Purpose |
|---|---|
| `/` | Landing page |
| `/privacy` | Privacy Policy — required by App Store |
| `/terms` | Terms of Service |
| `/support` | Support / FAQ + contact email — required by App Store |
| `/delete-account` | Public deletion instructions — required by App Store |

## Develop locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel (one-time setup)

```bash
npm install -g vercel
vercel login
vercel             # First run: creates the project, deploys preview
vercel --prod      # Production deploy
```

Vercel auto-detects Next.js. Zero config needed.

After the first `vercel --prod`, your production URL is shown — typically
`https://office-tracker-web.vercel.app` (or whatever name you pick).

## After deploying — wire URLs into the iOS app

The four URLs the iOS app references live in
`office-time-tracking/src/lib/links.ts`. Update the base URL there once your
Vercel domain is live.
