import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us · Headquarters Abuja & Sokoto Office",
  description:
    "Connect with Liberty Health & Wellbeing Foundation (CAC No. 9469157). Reach out to our Abuja Headquarters or Sokoto Office for partnerships, community health programmes, and collaboration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Liberty Health & Wellbeing Foundation",
    description:
      "Connect with Liberty Health & Wellbeing Foundation. Reach out to our Abuja Headquarters or Sokoto Office for partnerships and health initiatives across Nigeria.",
    url: "https://libertyhealthwellbeing.org/contact",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Liberty Health & Wellbeing Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Liberty Health & Wellbeing Foundation",
    description:
      "Connect with Liberty Health & Wellbeing Foundation (CAC No. 9469157) in Abuja and Sokoto, Nigeria.",
    images: ["/images/hero.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
