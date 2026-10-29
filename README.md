# Vasanth B — AI/ML Engineer Portfolio

A world-class personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase AI/ML engineering expertise, research contributions, internship experience, and data science projects to recruiters and hiring managers.

---

## ✨ Features

- **Premium dark glassmorphism design** inspired by Apple, Stripe, and Linear
- **Particle animation** and floating tech labels in the hero section
- **Typing effect** cycling through professional roles
- **Animated vertical timeline** for internship experience
- **Custom SVG project illustrations** — no placeholder images needed
- **Categorized skill cards** with hover animations
- **Research publications** section with ICSTSDG 2024 conference paper
- **Certifications & achievements** section
- **Contact form** with validation and mailto fallback
- **Fully responsive** from 320px mobile to 1920px desktop
- **WCAG 2.2 AA accessibility** targets (focus states, ARIA, semantic HTML, reduced motion)
- **SEO optimised** with metadata, Open Graph, Twitter cards, sitemap, and robots.txt
- **Smooth section-aware navigation** with active indicator
- **Back-to-top** button in footer

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Animation (advanced) | GSAP (available, used optionally) |
| Fonts | Inter + Fira Code (Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm 9+

### Installation

```bash
# Clone / open the project
cd "Portfolio Website"

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Main page assembling all sections
│   ├── globals.css         # Global CSS and design system
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots.txt
│   └── not-found.tsx       # Custom 404 page
├── components/
│   ├── Navbar.tsx          # Sticky responsive navigation
│   ├── Hero.tsx            # Hero with particles & typing effect
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Categorised skill cards
│   ├── Experience.tsx      # Internship timeline
│   ├── Projects.tsx        # Featured project cards
│   ├── Research.tsx        # Research publications
│   ├── Certifications.tsx  # Certifications & achievements
│   ├── Services.tsx        # Technical interests
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Site footer
│   └── ui/
│       ├── SectionHeading.tsx
│       └── GlassCard.tsx
├── lib/
│   ├── constants.ts        # Site config, nav links, hero data
│   ├── skills.ts           # Skills categories and data
│   ├── projects.ts         # Projects, experience, certifications, services
│   ├── animations.ts       # Framer Motion variants
│   └── metadata.ts         # SEO metadata configuration
├── hooks/
│   ├── useReducedMotion.ts
│   └── useActiveSection.ts
public/
├── resume.pdf              # ← ADD YOUR RESUME HERE
└── images/                 # Optional: project images
```

---

## 📄 Adding Your Resume

1. Name your resume file: **`resume.pdf`**
2. Place it in the **`public/`** directory
3. The download button in the navbar and hero will automatically serve it

---

## ⚙️ Configuration

All personalisation is centralised in **`src/lib/constants.ts`** and **`src/lib/projects.ts`**.

### Update contact & social links

In `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  email: "vasanthbalasasi@gmail.com",
  github: "https://github.com/YOUR_GITHUB_USERNAME",     // ← Update
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",     // ← Update
  url: "https://your-production-domain.com",             // ← Update for SEO
};
```

### Update project GitHub links

In `src/lib/projects.ts`, find your project and update `githubUrl`:

```typescript
{
  id: "indian-sign-language",
  githubUrl: "https://github.com/yourusername/isl-detection", // ← Add your repo
}
```

---

## 📧 Contact Form Configuration

The contact form currently uses a **mailto fallback** which opens the user's email client.

To enable **direct server-side form submission**, integrate one of the following:

### Option A: Formspree (easiest, no backend needed)

```bash
npm install @formspree/react
```

Sign up at [formspree.io](https://formspree.io), create a form, get your form ID, and update `Contact.tsx`.

### Option B: EmailJS (client-side, no backend)

```bash
npm install @emailjs/browser
```

Sign up at [emailjs.com](https://emailjs.com), configure a service and template, and update `Contact.tsx` with your service ID, template ID, and public key.

### Option C: Next.js API Route + Resend

Create `src/app/api/contact/route.ts`:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  await resend.emails.send({
    from: "portfolio@yourdomain.com",
    to: "vasanthbalasasi@gmail.com",
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
  return Response.json({ success: true });
}
```

Store your API key in `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository at [vercel.com](https://vercel.com) for automatic deployments.

### Environment Variables for Production

Set these in your hosting provider's dashboard:

```
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

---

## 🔍 SEO Checklist

- [x] Page title and meta description
- [x] Open Graph tags
- [x] Twitter card metadata
- [x] Sitemap (`/sitemap.xml`)
- [x] Robots.txt (`/robots.txt`)
- [x] Semantic HTML structure
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Update `SITE_CONFIG.url` with your real domain
- [ ] Submit sitemap to Google Search Console after deployment
- [ ] Add `og-image.png` to public/ for social sharing previews

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Visible keyboard focus indicators
- `prefers-reduced-motion` support
- Sufficient colour contrast ratios
- Screen-reader friendly navigation
- Form error announcements via `role="alert"`

---

## 📊 Performance Tips

- Animations use GPU-composited CSS properties (opacity, transform)
- Particle canvas uses `requestAnimationFrame` with proper cleanup
- `prefers-reduced-motion` disables heavy animations for users who prefer it
- Google Fonts loaded with `display=swap` for non-blocking rendering
- Images should use `next/image` for automatic optimisation

---

## 📝 License

© 2026 Vasanth B. All rights reserved.
