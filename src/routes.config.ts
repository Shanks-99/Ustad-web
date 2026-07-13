// Central Route Registry & SEO Configuration
// This is the single source of truth for all routes.
// Build tools auto-generate entry-server.tsx, prerender.mjs, and sitemap.xml from this file.

export interface RouteConfig {
  path: string;
  component: string; // Component import name
  seo: {
    title: string;
    description: string;
    priority?: number; // Sitemap priority (0.0 - 1.0)
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const ROUTES: RouteConfig[] = [
  // Core Pages
  {
    path: '/',
    component: 'App',
    seo: {
      title: 'Private Tutors UAE | IGCSE, A-Level, IB, American Curriculum — Ustaad',
      description: 'Expert 1-to-1 private tutoring across UAE for IGCSE, GCSE, A-Level, IB MYP/DP, AP, and SAT. Proven results. Serving Dubai, Abu Dhabi, Sharjah & all Emirates since 2015.',
      priority: 1.0,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }]
  },
  {
    path: '/about',
    component: 'AboutPage',
    seo: {
      title: 'About Ustaad | Private Tutoring UAE Since 2015',
      description: "Learn about Ustaad — UAE's trusted private tutoring service since 2015. Over 2,500 students supported across Dubai, Abu Dhabi, Sharjah and all Emirates. Expert 1-to-1 tutors.",
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]
  },
  {
    path: '/contact',
    component: 'ContactPage',
    seo: {
      title: 'Contact Ustaad | Book a Free Trial Session — UAE Tutoring',
      description: 'Get in touch with Ustaad to book your free trial tutoring session. Reach us by phone, WhatsApp, or email. Serving Dubai, Abu Dhabi, Sharjah and all UAE Emirates.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]
  },
  {
    path: '/tutors',
    component: 'TutorsPage',
    seo: {
      title: 'Our Tutors | Expert Private Tutors UAE — Ustaad',
      description: "Meet Ustaad's expert private tutors in UAE. Curriculum-specialist educators for IGCSE, A-Level, IB, and American curriculum. Trusted by 2,500+ families across Dubai & Abu Dhabi.",
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Tutors', url: '/tutors' }]
  },
  {
    path: '/subjects',
    component: 'SubjectsPage',
    seo: {
      title: 'Subjects | Private Tutoring for All Subjects UAE — Ustaad',
      description: 'Private tutoring for all major subjects in UAE. Maths, Physics, Chemistry, Biology, English, Economics, Business and more. IGCSE, A-Level, IB, AP. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }]
  },
  {
    path: '/how-it-works',
    component: 'HowItWorksPage',
    seo: {
      title: 'How It Works | Ustaad Private Tutoring Process UAE',
      description: "Discover how Ustaad's 1-to-1 private tutoring works. Diagnostic assessment, personalised plan, curriculum-aligned sessions, and tracked progress. Book your free trial today.",
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'How It Works', url: '/how-it-works' }]
  },

  // Curriculum Overview
  {
    path: '/curriculum',
    component: 'CurriculumPage',
    seo: {
      title: 'Curriculum Tutoring UAE | British, IB & American Curriculum — Ustaad',
      description: 'Private tutoring for all major curricula in UAE: British (IGCSE, GCSE, A-Level), IB (MYP, DP), and American (AP, SAT). Expert 1-to-1 sessions across Dubai & Abu Dhabi.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }]
  },

  // British Curriculum
  {
    path: '/british-curriculum',
    component: 'BritishCurriculumPage',
    seo: {
      title: 'British Curriculum Tutors UAE | IGCSE, GCSE, A-Level — Ustaad',
      description: 'Expert private tutoring for the British curriculum in Dubai & UAE. IGCSE, GCSE, A-Level across all subjects. Cambridge, Edexcel, AQA aligned. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'British Curriculum', url: '/british-curriculum' }]
  },
  {
    path: '/igcse',
    component: 'IGCSEPage',
    seo: {
      title: 'IGCSE Tutors UAE | Private IGCSE Tutoring Dubai & Abu Dhabi — Ustaad',
      description: 'Expert private IGCSE tutoring in Dubai, Abu Dhabi & UAE. All IGCSE subjects: Maths, Physics, Chemistry, Biology, English, Economics. 1-to-1 sessions. Book a free trial.',
      priority: 0.95,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'IGCSE', url: '/igcse' }]
  },
  {
    path: '/gcse',
    component: 'GCSEPage',
    seo: {
      title: 'GCSE Tutors UAE | Private GCSE Tutoring Dubai & Abu Dhabi — Ustaad',
      description: 'Expert private GCSE tutoring in Dubai, Abu Dhabi & UAE. All GCSE subjects covered. 1-to-1 sessions aligned to AQA, Edexcel, Cambridge. Book a free trial today.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'GCSE', url: '/gcse' }]
  },
  {
    path: '/a-level',
    component: 'ALevelPage',
    seo: {
      title: 'A-Level Tutors UAE | Private A-Level Tutoring Dubai & Abu Dhabi — Ustaad',
      description: 'Expert private A-Level tutoring in Dubai, Abu Dhabi & UAE. All A-Level subjects. AQA, Edexcel, Cambridge A-Level. 1-to-1 sessions, proven grade results. Book a free trial.',
      priority: 0.95,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'A-Level', url: '/a-level' }]
  },

  // IB Curriculum
  {
    path: '/ib-curriculum',
    component: 'IBCurriculumPage',
    seo: {
      title: 'IB Tutors UAE | IB MYP & DP Tutoring Dubai & Abu Dhabi — Ustaad',
      description: 'Expert private IB tutoring in Dubai, Abu Dhabi & UAE. IB MYP and DP SL/HL all subjects. 1-to-1 sessions with IB-specialist tutors. Proven results. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'IB Curriculum', url: '/ib-curriculum' }]
  },
  {
    path: '/myp',
    component: 'MYPPage',
    seo: {
      title: 'IB MYP Tutors UAE | IB Middle Years Programme Tutoring Dubai — Ustaad',
      description: 'Expert private IB MYP tutoring in Dubai, Abu Dhabi & UAE. All MYP subjects covered. Criteria-based assessment, E-Assessment prep. 1-to-1 sessions. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'IB', url: '/ib-curriculum' }, { name: 'MYP', url: '/myp' }]
  },
  {
    path: '/dp-sl',
    component: 'DPSLPage',
    seo: {
      title: 'IB DP SL Tutors UAE | IB Diploma Standard Level Tutoring Dubai — Ustaad',
      description: 'Expert private IB DP SL tutoring in Dubai, Abu Dhabi & UAE. All IB Diploma Standard Level subjects. 1-to-1 sessions with IB-specialist tutors. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IB', url: '/ib-curriculum' }, { name: 'DP SL', url: '/dp-sl' }]
  },
  {
    path: '/dp-hl',
    component: 'DPHLPage',
    seo: {
      title: 'IB DP HL Tutors UAE | IB Diploma Higher Level Tutoring Dubai — Ustaad',
      description: 'Expert private IB DP HL tutoring in Dubai, Abu Dhabi & UAE. All IB Diploma Higher Level subjects. Depth, rigor, and top scores. 1-to-1 sessions. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IB', url: '/ib-curriculum' }, { name: 'DP HL', url: '/dp-hl' }]
  },

  // American Curriculum
  {
    path: '/american-curriculum',
    component: 'AmericanCurriculumPage',
    seo: {
      title: 'American Curriculum Tutors UAE | AP, SAT Tutoring Dubai — Ustaad',
      description: 'Expert private American curriculum tutoring in Dubai & UAE. AP subjects, SAT prep, High School. 1-to-1 sessions with experienced tutors. Book a free trial today.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'American Curriculum', url: '/american-curriculum' }]
  },
  {
    path: '/ap',
    component: 'APPage',
    seo: {
      title: 'AP Tutors UAE | AP Exam Preparation Dubai & Abu Dhabi — Ustaad',
      description: 'Expert AP tutoring in Dubai, Abu Dhabi & UAE. All AP subjects covered: Calculus, Physics, Chemistry, Biology, Economics. 1-to-1 sessions. Score 4s and 5s. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'AP', url: '/ap' }]
  },
  {
    path: '/middle-school',
    component: 'MiddleSchoolPage',
    seo: {
      title: 'Middle School Tutors UAE | Grades 6–8 Private Tutoring Dubai — Ustaad',
      description: 'Expert private middle school tutoring in Dubai, Abu Dhabi & UAE. Grades 6–8 all subjects. Build strong foundations before IGCSE. 1-to-1 sessions. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Middle School', url: '/middle-school' }]
  },
  {
    path: '/high-school',
    component: 'HighSchoolPage',
    seo: {
      title: 'High School Tutors UAE | Grades 9–12 Private Tutoring Dubai — Ustaad',
      description: 'Expert private high school tutoring in Dubai, Abu Dhabi & UAE. Grades 9–12, AP, SAT prep. Build exam confidence and achieve top grades. 1-to-1 sessions. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'High School', url: '/high-school' }]
  },

  // Subject Pages
  {
    path: '/maths',
    component: 'MathsPage',
    seo: {
      title: 'Maths Tutors UAE | IGCSE, A-Level, IB, AP Mathematics — Ustaad',
      description: 'Expert private Maths tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB, AP Mathematics. Algebra, Calculus, Statistics. Proven grade improvement. Book a free trial.',
      priority: 0.95,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Mathematics', url: '/maths' }]
  },
  {
    path: '/physics',
    component: 'PhysicsPage',
    seo: {
      title: 'Physics Tutors UAE | IGCSE, A-Level, IB Physics — Ustaad',
      description: 'Expert private Physics tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Physics. Mechanics, Electricity, Quantum. Proven results. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Physics', url: '/physics' }]
  },
  {
    path: '/chemistry',
    component: 'ChemistryPage',
    seo: {
      title: 'Chemistry Tutors UAE | IGCSE, A-Level, IB Chemistry — Ustaad',
      description: 'Expert private Chemistry tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Chemistry. Organic, Inorganic, Physical. Lab prep. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Chemistry', url: '/chemistry' }]
  },
  {
    path: '/biology',
    component: 'BiologyPage',
    seo: {
      title: 'Biology Tutors UAE | IGCSE, A-Level, IB Biology — Ustaad',
      description: 'Expert private Biology tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Biology. Cell biology, Genetics, Ecology, Human physiology. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Biology', url: '/biology' }]
  },
  {
    path: '/english',
    component: 'EnglishPage',
    seo: {
      title: 'English Tutors UAE | IGCSE, A-Level, IB English — Ustaad',
      description: 'Expert private English tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB English Language & Literature. Essay writing, analysis, exam technique. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'English', url: '/english' }]
  },
  {
    path: '/economics',
    component: 'EconomicsPage',
    seo: {
      title: 'Economics Tutors UAE | IGCSE, A-Level, IB Economics — Ustaad',
      description: 'Expert private Economics tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Economics. Micro, Macro, Development, International. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Economics', url: '/economics' }]
  },
  {
    path: '/business',
    component: 'BusinessPage',
    seo: {
      title: 'Business Studies Tutors UAE | IGCSE, A-Level, IB Business — Ustaad',
      description: 'Expert private Business Studies tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Business. Marketing, Finance, HR, Operations. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Business', url: '/business' }]
  },
  {
    path: '/accounting',
    component: 'AccountingPage',
    seo: {
      title: 'Accounting Tutors UAE | IGCSE, A-Level, IB Accounting — Ustaad',
      description: 'Expert private Accounting tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Accounting. Financial, Management, Cost accounting. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Accounting', url: '/accounting' }]
  },
  {
    path: '/finance',
    component: 'FinancePage',
    seo: {
      title: 'Finance Tutors UAE | A-Level, IB, University Finance — Ustaad',
      description: 'Expert private Finance tutoring in Dubai, Abu Dhabi & UAE. A-Level, IB, University Finance. Corporate finance, Investment, Financial markets. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Finance', url: '/finance' }]
  },
  {
    path: '/statistics',
    component: 'StatisticsPage',
    seo: {
      title: 'Statistics Tutors UAE | IGCSE, A-Level, IB Statistics — Ustaad',
      description: 'Expert private Statistics tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Statistics. Data analysis, Probability, Hypothesis testing. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Statistics', url: '/statistics' }]
  },
  {
    path: '/engineering',
    component: 'EngineeringPage',
    seo: {
      title: 'Engineering Tutors UAE | A-Level, University Engineering — Ustaad',
      description: 'Expert private Engineering tutoring in Dubai, Abu Dhabi & UAE. A-Level, University Engineering. Mechanical, Electrical, Civil fundamentals. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Engineering', url: '/engineering' }]
  },
  {
    path: '/sciences',
    component: 'SciencesPage',
    seo: {
      title: 'Sciences Tutors UAE | Physics, Chemistry & Biology — Ustaad',
      description: 'Expert private sciences tutoring in Dubai, Abu Dhabi & UAE. Physics, Chemistry, and Biology for IGCSE, GCSE, A-Level, and IB. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Sciences', url: '/sciences' }]
  },

  // Other Pages
  {
    path: '/exam-preparation',
    component: 'ExamPreparationPage',
    seo: {
      title: 'Exam Preparation Tutors UAE | IGCSE, A-Level, IB Exam Prep — Ustaad',
      description: 'Intensive exam preparation tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB, AP exam revision. Past papers, mark schemes, exam technique. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Exam Preparation', url: '/exam-preparation' }]
  },

  // Blog
  {
    path: '/blogs',
    component: 'BlogsPage',
    seo: {
      title: 'Blog | Private Tutoring Insights & Study Tips — Ustaad',
      description: "Explore Ustaad's blog for expert tutoring insights, study tips, exam strategies, and curriculum guidance for IGCSE, A-Level, IB, and AP students in UAE.",
      priority: 0.9,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }]
  },
  {
    path: '/blogs/igcse-maths-revision-low-marks',
    component: 'IGCSEMathsLowMarksBlog',
    seo: {
      title: 'Hours of Revision, Still Low Marks: Why IGCSE Maths Students Suffer | Ustaad',
      description: 'Why do IGCSE students forget maths in exams despite studying hard? A closer look at what is really happening, and what actually helps.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'IGCSE Maths Revision', url: '/blogs/igcse-maths-revision-low-marks' }]
  },
  {
    path: '/blogs/exam-panic-before-exams-uae',
    component: 'ExamPanicBlog',
    seo: {
      title: '"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late | Ustaad',
      description: 'Exam panic rarely starts in exam week. It builds quietly across the term, and the earliest signs usually show up in homework, classwork, and mock papers long before parents notice them as stress.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Exam Panic UAE', url: '/blogs/exam-panic-before-exams-uae' }]
  },

  // Mathematics Landing Page
  {
    path: '/mathematics',
    component: 'MathsPage',
    seo: {
      title: 'Mathematics Tutors UAE | IGCSE, A-Level, IB, AP Maths — Ustaad',
      description: 'Premium 1-to-1 mathematics tutoring across Dubai & the UAE for IGCSE, A-Level, IB, and AP students. We turn classroom understanding into accurate, confident exam performance.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Mathematics', url: '/mathematics' }]
  },

  {
    path: '/maths-tutor-abu-dhabi',
    component: 'MathematicsLanding',
    seo: {
      title: 'Maths Tutor Abu Dhabi | IGCSE, A-Level, IB Maths — Ustaad',
      description: 'One-to-one maths tutors in Abu Dhabi fixing algebra, fractions, and word problems. IGCSE 0580, A-Level, IB AA/AI, and AP maths support. Trusted since 2015.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Maths Tutor Abu Dhabi', url: '/maths-tutor-abu-dhabi' }]
  },
  {
    path: '/physics-tutor-abu-dhabi',
    component: 'PhysicsLanding',
    seo: {
      title: 'Physics Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad',
      description: 'Trusted 1-to-1 physics tutors in Abu Dhabi for IGCSE, A-Level and IB. Rebuild weak topics, drill past papers, and lift exam grades. Book a free trial.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Physics Tutor Abu Dhabi', url: '/physics-tutor-abu-dhabi' }]
  },
  {
    path: '/chemistry-tutor-abu-dhabi',
    component: 'ChemistryLandingPage',
    seo: {
      title: 'Chemistry Tutor Abu Dhabi | IGCSE, A-Level & IB Chemistry | Ustaad',
      description: 'Expert 1-to-1 chemistry tutors in Abu Dhabi for IGCSE, A-Level, and IB. Fix mole calculations, organic mechanisms, and past paper technique. Book a free trial.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Chemistry Tutor Abu Dhabi', url: '/chemistry-tutor-abu-dhabi' }]
  },
  {
    path: '/biology-tutor-abu-dhabi',
    component: 'BiologyLanding',
    seo: {
      title: 'Biology Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad',
      description: 'Specialist 1-to-1 biology tutors in Abu Dhabi for IGCSE, A-Level and IB. Master genetics, physiology and IA. Ideal for medicine pathways. Free trial.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Biology Tutor Abu Dhabi', url: '/biology-tutor-abu-dhabi' }]
  },
  {
    path: '/privacy',
    component: 'PrivacyPage',
    seo: {
      title: 'Privacy Policy | Ustaad',
      description: 'Privacy policy for Ustaad — how we handle your data when you use our private tutoring service in the UAE.',
      priority: 0.3,
      changefreq: 'yearly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }]
  },
  {
    path: '/terms',
    component: 'TermsPage',
    seo: {
      title: 'Terms of Use | Ustaad',
      description: 'Terms of use for Ustaad private tutoring services in the UAE.',
      priority: 0.3,
      changefreq: 'yearly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Terms of Use', url: '/terms' }]
  },
  {
    path: '/mathtestlanding',
    component: 'MathematicsLanding',
    seo: {
      title: 'Maths Tutor Abu Dhabi | IGCSE, A-Level, IB Maths — Ustaad',
      description: 'One-to-one maths tutors in Abu Dhabi fixing algebra, fractions, and word problems. IGCSE 0580, A-Level, IB AA/AI, and AP maths support. Trusted since 2015.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Maths Tutor Abu Dhabi', url: '/maths-tutor-abu-dhabi' }]
  }
];

// Helper to get route by path
export function getRouteByPath(path: string): RouteConfig | undefined {
  return ROUTES.find(r => r.path === path);
}

// Generate sitemap XML
export function generateSitemap(): string {
  const baseUrl = 'https://ustaad.ae';
  const urlEntries = ROUTES.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.seo.changefreq || 'monthly'}</changefreq>
    <priority>${route.seo.priority || 0.5}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}
