---
description: Add a new static page to the website with SEO
---

# Creating a New Static Page

## Quick Steps

### 1. Create the Page Component

Create `src/app/YourPage.tsx`:

```tsx
import { motion } from 'motion/react';
import { Layout, SEOHead } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema } from './shared/schemas';

export default function YourPage() {
  return (
    <Layout>
      <SEOHead
        title="Your Page Title | Context — Ustaad"
        description="Compelling SEO description with keywords. 150-160 characters max."
        canonical="/your-route"
        schema={[
          localBusinessSchema,
          serviceSchema("Service Name", "Description", "/your-route"),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Your Page", url: "/your-route" }
          ])
        ]}
      />
      
      {/* Page content */}
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Your content */}
        </div>
      </section>
    </Layout>
  );
}
```

### 2. Register the Route

Edit `src/routes.config.ts` and add to the `ROUTES` array:

```ts
{
  path: '/your-route',
  component: 'YourPage',
  seo: {
    title: 'Your Page Title | Context — Ustaad',
    description: 'Same description as in SEOHead component.',
    priority: 0.8,  // 0.0-1.0, higher for important pages
    changefreq: 'monthly'  // weekly, monthly, yearly
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Your Page", url: "/your-route" }
  ]
}
```

### 3. Import Component in entry-server.tsx

Edit `src/entry-server.tsx`:

```tsx
// Add alphabetically with other imports
import YourPage from "./app/YourPage.tsx";

// Add to COMPONENT_REGISTRY
const COMPONENT_REGISTRY = {
  // ...existing components
  YourPage,  // Add alphabetically
};
```

### 4. Build

```bash
pnpm build
```

The page will be:
- ✅ Pre-rendered to HTML at `dist/client/your-route/index.html`
- ✅ Included in auto-generated `sitemap.xml`
- ✅ Have full SEO meta tags injected

## SEO Checklist

- [ ] Title is unique (60 chars max)
- [ ] Description is compelling (150-160 chars)
- [ ] Canonical URL matches the route path exactly
- [ ] localBusinessSchema included
- [ ] breadcrumbSchema with path hierarchy
- [ ] serviceSchema if it's a service page
- [ ] Route added to `routes.config.ts`
- [ ] Component added to `entry-server.tsx` registry

## Page Types Reference

### Type A: Subject Page (uses SubjectPageTemplate)
See: `src/app/MathsPage.tsx`

### Type B: Standalone Page (uses SEOHead directly)
See: `src/app/AboutPage.tsx`

### Type C: Blog Post (auto-SEO from frontmatter)
See: `content/blog/example-post.md`
