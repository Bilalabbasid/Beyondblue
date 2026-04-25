import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Beyond Blue IELTS & Consultancy",
  description: "Terms and Conditions for Beyond Blue IELTS & Consultancy services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-navy pt-[80px] lg:pt-[100px] pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/60 text-lg">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none">
          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">1. Services</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Beyond Blue IELTS &amp; Consultancy provides immigration advisory, visa application assistance, IELTS preparation coaching, and related consultancy services. We are a licensed consultancy — not a government body or embassy representative.
          </p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">2. No Guarantee of Visa Approval</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            While we maintain high success rates, the final decision on any visa or immigration application rests solely with the relevant embassy, consulate, or immigration authority. Beyond Blue cannot guarantee visa approval and is not liable for any refusal decisions made by immigration authorities.
          </p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">3. Client Responsibilities</h2>
          <ul className="text-slate-600 leading-relaxed mb-4 list-disc ml-6 space-y-2">
            <li>Provide accurate and truthful information and documentation</li>
            <li>Inform us immediately of any changes to your circumstances</li>
            <li>Attend required appointments (biometrics, interviews) as scheduled</li>
            <li>Keep copies of all submitted documents</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">4. Fees and Payments</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Our consultation fees are agreed upon before services commence. Embassy and government fees are separate and payable directly to the relevant authority. Initial consultations are offered free of charge.
          </p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">5. Disclaimer</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Beyond Blue IELTS &amp; Consultancy is a private immigration consultancy. We are not affiliated with any government, embassy, or immigration authority. Information provided is for guidance only and should not be treated as legal advice.
          </p>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-8 mb-4">6. Contact</h2>
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
