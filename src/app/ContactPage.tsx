import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, CheckCircle, ChevronRight, Clock, Mail, MapPin, Phone, Send, Sparkles, User, Users, BookOpen, GraduationCap, HelpCircle, MessageSquare,
  ChevronDown, MessageCircle, Building2
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

// Country codes data
const countryCodes = [
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+966', country: 'Saudi', flag: '🇸🇦' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+98', country: 'Iran', flag: '🇮🇷' },
];


function CustomSelect({ value, onChange, options, placeholder, icon }: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  icon: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full pl-9 pr-8 py-2.5 bg-gray-50 border rounded-xl text-sm text-left transition-all ${
          open ? 'border-[#0f4a9b] ring-2 ring-[#0f4a9b]/10 bg-white' : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">{icon}</span>
        <span className={value ? 'text-[#0a1f3d]' : 'text-gray-400'}>{value || placeholder}</span>
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180 text-[#0f4a9b]' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white border border-[#0f4a9b]/20 rounded-xl shadow-[0_8px_30px_rgba(15,74,155,0.14)] z-50 overflow-hidden">
          <div className="max-h-52 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2.5 ${
                  value === opt
                    ? 'bg-[#eff5ff] text-[#0f4a9b] font-semibold'
                    : 'text-[#0a1f3d] hover:bg-[#f5f8ff] hover:text-[#0f4a9b]'
                }`}
              >
                {value === opt && <div className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] flex-shrink-0" />}
                <span className={value === opt ? '' : 'pl-4'}>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhoneInput({ selectedCountry, setSelectedCountry, showDropdown, setShowDropdown, value, onChange }: {
  selectedCountry: typeof countryCodes[0];
  setSelectedCountry: (c: typeof countryCodes[0]) => void;
  showDropdown: boolean;
  setShowDropdown: (v: boolean) => void;
  value: string;
  onChange: (v: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [setShowDropdown]);

  return (
    <div className="flex" ref={ref}>
      <div className="relative flex-shrink-0">
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className={`flex items-center gap-1 px-2.5 py-2.5 bg-gray-50 border border-r-0 rounded-l-xl hover:bg-gray-100 transition-colors whitespace-nowrap ${showDropdown ? 'border-[#0f4a9b]' : 'border-gray-200'}`}
        >
          <span className="text-sm">{selectedCountry.flag}</span>
          <span className="text-xs font-semibold text-[#0a1f3d]">{selectedCountry.code}</span>
          <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
        </button>
        {showDropdown && (
          <div className="absolute top-[calc(100%+6px)] left-0 w-56 bg-white border border-[#0f4a9b]/20 rounded-xl shadow-[0_8px_30px_rgba(15,74,155,0.14)] z-50 overflow-hidden">
            <div className="max-h-52 overflow-y-auto">
              {countryCodes.map((c) => (
                <button key={c.code} type="button"
                  onClick={() => { setSelectedCountry(c); setShowDropdown(false); }}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 text-left transition-colors ${selectedCountry.code === c.code ? 'bg-[#eff5ff] text-[#0f4a9b]' : 'hover:bg-[#f5f8ff] text-[#0a1f3d]'}`}
                >
                  <span className="text-sm">{c.flag}</span>
                  <span className="text-xs font-semibold">{c.code}</span>
                  <span className="text-xs text-gray-500">{c.country}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="50 123 4567"
        className="flex-1 min-w-0 px-3 py-2.5 bg-gray-50 border border-l-0 border-gray-200 rounded-r-xl text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-[#0f4a9b] focus:ring-2 focus:ring-[#0f4a9b]/10 transition-all"
      />
    </div>
  );
}

function ModernContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [userType, setUserType] = useState<'parent' | 'student'>('parent');
  const [charCount, setCharCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', school: '',
    subject: '', curriculum: '', level: '', message: '',
  });

  // Curriculum-specific grade/level options — exact hierarchy from curriculum pages
  const levelOptionsByCurriculum: Record<string, string[]> = {
    // British Curriculum: KS3 → IGCSE/GCSE → A-Level
    'British (KS3)': ['Year 7', 'Year 8', 'Year 9'],
    'British (IGCSE / GCSE)': ['Year 10', 'Year 11'],
    'British (A-Level)': ['Year 12 — AS Level', 'Year 13 — A2 Level'],
    // American Curriculum: Middle School → High School → AP Courses
    'American (Middle School)': ['Grade 6', 'Grade 7', 'Grade 8'],
    'American (High School)': ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    'American (AP Courses)': ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    // IB Curriculum: MYP → Diploma Programme (SL/HL)
    'IB MYP': ['MYP 1', 'MYP 2', 'MYP 3', 'MYP 4', 'MYP 5'],
    'IB Diploma (SL)': ['DP1 — Year 1', 'DP2 — Year 2'],
    'IB Diploma (HL)': ['DP1 — Year 1', 'DP2 — Year 2'],
    'Other': ['Not sure / Other'],
  };

  const getLevelOptions = () => {
    if (!formData.curriculum) return ['Select curriculum first'];
    return levelOptionsByCurriculum[formData.curriculum] || levelOptionsByCurriculum['Other'];
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => {
      // If curriculum changes, reset level if it's not valid for new curriculum
      if (field === 'curriculum' && prev.level) {
        const newOptions = levelOptionsByCurriculum[value] || levelOptionsByCurriculum['Other'];
        if (!newOptions.includes(prev.level)) {
          return { ...prev, [field]: value, level: '' };
        }
      }
      return { ...prev, [field]: value };
    });
  };

  const inputCls = "w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-[#0f4a9b] focus:ring-2 focus:ring-[#0f4a9b]/10 transition-all";
  const selectCls = "w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#0a1f3d] focus:outline-none focus:border-[#0f4a9b] focus:ring-2 focus:ring-[#0f4a9b]/10 transition-all appearance-none cursor-pointer";
  const labelCls = "block text-xs font-bold text-[#0a1f3d] mb-1.5";
  const iconCls = "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none";

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 80);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <AnimatePresence>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(15,74,155,0.1)] border border-gray-100 overflow-hidden max-w-lg w-full">
            <div className="h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
            <div className="p-8 sm:p-10 flex flex-col items-center text-center gap-6">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center shadow-[0_8px_24px_rgba(15,74,155,0.3)]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
              >
                <CheckCircle className="h-8 w-8 text-white" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.3 }}>
                <h3 className="text-2xl font-extrabold text-[#0a1f3d] mb-2">Thank You!</h3>
                <p className="text-gray-500 text-base leading-relaxed">Your query has been submitted. Our team will be in touch with you shortly.</p>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 w-full"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.3 }}
              >
                <a
                  href="https://wa.me/971561249005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-[#25D366] text-white font-bold rounded-xl hover:brightness-110 transition-all text-sm"
                >
                  <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp Ustaad" className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-[#f0f4fa] text-[#0f4a9b] font-bold rounded-xl hover:bg-[#e4eaf7] transition-all text-sm border border-[#0f4a9b]/15"
                >
                  Back to Homepage
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-center">

      {/* ── Left Panel ── */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-3">
            <GradientHeadingText text="Find the Right Tutor" />
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We'll help you find a tutor that suits the student's subject, level, and way of learning.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {[
            { label: 'Carefully matched tutors', sub: 'Matched to subject, level & learning style' },
            { label: 'British, American & IB', sub: 'All major curricula covered' },
            { label: 'Free trial available', sub: 'No commitment · cancel anytime' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#eff5ff] flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-[#0f4a9b]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0a1f3d]">{item.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right Form Card ── */}
      <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(15,74,155,0.1)] border border-gray-100 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />

        <form className="p-5 sm:p-7 space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>

          {/* ── Section 1: Who Are You? ── */}
          <div className="space-y-3">
            <div className="pb-2.5 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-0.5">
                <User className="h-4 w-4 text-[#C7A24A] flex-shrink-0" />
                <span className="text-[11px] font-extrabold text-[#0a1f3d] uppercase tracking-widest">1. Who Are You?</span>
              </div>
              <p className="text-[11px] text-gray-400 pl-6">Please select an option that best describes you.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {([
                { value: 'parent', label: 'Parent / Guardian' },
                { value: 'student', label: 'Student' },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setUserType(opt.value)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border-2 transition-all text-left ${
                    userType === opt.value ? 'border-[#C7A24A] bg-[#fdf8ee]' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    userType === opt.value ? 'border-[#C7A24A]' : 'border-gray-300'
                  }`}>
                    {userType === opt.value && <div className="w-2 h-2 rounded-full bg-[#C7A24A]" />}
                  </div>
                  <Users className="h-4 w-4 text-[#C7A24A] flex-shrink-0" />
                  <span className={`text-xs font-bold leading-tight ${userType === opt.value ? 'text-[#0a1f3d]' : 'text-gray-500'}`}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Section 2: Student & Parent Details ── */}
          <div className="space-y-4">
            <div className="pb-2.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#C7A24A] flex-shrink-0" />
                <span className="text-[11px] font-extrabold text-[#0a1f3d] uppercase tracking-widest">2. Student & Parent Details</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className={labelCls}>Parent / Student Name <span className="text-red-400">*</span></label>
                <div className="relative">
                  <User className={iconCls} />
                  <input type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Full name" className={inputCls} />
                </div>
              </div>
              {/* Phone */}
              <div>
                <label className={labelCls}>Phone / WhatsApp <span className="text-red-400">*</span></label>
                <PhoneInput
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  showDropdown={showCountryDropdown}
                  setShowDropdown={setShowCountryDropdown}
                  value={formData.phone}
                  onChange={(v) => updateField('phone', v)}
                />
              </div>
              {/* Email */}
              <div>
                <label className={labelCls}>Email Address <span className="text-red-400">*</span></label>
                <div className="relative">
                  <Mail className={iconCls} />
                  <input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="your@email.com" className={inputCls} />
                </div>
              </div>
              {/* School */}
              <div>
                <label className={labelCls}>School Name <span className="text-red-400">*</span></label>
                <div className="relative">
                  <Building2 className={iconCls} />
                  <input type="text" value={formData.school} onChange={(e) => updateField('school', e.target.value)} placeholder="School name" className={inputCls} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 3: Academic Information ── */}
          <div className="space-y-4">
            <div className="pb-2.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#C7A24A] flex-shrink-0" />
                <span className="text-[11px] font-extrabold text-[#0a1f3d] uppercase tracking-widest">3. Academic Information</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Curriculum */}
              <div>
                <label className={labelCls}>Curriculum <span className="text-red-400">*</span></label>
                <CustomSelect
                  value={formData.curriculum}
                  onChange={(v) => updateField('curriculum', v)}
                  placeholder="Select curriculum"
                  icon={<GraduationCap className="h-4 w-4 text-gray-400" />}
                  options={['British (KS3)', 'British (IGCSE / GCSE)', 'British (A-Level)', 'American (Middle School)', 'American (High School)', 'American (AP Courses)', 'IB MYP', 'IB Diploma (SL)', 'IB Diploma (HL)', 'Other']}
                />
              </div>
              {/* Subject */}
              <div>
                <label className={labelCls}>Subject <span className="text-red-400">*</span></label>
                <CustomSelect
                  value={formData.subject}
                  onChange={(v) => updateField('subject', v)}
                  placeholder="Select subject"
                  icon={<BookOpen className="h-4 w-4 text-gray-400" />}
                  options={['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Business Studies', 'Economics', 'Accounting', 'Statistics', 'Engineering', 'Other']}
                />
              </div>
            </div>
            {/* Level — half width */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Student Level / Grade <span className="text-red-400">*</span></label>
                <CustomSelect
                  value={formData.level}
                  onChange={(v) => updateField('level', v)}
                  placeholder="Select level / grade"
                  icon={<GraduationCap className="h-4 w-4 text-gray-400" />}
                  options={getLevelOptions()}
                />
              </div>
            </div>
          </div>

          {/* ── Section 4: Learning Requirements ── */}
          <div className="space-y-3">
            <div className="pb-2.5 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-0.5">
                <MessageSquare className="h-4 w-4 text-[#C7A24A] flex-shrink-0" />
                <span className="text-[11px] font-extrabold text-[#0a1f3d] uppercase tracking-widest">4. Learning Requirements</span>
              </div>
              <p className="text-[11px] text-gray-400 pl-6">Tell us about the student's needs</p>
            </div>
            <div className="relative">
              <textarea
                value={formData.message}
                onChange={(e) => { updateField('message', e.target.value); setCharCount(e.target.value.length); }}
                maxLength={500}
                rows={4}
                placeholder="Tell us what you need help with"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-[#0f4a9b] focus:ring-2 focus:ring-[#0f4a9b]/10 transition-all resize-none"
              />
              <span className="absolute bottom-2.5 right-3 text-[10px] text-gray-400 select-none">{charCount}/500</span>
            </div>
          </div>

          {/* ── Submit ── */}
          <div className="pt-1">
            <button type="submit"
              className="w-full py-3.5 px-6 bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#0a3a79] text-white font-bold text-sm rounded-xl shadow-[0_8px_20px_rgba(15,74,155,0.3)] hover:shadow-[0_12px_28px_rgba(15,74,155,0.4)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
              <Send className="h-4 w-4" />
              Find the Right Tutor
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const contactFaqs = [
    { q: "What should I share before contacting the Ustaad team?", a: "A few details speed things up. Share your child's curriculum (British, American, or IB), the subject they need help with, their grade or year level, and whether they're preparing for regular lessons, revision, or exam preparation. The clearer the picture, the faster we can match the right tutor." },
    { q: "Which curricula and subjects does Ustaad cover?", a: "We support British, American, and IB students across the UAE. Subjects include Mathematics, Physics, Chemistry, Biology, Business, and English. For a full breakdown, see our curriculum overview and subject pages." },
    { q: "Can lessons focus on specific topics or exam preparation?", a: "They often do. Tutors plan sessions around difficult chapters, coursework support, past paper practice, mock exams, and full preparation for IGCSE, GCSE, A-Level, IB, AP, and SAT assessments." },
    { q: "How does Ustaad match tutors to students?", a: "Each tutor is matched to a student's curriculum, subject, year level, learning style, and preferred study schedule. We pair every student with one tutor who knows that exam system end to end." },
    { q: "Are lesson timings flexible for school students in the UAE?", a: "Yes. Sessions are planned around school hours, mock weeks, weekend activities, assessment cycles, and Ramadan timings. Online tutoring makes scheduling easier for families in Dubai, Abu Dhabi, Sharjah, Al Ain, and across the wider UAE." },
    { q: "What's the fastest way to reach the Ustaad team?", a: "WhatsApp is the quickest route for parents and students across Abu Dhabi, Dubai, Sharjah, Al Ain, Ras Al Khaimah, Fujairah, and the wider UAE. You can also use the contact form on this page if you prefer." },
  ];
  return (
    <Layout>
      <SEOHead
        title="Contact Ustaad | Book a Free Trial Session, UAE Tutoring"
        description="Get in touch with Ustaad to book your free trial tutoring session. Reach us by phone, WhatsApp, or email. Serving Dubai, Abu Dhabi, Sharjah and all UAE Emirates."
        canonical="/contact"
        ogImage="/UpdatedImages/contact-ustaad-private-tutors-book-free-trial-uae.jpeg"
        schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])]}
      />
      {/* ── HERO ── */}
      <section className="pt-10 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <Phone className="h-4 w-4" /> Contact Us
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text="Speak With the Ustaad Team" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Talk with the Ustaad team about subjects, curricula, tutor matching, lesson schedules, and student learning needs.
              </p>
              <HeroCTABlock className="mb-4" trustText="✦ No Commitment · Cancel Anytime" href="#form">
                Speak to an Advisor
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/contact-ustaad-private-tutors-book-free-trial-uae.jpeg"
                alt="Book a free trial with an Ustaad private tutor in Dubai Abu Dhabi Sharjah or online across all seven UAE Emirates"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── CONTACT CARDS ── */}
      <section className="pt-12 pb-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Get in Touch" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">Choose whichever contact method feels easiest for you. Every enquiry is handled by the same team.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "WhatsApp",
                desc: "Book a free trial lesson \u2022 Quick replies",
                icon: <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="Chat with Ustaad on WhatsApp" className="h-12 w-12" />,
                iconBg: "",
                cta: "Chat on WhatsApp",
                href: "https://wa.me/971561249005",
                external: true,
              },
              {
                title: "Call Us",
                desc: "Parent support \u2022 General enquiries",
                icon: <Phone className="h-6 w-6 text-white" />,
                iconBg: "bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79]",
                cta: "Call Now",
                href: "tel:+971561249005",
                external: false,
              },
              {
                title: "Email",
                desc: "Careers \u2022 Documents \u2022 Detailed requests",
                icon: <Mail className="h-6 w-6 text-white" />,
                iconBg: "bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79]",
                cta: "Send Email",
                href: "mailto:support@ustaad.ae",
                external: false,
              },
              {
                title: "Location",
                desc: "Supporting students across Dubai, Abu Dhabi, Sharjah, Al Ain, and the Emirates.",
                icon: <MapPin className="h-6 w-6 text-white" />,
                iconBg: "bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79]",
                cta: null,
                href: null,
                external: false,
              },
            ].map((c, i) => (
              <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-[24px] p-8 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.25)]`}>{c.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm font-medium mb-5">{c.desc}</p>
                {c.cta && c.href && (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-xl text-sm hover:brightness-110 hover:shadow-lg hover:shadow-[#C7A24A]/30 transition-all"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* ── WhatsApp Quick Contact ── */}
          <a 
            href="https://wa.me/971561249005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block max-w-2xl mx-auto group"
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_8px_30px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/20 transition-all duration-300 p-4 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* WhatsApp Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-green-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 self-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 self-center">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-[#0a1f3d] text-sm sm:text-base">WhatsApp</span>
                    <span className="px-1.5 py-0.5 bg-[#25D366]/10 text-[#25D366] text-[10px] sm:text-xs font-bold rounded-full">Fastest</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Get instant replies for lesson inquiries, tutor availability, and academic support.
                  </p>
                </div>
                
                {/* Arrow */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gray-50 group-hover:bg-[#0f4a9b] flex items-center justify-center transition-all duration-300 self-center">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="form" className="py-20 bg-gradient-to-b from-white to-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ModernContactForm />
        </div>
      </section>

      {/* ── SUPPORT LINE + WHATSAPP ── */}
      <section className="py-16 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/20" />
            <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Support Options</span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          {/* Two cards — equal height via grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Card 1: Support Line */}
            <a href="tel:8009005" className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 active:scale-[0.99] transition-all duration-300 p-6 flex flex-col gap-5">
              {/* ── Row 1: Header ── */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Toll-Free</p>
                  <p className="text-white text-sm font-extrabold">Ustaad Support Line</p>
                </div>
              </div>
              {/* ── Row 2: Main value ── */}
              <div>
                <p className="text-white text-3xl lg:text-4xl font-extrabold tracking-tight">800 9005</p>
                <p className="text-blue-100/75 text-sm mt-2 leading-relaxed">A direct line for parents and students who'd rather talk things through.</p>
              </div>
              {/* ── Row 3: Feature list ── */}
              <div className="flex flex-col gap-2.5">
                {["Parent Care", "Student Help", "Academic Advice", "Premium Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#C7A24A] shrink-0" />
                    <span className="text-sm text-white/85 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              {/* ── Row 4: Footer ── */}
              <div className="flex items-center gap-2 text-blue-200/50 text-xs mt-auto pt-1">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Saturday to Thursday · 9:00 AM to 9:00 PM · Friday on request</span>
              </div>
            </a>

            {/* Card 2: WhatsApp */}
            <a
              href="https://wa.me/971561249005"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl hover:brightness-105 active:scale-[0.99] transition-all duration-300 p-6 flex flex-col gap-5"
              style={{ background: "linear-gradient(135deg, #075E54 0%, #128C7E 55%, #25D366 100%)" }}
            >
              {/* ── Row 1: Header ── */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="Chat with Ustaad on WhatsApp" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Instant Support</p>
                    <p className="text-white text-sm font-extrabold">WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#C7A24A] px-2.5 py-1 rounded-full shrink-0">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-white text-[10px] font-extrabold uppercase tracking-wide">Premium</span>
                </div>
              </div>
              {/* ── Row 2: Main value ── */}
              <div>
                <p className="text-white text-3xl lg:text-4xl font-extrabold tracking-tight">Instant Reply</p>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">Replies within minutes for lesson inquiries and academic support.</p>
              </div>
              {/* ── Row 3: Feature list ── */}
              <div className="flex flex-col gap-2.5">
                {["Trial Lessons", "Scheduling", "Quick Replies", "Academic Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-white/80 shrink-0" />
                    <span className="text-sm text-white/85 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              {/* ── Row 4: Footer CTA ── */}
              <div className="mt-auto flex items-center justify-between bg-white/15 border border-white/20 rounded-xl px-4 py-3 group-hover:bg-white/25 transition-colors duration-300">
                <span className="text-white font-bold text-sm">Start a conversation</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faqs" className="py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">Answers to common questions from parents and students.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {contactFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setOpenFaq(isOpen ? null : i)}
                        style={{ width:40, height:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:'bold', fontSize:'18px', border:'none', cursor:'pointer' }}>?</button>
                      <button onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{ minHeight:'48px', padding:'8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor:'pointer' }}>
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                        <span style={{ width:32, height:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s' }}>
                          <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{ background:'#f8fafc', borderColor:'rgba(15,74,155,0.15)', boxShadow:'0 4px 16px rgba(15,74,155,0.06)' }}>
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                        <span style={{ width:32, height:32, background:'#0f4a9b', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                          <MessageCircle className="h-4 w-4" />
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Start Your Learning Journey"
        subtitle="Connect with us and get matched with the right tutor."
        button1Text="Speak to an Advisor"
        button1Href="#form"
        button2Text="Ask Your Question"
      />

    </Layout>
  );
}
