import { lazy, Suspense, Component, type ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import "./styles/index.css";

// Route-level code splitting — each page is a separate chunk loaded on demand.
// entry-server.tsx keeps static imports for SSR; only this client bundle splits.
const App                   = lazy(() => import('./app/App'));
const AboutPage             = lazy(() => import('./app/AboutPage'));
const CurriculumPage        = lazy(() => import('./app/CurriculumPage'));
const AmericanCurriculumPage= lazy(() => import('./app/AmericanCurriculumPage'));
const BritishCurriculumPage = lazy(() => import('./app/BritishCurriculumPage'));
const IBCurriculumPage      = lazy(() => import('./app/IBCurriculumPage'));
const IGCSEPage             = lazy(() => import('./app/IGCSEPage'));
const GCSEPage              = lazy(() => import('./app/GCSEPage'));
const ALevelPage            = lazy(() => import('./app/ALevelPage'));
const MiddleSchoolPage      = lazy(() => import('./app/MiddleSchoolPage'));
const HighSchoolPage        = lazy(() => import('./app/HighSchoolPage'));
const APPage                = lazy(() => import('./app/APPage'));
const MYPPage               = lazy(() => import('./app/MYPPage'));
const DPSLPage              = lazy(() => import('./app/DPSLPage'));
const DPHLPage              = lazy(() => import('./app/DPHLPage'));
const SubjectsPage          = lazy(() => import('./app/SubjectsPage'));
const TutorsPage            = lazy(() => import('./app/TutorsPage'));
const ContactPage           = lazy(() => import('./app/ContactPage'));
const PhysicsPage           = lazy(() => import('./app/PhysicsPage'));
const BusinessPage          = lazy(() => import('./app/BusinessPage'));
const BiologyPage           = lazy(() => import('./app/BiologyPage'));
const MathsPage             = lazy(() => import('./app/MathsPage'));
const StatisticsPage        = lazy(() => import('./app/StatisticsPage'));
const EnglishPage           = lazy(() => import('./app/EnglishPage'));
const EconomicsPage         = lazy(() => import('./app/EconomicsPage'));
const FinancePage           = lazy(() => import('./app/FinancePage'));
const AccountingPage        = lazy(() => import('./app/AccountingPage'));
const EngineeringPage       = lazy(() => import('./app/EngineeringPage'));
const ChemistryPage         = lazy(() => import('./app/ChemistryPage'));
const ExamPreparationPage   = lazy(() => import('./app/ExamPreparationPage'));
const HowItWorksPage        = lazy(() => import('./app/HowItWorksPage'));
const BlogsPage             = lazy(() => import('./app/BlogsPage'));
const IGCSEMathsLowMarksBlog= lazy(() => import('./app/IGCSEMathsLowMarksBlog'));
const ExamPanicBlog         = lazy(() => import('./app/ExamPanicBlog'));
const MathematicsLanding    = lazy(() => import('./app/MathematicsLanding'));
const PhysicsLanding        = lazy(() => import('./app/PhysicsLanding'));
const ChemistryLandingPage  = lazy(() => import('./app/ChemistryLandingPage'));
const BiologyLanding        = lazy(() => import('./app/BiologyLanding'));
const SciencesPage          = lazy(() => import('./app/SciencesPage'));
const PrivacyPage           = lazy(() => import('./app/PrivacyPage'));
const TermsPage             = lazy(() => import('./app/TermsPage'));

const NotFound = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Go Home</a>
  </div>
);

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <p>Please refresh the page or try again later.</p>
          <a href="/">Go Home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // fallback={null} keeps pre-rendered SSR HTML visible while the chunk loads
    <Suspense fallback={null}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"                                    element={<App />} />
          <Route path="/about"                               element={<AboutPage />} />
          <Route path="/curriculum"                          element={<CurriculumPage />} />
          <Route path="/american-curriculum"                 element={<AmericanCurriculumPage />} />
          <Route path="/british-curriculum"                  element={<BritishCurriculumPage />} />
          <Route path="/ib-curriculum"                       element={<IBCurriculumPage />} />
          <Route path="/igcse"                               element={<IGCSEPage />} />
          <Route path="/gcse"                               element={<GCSEPage />} />
          <Route path="/a-level"                             element={<ALevelPage />} />
          <Route path="/middle-school"                       element={<MiddleSchoolPage />} />
          <Route path="/high-school"                         element={<HighSchoolPage />} />
          <Route path="/ap"                                  element={<APPage />} />
          <Route path="/myp"                                 element={<MYPPage />} />
          <Route path="/dp-sl"                               element={<DPSLPage />} />
          <Route path="/dp-hl"                               element={<DPHLPage />} />
          <Route path="/subjects"                            element={<SubjectsPage />} />
          <Route path="/tutors"                              element={<TutorsPage />} />
          <Route path="/contact"                             element={<ContactPage />} />
          <Route path="/physics"                             element={<PhysicsPage />} />
          <Route path="/business"                            element={<BusinessPage />} />
          <Route path="/biology"                             element={<BiologyPage />} />
          <Route path="/maths"                               element={<MathsPage />} />
          <Route path="/mathematics"                         element={<MathsPage />} />
          <Route path="/statistics"                          element={<StatisticsPage />} />
          <Route path="/english"                             element={<EnglishPage />} />
          <Route path="/economics"                           element={<EconomicsPage />} />
          <Route path="/finance"                             element={<FinancePage />} />
          <Route path="/accounting"                          element={<AccountingPage />} />
          <Route path="/engineering"                         element={<EngineeringPage />} />
          <Route path="/chemistry"                           element={<ChemistryPage />} />
          <Route path="/exam-preparation"                    element={<ExamPreparationPage />} />
          <Route path="/how-it-works"                        element={<HowItWorksPage />} />
          <Route path="/blogs"                               element={<BlogsPage />} />
          <Route path="/blogs/igcse-maths-revision-low-marks"element={<IGCSEMathsLowMarksBlog />} />
          <Route path="/blogs/exam-panic-before-exams-uae"   element={<ExamPanicBlog />} />
          <Route path="/sciences"                            element={<SciencesPage />} />
          <Route path="/maths-tutor-abu-dhabi"               element={<MathematicsLanding />} />
          <Route path="/physics-tutor-abu-dhabi"             element={<PhysicsLanding />} />
          <Route path="/chemistry-tutor-abu-dhabi"           element={<ChemistryLandingPage />} />
          <Route path="/biology-tutor-abu-dhabi"             element={<BiologyLanding />} />
          <Route path="/mathtestlanding"                     element={<MathematicsLanding />} />
          <Route path="/privacy"                             element={<PrivacyPage />} />
          <Route path="/terms"                               element={<TermsPage />} />
          <Route path="*"                                    element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

const AppTree = (
  <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);

const container = document.getElementById("root")!;

if (container.innerHTML.trim() !== "") {
  hydrateRoot(container, AppTree);
} else {
  createRoot(container).render(AppTree);
}
