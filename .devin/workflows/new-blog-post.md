---
description: Add a new blog post with SEO-optimized frontmatter
---

# Creating a New Blog Post

## Quick Steps

### 1. Create Markdown File

Create `content/blog/your-post-slug.md`:

```markdown
---
title: "Your Blog Post Title - Keep It Compelling"
description: "SEO description that appears in Google search results. 150-160 characters. Include keywords like IGCSE, tutoring, UAE."
date: "2026-05-20"  # ISO format
category: "Study Tips"  # Study Tips | Curriculum Guide | Parent Advice | Exam Prep
keywords: ["IGCSE", "Mathematics", "revision", "UAE tutoring", "Dubai"]
image: "https://images.unsplash.com/photo-xxxxx?w=1200"  # Optional featured image
---

# Your Blog Post Title

Your content here in **Markdown** format.

## Use Headers for Structure

Google loves well-structured content with H2 and H3 headers.

### Key Points

- Use bullet points for readability
- Include **bold text** for emphasis
- Link to internal pages like [/igcse](/igcse)

## Include a CTA

End with a call-to-action:

> **Ready to improve your grades?** [Book a free trial](/contact) with our expert tutors.
```

### 2. Frontmatter Guidelines

| Field | Required | Tips |
|-------|----------|------|
| `title` | ✅ | 50-60 chars, include keywords, compelling |
| `description` | ✅ | 150-160 chars, summarize value prop |
| `date` | ✅ | ISO format `2026-05-20` |
| `category` | ✅ | One of: Study Tips, Curriculum Guide, Parent Advice, Exam Prep |
| `keywords` | ✅ | 5-8 relevant keywords as array |
| `image` | Optional | Unsplash URL with `?w=1200` |

### 3. Auto-Generated SEO

The blog system automatically generates from frontmatter:

- ✅ `<title>` = `{title} | Ustaad Blog`
- ✅ `<meta name="description">`
- ✅ `<link rel="canonical">` = `/blog/{slug}`
- ✅ `Article` JSON-LD schema with date, author
- ✅ `BreadcrumbList` schema
- ✅ Open Graph tags for social sharing

### 4. Build

```bash
pnpm build
```

The post will be available at:
- Live URL: `https://ustaad.ae/blog/your-post-slug`
- Auto-included in sitemap.xml
- Listed on `/blogs` index page

## Content Best Practices

### Structure
```
H1: Main title (only one)
├── Intro paragraph (hook the reader)
├── H2: Section headers
│   ├── H3: Subsections
│   └── Bullet points for scanability
├── H2: Another section
└── CTA at the end
```

### SEO Tips
- Include target keyword in first 100 words
- Use H2/H3 headers with keywords
- Link to 2-3 internal pages
- Add 1 outbound link to authoritative source
- Keep paragraphs under 4 lines
- Use **bold** for key takeaways

### Keywords to Include (when relevant)
- IGCSE, GCSE, A-Level, IB, AP
- Private tutoring, 1-to-1 tutoring
- Dubai, Abu Dhabi, UAE
- Exam preparation, revision tips
- [Subject name] tutors

## Example Posts to Reference

- `content/blog/igcse-maths-revision-tips.md` - Study Tips format
