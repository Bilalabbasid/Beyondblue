// ─── Brand / Contact ─────────────────────────────────────────────────────────
export const BRAND = {
  name: "Beyond Blue IELTS & Consultancy",
  slogan: "Trust us to get you there",
  phone: "+92 331 5502600",
  whatsapp: "923315502600",
  email: "beyondblue83@gmail.com",
  address: "Bahria Ph 7 Entrance, Asian Business Center, Rawalpindi, Pakistan",
  hours: "Monday – Saturday, 9:00 AM – 7:00 PM (PKT)",
  social: {
    whatsapp: "https://wa.me/923315502600?text=Hi%20Beyond%20Blue%2C%20I%20need%20visa%20help",
    facebook: "https://web.facebook.com/profile.php?id=61553455649369",
    instagram: "https://www.instagram.com/beyondblue83/",
    linkedin: "https://linkedin.com/company/beyondblue",
    youtube: "https://youtube.com/beyondblue",
    tiktok: "https://tiktok.com/@beyondblue",
  },
} as const;

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 400, suffix: "+", label: "Happy Clients" },
  { value: 30, suffix: "+", label: "Countries We Serve" },
  { value: 10, suffix: "+", label: "Immigration Pathways" },
] as const;

export const ACHIEVEMENTS = [
  { icon: "Users", value: "300+", label: "Clients Served", color: "#1565C0" },
  { icon: "Globe2", value: "30+", label: "Countries Covered", color: "#42A5F5" },
  { icon: "GraduationCap", value: "10+", label: "Study Destinations", color: "#FFB300" },
  { icon: "UserCheck", value: "8+", label: "Expert Consultants", color: "#00C853" },
  { icon: "FileCheck", value: "20+", label: "Visa Pathways", color: "#1E88E5" },
  { icon: "Star", value: "100%", label: "Client Satisfaction", color: "#FFB300" },
] as const;

// ─── Countries ────────────────────────────────────────────────────────────────
export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  flagCode: string;
  image: string;
  visaTypes: string[];
  processingTime: string;
  difficulty: number;
  region: "europe" | "north-america" | "oceania" | "asia";
  description: string;
  requirements: {
    visit: string[];
    study: string[];
    work: string[];
    pr: string[];
  };
  documents: {
    visit: string[];
    study: string[];
    work: string[];
    pr: string[];
  };
  overviews?: {
    visit?: string;
    study?: string;
    work?: string;
    pr?: string;
  };
  embassy: {
    address: string;
    phone: string;
    website: string;
  };
  faqs: { question: string; answer: string }[];
  approvalImages?: string[];
}

export const COUNTRIES: CountryData[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    flagCode: "gb",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work", "PR"],
    processingTime: "3–8 weeks",
    difficulty: 3,
    region: "europe",
    description: "The United Kingdom offers world-class education, career opportunities, and pathways to permanent residence through its skilled worker and student routes.",
    requirements: {
      visit: ["Valid passport (6+ months validity)", "Bank statements (3–6 months)", "Employment letter", "No previous visa refusals", "Strong ties to home country"],
      study: ["CAS from UK university", "IELTS 6.0+", "Proof of funds £1,334/month", "Academic transcripts", "TB test results"],
      work: ["Job offer from UK employer", "Skilled Worker visa sponsorship", "English language B1+", "Salary £26,200+ per year", "Sponsor licence number"],
      pr: ["5 years continuous residence", "Indefinite Leave to Remain (ILR)", "English language test", "Life in the UK test", "No criminal record"],
    },
    documents: {
      visit: ["Passport copy", "Bank statements", "Employment letter", "Hotel bookings", "Return flight tickets", "Travel insurance"],
      study: ["Offer letter/CAS", "IELTS certificate", "Bank statements", "Academic certificates", "Passport photographs", "Tuberculosis test"],
      work: ["Certificate of Sponsorship", "Passport", "Qualifications", "Salary evidence", "English test certificate"],
      pr: ["Passport history", "Employment records", "Residence history", "Language certificate", "Life in UK certificate"],
    },
    embassy: {
      address: "British High Commission, Diplomatic Enclave, Ramna 5, Islamabad",
      phone: "+92-51-201-2000",
      website: "https://www.gov.uk/world/pakistan",
    },
    faqs: [
      { question: "What is the UK visit visa processing time?", answer: "Standard processing takes 3–8 weeks. Priority service can reduce this to 5 business days." },
      { question: "Do I need IELTS for a UK visit visa?", answer: "No, IELTS is not required for a UK visit visa. However, it is required for student and skilled worker visas." },
      { question: "What bank balance is required for a UK visit visa?", answer: "There's no fixed minimum, but you should demonstrate sufficient funds for your entire trip, typically showing 6 months of consistent bank statements." },
      { question: "Can I extend my UK visit visa from within the UK?", answer: "UK visit visas cannot typically be extended from within the UK. You would need to leave and re-apply." },
      { question: "What are the chances of UK visa approval for Pakistanis?", answer: "With proper documentation and clear ties to Pakistan (job, property, family), approval rates are high. Our success rate is above 90%." },
    ],
    approvalImages: ["/sjdsjkjd.jpeg", "/WhatsApp%20Image%202026-05-04%20at%2018.55.25.jpeg"],
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    flagCode: "us",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work", "PR"],
    processingTime: "4–12 weeks",
    difficulty: 4,
    region: "north-america",
    description: "The USA is the world's leading destination for education, career advancement, and immigration with the EB-2 NIW pathway for skilled professionals.",
    requirements: {
      visit: ["Valid passport", "DS-160 form", "Interview appointment", "Bank statements", "Strong ties to home country", "Purpose of visit clarity"],
      study: ["I-20 form from US institution", "TOEFL/IELTS score", "Proof of financial support", "F-1 visa application", "SEVIS fee payment"],
      work: ["H-1B specialty occupation", "Employer petition", "Bachelor's degree minimum", "LCA from DOL", "Annual lottery cap applies"],
      pr: ["EB-2 level: advanced degree or exceptional ability", "Substantial merit and national importance of proposed work", "Well positioned to advance the endeavor in the U.S.", "National Interest Waiver (NIW): no employer sponsor required in qualifying cases", "Recommendation letters from recognized experts in the field", "Personal statement / proposed endeavor statement", "Medical examination and biometrics"],
    },
    documents: {
      visit: ["DS-160 confirmation", "Passport", "Photo", "Bank statements", "Employment letter", "Property ownership"],
      study: ["I-20", "SEVIS receipt", "Financial statements", "Transcripts", "Test scores"],
      work: ["Petition approval I-797", "Labor condition application", "Degree certificates", "Experience letters"],
      pr: ["Valid passport", "Updated CV or resume showing education and work history", "Degree certificates, transcripts, and academic records", "Experience letters from employers", "Professional licenses or memberships (if available)", "Publications, citations, patents, awards, or media features", "Recommendation letters from experts in the field", "Personal statement or proposed endeavor statement", "Form I-140 and supporting immigration forms", "Medical exam and police clearance"],
    },
    overviews: {
      pr: "EB2-NIW is a U.S. immigration program for professionals whose work can benefit the national interest of the United States. It is popular among researchers, engineers, doctors, entrepreneurs, IT experts, and other highly qualified professionals because it can allow a person to apply without a permanent employer sponsor. To qualify, the applicant generally needs to meet the EB-2 level first — such as having an advanced degree or exceptional ability — and then show that their work has substantial merit, national importance, and that they are well positioned to continue that work in the U.S.",
    },
    embassy: {
      address: "US Embassy, Diplomatic Enclave, Ramna 5, Islamabad",
      phone: "+92-51-201-4000",
      website: "https://pk.usembassy.gov",
    },
    faqs: [
      { question: "How long does US B1/B2 visa take?", answer: "Processing typically takes 4–12 weeks including interview. Wait times for interview appointments vary." },
      { question: "What is EB2-NIW and who can apply?", answer: "EB2-NIW (National Interest Waiver) is a U.S. immigration program for professionals whose work benefits the national interest — researchers, engineers, doctors, entrepreneurs, and IT experts. It may allow a U.S. green card without a permanent employer sponsor or PERM labor certification." },
      { question: "What is the main benefit of EB2-NIW?", answer: "It may allow the applicant to seek a U.S. green card without a permanent job offer and without the normal labor certification process in qualifying cases, making it ideal for highly qualified self-petitioners." },
      { question: "Do I need a job offer for EB2-NIW?", answer: "In many NIW cases, the job offer and PERM labor certification can be waived if the applicant proves the national interest standard through substantial merit, national importance, and strong positioning." },
      { question: "Is EB2-NIW a permanent residence pathway?", answer: "Yes. It is an immigrant route that can lead to a U.S. green card if approved, followed by the required final immigration stage (Adjustment of Status or Consular Processing)." },
      { question: "Can Pakistani students study in the USA on F-1 visa?", answer: "Yes. You need an acceptance letter (I-20) from a US institution, proof of financial support, and strong academic credentials." },
      { question: "Is IELTS needed for US visa?", answer: "For student visas (F-1), TOEFL is typically preferred but IELTS is also accepted at most US universities." },
    ],
    approvalImages: ["/ahshsh.jpeg", "/WhatsApp%20Image%202026-05-04%20at%2018.55.26.jpeg", "/WhatsApp%20Image%202026-05-0xcjjcxjc4%20at%2018.55.26.jpeg"],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    flagCode: "ca",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work", "PR"],
    processingTime: "4–16 weeks",
    difficulty: 3,
    region: "north-america",
    description: "Canada is the second largest country in the world. More than 80% of Canadians live in cities and more than two-thirds of the population live within 100 kilometers of the southern border. Canadians have one of the highest standards of living in the world and rank in the top ten for the world's happiest countries.",
    requirements: {
      visit: ["Valid passport", "Proof of funds", "Ties to home country", "Invitation letter (if applicable)", "Travel history"],
      study: ["Acceptance from DLI", "Proof of funds CAD 10,000+", "IELTS 6.0+", "Study permit application", "Medical exam (if >6 months)"],
      work: ["LMIA or LMIA-exempt offer", "Express Entry profile", "Provincial nomination", "French language assets", "Points above CRS cutoff"],
      pr: ["Express Entry (FSW/CEC/FST)", "CRS score 470+", "IELTS CLB 7+", "Educational credential assessment", "Provincial Nominee Program"],
    },
    documents: {
      visit: ["Passport", "Bank statements", "Employment letter", "ITR/tax returns", "Property documents"],
      study: ["Acceptance letter", "IELTS result", "Financial proof", "GIC account", "Medical exam if needed"],
      work: ["Job offer letter", "LMIA", "Work permit application", "Qualifications"],
      pr: ["ECA", "IELTS", "Police clearance", "Medical exam", "Proof of funds for settlement"],
    },
    embassy: {
      address: "High Commission of Canada, Diplomatic Enclave, Sector G-5, Islamabad",
      phone: "+92-51-208-6000",
      website: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    },
    faqs: [
      { question: "What CRS score do I need for Canada Express Entry?", answer: "The minimum changes with each draw. Recent draws have selected candidates with CRS scores between 470–510. We help maximize your score." },
      { question: "Can I bring my family to Canada on a student visa?", answer: "Yes, your spouse and dependent children can come as accompanying family members. Your spouse may be eligible for an open work permit." },
      { question: "What is the best immigration pathway to Canada?", answer: "Express Entry (Federal Skilled Worker) is the fastest. Provincial Nominee Programs offer more options for those with lower CRS scores." },
      { question: "How much money do I need for Canada PR?", answer: "Proof of settlement funds: CAD $13,310 for a single person, more for families. This must be unencumbered savings." },
      { question: "Is Canadian PR valid permanently?", answer: "Canada PR is valid for 5 years but must be renewed. You must be physically present in Canada for 730 days every 5 years to maintain status." },
    ],
    approvalImages: ["/WhatsApp%20Image%202026-05-04%20at%2018.55.23.jpeg"],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    flagCode: "au",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work", "PR"],
    processingTime: "4–20 weeks",
    difficulty: 3,
    region: "oceania",
    description: "Australia offers excellent quality of life with skilled migration points test, student visas, and temporary to permanent residence pathways.",
    requirements: {
      visit: ["Valid passport", "Genuine visitor intention", "Sufficient funds", "Health insurance", "Clean immigration history"],
      study: ["CoE from Australian institution", "IELTS 5.5–6.5+", "Genuine Temporary Entrant statement", "Overseas Student Health Cover (OSHC)", "Financial capacity"],
      work: ["Employer sponsorship (TSS visa)", "Skills assessment", "IELTS 5.0+", "Occupation on skilled list", "Health and character requirements"],
      pr: ["Points test 65+ (Skilled Migration) OR outstanding achievements (Subclass 858)", "Skills assessment or evidence of exceptional talent", "IELTS 6.0+ or equivalent English proficiency", "State nomination / SkillSelect invite OR nominator for Subclass 858", "International recognition and outstanding achievements (Subclass 858)", "Health, character, and security checks"],
    },
    documents: {
      visit: ["Passport", "Bank statements", "Employment letter", "Travel itinerary"],
      study: ["CoE", "IELTS certificate", "Financial evidence", "GTE statement", "OSHC insurance"],
      work: ["Sponsorship nomination", "Skills assessment", "Employment contract"],
      pr: ["Valid passport", "Skills assessment or portfolio of exceptional achievements", "Evidence of international recognition (awards, publications, patents, media)", "Updated CV or portfolio of achievements", "IELTS or English proficiency certificate", "Nomination from eligible Australian organization (Subclass 858)", "Evidence of contribution to priority sector", "Medical exam report", "Police clearance certificate"],
    },
    overviews: {
      pr: "The National Innovation Visa Subclass 858 is an Australian permanent residence pathway for exceptionally talented individuals. It is a permanent visa for people with outstanding achievements who can contribute to Australia's future prosperity, including researchers, entrepreneurs, innovative investors, athletes, and creatives. The visa replaced the earlier Global Talent style route in late 2024 and is aimed at people who can make significant contributions in priority areas. Successful applicants may live and work permanently in Australia.",
    },
    embassy: {
      address: "Australian High Commission, Plot No. 17-A, Sector G-5/4, Islamabad",
      phone: "+92-51-835-5500",
      website: "https://immi.homeaffairs.gov.au",
    },
    faqs: [
      { question: "What points do I need for Australia PR?", answer: "You need a minimum of 65 points in the points test. However, invitations typically go to candidates with 80–90+ points depending on occupation." },
      { question: "What is the National Innovation Visa Subclass 858?", answer: "Subclass 858 is a permanent residence visa for exceptionally talented individuals — researchers, entrepreneurs, innovative investors, athletes, and creatives — who can contribute significantly to Australia's future prosperity. It replaced the earlier Global Talent route in late 2024." },
      { question: "Is Subclass 858 a permanent residence visa?", answer: "Yes. It is presented as a permanent visa for exceptionally talented migrants who can make significant contributions in Australia's priority areas." },
      { question: "Do I need a nominator for Subclass 858?", answer: "Yes, the applicant must be nominated by an eligible Australian organization or individual with a national reputation in the relevant field." },
      { question: "Do I need international recognition for Subclass 858?", answer: "Yes, strong international recognition and outstanding achievement are central parts of the eligibility picture for Subclass 858." },
      { question: "Can I work while studying in Australia?", answer: "Yes, student visa holders can work up to 48 hours per fortnight during study sessions and unlimited hours during scheduled course breaks." },
      { question: "What is the difference between TSS and ENS visas?", answer: "TSS (Subclass 482) is a temporary work visa. ENS (Subclass 186) is for permanent employer nomination. TSS can lead to ENS after 2–3 years." },
      { question: "How long does Australia student visa take?", answer: "Processing typically takes 4–8 weeks after submitting your complete application with a CoE from an Australian institution." },
    ],
    approvalImages: ["/ashjsuajjas.jpeg", "/WhatsApp%20Image%202026-05-04%20at%2018.55.27.jpeg"],
  },
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    flagCode: "it",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work"],
    processingTime: "2–6 weeks",
    difficulty: 2,
    region: "europe",
    description: "Italy offers Schengen visitor visas and is a top study destination with affordable tuition, along with pathways for skilled workers.",
    requirements: {
      visit: ["Valid Schengen passport", "Travel insurance €30,000 coverage", "Bank statements", "Return tickets", "Hotel bookings"],
      study: ["University acceptance letter", "Proof of funds €5,000/year", "Italian or English proficiency", "Health insurance", "Accommodation proof"],
      work: ["Italian work permit (nulla osta)", "Employer in Italy", "Quota system", "Professional qualifications recognized"],
      pr: ["5 years legal residence", "Long-term EU residence permit", "Italian language B1", "Financial self-sufficiency"],
    },
    documents: {
      visit: ["Schengen application", "Passport", "Travel insurance", "Bank statements", "Flight bookings", "Hotel reservations"],
      study: ["Enrollment letter", "Financial proof", "Language certificate", "Health insurance"],
      work: ["Work permit authorization", "Employment contract", "Qualifications"],
      pr: ["Residence history", "Language certificate", "Income proof", "Police clearance"],
    },
    embassy: {
      address: "Italian Embassy, 54 Margalla Road, F-6/3, Islamabad",
      phone: "+92-51-227-6581",
      website: "https://ambislamabad.esteri.it",
    },
    faqs: [
      { question: "How many countries can I visit on Italy Schengen visa?", answer: "A Schengen visa allows you to visit all 26 Schengen Area countries with a single visa, including France, Germany, Spain, and more." },
      { question: "What is the Italy Schengen visa fee?", answer: "The standard Schengen visa fee is €80 for adults. Children aged 6–12 pay €40, and those under 6 are free." },
      { question: "Can I study in Italy in English?", answer: "Yes, many Italian universities offer programs taught entirely in English, especially at master's level. Tuition fees are very affordable." },
      { question: "What is the financial requirement for Italy Schengen visa?", answer: "You need to demonstrate €100/day for the duration of your stay, with a minimum of €500 total, plus return ticket funds." },
      { question: "How long can I stay in Italy on a Schengen visa?", answer: "A standard Schengen visa allows 90 days within any 180-day period. Student and work visas allow longer stays." },
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    flagCode: "es",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work"],
    processingTime: "2–6 weeks",
    difficulty: 2,
    region: "europe",
    description: "Spain is a vibrant Schengen destination with affordable living, world-class universities, and a growing tech startup scene.",
    requirements: {
      visit: ["Schengen visa requirements", "Travel insurance", "Sufficient funds", "Purpose of visit", "Accommodation proof"],
      study: ["University acceptance", "Financial proof", "Health insurance", "Spanish/English proficiency"],
      work: ["Spanish work permit", "Employer sponsorship", "Professional qualifications", "Social security registration"],
      pr: ["Legal residence 5 years", "Language test", "Social integration", "Financial independence"],
    },
    documents: {
      visit: ["Visa application", "Passport", "Insurance", "Bank statements", "Bookings"],
      study: ["Acceptance letter", "Financial evidence", "Insurance", "Language certificate"],
      work: ["Work authorization", "Contract", "Qualifications"],
      pr: ["Residence history", "Language certificate", "Income proof"],
    },
    embassy: {
      address: "Spanish Embassy, 45-E, Street No. 9, F-6/3, Islamabad",
      phone: "+92-51-282-8099",
      website: "https://www.exteriores.gob.es/Embajadas/islamabad",
    },
    faqs: [
      { question: "Is Spain Schengen visa easy to get from Pakistan?", answer: "Spain has a reasonable approval rate for well-documented applications. Strong bank statements, employment proof, and a clear itinerary significantly improve chances." },
      { question: "What is the Spain Digital Nomad visa?", answer: "Spain recently introduced a Digital Nomad visa for remote workers, requiring proof of remote employment and income of 200% of Spanish minimum wage." },
      { question: "Can I work while on Spain student visa?", answer: "Yes, students with a Spanish student residence permit can work up to 20 hours per week during term and full-time during holidays." },
      { question: "What Spanish language level is needed for immigration?", answer: "For student visas: Spanish or English proficiency depending on your course. For long-term residence: DELE A2 minimum, B1 for citizenship." },
      { question: "How much does a Spain Schengen visa cost?", answer: "The standard Schengen fee is €80. For Spain-specific national visas (student, work), fees are €80–€190." },
    ],
    approvalImages: ["/sjsj.jpeg"],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    flagCode: "de",
    image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work"],
    processingTime: "2–8 weeks",
    difficulty: 3,
    region: "europe",
    description: "Germany's Opportunity Card (Chancenkarte) is a game-changer for skilled professionals, allowing non-EU nationals to enter Germany for up to one year to search for employment, with two routes: recognized qualification or the points-based system.",
    requirements: {
      visit: ["Schengen visa requirements", "Travel insurance", "Bank statements", "Employment letter"],
      study: ["University admission", "Blocked account €934/month", "German/English language proof", "Health insurance DAX"],
      work: ["Opportunity Card route 1: qualification recognized in Germany", "Opportunity Card route 2: minimum 6 points in points system", "Financial resources: blocked account €1,091/month net (2026) or declaration of commitment", "Language: German A1 or English B2 minimum (points route)", "Part-time work up to 20 hours/week permitted during job search", "Short job trials up to 2 weeks per employer permitted", "Card valid for maximum one year"],
      pr: ["Blue Card EU", "5 years residence (21 months with German B1)", "Pension contribution history"],
    },
    documents: {
      visit: ["Schengen form", "Passport", "Insurance", "Statements"],
      study: ["Admission letter", "Blocked account proof", "Language certificate", "Insurance"],
      work: ["Valid passport", "Academic degree or vocational qualification documents", "Recognition proof in Germany (if using recognized qualification route)", "Statement of Comparability or qualification recognition evidence", "Language proof (German A1 or English B2 for points route)", "Evidence for points claimed (work experience, age, language, prior Germany stay, shortage occupation)", "Proof of financial resources (blocked account or declaration of commitment)", "CV or resume"],
      pr: ["Residence permits history", "Language certificate B1", "Employment record", "Pension statements"],
    },
    overviews: {
      work: "The Germany Opportunity Card is a residence route for non-EU nationals who want to come to Germany to look for a job. There are two main options: either the applicant has a qualification recognized in Germany, or the applicant qualifies through the points system with at least six points. A person must also show enough financial resources for the stay, such as a blocked account with at least €1,091 net per month in 2026 or a declaration of commitment. The card is usually issued for a maximum of one year and allows job search, part-time work up to 20 hours per week, and short job trials.",
    },
    embassy: {
      address: "German Embassy, Ramna 5, Diplomatic Enclave, Islamabad",
      phone: "+92-51-208-5800",
      website: "https://pakistan.diplo.de",
    },
    faqs: [
      { question: "What is the Germany Opportunity Card?", answer: "The Germany Opportunity Card (Chancenkarte) is a residence route for non-EU nationals to come to Germany to look for a job. There are two routes: having a qualification recognized in Germany, or qualifying through the points system with at least six points." },
      { question: "Do I need a job offer before applying for the Opportunity Card?", answer: "No. The Opportunity Card is specifically designed for job search before securing a job. It allows you to enter Germany and look for employment." },
      { question: "How long is the Germany Opportunity Card valid?", answer: "It is initially issued for a maximum of one year." },
      { question: "Can I work while searching for a job on the Opportunity Card?", answer: "Yes. The holder may do part-time work for up to 20 hours per week and job trials for up to two weeks per employer under official rules." },
      { question: "How much money do I need for the Germany Opportunity Card?", answer: "You must show financial resources such as a blocked account with at least €1,091 net per month in 2026, or a declaration of commitment covering the stay." },
      { question: "What if my qualification is not fully recognized in Germany?", answer: "You may still qualify through the points-based route if you meet the education, language, and points requirements (minimum 6 points). Points are awarded for qualifications, language skills, age, work experience, and more." },
      { question: "What qualifications are recognized in Germany?", answer: "Degrees from most countries need recognition through the anabin database or KMK. Engineering, IT, medicine, and sciences are highly in demand." },
    ],
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    flagCode: "fr",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work"],
    processingTime: "2–6 weeks",
    difficulty: 2,
    region: "europe",
    description: "France offers Schengen visas for tourism and top-ranked universities for affordable high-quality European education with a vibrant cultural scene.",
    requirements: {
      visit: ["Schengen requirements", "Travel insurance", "Hotel reservations", "Bank statements"],
      study: ["Campus France procedure", "University acceptance", "Proof of funds €615/month", "French/English proficiency"],
      work: ["Work authorization (autorisation de travail)", "Employer in France", "Professional qualifications"],
      pr: ["Carte de Résident (10 years)", "5 years residence", "French language B2", "Integration contract"],
    },
    documents: {
      visit: ["Visa form", "Passport", "Insurance", "Bank statements", "Bookings"],
      study: ["Campus France acceptance", "University letter", "Financial proof", "Language certificate"],
      work: ["Work permit", "Contract", "Degree recognition"],
      pr: ["Residence history", "Language B2", "Integration record", "Tax history"],
    },
    embassy: {
      address: "French Embassy, Diplomatic Enclave, Ramna 5, Islamabad",
      phone: "+92-51-201-5100",
      website: "https://pk.ambafrance.org",
    },
    faqs: [
      { question: "Do I need French language for France Schengen visa?", answer: "No, French is not required for a Schengen visa. However, it is needed for long-term residence and citizenship applications." },
      { question: "What is Campus France process for Pakistani students?", answer: "Pakistani students must go through the Campus France procedure: register online, pay fees, attend interview at Campus France office, then apply for student visa." },
      { question: "How much does studying in France cost?", answer: "Public universities charge €243/year for undergraduate and €300/year for masters. Private universities charge €3,000–€10,000/year." },
      { question: "Can I extend my stay in France after studies?", answer: "Yes, graduates from French universities can apply for a 1-year job-seeking visa, which can convert to a work permit upon finding employment." },
      { question: "What is the France Schengen visa appointment wait time?", answer: "Appointment wait times at the French Embassy in Islamabad vary from 2–6 weeks. We advise applying at least 8 weeks before your intended travel date." },
    ],
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    flagCode: "se",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Study", "Work", "Job Seeker"],
    processingTime: "4–10 weeks",
    difficulty: 3,
    region: "europe",
    description: "Sweden's Job Seeker Visa and quality education system make it one of Europe's most sought-after destinations for skilled professionals and students. The job seeker permit allows highly qualified graduates to enter Sweden and look for work or explore starting a business.",
    requirements: {
      visit: ["Schengen requirements", "Purpose clarity", "Financial proof"],
      study: ["University admission", "English B2 (IELTS 6.0+)", "Proof of funds SEK 8,568/month", "No need for Swedish language"],
      work: ["Job Seeker Visa: completed second-cycle qualification (Master's or higher)", "Apply from outside Sweden", "Financial proof: SEK 13,000/month for intended stay", "Funds for return journey", "Comprehensive health insurance valid in Sweden", "Permit valid maximum nine months (not exceeding passport validity)", "Must apply for correct work permit if a job is found before starting work"],
      pr: ["4–5 years legal residence", "Swedish A1+ language", "Self-sufficiency", "No criminal record"],
    },
    documents: {
      visit: ["Passport", "Insurance", "Bank statements"],
      study: ["Admission notice", "IELTS", "Financial proof (bank/scholarship)"],
      work: ["Valid passport with copies of all relevant pages", "Degree certificate showing completed second-cycle qualification", "Transcript showing courses included in the education", "Proof of financial support (bank statements showing SEK 13,000/month)", "Proof of comprehensive health insurance valid in Sweden", "Certified translations if documents are not in Swedish or English", "Signed power of attorney for verification of study documents by Swedish authorities", "Embassy selection details for passport presentation"],
      pr: ["Residence permits", "Language certificate", "Income proof"],
    },
    overviews: {
      work: "The Sweden Job Seeker Visa is generally used by highly qualified individuals who have completed studies equivalent to a second-cycle qualification and want to come to Sweden to look for work or explore starting a business. Official Swedish guidance states that the applicant must apply from outside Sweden and must be able to support themselves financially during the stay. This permit can be granted for a maximum of nine months, but never longer than the passport validity. Sweden also requires comprehensive health insurance and proof of funds of at least SEK 13,000 per month for the intended stay, plus return travel funds.",
    },
    embassy: {
      address: "Swedish Embassy, 6-A, Street 17, F-8/2, Islamabad",
      phone: "+92-51-260-4000",
      website: "https://www.migrationsverket.se",
    },
    faqs: [
      { question: "Who can apply for the Sweden Job Seeker Visa?", answer: "Applicants who have completed studies corresponding to a second-cycle qualification, such as a Master's or higher equivalent, may be eligible if other requirements are met, including financial support and health insurance." },
      { question: "How long is the Sweden Job Seeker Visa valid?", answer: "It can be granted for up to nine months, depending on the case and passport validity. It is never granted for longer than the passport validity." },
      { question: "How much money do I need for the Sweden Job Seeker Visa?", answer: "The official requirement is at least SEK 13,000 per month for the period requested, plus enough money for the return journey." },
      { question: "Can I work immediately after entering Sweden on this permit?", answer: "No. If you find a job, you must apply for the correct work permit. You are not allowed to start working before applying for that new permit." },
      { question: "Is Swedish language required for studying in Sweden?", answer: "No. Most master's programs in Sweden are taught entirely in English. Swedish language is not required for admission or student visa." },
      { question: "Can Pakistani students work in Sweden while studying?", answer: "Yes, there are no work hour restrictions for international students in Sweden — you can work full-time alongside your studies." },
    ],
  },
  {
    slug: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    flagCode: "hu",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Study", "Work"],
    processingTime: "2–6 weeks",
    difficulty: 2,
    region: "europe",
    description: "Hungary is an emerging study destination with affordable EU-standard education, and a gateway to the Schengen Area through its residence permit.",
    requirements: {
      visit: ["Schengen requirements", "Financial proof", "Health insurance"],
      study: ["University acceptance", "English proficiency", "Proof of funds €5,000/year", "Health insurance"],
      work: ["Work permit", "Job offer from Hungarian employer", "Qualifications recognition"],
      pr: ["3 years residence on long-term permit", "Hungarian language B2", "Integration agreement"],
    },
    documents: {
      visit: ["Passport", "Insurance", "Bank statements"],
      study: ["Admission letter", "Financial evidence", "Insurance", "Language certificate"],
      work: ["Employment contract", "Work permit application", "Qualifications"],
      pr: ["Residence history", "Language certificate", "Financial proof"],
    },
    embassy: {
      address: "Hungarian Embassy, 12 Margalla Road, F-7/2, Islamabad",
      phone: "+92-51-227-8652",
      website: "https://islamabad.mfa.gov.hu",
    },
    faqs: [
      { question: "Is Hungary a Schengen country?", answer: "Yes! Hungary is a Schengen member. A Hungarian student or work residence permit allows travel throughout the Schengen Area." },
      { question: "How affordable is studying in Hungary?", answer: "Tuition ranges from €2,000–€6,000/year for international students. Living costs are among the lowest in the EU at €500–€700/month." },
      { question: "What language is instruction in Hungary?", answer: "Many universities in Budapest offer medical, engineering, and business programs entirely in English." },
      { question: "Can I work in other EU countries with a Hungarian student visa?", answer: "A Hungarian student permit allows studying in Hungary and travel in Schengen. For work in other EU countries, you'd need their respective work permits." },
      { question: "What scholarships are available for Pakistanis in Hungary?", answer: "The Stipendium Hungaricum scholarship program offers fully funded opportunities for Pakistani students at Hungarian universities." },
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    flagCode: "nl",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work"],
    processingTime: "3–8 weeks",
    difficulty: 3,
    region: "europe",
    description: "The Netherlands is a leading hub for international business and technology with excellent English-taught programs and the highly skilled migrant visa.",
    requirements: {
      visit: ["Schengen visa", "Financial proof", "Health insurance", "Travel bookings"],
      study: ["Institution admission", "IELTS 6.0+", "Proof of funds €634/month", "TB test from Pakistan"],
      work: ["Highly Skilled Migrant (HSM) visa", "Minimum salary €5,008/month", "Recognized employer", "IND approval"],
      pr: ["5 years residence", "NT2 exam (Dutch)", "Continuous income", "Civic integration"],
    },
    documents: {
      visit: ["Schengen form", "Passport", "Insurance", "Statements", "Hotel bookings"],
      study: ["Admission letter", "IELTS", "Financial evidence", "TB test"],
      work: ["Employment contract", "Salary proof", "IND permit", "Qualifications"],
      pr: ["Residence history", "NT2 diploma", "Income evidence", "Police clearance"],
    },
    embassy: {
      address: "Royal Netherlands Embassy, House 21, Street 54, F-7/4, Islamabad",
      phone: "+92-51-227-4600",
      website: "https://www.netherlandsworldwide.nl",
    },
    faqs: [
      { question: "What is the Netherlands Highly Skilled Migrant visa?", answer: "The HSM visa (kennismigrant) allows companies to directly hire highly qualified international professionals without going through a lengthy work permit process." },
      { question: "Do Dutch universities teach in English?", answer: "Yes, the Netherlands has the highest number of English-taught programs outside English-speaking countries. Most master's programs are in English." },
      { question: "What is the TB test requirement for Netherlands visa?", answer: "Pakistani nationals applying for Netherlands student or work visas must take a tuberculosis test at the Dutch Embassy's designated facility before applying." },
      { question: "How much does a Netherlands student visa cost?", answer: "The MVV (entry visa) costs €192. After arriving, you register for a residence permit, which also costs around €192." },
      { question: "Can I bring family to Netherlands on a work visa?", answer: "Yes. HSM visa holders can bring their partner and dependent children. Your partner is automatically entitled to an open work permit." },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    flagCode: "nz",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Study", "Work", "PR"],
    processingTime: "3–10 weeks",
    difficulty: 3,
    region: "oceania",
    description: "New Zealand's Skilled Migrant Category and beautiful landscapes make it a top destination for professionals and students seeking quality of life.",
    requirements: {
      visit: ["Valid passport", "Sufficient funds NZD 1,000/month", "Return or onward ticket", "Health and character"],
      study: ["Offer from NZ institution", "IELTS 5.5+", "Financial evidence", "Genuine student intention"],
      work: ["Accredited Employer Work Visa (AEWV)", "Job offer from accredited employer", "Relevant qualifications", "IELTS 4.0+ for most roles"],
      pr: ["Skilled Migrant Category", "160+ points on SMC", "IELTS 6.5+", "Job offer in NZ", "Health and character"],
    },
    documents: {
      visit: ["Passport", "Bank statements", "Return tickets", "Health insurance"],
      study: ["Offer of place", "Financial evidence", "IELTS", "Medical exam"],
      work: ["Accredited employer job offer", "Qualifications", "Work visa form"],
      pr: ["SMC EOI", "IELTS", "Qualifications assessment", "Medical and police clearance"],
    },
    embassy: {
      address: "New Zealand High Commission, Plot No. 7, Street No. 62, F-7/4, Islamabad",
      phone: "+92-51-227-9200",
      website: "https://www.immigration.govt.nz",
    },
    faqs: [
      { question: "What is the New Zealand Skilled Migrant Category?", answer: "The SMC is NZ's points-based permanent residence pathway. You need 160+ points from skills, qualifications, and work experience. A job offer adds 50 points." },
      { question: "Can I study and work in New Zealand?", answer: "Yes, students enrolled in courses of 2 years or more can work 20 hours/week during term and full-time during scheduled holidays." },
      { question: "How long does NZ visitor visa last?", answer: "NZ visitor visas are typically valid for 3–9 months depending on your application. Extensions can be requested from within NZ." },
      { question: "What English level do I need for New Zealand immigration?", answer: "Visitor visas have no language test. Student visas require IELTS 5.5+. Work and PR visas typically require IELTS 6.5+ depending on occupation." },
      { question: "How does the NZ points system work?", answer: "Points are awarded for age (max 30 for ages 20–39), qualifications (up to 70 points), skilled employment in NZ (50–60 points), and work experience." },
    ],
  },
  {
    slug: "austria",
    name: "Austria",
    flag: "🇦🇹",
    flagCode: "at",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Visit", "Work", "Job Seeker", "PR"],
    processingTime: "4–10 weeks",
    difficulty: 3,
    region: "europe",
    description: "Austria's Red-White-Red Card framework offers a points-based skilled migration system for highly qualified professionals who want to enter Austria, search for employment, and build a long-term future in one of Europe's most prosperous countries.",
    requirements: {
      visit: ["Valid Schengen passport", "Travel insurance €30,000 coverage", "Bank statements", "Return tickets", "Hotel bookings"],
      study: [],
      work: ["Red-White-Red Card: points-based system under legally defined criteria", "Achieve required points threshold for applicable category", "Very Highly Qualified Workers: advanced degree or exceptional qualifications", "Special Skills: relevant professional skills and experience", "Language certificates where applicable to points claimed", "Any evidence supporting the points calculation (research, awards, training)"],
      pr: ["Settlement Permit — Permanent (after meeting residence requirements)", "Red-White-Red Card Plus → Settlement Permit pathway", "German language B1 certificate", "Financial self-sufficiency", "No criminal record"],
    },
    documents: {
      visit: ["Schengen visa application", "Valid passport", "Travel insurance", "Bank statements", "Hotel bookings", "Return flight tickets"],
      study: [],
      work: ["Valid passport", "Educational certificates and degree documents", "CV or resume", "Work experience letters and employer references", "Documents proving special qualifications or skills", "Language certificates (if applicable to points)", "Evidence supporting points calculation (research achievements, awards, special training)", "Application forms and embassy submission documents"],
      pr: ["Residence permit history", "Language certificate B1", "Income and financial proof", "Police clearance certificate"],
    },
    overviews: {
      work: "The Austria Job Seeker Visa is connected with Austria's points-based skilled migration system under the Red-White-Red Card framework. It is mainly relevant for highly qualified workers who can score enough points based on qualifications, skills, experience, and other legal criteria. Official Austrian guidance explains that applicants must reach the required points threshold under the legally defined system. It is commonly used by very highly qualified workers who want to enter Austria and search for employment opportunities that match their background.",
    },
    embassy: {
      address: "Austrian Embassy, Plot 13, Street 88, G-6/3, Islamabad",
      phone: "+92-51-282-9041",
      website: "https://www.migration.gv.at",
    },
    faqs: [
      { question: "What is the Austria Job Seeker Visa / Red-White-Red Card?", answer: "Austria's job seeker pathway is connected with the Red-White-Red Card framework, primarily for very highly qualified workers who score enough points to enter Austria and search for matching employment." },
      { question: "Is Austria's immigration system points-based?", answer: "Yes. Austria uses a legally defined points system under the Red-White-Red Card framework. Applicants must reach the required threshold under the applicable category." },
      { question: "What factors increase points in Austria?", answer: "Qualifications, special skills, relevant work experience, language proficiency, and supporting evidence connected to the applicant's profession can help increase points." },
      { question: "Do I need to meet a minimum points score?", answer: "Yes, applicants must achieve the required number of points under the applicable category to qualify for the Red-White-Red Card." },
      { question: "Can I bring family to Austria on a work permit?", answer: "Yes, family members can apply for a Red-White-Red Card Plus, which grants access to the Austrian labour market without restrictions." },
    ],
  },
  {
    slug: "norway",
    name: "Norway",
    flag: "🇳🇴",
    flagCode: "no",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=85&auto=format&fit=crop",
    visaTypes: ["Work", "Medical", "PR"],
    processingTime: "4–12 weeks",
    difficulty: 3,
    region: "europe",
    description: "Norway offers a high standard of living and a strong demand for healthcare professionals. Foreign medical and healthcare workers must obtain Norwegian authorization or license before working in protected healthcare professions, followed by the appropriate work or residence permit.",
    requirements: {
      visit: [],
      study: [],
      work: ["Norwegian authorization or license for healthcare professions (mandatory before starting work)", "Two-stage process: professional authorization from Norwegian authorities + immigration permission", "Degree in medicine, nursing, or relevant healthcare field", "Professional license or registration from home country (if applicable)", "Work experience documents relevant to the profession", "Certified translations of documents where required", "Additional requirements depending on final residence or work application stage"],
      pr: ["Permanent residence after 3 years on valid work permit", "Norwegian language level A2+", "Financial self-sufficiency", "No criminal record"],
    },
    documents: {
      visit: [],
      study: [],
      work: ["Valid passport or identity documents", "Degree certificates and academic records (medical or healthcare field)", "Professional license or registration from home country", "Work experience documents", "Documents required for authorization or licensing assessment", "Certified translations where required", "Additional immigration documents depending on the final residence or work application stage"],
      pr: ["Residence permit history", "Language certificate", "Income proof", "Police clearance certificate"],
    },
    overviews: {
      work: "The Norway Medical Program is a pathway for foreign healthcare professionals who want to work in Norway. Official Norwegian guidance states that if a person wants to work in Norway as healthcare personnel, they must apply for Norwegian authorization or license before they can start working in protected healthcare professions. This route is not just a visa process — it often involves two stages: professional authorization from Norwegian authorities, and then the appropriate work or residence permission if required.",
    },
    embassy: {
      address: "Royal Norwegian Embassy, 25 Street 19, F-6/2, Islamabad",
      phone: "+92-51-227-9190",
      website: "https://www.udi.no",
    },
    faqs: [
      { question: "Who needs the Norway Medical Program pathway?", answer: "Doctors, nurses, and other regulated healthcare professionals who want to work in Norway must apply for Norwegian authorization or license before starting work in protected occupations." },
      { question: "Is professional recognition required in Norway?", answer: "Yes, official guidance says healthcare personnel must apply for Norwegian authorization or license before starting work in protected healthcare professions." },
      { question: "Is this only a visa process?", answer: "No. It is usually both a professional licensing matter and an immigration matter, involving two stages: professional authorization from Norwegian authorities, then the appropriate work or residence permission." },
      { question: "Can all healthcare workers apply under one single category?", answer: "Not always. Different professions may have different requirements, and the exact pathway depends on the profession and qualifications held." },
      { question: "How long does Norway work permit processing take?", answer: "Processing typically takes 4–12 weeks depending on profession, qualifications, and completeness of the application. Healthcare professionals with recognized qualifications tend to have smoother processes." },
    ],
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  pageImage: string;
  icon: string;
  countries: string[];
  countryFlags: string[]; // ISO 3166-1 alpha-2 codes e.g. "gb", "us"
  requirements: string[];
  documents: string[];
  processingTime: string;
  successRate: number;
}

export const SERVICES: ServiceData[] = [
  {
    id: "visit-visa",
    slug: "visit-visa",
    title: "Visit Visa",
    description: "Explore the world with our expert visit visa assistance for Canada, Australia, USA, and Schengen countries.",
    longDescription:
      "A visitor visa opens doors to the world's most beautiful countries for tourism, family visits, business meetings, and medical treatment. Our consultants have a deep understanding of each embassy's requirements and craft applications that present your case in the strongest possible light. From gathering the right documents to coaching you for the visa interview, we handle everything.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=85&auto=format&fit=crop",
    pageImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&auto=format&fit=crop",
    icon: "Plane",
    countries: ["Canada", "Australia", "USA", "Italy", "Spain", "France", "Germany"],
    countryFlags: ["ca", "au", "us", "it", "es", "fr", "de"],
    requirements: [
      "Valid passport with 6+ months validity",
      "Bank statements showing sufficient funds",
      "Proof of employment / business ownership",
      "Property or asset ownership documents",
      "No prior visa refusals (or strong explanation)",
      "Strong ties to Pakistan (family, property, job)",
    ],
    documents: [
      "Original passport + all old passports",
      "3–6 months bank statements",
      "Employment letter / business registration",
      "Property documents / utility bills",
      "Invitation letter (if visiting family/friends)",
      "Travel insurance certificate",
      "Passport-size photographs",
      "Flight itinerary and hotel bookings",
    ],
    processingTime: "2–8 weeks",
    successRate: 92,
  },
  {
    id: "study-abroad",
    slug: "study-abroad",
    title: "Study Abroad",
    description: "Your dream of studying in Canada, UK, Australia, Italy, or Hungary starts here with our complete student visa service.",
    longDescription:
      "Studying abroad is one of the most transformative decisions of your life. Our education consultants help you choose the right university, prepare your application, and secure your student visa. We have partnerships with institutions across Canada, UK, Australia, Italy, and Hungary, ensuring you get admission to the best programs that match your profile.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=85&auto=format&fit=crop",
    pageImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85&auto=format&fit=crop",
    icon: "GraduationCap",
    countries: ["Canada", "UK", "Australia", "Italy", "Hungary"],
    countryFlags: ["ca", "gb", "au", "it", "hu"],
    requirements: [
      "Minimum IELTS 6.0 (varies by country/university)",
      "Strong academic transcripts",
      "Financial proof for tuition + living expenses",
      "Statement of Purpose (SOP)",
      "Letters of recommendation",
      "Valid passport with 2+ years validity",
    ],
    documents: [
      "Academic certificates + transcripts",
      "IELTS/TOEFL certificate",
      "Acceptance letter from institution",
      "SOP (Statement of Purpose)",
      "2 letters of recommendation",
      "Financial statements / sponsorship letter",
      "Passport-size photographs",
      "CV/Resume",
    ],
    processingTime: "4–12 weeks",
    successRate: 96,
  },
  {
    id: "skilled-immigration",
    slug: "skilled-immigration",
    title: "Skilled Immigration",
    description: "Permanent residency pathways in Canada Express Entry, Australia PR (incl. Subclass 858), UK Skilled Worker, and USA EB-2 NIW for qualified professionals.",
    longDescription:
      "Skilled immigration is the path to permanent residency and a new life abroad. Whether it's Canada's Express Entry, Australia's Skilled Migrant Category or National Innovation Visa Subclass 858, UK Skilled Worker visa, or US EB-2 National Interest Waiver — we analyze your profile, maximize your points, and build a case that gets approved. Our immigration specialists stay current with every policy change.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop",
    pageImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop",
    icon: "Briefcase",
    countries: ["Canada", "UK", "Australia", "USA", "Norway"],
    countryFlags: ["ca", "gb", "au", "us", "no"],
    requirements: [
      "Bachelor's or higher degree",
      "Minimum 3 years relevant work experience",
      "IELTS CLB 7+ (Canada) / IELTS 6.5+ (others)",
      "Educational Credential Assessment (ECA)",
      "Positive LMIA or provincial nomination",
      "Police clearance certificate",
      "Medical examination",
    ],
    documents: [
      "Degree certificates + transcripts",
      "ECA (Educational Credential Assessment)",
      "IELTS certificate CLB 7+",
      "Work experience letters + pay slips",
      "Police clearance certificate",
      "Medical examination report",
      "Passport photographs",
      "Proof of settlement funds",
    ],
    processingTime: "6–24 months",
    successRate: 88,
  },
  {
    id: "jobseeker-visa",
    slug: "jobseeker-visa",
    title: "Jobseeker Visa",
    description: "Germany Opportunity Card, Sweden Job Seeker Visa, and Austria Red-White-Red Card for qualified Pakistani professionals seeking employment in Europe.",
    longDescription:
      "Europe is actively recruiting skilled talent, and Pakistan has a wealth of qualified professionals. Germany's Opportunity Card (Chancenkarte) allows qualified non-EU applicants to come to Germany for up to one year to search for employment — with two routes via recognized qualification or the points system. Sweden's Job Seeker Visa lets highly qualified graduates explore work opportunities, while Austria's Red-White-Red Card framework opens doors for very highly qualified workers. We prepare your applications, get your qualifications recognized, and coach you for success.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=85&auto=format&fit=crop",
    pageImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85&auto=format&fit=crop",
    icon: "Search",
    countries: ["Germany", "Sweden", "Austria"],
    countryFlags: ["de", "se", "at"],
    requirements: [
      "Degree recognized or recognizable in Germany/Sweden/Austria",
      "Language proficiency: German A1 or English B2 (Germany points route)",
      "Financial resources: blocked account or equivalent (Germany/Austria)",
      "Second-cycle qualification — Master's or higher (Sweden Job Seeker)",
      "Points threshold under applicable category (Austria RWR Card)",
      "Comprehensive CV in European format",
      "Motivation letter addressing target market",
    ],
    documents: [
      "Degree certificates + recognition/comparability proof",
      "Work experience letters",
      "Language test certificate",
      "Blocked account confirmation or financial proof",
      "European-format CV",
      "Motivation letter",
      "Passport-size photographs",
      "Health insurance proof",
    ],
    processingTime: "4–10 weeks",
    successRate: 85,
  },
  {
    id: "ielts-preparation",
    slug: "ielts-preparation",
    title: "IELTS Preparation",
    description: "Expert IELTS coaching by certified trainers targeting Band 7+ for immigration, study, and work visa requirements.",
    longDescription:
      "IELTS is the gateway to your global journey. Our certified IELTS trainers have helped hundreds of students achieve their target band scores. We offer intensive courses for all four skills — Listening, Reading, Writing, and Speaking — with personalized feedback, mock tests, and proven strategies to maximize your score. Our students consistently achieve Band 7 and above.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=85&auto=format&fit=crop",
    pageImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=85&auto=format&fit=crop",
    icon: "BookOpen",
    countries: [],
    countryFlags: [],
    requirements: [
      "No minimum English level required to enroll",
      "Commitment to complete course (1–3 months)",
      "Regular attendance and practice",
      "Official IELTS test booking recommended alongside",
    ],
    documents: [
      "CNIC / Passport copy for registration",
      "Previous IELTS scores (if retaking)",
      "Enrollment fee payment receipt",
    ],
    processingTime: "1–3 months preparation",
    successRate: 94,
  },
  {
    id: "spouse-family",
    slug: "spouse-family",
    title: "Spouse & Family Visa",
    description: "Reunite with your loved ones abroad through dependent visas, spouse visas, and family reunification across UK, Canada, and Australia.",
    longDescription:
      "Family is everything. If your spouse or family member is abroad, we help you navigate the complex family visa process to reunite with them. Whether it's a UK spouse visa, Canadian family sponsorship, or Australian partner visa, our specialists ensure every document is perfect, every requirement is met, and your reunion happens as quickly as possible.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=85&auto=format&fit=crop",
    pageImage: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1200&q=85&auto=format&fit=crop",
    icon: "Heart",
    countries: ["UK", "Canada", "Australia"],
    countryFlags: ["gb", "ca", "au"],
    requirements: [
      "Genuine relationship proof (marriage certificate, photos, communication)",
      "Sponsor meets income threshold",
      "Accommodation proof",
      "English language requirement (UK: A1+)",
      "No criminal record",
      "Medical examination",
    ],
    documents: [
      "Marriage certificate (attested)",
      "Relationship evidence (photos, messages, financial ties)",
      "Sponsor's income and employment proof",
      "Accommodation documents",
      "Language test certificate",
      "Medical exam report",
      "Sponsor's passport / visa / status documents",
      "Passport photographs",
    ],
    processingTime: "3–12 months",
    successRate: 90,
  },
  {
    id: "hajj-umrah",
    slug: "hajj-umrah",
    title: "Hajj & Umrah",
    description: "Complete Hajj and Umrah packages for Pakistani pilgrims — visa processing, accommodation near Haram, group travel, and end-to-end support.",
    longDescription:
      "The sacred journey to Makkah is the most spiritual experience of a Muslim's life. Beyond Blue arranges complete Hajj and Umrah packages for Pakistani pilgrims — handling Saudi visa processing, accommodation near the Haram, group and private travel arrangements, guided ziyarat, and comprehensive end-to-end support. Our experienced team ensures every detail is handled so you can focus entirely on your ibadah.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&q=85&auto=format&fit=crop",
    pageImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1400&q=85&auto=format&fit=crop",
    icon: "Heart",
    countries: ["Saudi Arabia"],
    countryFlags: ["sa"],
    requirements: [
      "Valid Pakistani passport with at least 6 months validity",
      "Confirmed mahram relationship (for women under 45)",
      "Meningitis vaccination certificate (ACYW135)",
      "No prior Hajj within last 5 years (for Hajj quota)",
      "Proof of Pakistani nationality / CNIC",
      "Medical fitness certificate",
    ],
    documents: [
      "Original passport + 2 attested copies",
      "4 recent passport-size photographs (white background)",
      "CNIC copy (attested)",
      "Meningitis vaccination certificate",
      "Nikah Nama / family registration (for mahram proof)",
      "Medical fitness certificate",
      "Hajj/Umrah application form (provided by us)",
    ],
    processingTime: "2–6 weeks",
    successRate: 99,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface TestimonialData {
  id: string;
  name: string;
  photo: string;
  visa: string;
  country: string;
  flag: string;
  flagCode: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "1",
    name: "Waresha Khan",
    photo: "/ahshsh.jpeg",
    visa: "USA B1/B2 Visa",
    country: "United States",
    flag: "🇺🇸",
    flagCode: "us",
    quote:
      "Exceptional service. Got my USA B1/B2 visa approved. Beyond Blue guided me through every step — from DS-160 to interview prep. Highly professional and thorough.",
  },
  {
    id: "2",
    name: "Hamza Khalid",
    photo: "/WhatsApp%20Image%202026-05-04%20at%2018.55.26.jpeg",
    visa: "USA B1/B2 Visa",
    country: "United States",
    flag: "🇺🇸",
    flagCode: "us",
    quote:
      "Beyond Blue made my US visa dream a reality. Their consultants knew exactly what the embassy looks for and my application was approved first time. Amazing team.",
  },
  {
    id: "3",
    name: "Muhammad Zeerak",
    photo: "/WhatsApp%20Image%202026-05-0xcjjcxjc4%20at%2018.55.26.jpeg",
    visa: "USA B1/B2 Visa",
    country: "United States",
    flag: "🇺🇸",
    flagCode: "us",
    quote:
      "I had a very good experience during my consultations for the USA visitor visa. They have great knowledge and insight into what the embassy needs. Highly recommended.",
  },
  {
    id: "4",
    name: "Muhammad Arib",
    photo: "/WhatsApp%20Image%202026-05-04%20at%2018.55.24.jpeg",
    visa: "Greece Schengen Visa",
    country: "Greece",
    flag: "🇬🇷",
    flagCode: "gr",
    quote:
      "Got my Schengen visa approved with the help of Beyond Blue. The team was professional and made the documentation process very smooth. Would recommend to everyone.",
  },
  {
    id: "5",
    name: "Ipsa Suahny",
    photo: "https://i.pravatar.cc/100?img=23",
    visa: "Student Visa",
    country: "Canada",
    flag: "🎓",
    flagCode: "ca",
    quote:
      "I had a very good experience with them during my consultations regarding Student Visa. They have good and insightful knowledge about process for USA, Canada and Australian immigration.",
  },
  {
    id: "6",
    name: "Ayesha Malik",
    photo: "https://i.pravatar.cc/100?img=41",
    visa: "Germany Jobseeker",
    country: "Germany",
    flag: "🇩🇪",
    flagCode: "de",
    quote:
      "I was skeptical about the Jobseeker Visa but Beyond Blue guided me through every step. Within 4 months of arriving in Germany I had secured a job. Life-changing!",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "canada-visit-visa-pakistan-2025-guide",
    title: "Canada Visit Visa from Pakistan: Complete 2025 Guide",
    excerpt:
      "Everything you need to know about applying for a Canadian visit visa from Pakistan — documents, eligibility, bank balance requirements, and tips.",
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=600&q=85&auto=format&fit=crop",
    category: "Visit Visa",
    date: "March 15, 2025",
    readTime: "6 min read",
    content: `The UK visitor visa remains one of the most sought-after visas for Pakistanis, whether for tourism, family visits, or business purposes. The UK's iconic landmarks, world-class cities, and cultural experiences make it a top destination.

## What Documents Do You Need?

The UK Home Office requires a comprehensive set of documents:

**Personal Documents:**
- Original passport with at least 6 months validity beyond intended stay
- All previous passports
- CNIC and family registration certificate
- Proof of residential address

**Financial Documents:**
- 6 months personal bank statements showing consistent balance
- Business/company bank statements (if self-employed)
- Income tax returns (last 3 years if available)
- Property ownership documents

**Employment/Business Proof:**
- Employment letter on company letterhead with salary confirmation
- Business registration documents and tax filings
- Leave approval from employer

**Travel Documents:**
- Travel itinerary and hotel bookings
- Travel insurance covering the UK (minimum £1 million coverage recommended)

## How Much Bank Balance Do You Need?

There is no officially stated minimum, but as a general guideline:
- 6 months statements showing regular income
- Average monthly balance of PKR 500,000+ for short trips
- Evidence of ability to cover all trip costs

## Common Reasons for UK Visa Refusal

1. **Insufficient financial evidence** — irregular or inadequate bank balance
2. **Weak ties to Pakistan** — no compelling reason to return
3. **Previous refusals** — not addressed properly in new application
4. **Incomplete documentation** — missing key documents
5. **Inconsistencies** — contradictions between documents

## Tips to Maximize Approval Chances

- Apply at least 6 weeks before your intended travel date
- Show strong ties to Pakistan (property, family, business)
- Provide detailed travel itinerary
- Write a clear, honest cover letter explaining your purpose
- Use our consultation service for a professional review before submission

Beyond Blue's UK visa team has a 92%+ approval rate. Book your free consultation today.`,
  },
  {
    slug: "germany-jobseeker-visa-pakistanis-opportunity",
    title: "Germany Jobseeker Visa: The New Opportunity for Pakistanis",
    excerpt:
      "Germany's Jobseeker Visa allows qualified professionals to live in Germany for 6 months while searching for employment. Here's how to apply.",
    image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=600&q=85&auto=format&fit=crop",
    category: "Jobseeker Visa",
    date: "February 28, 2025",
    readTime: "5 min read",
    content: `Canada's Express Entry system is the world's most efficient immigration system, connecting skilled workers with Canadian permanent residency through a points-based Comprehensive Ranking System (CRS).

## Understanding Express Entry

Express Entry manages applications for three federal immigration programs:

1. **Federal Skilled Worker Program (FSWP)** — for skilled workers with foreign work experience
2. **Federal Skilled Trades Program (FSTP)** — for skilled tradespeople  
3. **Canadian Experience Class (CEC)** — for workers with Canadian work experience

## How CRS Points Are Calculated

The CRS score is out of 1200 points, broken down as:
- **Core human capital factors** (460 points): age, education, language, Canadian work experience
- **Spouse/partner factors** (40 points): education, language, Canadian work experience
- **Skill transferability** (100 points): combinations of education/experience/language
- **Additional points** (600 points): provincial nomination (600!), job offer (50/200), etc.

## What CRS Score Do You Need?

Recent draws have selected candidates with scores between 470–510. However, targeted draws for specific occupations (healthcare, STEM, trades) can have lower cutoffs.

## Maximizing Your CRS Score as a Pakistani

**Language is King**: Every IELTS band increase can add 10–50+ points. Going from CLB 7 to CLB 9 can add 50+ points.

**Get an ECA**: Educational Credential Assessment from WES or similar body verifies your Pakistani degree.

**Provincial Nomination**: This adds 600 points — essentially guaranteeing an invitation. Provinces like Ontario, British Columbia, and Saskatchewan have popular PNP streams.

**Canadian Work Experience**: Even 1 year of Canadian work experience adds 40 points.

Book a free profile assessment with Beyond Blue today.`,
  },
  {
    slug: "ielts-band-7-strategies",
    title: "IELTS Band 7+: How Our Students Consistently Achieve It",
    excerpt:
      "Our proven IELTS preparation methodology has helped hundreds of students achieve Band 7 and above. Here are the strategies that work.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=85&auto=format&fit=crop",
    category: "IELTS",
    date: "February 10, 2025",
    readTime: "4 min read",
    content: `Germany is facing a critical shortage of skilled workers, and the German government has responded by making it easier for qualified professionals from countries like Pakistan to enter and work in Germany through the Jobseeker Visa.

## What is the Germany Jobseeker Visa?

The Jobseeker Visa (Arbeitsuchende-Visum) allows qualified professionals to enter Germany for up to 6 months to search for employment. Unlike a work visa, you don't need a job offer before arriving — you get to network, attend interviews, and explore the German job market in person.

## Who Qualifies?

To be eligible for the Germany Jobseeker Visa, you must:
1. Hold a university degree that is recognized or recognizable in Germany
2. Have at least 5 years of relevant work experience
3. Demonstrate sufficient German or English language skills
4. Show proof of funds of at least €2,919 (3 months minimum wage)
5. Have health insurance for your stay

## In-Demand Sectors in Germany

- **IT & Software**: Developers, data scientists, cybersecurity specialists
- **Engineering**: Mechanical, electrical, civil, chemical engineers  
- **Healthcare**: Doctors, nurses, medical technicians
- **Finance & Banking**: Accountants, financial analysts
- **Skilled Trades**: Electricians, plumbers, construction workers

## Converting to a Work Visa

Once you find a job, you can convert your Jobseeker Visa to a work permit without leaving Germany. The process typically takes 4–8 weeks.

Beyond Blue has helped numerous Pakistani professionals successfully apply for Germany Jobseeker Visas and secure employment. Let us help you too.`,
  },
  {
    slug: "schengen-visa-pakistan-italy-spain-france",
    title: "Schengen Tourist Visa from Pakistan: Italy, Spain, France",
    excerpt:
      "Planning to visit Europe? Our step-by-step guide covers Schengen visa requirements, documents, and tips for Pakistani applicants.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=85&auto=format&fit=crop",
    category: "Visit Visa",
    date: "January 25, 2025",
    readTime: "7 min read",
    content: `IELTS Band 7 is the magic number for most immigration programs and prestigious universities. At Beyond Blue, our certified trainers have developed a proven system that consistently gets our students to Band 7 and beyond.

## Why Band 7 Matters

- Canada Express Entry: CLB 9 = Band 7 in all sections
- UK Skilled Worker Visa: CEFR B2 = Band 5.5–6.5 depending on role
- Australia PR (FSW): IELTS 7.0 required in all four bands
- UK/Canadian Universities: IELTS 6.5–7.5 for graduate programs

## Section-by-Section Strategies

### Listening (Target: 7.0+)

**Key techniques:**
- Predict answers before listening using the 30-second preview
- Focus on keywords and synonyms — answers are rarely word-for-word
- Practise with a wide variety of accents (British, Australian, American, Indian)
- Don't leave blanks — write something, you can revise

### Reading (Target: 7.0+)

**Key techniques:**
- Skim first (2 minutes per passage for structure and headings)
- True/False/Not Given: "Not Given" means the text simply doesn't address it
- Matching headings: read topic sentences, not entire paragraphs
- Use process of elimination on multiple choice

### Writing (Target: 7.0+)

**Task 2 (essay) structure:**
- Paragraph 1: Paraphrase question + clear position/thesis
- Paragraphs 2–3: Main arguments with examples and evidence
- Paragraph 4: Counterargument + rebuttal (for balanced approach)
- Conclusion: Restate thesis + summary

**Key errors to avoid:**
- Using the same words as the question without paraphrasing
- Not addressing all parts of the task
- Short paragraphs with insufficient development

### Speaking (Target: 7.0+)

- Record yourself daily — fluency comes from habit
- Use discourse markers: "To be honest...", "Having said that...", "In my experience..."
- Elaborate every answer with examples: "For instance, when I..."
- Don't memorize prepared answers — examiners detect them

## Our Proven Results

Our IELTS students have an average score improvement of 1.2 bands over our 8-week intensive course. 94% of our students who target Band 7 achieve it within their first or second attempt.

Enroll in our next batch by contacting Beyond Blue today.`,
  },
  {
    slug: "sweden-talent-visa-right-for-you",
    title: "Sweden Talent Visa: Is It Right for You?",
    excerpt:
      "Sweden's Talent Visa is one of the most flexible work visas in Europe. Find out if your profile qualifies and how Beyond Blue can help.",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&q=85&auto=format&fit=crop",
    category: "Jobseeker Visa",
    date: "January 12, 2025",
    readTime: "5 min read",
    content: `The Schengen Area comprises 26 European countries. A single Schengen visa allows you to travel freely among all of them — making it one of the most valuable travel documents for Pakistani passport holders.

## Which Countries Are in the Schengen Area?

Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland.

## Italy vs Spain vs France — Which to Apply Through?

Apply through the embassy of the country where you'll spend the most time. If equal, apply through the first country you'll enter.

**Italy**: Generally considered to have better approval rates. Popular for first-time Schengen applicants.

**Spain**: Good approval rates. The Spanish consulate in Islamabad is efficient. Popular for tourism.

**France**: Requires Campus France registration for students. Good for business travel and tourism.

## Schengen Visa Requirements

**Mandatory for all countries:**
- Valid passport (must remain valid 3 months after intended departure from Schengen)
- Completed Schengen visa application form
- Recent passport photographs (35×45mm, white background)
- Travel medical insurance (minimum €30,000 coverage, valid for all Schengen countries)
- Round-trip flight bookings
- Hotel reservations or invitation letter
- Bank statements (last 3–6 months)

**Recommended:**
- Employment letter confirming position, salary, and approved leave
- CNIC copy
- Property ownership documents (shows ties to home country)

## How to Maximize Approval Chances

1. Apply to the country where you'll spend most time
2. Show strong financial and social ties to Pakistan
3. Have comprehensive travel insurance from day one
4. Book refundable flights and hotels
5. Write a clear cover letter with your travel itinerary
6. Apply 4–6 weeks before departure

Contact Beyond Blue for a complete Schengen visa consultation.`,
  },
  {
    slug: "australia-pr-vs-canada-pr-pakistanis",
    title: "Australia PR vs Canada PR: Which Is Better for Pakistanis?",
    excerpt:
      "Comparing Australia's skilled migration with Canada's Express Entry system — points, timelines, costs, and lifestyle considerations.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=85&auto=format&fit=crop",
    category: "Immigration",
    date: "December 20, 2024",
    readTime: "8 min read",
    content: `Australia remains one of the world's top immigration destinations, offering multiple pathways to permanent residence for skilled workers, students, and families. Here's how to find the right pathway for you.

## Australia's Points Test

Australia uses a points-based system. The minimum is 65 points but invitations typically go to applicants with 80–95+ points.

**Points breakdown:**
- **Age**: Maximum 30 points (25–32 years = 30 points)
- **English**: Maximum 20 points (Superior = 20, Proficient = 10)
- **Work experience**: 5–20 points depending on years
- **Education**: 10–20 points depending on level
- **Australian qualifications**: 5–20 bonus points
- **State nomination**: 5 points

## The Main PR Pathways

### 1. Subclass 189 — Skilled Independent
No state sponsorship needed. Submit Expression of Interest (EOI) in SkillSelect, receive invitation based on points score, submit application within 60 days.

Best for: High scorers (85+ points) in high-demand occupations.

### 2. Subclass 190 — Skilled Nominated
Nominated by an Australian state/territory. Adds 5 points to your score. States have their own requirements and targeted occupation lists.

Best for: Applicants with 70–80 points who can't get an invite for Subclass 189.

### 3. Subclass 491 — Skilled Work Regional
State or family sponsored, requires living in regional Australia for 3 years before PR. Adds 15 points to your score, making it accessible for those with 65–70 points.

Best for: Those willing to live in regional Australia for a period.

### 4. Subclass 186 — Employer Nomination Scheme
Requires 2–3 years of working for an Australian employer who nominates you. The most direct path if you're already employed in Australia.

Best for: Those already on Subclass 482 (TSS) work visa in Australia.

## Critical First Steps

1. **Get your occupation assessed** by the relevant assessing authority (Engineers Australia, VETASSESS, ACS, etc.)
2. **Take IELTS** and aim for Band 7+ (Proficient English = 10 points, Superior = 20 points)
3. **Calculate your points** honestly using DIBP's online tool
4. **Create your EOI** in SkillSelect and submit

Beyond Blue's Australia immigration team can assess your eligibility and recommend the optimal pathway for your profile.`,
  },
];

// ─── How It Works Steps ───────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: 1,
    icon: "MessageCircle",
    title: "Free Consultation",
    description: "Book your free session. We assess your profile honestly.",
  },
  {
    step: 2,
    icon: "FileText",
    title: "Document Prep",
    description: "We prepare a complete, accurate application package.",
  },
  {
    step: 3,
    icon: "Send",
    title: "Submission",
    description: "We submit to the right embassy with zero errors.",
  },
  {
    step: 4,
    icon: "CheckCircle",
    title: "Visa Approved!",
    description: "Celebrate — you're going places. Literally.",
  },
] as const;

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "Expertise and Experience",
    description: "Years of industry experience and deep expertise in immigration law and visa regulations.",
    stat: "Since 2017",
  },
  {
    icon: "Target",
    title: "Personalized Solutions",
    description: "Customized strategies for each client's unique profile and destination needs.",
    stat: "100% Custom",
  },
  {
    icon: "FolderCheck",
    title: "Comprehensive Services",
    description: "End-to-end support from initial assessment to final visa approval.",
    stat: "Zero Errors",
  },
  {
    icon: "MessageSquare",
    title: "Client-Centric Approach",
    description: "Long-term relationships built on trust, transparency, and genuine care.",
    stat: "Free Always",
  },
  {
    icon: "ShieldCheck",
    title: "Proven Track Record",
    description: "300+ success stories that speak for themselves — real approvals, real people.",
    stat: "300+ Approved",
  },
  {
    icon: "Globe2",
    title: "Reliability and Credibility",
    description: "Consistent, dependable, and trustworthy advice you can count on.",
    stat: "40+ Nations",
  },
] as const;

// ─── IELTS Skills ─────────────────────────────────────────────────────────────
export const IELTS_SKILLS = [
  {
    skill: "Listening",
    icon: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Person wearing headphones focused on audio exercise — IELTS Listening section coaching at Beyond Blue",
    description: "Master accent recognition, note-taking strategies, and question types from multiple speakers.",
    tips: ["Predict answers in preview time", "Listen for synonyms", "Practise diverse accents"],
    targetBand: 7.5,
  },
  {
    skill: "Reading",
    icon: "BookOpen",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Open textbook with highlighter on desk — IELTS Reading comprehension preparation",
    description: "Develop skimming, scanning, and detailed comprehension for academic passages.",
    tips: ["Skim for structure first", "T/F/NG: Not Given = not mentioned", "Process of elimination"],
    targetBand: 7.5,
  },
  {
    skill: "Writing",
    icon: "PenTool",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Hand writing in notebook with pen — IELTS Writing task preparation at Beyond Blue",
    description: "Craft high-scoring essays and reports with strong structure, vocabulary, and grammar.",
    tips: ["Clear thesis in Task 2", "Task 1: key trends only", "Vary sentence structures"],
    targetBand: 7.0,
  },
  {
    skill: "Speaking",
    icon: "Mic",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=85&auto=format&fit=crop",
    imageAlt: "Two people in face-to-face conversation — IELTS Speaking test practice",
    description: "Build fluency, vocabulary, and confidence for natural conversations with examiners.",
    tips: ["Elaborate with examples", "Use discourse markers", "Don't memorize scripts"],
    targetBand: 7.0,
  },
] as const;

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM = [
  {
    name: "Ahmad Raza",
    role: "Managing Director",
    specialization: "Canada & UK Immigration",
    photo: "https://i.pravatar.cc/300?img=51",
  },
  {
    name: "Sadia Khan",
    role: "Senior Visa Consultant",
    specialization: "Schengen & European Pathways",
    photo: "https://i.pravatar.cc/300?img=48",
  },
  {
    name: "Usman Tariq",
    role: "IELTS Expert",
    specialization: "Band 7+ Achievement Coach",
    photo: "https://i.pravatar.cc/300?img=33",
  },
  {
    name: "Zara Ali",
    role: "Immigration Specialist",
    specialization: "Australia PR & USA EB-2 NIW",
    photo: "https://i.pravatar.cc/300?img=47",
  },
] as const;

// ─── Milestones ───────────────────────────────────────────────────────────────
export const MILESTONES = [
  { year: "2017", event: "Beyond Blue founded in Rawalpindi" },
  { year: "2018", event: "First 100 successful visas" },
  { year: "2020", event: "Launched IELTS preparation program" },
  { year: "2021", event: "Expanded to Schengen & European pathways" },
  { year: "2023", event: "500+ happy clients milestone" },
  { year: "2024", event: "300+ approvals, 30+ countries served" },
] as const;

// ─── Shared blur placeholder (navy-tinted base64) ─────────────────────────────
export const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDiIVFhMWIhsWGBYYGBYbIyskGyMoHRYYJDQlKCopKyssKxomLzI4MjM2Ny7/2wBDAQoLCw4NDhgQEBg2JhYmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2Njb/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIBAAAQQCAgMAAAAAAAAAAAAAAQIDBAURBhIhIv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCnN8Gx73LVFB35yLzHOUJqiX2FoU3sGdWoqBmJD4XS/9k=";

// ─── Centralized page images ──────────────────────────────────────────────────
export const IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=90&auto=format&fit=crop",
    alt: "Confident professional checking flight departure board at international airport — Beyond Blue immigration & visa consultancy",
  },
  about: {
    hero: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=85&auto=format&fit=crop",
      alt: "Diverse professional team in immigration consultation meeting — Beyond Blue Rawalpindi consultancy team",
    },
    story: {
      src: "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?w=800&q=85&auto=format&fit=crop",
      alt: "Visa application documents being reviewed on office desk — Beyond Blue document preparation service",
    },
  },
  ielts: {
    hero: {
      src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1600&q=85&auto=format&fit=crop",
      alt: "Student reading with full concentration in natural light — IELTS Band 7+ preparation coaching at Beyond Blue",
    },
  },
  contact: {
    office: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop",
      alt: "Modern professional office interior — Beyond Blue IELTS & Consultancy Rawalpindi office",
    },
  },
} as const;
