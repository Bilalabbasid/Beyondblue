import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Beyond Blue Consultancy",
  description:
    "Join the Beyond Blue team. We're looking for passionate consultants and visa specialists to help Pakistanis reach the world.",
};

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-24 px-4 text-center">
        <h1 className="font-display font-black text-white text-4xl sm:text-6xl uppercase mb-4">
          Join Our <span className="text-brand-sky italic">Team</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Help thousands of Pakistanis achieve their dream of living, studying, and working abroad.
        </p>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-brand-navy text-3xl mb-10 text-center">Open Positions</h2>

        <div className="space-y-6">
          {[
            {
              title: "Visa Consultant",
              type: "Full-time",
              location: "Bahria Ph 7, Rawalpindi",
              desc: "Guide clients through visa applications for USA, Canada, UK, and Schengen countries. Minimum 2 years experience in immigration consultancy required.",
            },
            {
              title: "Marketing Executive",
              type: "Full-time",
              location: "Rawalpindi / Remote",
              desc: "Manage social media, content creation, and lead generation for our consultancy services. Experience in digital marketing required.",
            },
            {
              title: "Client Relations Officer",
              type: "Full-time",
              location: "Bahria Ph 7, Rawalpindi",
              desc: "Handle client inquiries, follow-ups, and case management. Excellent communication skills in Urdu and English required.",
            },
          ].map((job) => (
            <div
              key={job.title}
              className="border border-slate-200 rounded-2xl p-6 hover:border-brand-sky hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-brand-navy text-xl">{job.title}</h3>
                <div className="flex gap-2">
                  <span className="text-xs bg-brand-sky/10 text-brand-sky font-medium px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-600 font-medium px-3 py-1 rounded-full">
                    {job.location}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-4">{job.desc}</p>
              <a
                href={`mailto:beyondblue83@gmail.com?subject=Application: ${job.title}&body=I am applying for the ${job.title} position at Beyond Blue Consultancy.`}
                className="inline-block text-sm font-semibold text-brand-navy border border-brand-navy rounded-full px-5 py-2 hover:bg-brand-navy hover:text-white transition-colors"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-brand-bg-light rounded-2xl p-8 text-center">
          <h3 className="font-bold text-brand-navy text-xl mb-2">Don&apos;t see your role?</h3>
          <p className="text-slate-600 mb-4">
            Send your CV to{" "}
            <a href="mailto:beyondblue83@gmail.com" className="text-brand-sky underline">
              beyondblue83@gmail.com
            </a>{" "}
            and we&apos;ll keep you in mind for future openings.
          </p>
        </div>
      </section>
    </main>
  );
}
