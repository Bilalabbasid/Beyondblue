import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Beyond Blue IELTS & Consultancy",
  description:
    "Book your free visa assessment with Beyond Blue. Call +92 331 5502600, email beyondblue83@gmail.com, or fill our multi-step online form for a free consultation.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
