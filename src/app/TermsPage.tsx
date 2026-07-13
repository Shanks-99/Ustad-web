import { Layout, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema } from './shared/schemas';

export default function TermsPage() {
  return (
    <Layout>
      <SEOHead
        title="Terms of Use | Ustaad"
        description="Terms of use for Ustaad private tutoring services in the UAE."
        canonical="/terms"
        schema={[breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms of Use', url: '/terms' }])]}
      />

      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight leading-tight">
            <GradientHeadingText text="Terms of Use" />
          </h1>
          <p className="text-gray-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">1. About This Website</h2>
              <p>This website (ustaad.ae) is operated by Ustaad, a private tutoring service based in the UAE. By using this website or contacting us, you agree to these terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">2. Our Services</h2>
              <p>Ustaad provides private 1-to-1 online tutoring for students in the UAE across a range of subjects and curricula including IGCSE, GCSE, A-Level, IB, and American curriculum. Session arrangements, scheduling, and fees are agreed directly between Ustaad and the client.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">3. Website Use</h2>
              <p>You agree to use this website only for lawful purposes. You must not attempt to gain unauthorised access to any part of this website, interfere with its operation, or use it to distribute harmful content.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">4. Intellectual Property</h2>
              <p>All content on this website — including text, images, logos, and design — is owned by or licensed to Ustaad. You may not reproduce, distribute, or use any content from this website without our written permission.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">5. Enquiries and Contact Forms</h2>
              <p>Submitting an enquiry through our website or WhatsApp does not constitute a binding contract. Tutoring arrangements are only confirmed after direct communication with our team and agreement on terms and fees.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">6. Limitation of Liability</h2>
              <p>Ustaad makes no warranties about academic outcomes. While we work hard to match students with suitable tutors and track progress, results depend on multiple factors including the student's effort and engagement. To the fullest extent permitted by UAE law, Ustaad is not liable for any indirect or consequential loss arising from use of this website or our tutoring services.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">7. External Links</h2>
              <p>This website may contain links to external websites. We are not responsible for the content or privacy practices of those sites.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">8. Changes to These Terms</h2>
              <p>We may update these terms at any time. Continued use of this website after changes are posted constitutes acceptance of the updated terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">9. Governing Law</h2>
              <p>These terms are governed by the laws of the United Arab Emirates. Any disputes are subject to the exclusive jurisdiction of the courts of the UAE.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">10. Contact</h2>
              <p>If you have questions about these terms, please contact us via our <a href="/contact" className="text-[#0f4a9b] hover:underline">contact page</a> or email <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] hover:underline">support@ustaad.ae</a>.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
