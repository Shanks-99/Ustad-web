import {
  Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronDown, Clock, Mail,
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer({ logoAlt = "Ustaad — trusted UAE private tutoring service for British, American and IB students across Dubai, Abu Dhabi and Sharjah" }: { logoAlt?: string } = {}) {
    const quickLinks = [
    { key: 'about', href: '/about' },
    { key: 'curriculum', href: '/curriculum' },
    { key: 'subjects', href: '/subjects' },
    { key: 'tutors', href: '/tutors' },
    { key: 'blogs', href: '/blogs' },
    { key: 'contact', href: '/contact' },
    { key: 'faqs', href: '/#faqs' },
    { key: 'howWorks', href: '/how-it-works' },
  ];

  const subjectLinks = [
    { key: 'maths', href: '/maths' },
    { key: 'physics', href: '/physics' },
    { key: 'chemistry', href: '/chemistry' },
    { key: 'biology', href: '/biology' },
    { key: 'english', href: '/english' },
    { key: 'business', href: '/business' },
    { key: 'economics', href: '/economics' },
    { key: 'accounting', href: '/accounting' },
    { key: 'engineering', href: '/engineering' },
    { key: 'finance', href: '/finance' },
    { key: 'statistics', href: '/statistics' },
    { key: 'examPrep', href: '/exam-preparation' },
  ];

  const curriculaLinks = [
    { key: 'pages.curriculum.cards.british.title', href: '/british-curriculum', isPage: true },
    { key: 'nav.igcse', href: '/igcse' },
    { key: 'nav.gcse', href: '/gcse' },
    { key: 'nav.alevel', href: '/a-level' },
    { key: 'pages.curriculum.cards.american.title', href: '/american-curriculum', isPage: true },
    { key: 'nav.middleSchool', href: '/middle-school' },
    { key: 'nav.highSchool', href: '/high-school' },
    { key: 'nav.ap', href: '/ap' },
    { key: 'pages.curriculum.cards.ib.title', href: '/ib-curriculum', isPage: true },
    { key: 'nav.myp', href: '/myp' },
    { key: 'nav.dpsl', href: '/dp-sl' },
    { key: 'nav.dphl', href: '/dp-hl' },
  ];

  const tutorLinks = [
    { label: 'Private Tutoring UAE: Complete Guide', href: '/private-tutoring-uae-guide' },
    { label: 'Maths Tutor Abu Dhabi', href: '/maths-tutor-abu-dhabi' },
    { label: 'Physics Tutor Abu Dhabi', href: '/physics-tutor-abu-dhabi' },
    { label: 'Chemistry Tutor Abu Dhabi', href: '/chemistry-tutor-abu-dhabi' },
    { label: 'Biology Tutor Abu Dhabi', href: '/biology-tutor-abu-dhabi' },
    { label: 'Tutors in Abu Dhabi', href: '/tutors?city=abu-dhabi' },
    { label: 'Tutors in Al Ain', href: '/tutors?city=al-ain' },
    { label: 'Tutors in Dubai', href: '/tutors?city=dubai' },
    { label: 'Tutors in Sharjah', href: '/tutors?city=sharjah' },
    { label: 'Tutors in Ajman', href: '/tutors?city=ajman' },
    { label: 'Tutors in Ras Al Khaima', href: '/tutors?city=ras-al-khaimah' },
    { label: 'Tutors in Fujairah', href: '/tutors?city=fujairah' },
    { label: 'Tutors in Umm Al Quwain', href: '/tutors?city=umm-al-quwain' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/ustaadAE', bgColor: 'bg-[#1877F2]', icon: Facebook },
    { label: 'Instagram', href: 'https://www.instagram.com/ustaad.ae', bgColor: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', icon: Instagram },
    { label: 'X/Twitter', href: 'https://x.com/ustaadAE', bgColor: 'bg-black', icon: Twitter },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ustaaduae/', bgColor: 'bg-[#0A66C2]', icon: Linkedin },
  ];

  return (
    <footer className="bg-[#0a3a79] pt-16 pb-8 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-8 mb-12 items-start">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <img src="/ustaad-private-tutors-uae-logo.png" alt={logoAlt} className="h-12 object-contain mb-4 brightness-0 invert" />
            <p className="text-blue-200 text-xs leading-relaxed font-medium">
              Premium private tutoring across the UAE since 2015. Expert 1-to-1 tutoring for British, American, and IB curriculum students in Dubai, Abu Dhabi, Sharjah and every Emirate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide text-white uppercase border-b border-white/20 pb-2">{"Quick Links"}</h3>
            <ul className="space-y-2.5 font-medium text-blue-200 text-xs">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.key === 'about' ? 'About' : 
                     link.key === 'curriculum' ? 'Curriculum' :
                     link.key === 'subjects' ? 'Subjects' :
                     link.key === 'tutors' ? 'Tutors' :
                     link.key === 'blogs' ? 'Blogs' :
                     link.key === 'contact' ? 'Contact Us' :
                     link.key === 'faqs' ? 'FAQs' : 'How It Works'}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tutors Near Me */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide text-white uppercase border-b border-white/20 pb-2">{"Tutors Near Me"}</h3>
            <ul className="space-y-2.5 font-medium text-blue-200 text-xs">
              {tutorLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide text-white uppercase border-b border-white/20 pb-2">{"Subjects"}</h3>
            <ul className="space-y-2.5 font-medium text-blue-200 text-xs">
              {subjectLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.key === 'maths' ? 'Maths' : 
                     link.key === 'physics' ? 'Physics' :
                     link.key === 'chemistry' ? 'Chemistry' :
                     link.key === 'biology' ? 'Biology' :
                     link.key === 'english' ? 'English' :
                     link.key === 'business' ? 'Business' :
                     link.key === 'economics' ? 'Economics' :
                     link.key === 'accounting' ? 'Accounting' :
                     link.key === 'engineering' ? 'Engineering' :
                     link.key === 'finance' ? 'Finance' :
                     link.key === 'statistics' ? 'Statistics' : 'Exam Preparation'}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Curricula */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide text-white uppercase border-b border-white/20 pb-2">{"Curricula"}</h3>
            <ul className="space-y-2.5 font-medium text-blue-200 text-xs">
              {curriculaLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.key === 'pages.curriculum.cards.british.title' ? 'British Curriculum' :
                     link.key === 'nav.igcse' ? 'IGCSE' :
                     link.key === 'nav.gcse' ? 'GCSE' :
                     link.key === 'nav.alevel' ? 'A-Level' :
                     link.key === 'pages.curriculum.cards.american.title' ? 'American Curriculum' :
                     link.key === 'nav.middleSchool' ? 'Middle School' :
                     link.key === 'nav.highSchool' ? 'High School' :
                     link.key === 'nav.ap' ? 'AP' :
                     link.key === 'pages.curriculum.cards.ib.title' ? 'IB Curriculum' :
                     link.key === 'nav.myp' ? 'MYP' :
                     link.key === 'nav.dpsl' ? 'DP SL' : 'DP HL'}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide text-white uppercase border-b border-white/20 pb-2">{"Contact"}</h3>
            <div className="space-y-3 font-medium text-blue-200 text-xs">
              <a href="tel:8009005" className="flex items-center gap-3 hover:text-white transition group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A24A] transition-colors shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-white font-bold notranslate" translate="no">800 9005 (USTAAD)</div>
                  <div className="text-[10px] text-blue-300">Student Support</div>
                </div>
              </a>
              <a href="https://wa.me/971561249005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A24A] transition-colors shrink-0">
                  <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="Chat with Ustaad on WhatsApp" className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-white font-bold notranslate" translate="no">+971 56 124 9005</div>
                  <div className="text-[10px] text-blue-300">Book Your Free Trial</div>
                </div>
              </a>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A24A] transition-colors shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="text-white font-bold text-xs notranslate" translate="no">career@ustaad.ae</div>
                  <div className="text-[9px] text-blue-300">Join us Today!</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A24A] transition-colors shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="text-white font-bold text-xs notranslate" translate="no">support@ustaad.ae</div>
                  <div className="text-[9px] text-blue-300">Parents Support</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A24A] transition-colors shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="text-white font-bold text-xs notranslate" translate="no">care@ustaad.ae</div>
                  <div className="text-[9px] text-blue-300">Parents Care</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A24A] transition-colors shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-white font-bold">24/7 Support</div>
                  <div className="text-[10px] text-blue-300">Always Available</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C7A24A] transition-colors shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-white font-bold">United Arab Emirates</div>
                  <div className="text-[10px] text-blue-300">Dubai • Abu Dhabi • Sharjah • All Emirates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us - Vertical list with colored icons */}
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide text-white uppercase border-b border-white/20 pb-2">{"Follow Us"}</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, bgColor, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label={label}
                >
                  <div className={`w-9 h-9 rounded-full ${bgColor} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-blue-200 text-xs font-medium group-hover:text-white transition notranslate" translate="no">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        

        {/* Back to top + Language, centered */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button 
            className="bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[#C7A24A]/30 transition-all shadow-md" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <ChevronDown className="h-5 w-5 rotate-180" />
          </button>
          <LanguageSwitcher />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 pb-2 flex flex-col items-center gap-3">
          {/* Trust line - stacked on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-[10px] font-semibold text-blue-300/70 tracking-wide text-center">
            <span>UAE Licensed Tutoring Service</span>
            <span className="hidden sm:inline text-blue-300/40">|</span>
            <span>Supporting Students Across the UAE</span>
            <span className="hidden sm:inline text-blue-300/40">|</span>
            <span>Registered Ustaad® Trademark</span>
          </div>
          {/* Copyright */}
          <span className="text-xs text-blue-300/60 font-medium">© 2026 Ustaad UAE. All Rights Reserved.</span>
          {/* Links */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-blue-300/60 font-medium">
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <span className="text-blue-300/30">|</span>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <span className="text-blue-300/30">|</span>
            <a href="/sitemap.xml" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
