// Route Registry - JavaScript version for build tools
// Mirror of src/routes.config.ts - keep in sync!

export const ROUTES = [
  // Core Pages
  { path: '/', component: 'App', priority: 1.0, changefreq: 'weekly', lastmod: '2026-06-22' },
  { path: '/about', component: 'AboutPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/contact', component: 'ContactPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/tutors', component: 'TutorsPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/subjects', component: 'SubjectsPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/how-it-works', component: 'HowItWorksPage', priority: 0.7, changefreq: 'monthly', lastmod: '2026-06-22' },

  // Curriculum
  { path: '/curriculum', component: 'CurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/british-curriculum', component: 'BritishCurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/igcse', component: 'IGCSEPage', priority: 0.95, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/gcse', component: 'GCSEPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/a-level', component: 'ALevelPage', priority: 0.95, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/ib-curriculum', component: 'IBCurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/myp', component: 'MYPPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/dp-sl', component: 'DPSLPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/dp-hl', component: 'DPHLPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/american-curriculum', component: 'AmericanCurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/ap', component: 'APPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/middle-school', component: 'MiddleSchoolPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/high-school', component: 'HighSchoolPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },

  // Subjects
  { path: '/maths', component: 'MathsPage', priority: 0.95, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/physics', component: 'PhysicsPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/chemistry', component: 'ChemistryPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/biology', component: 'BiologyPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/english', component: 'EnglishPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/economics', component: 'EconomicsPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/business', component: 'BusinessPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/accounting', component: 'AccountingPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/finance', component: 'FinancePage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/statistics', component: 'StatisticsPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/engineering', component: 'EngineeringPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/sciences', component: 'SciencesPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },

  // Other
  { path: '/exam-preparation', component: 'ExamPreparationPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/blogs', component: 'BlogsPage', priority: 0.9, changefreq: 'weekly', lastmod: '2026-06-25' },
  { path: '/blogs/exam-panic-before-exams-uae', component: 'ExamPanicBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-27' },
  { path: '/blogs/igcse-maths-revision-low-marks', component: 'IGCSEMathsLowMarksBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-25' },
  { path: '/mathematics', component: 'MathsPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-07-11' },
  { path: '/maths-tutor-abu-dhabi', component: 'MathematicsLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-06-24' },
  { path: '/physics-tutor-abu-dhabi', component: 'PhysicsLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-06-29' },
  { path: '/chemistry-tutor-abu-dhabi', component: 'ChemistryLandingPage', priority: 0.90, changefreq: 'monthly', lastmod: '2026-07-10' },
  { path: '/biology-tutor-abu-dhabi', component: 'BiologyLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-07-13' },
  { path: '/privacy', component: 'PrivacyPage', priority: 0.3, changefreq: 'yearly', lastmod: '2026-07-11' },
  { path: '/terms', component: 'TermsPage', priority: 0.3, changefreq: 'yearly', lastmod: '2026-07-11' },
  // noindex test route — prerendered for SSR but excluded from sitemap
  { path: '/mathtestlanding', component: 'MathematicsLanding', priority: 0.7, changefreq: 'monthly', lastmod: '2026-06-24', noindex: true },
];

// Generate sitemap XML from routes — noindex routes are excluded
export function generateSitemap(baseUrl = 'https://ustaad.ae') {
  const urlEntries = ROUTES.filter(r => !r.noindex).map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>\n    ` : ''}<changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}
