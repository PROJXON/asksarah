# AskSarahConner.com

Luxury real estate portfolio and contact site for Sarah Conner, Real Estate Advisor at The Agency — serving Malibu, Pacific Palisades, Beverly Hills, and Los Angeles.

---

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Radix UI** + **Lucide React**
- **Resend** — transactional email
- **Vercel Analytics** + **Google Analytics**
- **Docker** + **AWS CodePipeline / CodeDeploy / EC2**
- **Terraform** — infrastructure as code

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=client_gmail
CONTACT_TO_EMAIL=client_gmail
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

A `.env.example` with empty values is committed to the repo. Copy it to get started:

```bash
cp .env.example .env.local
# Then fill in the values
```

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run build:local` | Build + copy assets to standalone output |
| `npm run start` | Run standalone server (after build) |
| `npm run lint` | ESLint check |

---

## Project Structure

```
app/
├── api/contact/route.tsx   # Contact form email endpoint (Resend)
├── why-ASC/page.tsx        # Sarah bio + partnership page
├── page.tsx                # Home page
├── layout.tsx              # Root layout (fonts, analytics)
└── globals.css             # Design tokens + global styles

components/
├── client/                 # Interactive client-side components
└── sections/               # Server-side page sections

infra/terraform/            # AWS infrastructure (VPC, EC2, ALB, ECR, CodePipeline)
deploy/scripts/             # Docker container start/stop scripts
```

---

## Deployment

The app is containerized with Docker and deployed to AWS EC2 via CodePipeline.

```
GitHub push → CodeBuild (Docker → ECR) → CodeDeploy (EC2)
```

See [`infra/README.md`](../infra/README.md) for full Terraform setup and deployment instructions.

---

## Contact

- Email: ines.chavez.projxon@gmail.com
- GitHub: [github.com/PROJXON/asksarah](https://github.com/PROJXON/asksarah)
