# Omegaa Constructions

Official website for **Omegaa Construction** — a construction company based in Kanchipuram. Static Next.js frontend with project galleries, design studio, services, and contact information.

---

## Project structure

```
omegaa-constructions/
├── frontend/                      # Next.js app (TypeScript + Tailwind)
│   ├── app/                       # Routes and pages
│   ├── components/                # UI, layout, page sections
│   ├── lib/                       # Data, SEO, images, project config
│   └── public/                    # Deployed static assets
│       ├── design-studio/         # Design Studio media (numbered files + omegaa/)
│       └── images/
│           ├── about/             # About page images (founder photo)
│           └── completed/         # Completed project galleries + hero
│
├── website/                       # Source media (original uploads)
│   ├── branding/                  # Logos and brand assets
│   ├── design-studio/             # Design Studio source files
│   │   ├── 01-design-overview/
│   │   ├── 02-sketchup-video/
│   │   ├── 03-sketchup-image/
│   │   ├── 04-rendered-image/
│   │   ├── 05-omegaa-visualizations/
│   │   └── omegaa-source/         # Original OMEGAA room renders
│   ├── completed-projects/        # Per-project source photos (by slug)
│   │   ├── hero/                  # Completed Projects page hero slideshow
│   │   └── {slug}/                # e.g. vaiyavoor-site, ngo-nagar
│   └── archive/                   # Unused / legacy source folders
│
├── content.md                     # Site copy reference
├── .cursorrules                   # Project coding rules
└── README.md
```

**Media workflow:** Add or replace source files in `website/`, then copy them into the matching `frontend/public/` path for the site to use them.

---

## Requirements

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | 18+ | Frontend dev server and build |

---

## Setup and run

```powershell
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production build (static export)

```powershell
cd frontend
npm run build
npm run preview
```

---

## Contact page

Update phone, email, and office address in `frontend/lib/contact.ts` (`contactChannels` and `officeLocation`).

---

## Design Studio

Page order on `/ongoing` (Design Studio nav):

1. **Design Overview** — PDF exported as `01-design-overview.png`
2. **3D Model Video** — `02-sketchup-video.mp4`
3. **Design Visualizations collage** — SketchUp image, rendered image, and room renders

**Source:** `website/design-studio/`  
**Deployed:** `frontend/public/design-studio/`  
**Config:** `frontend/lib/design-studio.ts`

---

## Completed projects

- **Hero slideshow:** `website/completed-projects/hero/` → `frontend/public/images/completed/hero/`
- **Project galleries:** `website/completed-projects/{slug}/` → `frontend/public/images/completed/{slug}/`
- **Metadata and order:** `frontend/lib/completed-projects.ts`

---

## About page

- Founder photo: replace `frontend/public/images/about/founder.jpg`
- Founder copy and timeline: `frontend/lib/about.ts`

---

## License

Private — Omegaa Constructions.
