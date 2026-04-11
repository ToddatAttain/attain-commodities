# Attain Commodities Website

A professional B2B commodities trading website for Attain Commodities, a DBA of Attain Brands, LLC.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Deployed on Vercel

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, value proposition, commodity areas, process overview |
| `/about` | About — Company overview, philosophy, values, commercial approach |
| `/capabilities` | Capabilities — Sourcing, matching, coordination, logistics, deal structuring |
| `/markets` | Markets — Fertilizer/Urea, Energy/Crude, Industrial Commodities |
| `/process` | Process — Five-step workflow from inquiry to execution |
| `/contact` | Contact — Structured inquiry form with API route |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel will auto-detect the Next.js configuration.
4. Add environment variables if needed (see below).
5. Deploy.

**Note:** The site uses `next/image` with Unsplash remote images. The `images.remotePatterns` configuration is already set in `next.config.ts`.

---

## Environment Variables

The site works without any environment variables. The following are optional for enhanced functionality:

### Airtable (Contact Form Submissions)

```
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Inquiries
```

### Email Notifications (Resend)

```
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Attain Commodities <onboarding@resend.dev>
```

To enable either integration, uncomment the relevant code block in:
`src/app/contact/api/route.ts`

---

## Project Structure

```
src/
  app/
    about/page.tsx
    capabilities/page.tsx
    contact/
      page.tsx
      api/route.ts
    markets/page.tsx
    process/page.tsx
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts
  components/
    Navigation.tsx
    Footer.tsx
next.config.ts
tailwind.config.ts (v4 via CSS)
```

---

## SEO

- Semantic HTML throughout
- Unique page titles and meta descriptions per page
- OpenGraph tags for social sharing
- `sitemap.xml` auto-generated via `src/app/sitemap.ts`
- `robots.txt` auto-generated via `src/app/robots.ts`
- Natural keyword inclusion: commodities trading, urea supplier, crude sourcing, global commodities

---

## Design System

| Token | Value |
|-------|-------|
| Primary | `#1a1a1a` (Charcoal) |
| Secondary | `#ffffff` (White) |
| Accent | `#c9a84c` (Gold) |
| Typography | Playfair Display (headings) · Inter (body) |

**Style:** Minimal, institutional, high-end but restrained. No bright colors, flashy animations, or clutter.

---

## Compliance Notes

- No guarantees of supply are made anywhere on the site
- No exaggerated claims or unverified metrics
- No regulatory misstatements
- All language is reviewed for legal exposure

---

## Contact

**Email:** commodities@attainbrands.com
**Legal Entity:** Attain Commodities, a DBA of Attain Brands, LLC
