import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Terms of Service - YouTube Monetization Checker',
  description: 'Review the terms of service for using YouTube Monetization Checker. Understand your rights, responsibilities, and our service limitations.',
  keywords: 'terms of service, YouTube monetization, user agreement, online tool, service policy',
  alternates: {
    canonical: 'https://www.monetizationchecker.online/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <>
      <main className="min-h-screen bg-white py-8">
        <div className="max-w-[800px] mx-auto my-8 px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900">
            Terms of Service
          </h1>
          <div className="space-y-8 text-gray-600 text-left">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">By accessing and using YouTube Monetization Checker, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="mb-4">YouTube Monetization Checker provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>YouTube video and channel monetization eligibility checking</li>
                <li>View count and subscriber count verification</li>
                <li>Monetization status assessment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="mb-4">Users must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide valid YouTube URLs</li>
                <li>Not attempt to manipulate or abuse the service</li>
                <li>Not use the service for any illegal purposes</li>
                <li>Respect usage limits and fair use policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Service Limitations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Results are provided "as is" without warranty</li>
                <li>Service availability may vary</li>
                <li>We reserve the right to modify or discontinue the service</li>
                <li>API rate limits and quotas may apply</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="mb-4">All content, features, and functionality are owned by YouTube Monetization Checker and are protected by international copyright laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
              <p className="mb-4">The service is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy of results or eligibility assessments.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="mb-4">We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of new terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="mb-4">These terms shall be governed by and construed in accordance with applicable laws, without regard to conflicts of law principles.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 