import type { Metadata } from "next";
import IELTSPageClient from "./IELTSPageClient";

export const metadata: Metadata = {
  title: "IELTS Preparation | Beyond Blue IELTS & Consultancy",
  description:
    "Expert IELTS coaching targeting Band 7+ in Rawalpindi. Listening, Reading, Writing, and Speaking mastery. Join our proven program and ace your IELTS exam.",
};

export default function IELTSPage() {
  return <IELTSPageClient />;
}
