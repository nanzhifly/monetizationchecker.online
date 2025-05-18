import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Privacy Policy - YouTube Monetization Checker',
  description: 'Read the privacy policy for YouTube Monetization Checker. Learn how we collect, use, and protect your data when using our monetization checking tool.',
  keywords: 'privacy policy, YouTube monetization, data protection, user privacy, online tool',
  alternates: {
    canonical: 'https://www.monetizationchecker.online/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-screen bg-white py-8">
        <div className="max-w-[800px] mx-auto my-8 px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-gray-600 text-left">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="mb-4">When you use our YouTube Monetization Checker tool, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>YouTube URLs you submit for checking</li>
                <li>Basic usage analytics (page views, tool usage statistics)</li>
                <li>Technical information (browser type, device type)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide monetization checking services</li>
                <li>To improve our tool's accuracy and performance</li>
                <li>To analyze usage patterns and enhance user experience</li>
                <li>To prevent abuse and maintain security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
              <p className="mb-4">We prioritize your privacy and security:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not store submitted YouTube URLs</li>
                <li>All checks are performed in real-time</li>
                <li>We use industry-standard security measures</li>
                <li>We do not share your information with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p>We use essential cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain tool functionality</li>
                <li>Analyze usage patterns</li>
                <li>Prevent abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your data</li>
                <li>Request data deletion</li>
                <li>Opt-out of analytics</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>For privacy-related questions or concerns, please contact us through our Contact page.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p>We may update this privacy policy occasionally. We will notify users of any material changes through our website.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 