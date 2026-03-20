# AskSarahConner.com — Developer Handoff

## Project Overview

**Project:** asksarahconner.com
**Type:** Next.js luxury real estate portfolio website
**Client:** Sarah Conner, Real Estate Advisor at The Agency
**Markets:** Malibu, Pacific Palisades, Beverly Hills, Los Angeles
**Contact:** sarah@asksarahconner.com | (310) 871-7600

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI |
| Icons | Lucide React |
| Email | Resend |
| Analytics | Vercel Analytics + Google Analytics |
| Deployment | Docker + AWS CodePipeline/CodeDeploy/EC2 |
| IaC | Terraform |

---

## Repository Structure

```
asc-website/
├── asksarah/                        # Next.js application root
│   ├── app/
│   │   ├── api/contact/route.tsx    # POST endpoint — contact form emails
│   │   ├── why-ASC/page.tsx         # Sarah bio / partnership page
│   │   ├── page.tsx                 # Home page
│   │   ├── layout.tsx               # Root layout (fonts, analytics, GA)
│   │   └── globals.css              # Design tokens + Tailwind base styles
│   ├── components/
│   │   ├── client/                  # "use client" interactive components
│   │   │   ├── contact-form.tsx
│   │   │   ├── hero-slider.tsx
│   │   │   ├── testimonial-carousel.tsx
│   │   │   ├── properties-grid.tsx
│   │   │   ├── header-interactions.tsx
│   │   │   ├── logo-transition.tsx
│   │   │   └── sarah-button.tsx
│   │   └── sections/                # Server-side section components
│   │       ├── site-header.tsx
│   │       ├── site-footer.tsx
│   │       ├── hero-section.tsx
│   │       ├── about-section.tsx
│   │       ├── stats-section.tsx
│   │       ├── properties-section.tsx
│   │       ├── testimonial-section.tsx
│   │       └── contact-section.tsx
│   ├── public/                      # Static assets (images, logo)
│   ├── Dockerfile
│   ├── buildspec.yml                # AWS CodeBuild config
│   ├── appspec.yml                  # AWS CodeDeploy config
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   └── package.json
├── infra/
│   ├── README.md                    # Infrastructure setup guide
│   └── terraform/
│       ├── main.tf                  # VPC, EC2, ALB, ECR, CodePipeline
│       ├── variables.tf
│       └── outputs.tf
└── deploy/
    └── scripts/
        ├── start_container.sh
        └── stop_container.sh
```

---

## Local Development Setup

### Prerequisites
- Node.js 20+
- npm

### Steps

```bash
# 1. Navigate to the app directory
cd asksarah

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create .env.local with the values listed in the Environment Variables section below

# 4. Start dev server
npm run dev
# → http://localhost:3000
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Local dev server with hot reload |
| Build | `npm run build` | Standard Next.js production build |
| Build (local run) | `npm run build:local` | Builds + copies assets to standalone dir |
| Start | `npm run start` | Runs standalone server (after build) |
| Lint | `npm run lint` | ESLint check |

---

## Environment Variables

These must be set in `.env.local` for local development, and injected as environment variables in production (EC2 / Docker run).

| Variable | Description | Example |
|---|---|---|
| `RESEND_API_KEY` | Resend API key for sending emails | `re_xxxxxxxxxxxx` |
| `CONTACT_FROM_EMAIL` | "From" address in outgoing emails | client email |
| `CONTACT_TO_EMAIL` | Recipient of contact form submissions | client email |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token | `xxxxxxxxxxxxx` |

> **Security note:** Never commit `.env.local` to version control. It is listed in `.gitignore`.

### `.env.example` (committed to repo)

A safe template with no real values — commit this so the next developer knows exactly what's needed:

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

Copy it to get started:
```bash
cp .env.example .env.local
# Then fill in the values
```

---

## Pages

### `/` — Home
**File:** `app/page.tsx`

Composed of server-side sections rendered in order:
1. `HeroSection` — Full-width image carousel with CTAs
2. `StatsSection` — Key metrics/achievements
3. `AboutSection` — Mission and market positioning
4. `PropertiesSection` — Featured listings (4 properties)
5. `ReviewSection` — Client testimonials carousel
6. `ContactSection` — Contact form + details
7. `SarahButton` — Floating CTA button

### `/why-ASC` — Why Ask Sarah Conner
**File:** `app/why-ASC/page.tsx`

- Sarah's background and real estate philosophy
- Partnership with Pate Stevens ($1B+ in closed transactions)
- Community giving / philanthropy (tied to sales commissions)
- Supporting services: design team, mortgage assistance, local expertise

---

## API Routes

### `POST /api/contact`
**File:** `app/api/contact/route.tsx`

Accepts contact form submissions and sends an email via Resend.

**Request body:**
```json
{
  "name": "string",
  "email": "string (required)",
  "phone": "string (required)",
  "interest": "buying | selling | both | investing | consultation",
  "message": "string (required)"
}
```

**Responses:**
- `200 { ok: true }` — Email sent
- `400 { error: "Missing required fields" }` — email/phone/message missing
- `500 { error: "..." }` — Resend failure or missing env vars

**Email details:**
- From: `AskSarahConner.com <CONTACT_FROM_EMAIL>`
- To: `CONTACT_TO_EMAIL`
- Reply-To: user's email
- Subject: `New contact form submission from [Name]`

---

## Navigation Links

Defined in `components/sections/site-header.tsx`:

| Label | Target |
|---|---|
| About | `/#about-section` |
| Sarah Conner | `/why-ASC` |
| Pate Stevens | https://www.theagencyre.com/agent/pate-stevens |
| Testimonials | `/#testimonial-section` |
| Ask | `/#contact` |
| Properties | `/#listings-section` |
| Call button | `tel:+13108717600` |

---

## Styling & Design Tokens

Defined in `app/globals.css` using Tailwind CSS v4 and `oklch` color space.

| Token | Value | Usage |
|---|---|---|
| Primary/Accent | `rgb(237, 34, 39)` | Luxury red — CTAs, highlights |
| Background | `oklch(0.98 0.004 60)` | Warm off-white |
| Foreground | `oklch(0.2 0.015 30)` | Deep charcoal |
| Secondary | `oklch(0.95 0.008 55)` | Warm stone |
| Border Radius | `0.5rem` | |

**Font stack:**
- Sans: Lato
- Serif: Playfair Display
- Mono: Montserrat

All fonts loaded from Google Fonts in `app/layout.tsx`.

**Path alias:** `@/` maps to the project root (e.g., `@/components/sections/hero-section`).

---

## Deployment

### Overview

```
GitHub push → AWS CodePipeline → CodeBuild (Docker build + push to ECR) → CodeDeploy (pull + run on EC2)
```

Traffic is served via an **Application Load Balancer** in front of an **EC2 Auto Scaling Group**.

### Docker

The `Dockerfile` uses a 3-stage build:
1. `deps` — Install npm dependencies
2. `builder` — Run `next build` (NODE_ENV=production)
3. `runner` — Serve via `server.js` on port 3000

```bash
# Build and run locally
docker build -t asksarah-local .
docker run -p 3000:3000 \
  -e RESEND_API_KEY=... \
  -e CONTACT_FROM_EMAIL=... \
  -e CONTACT_TO_EMAIL=... \
  asksarah-local
```

### AWS CodeBuild (`buildspec.yml`)

On each push:
1. Logs into Amazon ECR
2. Builds Docker image tagged with git commit SHA
3. Pushes to ECR repo `asksarah-web`
4. Outputs `deploy/imageDetail.json` with the image URI

### AWS CodeDeploy (`appspec.yml`)

On EC2 instances:
1. **ApplicationStop** → `deploy/scripts/stop_container.sh` (removes old container)
2. **AfterInstall** → `deploy/scripts/start_container.sh` (pulls + starts new container)

### Terraform Infrastructure

**Location:** `infra/terraform/`
**Region:** `us-west-2`

Key resources provisioned:
- VPC with public/private subnets
- Application Load Balancer
- EC2 Auto Scaling Group (t2.micro, min 1 / max 2)
- ECR repository (`asksarah-web`)
- CodeStar Connection (GitHub OAuth)
- CodeBuild, CodeDeploy, CodePipeline

**Deploy:**
```bash
cd infra/terraform
terraform init
terraform apply \
  -var="github_owner=PROJXON" \
  -var="github_repo=asksarah" \
  -var="github_branch=main"
```

**After apply:**
1. Go to AWS Console → Developer Tools → Connections
2. Complete GitHub authorization for the CodeStar connection
3. CodePipeline will trigger automatically

**Outputs:** `alb_url`, `pipeline_name`, `ecr_repository_url`

---

## External Services

| Service | Purpose | Config |
|---|---|---|
| Resend | Transactional email (contact form) | `RESEND_API_KEY` env var |
| Google Analytics | Traffic analytics | Hardcoded ID `G-2QN0CB62PP` in `layout.tsx` |
| Google Search Console | SEO verification | Verification meta tag in `layout.tsx` |

---

## Social & Contact

| Channel | URL |
|---|---|
| Instagram | https://www.instagram.com/asksarahconner/ |
| Facebook | https://www.facebook.com/sarahbethconner/ |
| LinkedIn | https://www.linkedin.com/in/sarah-beth-rena-conner-22776620/ |
| Phone | (310) 871-7600 |
| Email | sarah@asksarahconner.com |

**Office locations:**
- Beverly Hills: 331 Foothill Rd #100, Beverly Hills, CA 90210
- Palm Desert: 73-545 El Paseo #2504, Palm Desert, CA 92260

---

## Onboarding Checklist

- [ ] Clone the repo and run `npm install` inside `asksarah/`
- [ ] Create `asksarah/.env.local` with Resend API key and email addresses
- [ ] Run `npm run dev` and verify the site loads at http://localhost:3000
- [ ] Test the contact form (check that an email arrives via Resend)
- [ ] Review the component split: `sections/` = server, `client/` = client-side interactive
- [ ] Review `infra/README.md` before touching AWS infrastructure
- [ ] Ensure you have AWS credentials and access to the `us-west-2` region for deployments
- [ ] Confirm GitHub CodeStar connection is authorized in AWS Console
- [ ] Check Vercel Analytics and Google Analytics dashboards for baseline traffic metrics
