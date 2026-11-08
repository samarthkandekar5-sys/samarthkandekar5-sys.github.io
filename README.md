# Samarth Kandekar — personal website

Premium editorial landing page built with Next.js App Router, TypeScript and CSS. Venture and profile content live in `src/data/site.ts`.

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build`.

## Confirm before launch

- Confirmed public email, LinkedIn, Instagram, X, VelCura Health, and Adflow OS URLs are configured in `src/data/site.ts`.
- Unpublished links remain intentionally omitted until confirmed.
- Set `CONTACT_WEBHOOK_URL` in the deployment environment to a private HTTPS endpoint that accepts `{ name, email, subject, message }`. The contact API returns an explicit configuration error until this is set; no API key is exposed in the browser.
- Confirm the venture descriptions, partner designation and product status statements.
- `public/samarth-kandekar-bio.pdf` and `.txt` carry the same founder positioning as the website.
- The media kit is available at `/media-kit` and is linked from the profile section.
- Founder portrait, VelCura Health logo, Adflow OS logo and signature assets are in `public/images/`.

The site describes VelCura Health as in closed clinical deployment and AdFlow OS as autonomous marketing infrastructure. Clinical decision support is described as operating under practitioner oversight.
