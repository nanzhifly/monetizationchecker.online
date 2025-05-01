import Footer from '@/components/sections/Footer';

export default function Contact() {
  return (
    <>
      <main className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-14 md:p-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            
            <div className="space-y-8 text-gray-600">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="mb-6">We're here to help! If you have any questions, suggestions, or concerns about our YouTube Monetization Checker tool, please don't hesitate to reach out.</p>
              </section>

              <section className="bg-gray-50 rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Contact Methods</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="mt-1">support@ytmonetization.com</p>
                    <p className="text-sm text-gray-500 mt-1">Response time: Within 24 hours</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">Business Inquiries</h3>
                    <p className="mt-1">business@ytmonetization.com</p>
                    <p className="text-sm text-gray-500 mt-1">For partnerships and collaborations</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">What information should I include in my message?</h3>
                    <p className="mt-1">Please include:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Your name</li>
                      <li>The YouTube URL you're checking (if applicable)</li>
                      <li>A detailed description of your question or issue</li>
                      <li>Any error messages you've encountered</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h2>
                <p className="mb-4">Stay updated with our latest features and announcements:</p>
                <div className="space-y-2">
                  <p>Twitter: @YTMonetization</p>
                  <p>LinkedIn: YouTube Monetization Checker</p>
                  <p>GitHub: github.com/ytmonetization</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h2>
                <p>Our support team is available:</p>
                <p className="mt-2">Monday - Friday: 9:00 AM - 6:00 PM (UTC)</p>
                <p className="text-sm text-gray-500 mt-2">We strive to respond to all inquiries within one business day.</p>
              </section>

              <div className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-100">
                For urgent matters, please email us directly at support@ytmonetization.com
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 