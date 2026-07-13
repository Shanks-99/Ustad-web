import { Layout, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema } from './shared/schemas';

export default function PrivacyPage() {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy | Ustaad"
        description="Privacy policy for Ustaad — how we handle your data when you use our private tutoring service in the UAE."
        canonical="/privacy"
        schema={[breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }])]}
      />

      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight leading-tight">
            <GradientHeadingText text="Privacy Policy" />
          </h1>
          <p className="text-gray-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">1. Who We Are</h2>
              <p>Ustaad is a private tutoring service based in the UAE. We connect students with qualified tutors for 1-to-1 online sessions. This policy explains how we handle personal information you share with us.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">2. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly when you contact us:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Name and contact details (email address, phone number)</li>
                <li>Your child's year group, school, and subjects</li>
                <li>Messages and enquiry details sent through our contact form or WhatsApp</li>
              </ul>
              <p className="mt-3">We do not collect payment card information through this website — payment arrangements are handled directly.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Respond to your tutoring enquiry</li>
                <li>Match your child with a suitable tutor</li>
                <li>Communicate session schedules and progress updates</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">4. Third-Party Services</h2>
              <p className="mb-3">This website uses the following third-party services that may place cookies on your device:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Google Translate</strong> — provides optional Arabic language translation of page content. Google's privacy policy applies.</li>
                <li><strong>Google Analytics</strong> — helps us understand which pages are visited and how users interact with the site. Data is anonymised and aggregated.</li>
                <li><strong>WhatsApp</strong> — clicking our WhatsApp button opens the WhatsApp application. WhatsApp's privacy policy applies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">5. Cookies</h2>
              <p>This site uses minimal cookies. Google Translate sets a <code className="bg-gray-100 px-1 rounded text-sm font-mono">googtrans</code> cookie to remember your language preference. Google Analytics uses anonymised session cookies. No advertising cookies are used.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">6. Data Retention</h2>
              <p>We retain your contact information only for as long as necessary to manage your tutoring enquiry and any ongoing tuition. If you ask us to delete your data, we will do so within 30 days.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">7. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal data. To make a request, contact us at <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] hover:underline">support@ustaad.ae</a> or via WhatsApp.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">8. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. The date at the top of this page shows when it was last revised.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">9. Contact</h2>
              <p>For any privacy questions, reach us at <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] hover:underline">support@ustaad.ae</a> or via our <a href="/contact" className="text-[#0f4a9b] hover:underline">contact page</a>.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
