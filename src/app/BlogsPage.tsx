import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

const BLOGS = [
  {
    slug: 'exam-panic-before-exams-uae',
    image: '/images/blogs/uae-teenager-exam-stress-quiet.jpeg',
    alt: 'UAE teenager studying at home showing quiet signs of exam stress before exam season',
    category: 'Student Wellbeing',
    title: '"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late',
    description: 'Exam panic rarely starts in exam week. It builds quietly across the term, and the earliest signs usually show up in homework, classwork, and mock papers long before parents notice them as stress.',
    date: '27 June 2026',
    readTime: '10 min read',
  },
  {
    slug: 'igcse-maths-revision-low-marks',
    image: '/images/blogs/igcse-maths-student-revision-uae.webp',
    alt: 'IGCSE maths student in the UAE revising past papers at a home study desk',
    category: 'IGCSE Maths',
    title: 'Hours of Revision, Still Low Marks: The Real Reason Why IGCSE Maths Students Suffer',
    description: 'Why do IGCSE students forget maths in exams despite studying hard? A closer look at what is really happening, and what actually helps.',
    date: '25 June 2026',
    readTime: '8 min read',
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(BLOGS.length / POSTS_PER_PAGE));
  const paginated = BLOGS.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <Layout>
      <SEOHead title="Blog | Private Tutoring Insights & Study Tips | Ustaad" description="Explore Ustaad's blog for expert tutoring insights, study tips, exam strategies, and curriculum guidance for IGCSE, A-Level, IB, and AP students in UAE." canonical="/blogs" schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blogs" }])]} />

      {/* Hero */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4a9b]/5 rounded-full mb-5 border border-[#0f4a9b]/10">
              <FileText className="h-4 w-4 text-[#0f4a9b]" />
              <span className="text-sm font-bold text-[#0f4a9b]">Blog</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-4 tracking-tight leading-tight">
              <GradientHeadingText text="Latest Insights" />
            </h1>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Expert advice, study tips, and educational trends for UAE students and parents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 lg:pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginated.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">No articles available yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginated.map((blog, i) => (
                <motion.article
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] transition-all h-full"
                >
                  <a href={`/blogs/${blog.slug}`} className="flex flex-col h-full">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 lg:p-6 flex flex-col flex-1 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f4a9b]/5 text-[#0f4a9b] text-xs font-bold rounded-full mb-3 w-fit">
                        <FileText className="h-3 w-3" /> {blog.category}
                      </div>
                      <h2 className="text-base lg:text-lg font-extrabold text-[#0a1f3d] mb-2 leading-snug group-hover:text-[#0f4a9b] transition">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {blog.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{blog.date}</span>
                          <span className="mx-1">·</span>
                          <Clock className="h-3.5 w-3.5" />
                          <span>{blog.readTime}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[#0f4a9b] group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-gray-600 hover:border-[#0f4a9b] hover:text-[#0f4a9b] disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition ${currentPage === page ? 'bg-[#0f4a9b] text-white shadow-[0_0_12px_rgba(15,74,155,0.3)]' : 'border border-slate-200 text-gray-600 hover:border-[#0f4a9b] hover:text-[#0f4a9b]'}`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-gray-600 hover:border-[#0f4a9b] hover:text-[#0f4a9b] disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      <FinalCTA
        title="Find the Right Tutor for Your Child"
        subtitle="Get matched with an expert tutor for your subject and curriculum."
        button1Text="Book Your Free Trial"
        button2Text="Ask Your Question"
        subtext1="Free Trial • No Commitment"
        subtext2="Stuck? Send it, we'll explain it."
      />
    </Layout>
  );
}
