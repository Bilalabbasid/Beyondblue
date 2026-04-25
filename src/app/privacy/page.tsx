import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Beyond Blue IELTS & Consultancy",
  description: "Privacy Policy for Beyond Blue IELTS & Consultancy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-navy pt-[80px] lg:pt-[100px] pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-lg">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none">
          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Beyond Blue IELTS &amp; Consultancy collects information you provide directly to us, including your name, email address, phone number (WhatsApp), city of residence, destination country, visa type, employment status, and any additional details you provide in our free assessment form.
          </p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We use your information to:</p>
          <ul className="text-slate-600 leading-relaxed mb-4 list-disc ml-6 space-y-2">
            <li>Provide visa consultation and immigration advisory services</li>
            <li>Contact you via WhatsApp, phone, or email regarding your inquiry</li>
            <li>Prepare and submit your visa application on your behalf</li>
            <li>Send you relevant updates about visa policies and requirements</li>
            <li>Improve our services and website experience</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with embassies, immigration authorities, and partner institutions solely for the purpose of processing your visa application, with your explicit consent.
          </p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">4. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We implement appropriate security measures to protect your personal information. All document submissions are handled securely, and we do not store sensitive documents beyond the processing period.
          </p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">5. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            For any privacy-related questions, contact us at:
          </p>
          <div className="bg-brand-bg-light rounded-xl p-6 mb-8">
            <p className="text-brand-navy font-semibold">Beyond Blue IELTS &amp; Consultancy</p>
            <p className="text-slate-600">Bahria Ph 7 Entrance, Asian Business Center, Rawalpindi</p>
            <p className="text-slate-600">Email: <a href="mailto:beyondblue83@gmail.com" className="text-brand hover:underline">beyondblue83@gmail.com</a></p>
            <p className="text-slate-600">Phone: <a href="tel:+923315502600" className="text-brand hover:underline">+92 331 5502600</a></p>
          </div>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
