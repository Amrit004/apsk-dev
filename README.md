# APSK Portfolio — Professional Portfolio Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)

**Professional Portfolio for Amritpal Singh Kaur — Graduate Software Engineer**

[Live Portfolio](https://apsk-dev.vercel.app) · [LinkedIn](https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1) · [GitHub](https://github.com/Amrit004)

</div>

---

A modern, professional portfolio website showcasing enterprise experience at Bank of America, Amadeus & ENI, along with MSc Security & Authentication from Queen Mary University of London.

## 🚀 Features

- **Professional Dark Theme** — Clean, ATS-friendly design without flashy AI-generated aesthetics
- **Section Navigation** — Hero, About, Education, Experience, Projects, Skills, Contact
- **Active Nav State** — Scroll-spy with underline indicator
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Custom Hooks Architecture** — TypeScript hooks for scroll, intersection, and state management
- **JSON-LD Structured Data** — SEO optimized with Person schema

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |

## 📂 Project Structure

```
aspk-dev/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, metadata, JSON-LD
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Tailwind + custom styles
│   │   └── not-found.tsx    # Custom 404 page
│   ├── components/
│   │   ├── Navigation.tsx   # Fixed nav with scroll-spy
│   │   ├── Hero.tsx         # Featured projects panel
│   │   ├── About.tsx        # Highlights and strengths
│   │   ├── Education.tsx    # Degrees and modules
│   │   ├── Experience.tsx   # Work history with metrics
│   │   ├── Projects.tsx     # 9 projects with modals
│   │   ├── Skills.tsx       # 6 skill categories
│   │   ├── Contact.tsx      # Contact info and form
│   │   └── BackToTop.tsx    # Scroll to top button
│   └── lib/
│       ├── data.ts          # Static content data
│       ├── utils.ts         # Helper functions
│       └── hooks.ts         # Custom React hooks
├── public/
│   └── favicon.ico          # Custom APSK favicon
└── package.json
```

## ⚡ Quick Start

```bash
git clone https://github.com/Amrit004/aspk-dev.git
cd aspk-dev
npm install
npm run dev
open http://localhost:3000
```

## 🔧 Build & Deploy

```bash
npm run build    # Production build
npm run start    # Production server
```

Deploy to Vercel:

```bash
# Push to GitHub and import in vercel.com
# Automatic deployments on push
```

---

<div align="center">

**Built by Amritpal Singh Kaur**

[LinkedIn](https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1) · [GitHub](https://github.com/Amrit004) · [Portfolio](https://apsk-dev.vercel.app)

</div>
