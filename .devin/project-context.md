# Ustaad Project Architecture

## Tech Stack Overview
- **Framework**: React + Vite + TypeScript
- **Routing**: react-router-dom (StaticRouter for SSR)
- **SEO**: react-helmet-async for meta tags
- **Build**: Custom SSR prerendering to static HTML
- **Styling**: Tailwind CSS + Lucide icons
- **Animation**: Framer Motion (motion/react)

## SEO Architecture

### 1. Route Configuration System
All routes are defined in `/src/routes.config.ts`. This is the single source of truth.
- Routes auto-populate `entry-server.tsx`
- Routes auto-populate `prerender.mjs` 
- Routes auto-generate `sitemap.xml`

### 2. SEO Components
- `SEOHead.tsx`: Wrapper around react-helmet-async
- `schemas.ts`: Reusable JSON-LD schema generators
  - `localBusinessSchema`: Organization info
  - `breadcrumbSchema(breadcrumbs)`: Navigation breadcrumbs
  - `serviceSchema(name, description, url)`: Service offerings
  - `faqSchema(qaPairs)`: FAQ structured data
  - `articleSchema(title, description, url, date)`: Blog articles

### 3. Page Types & SEO Requirements

#### Type A: Subject Pages (using SubjectPageTemplate)
```tsx
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const data = {
  heroTitle: "...",
  // ... other props
  faqs: [
    { q: "Question?", a: "Answer." },
  ],
  floatingIcon: <Icon className="h-4 w-4" />,
  seo: {
    title: "Page Title | Context — Ustaad",
    description: "Compelling description with keywords.",
    canonical: "/route-path",
    schema: [
      localBusinessSchema,
      serviceSchema("Service Name", "Description", "/route-path"),
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Parent", url: "/parent" },
        { name: "Current", url: "/route-path" }
      ]),
      // Optional: faqSchema from faqs array
      faqSchema(data.faqs.map(f => ({ q: f.q, a: f.a })))
    ]
  }
};
```

#### Type B: Standalone Pages
```tsx
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

export default function PageName() {
  return (
    <Layout>
      <SEOHead
        title="Page Title | Context — Ustaad"
        description="Compelling description."
        canonical="/route-path"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Current", url: "/route-path" }])
        ]}
      />
      {/* page content */}
    </Layout>
  );
}
```

#### Type C: Blog Posts (Dynamic)
Blog posts use frontmatter + auto-generated SEO:
```md
---
title: "Blog Post Title"
description: "SEO description"
date: "2026-05-20"
category: "Study Tips"
keywords: ["IGCSE", "Maths", "revision"]
---

Content here...
```
Blog system auto-generates:
- Title, description, canonical
- Article JSON-LD with date
- BreadcrumbList
- Open Graph tags

## Adding New Content

### 1. New Static Page
1. Create page component in `/src/app/`
2. Add SEO using Type A or B pattern above
3. Add route to `/src/routes.config.ts`
4. Run `pnpm build` — sitemap auto-regenerates

### 2. New Blog Post
1. Create `.md` file in `/content/blog/`
2. Add frontmatter (title, description, date)
3. Build auto-generates SEO from frontmatter

### 3. New Subject Page
1. Create page file importing `SubjectPageTemplate`
2. Define `data` object with `seo` prop (Type A)
3. Add route to `/src/routes.config.ts`

## File Organization
```
/src
  /app
    /shared
      SEOHead.tsx         # SEO component
      schemas.ts          # JSON-LD generators
      index.ts            # Shared exports
    SubjectPageTemplate.tsx
    MathsPage.tsx         # Example Type A
    AboutPage.tsx         # Example Type B
  /routes.config.ts       # Central route registry
  /entry-server.tsx       # Auto-generated from routes
/content
  /blog                   # Blog markdown files
/public
  sitemap.xml             # Auto-generated at build
  robots.txt              # Static
  llms.txt                # Static
```

## Build Process
```bash
pnpm build
# 1. Builds client bundle
# 2. Builds SSR server bundle  
# 3. Prerenders all routes from routes.config.ts
# 4. Injects SEO meta tags per page
# 5. Generates sitemap.xml
```

## Workflows (AI Prompts)

Use these slash commands in Windsurf:
- `/new-page` - Add a new static page with SEO
- `/new-blog-post` - Add a new blog post with frontmatter SEO

## Adding New Content

### 1. New Static Page
1. Run `/new-page` workflow or see `.windsurf/workflows/new-page.md`
2. Create page component with SEOHead
3. Add route to `src/routes.config.ts`
4. Import component in `src/entry-server.tsx`
5. Run `pnpm build` — sitemap auto-regenerates

### 2. New Blog Post
1. Run `/new-blog-post` workflow or see `.windsurf/workflows/new-blog-post.md`
2. Create markdown in `/content/blog/your-slug.md`
3. Add frontmatter (title, description, date, keywords)
4. SEO auto-generated from frontmatter
5. Build includes post automatically

### 3. New Subject Page
1. Create page using SubjectPageTemplate pattern
2. Define `data` object with `seo` prop
3. Add route to `routes.config.ts`
4. Import component in `entry-server.tsx`

## SEO Checklist For New Pages
- [ ] Unique title (60 chars max)
- [ ] Compelling description (150-160 chars)
- [ ] Canonical URL matches route
- [ ] localBusinessSchema included
- [ ] breadcrumbSchema with path hierarchy
- [ ] serviceSchema (if applicable)
- [ ] FAQ schema (if page has FAQs)
- [ ] Route added to routes.config.ts
- [ ] Component imported in entry-server.tsx
