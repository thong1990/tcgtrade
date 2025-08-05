// app/privacy/page.tsx

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PokeTradeTCG",
  description: "How PokeTradeTCG handles your data and protects your privacy.",
};

export default function PrivacyPage() {
  return (
    
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 5/8/2025</p>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal Information:</strong> Only if you create an account (email, username).</li>
          <li><strong>Usage Data:</strong> IP address, browser, device info, and page views (for analytics).</li>
          <li><strong>Trade & Chat Data:</strong> Stored securely if you use these features.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To run and improve TCGTrade</li>
          <li>To provide customer support</li>
          <li>To personalize your experience</li>
          <li>To monitor and analyze app performance</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Data</h2>
        <p>We do <strong>not</strong> sell your data. We may share limited info with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Supabase</strong> (auth & storage)</li>
          <li><strong>Sendbird</strong> (chat system)</li>
          <li><strong>RevenueCat</strong> (in-app subscriptions)</li>
          <li>Analytics providers (e.g. Google Analytics, Vercel)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies & Local Storage</h2>
        <p>We may use cookies or local storage for login sessions or saving your preferences.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p>Your data is encrypted and stored securely. But no method is 100% secure.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Request a copy of your data</li>
          <li>Request deletion of your data</li>
          <li>Fix incorrect information</li>
        </ul>
        <p>Contact us at <strong>support@tcgtrade.me</strong></p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">7. Children’s Privacy</h2>
        <p>This service is not intended for users under 13. We do not knowingly collect data from children.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy. Check this page for the latest version.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p>Email: <strong>support@tcgtrade.me</strong></p>
      </section>

      <hr className="my-6" />

      


    </main>
    <Footer />
    </main>
  );
}
