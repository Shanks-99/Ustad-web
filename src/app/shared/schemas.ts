const BASE_URL = "https://ustaad.ae";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "Ustaad — Private Tutors UAE",
  alternateName: "Ustaad Tutoring",
  url: BASE_URL,
  logo: `${BASE_URL}/ustaad-logo-updated-white.png`,
  image: `${BASE_URL}/UpdatedImages/private-tutor-student-1-to-1-session-uae.jpeg`,
  description:
    "Premium private 1-to-1 tutoring across the UAE for IGCSE, GCSE, A-Level, IB, and American curriculum students in Dubai, Abu Dhabi, Sharjah and every Emirate.",
  telephone: "+971561249005",
  email: "support@ustaad.ae",
  foundingDate: "2015",
  numberOfStudents: 2500,
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Al Ain" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "City", name: "Fujairah" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  sameAs: [
    "https://www.instagram.com/ustaad.ae",
    "https://www.facebook.com/ustaad.ae",
    "https://www.linkedin.com/company/ustaad-ae",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Exam Success Rate", value: "90%+" },
    { "@type": "PropertyValue", name: "Parent Satisfaction Rate", value: "98%" },
    { "@type": "PropertyValue", name: "Average Grade Improvement", value: "+1 to +3 grades" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  priceRange: "AED 150–350 per session",
  currenciesAccepted: "AED",
  paymentAccepted: "Credit Card, Bank Transfer, Cash",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.2048",
    longitude: "55.2708",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
});

export const serviceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${BASE_URL}${url}`,
  provider: {
    "@type": "EducationalOrganization",
    name: "Ustaad — Private Tutors UAE",
    url: BASE_URL,
  },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  serviceType: "Private Tutoring",
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export const reviewsSchema = [
  { name: "Fares Al Kindi",   date: "2024-03-01", body: "I had a great experience with Ustaad. They truly provide some of the Best Tutors in Abu Dhabi. The teaching style is clear, professional, and very supportive." },
  { name: "Sumayya Alamri",   date: "2024-04-01", body: "I had very good experience with Ustad for my daughter… her math teacher is one of the best tutors I experienced. He explains the concepts very well." },
  { name: "Wadeema Al M",     date: "2024-02-01", body: "Very good tutoring institute with supportive tutor and clear teaching methods. Would definitely recommend to anyone looking for quality education." },
  { name: "Humaid Khalaf",    date: "2024-01-01", body: "very good site if you want a good teacher for your studies. The tutors really know how to make difficult topics easy to understand." },
  { name: "Zayed Al Teneiji", date: "2023-11-01", body: "Best tutoring institution in Abu Dhabi. The tutors are extremely knowledgeable and really care about student success in exams." },
  { name: "Nouf Al Mansouri", date: "2024-05-01", body: "Being a teacher, I found them as the most professional and organized service provider, they really care and organize lessons as per student learning speed." },
  { name: "Elyazia Alkaabi",  date: "2023-12-01", body: "He is a very good teacher, he makes the lessons easier to understand and has good ways of getting the information in my mind easily." },
  { name: "Omar Howwar",      date: "2024-02-01", body: "Sincere, encouraging, and passionate for his work. He put sufficient effort to elevate the education and knowledge of my son significantly." },
  { name: "Mohamed Al Hamed", date: "2024-06-01", body: "Ustaad is the best online institute in Abu Dhabi, they tutored me throughout university and are now consistently tutoring my siblings and cousins." },
  { name: "James T.",         date: "2024-03-01", body: "I started tutoring for A-Level Physics about three months before my exams. My tutor was incredibly patient and broke down complex topics like electromagnetic induction into simple, intuitive steps. I ended up getting an A*." },
  { name: "Ahmed Als",        date: "2024-04-01", body: "One of the best math tutors in Abu Dhabi, his teaching method is very focused and effective. He breaks down complex mathematical concepts into simple steps and ensures full understanding." },
].map(r => ({
  "@context": "https://schema.org",
  "@type": "Review",
  author: { "@type": "Person", name: r.name },
  reviewBody: r.body,
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  itemReviewed: { "@type": "EducationalOrganization", "@id": `${BASE_URL}/#organization`, name: "Ustaad — Private Tutors UAE", url: BASE_URL },
  datePublished: r.date,
}));

export const articleSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  reviewer,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  reviewer?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url,
  datePublished,
  ...(dateModified && { dateModified }),
  author: {
    "@type": "Person",
    name: author,
    worksFor: { "@type": "Organization", name: "Ustaad — Private Tutors UAE", url: BASE_URL },
  },
  ...(reviewer && {
    reviewedBy: { "@type": "Person", name: reviewer },
  }),
  publisher: {
    "@type": "Organization",
    name: "Ustaad — Private Tutors UAE",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/ustaad-logo-updated-white.png` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  ...(image && { image: { "@type": "ImageObject", url: image } }),
});
