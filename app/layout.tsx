import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import OutreachFlyerModal from "@/components/OutreachFlyerModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://libertyhealthwellbeing.org"),
  title: {
    default: "Liberty Health & Wellbeing Foundation | Better health. Stronger communities. Brighter futures.",
    template: "%s | Liberty Health & Wellbeing Foundation",
  },
  description:
    "Liberty Health & Wellbeing Foundation is a registered Nigerian nonprofit organisation (Incorporated Trustees, CAC No. 9469157) advancing preventive health, health education, and equitable wellbeing opportunities for underserved communities.",
  keywords: [
    "Liberty Health & Wellbeing Foundation",
    "Liberty Foundation Nigeria",
    "Nigerian Healthcare NGO",
    "Incorporated Trustees CAC 9469157",
    "Preventive Healthcare Nigeria",
    "Community Health Abuja Sokoto",
    "Mental Health & Health Equity Nigeria",
    "Health Education and Capacity Building",
  ],
  authors: [{ name: "Liberty Health & Wellbeing Foundation", url: "https://libertyhealthwellbeing.org" }],
  creator: "Liberty Health & Wellbeing Foundation",
  publisher: "Liberty Health & Wellbeing Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://libertyhealthwellbeing.org",
    siteName: "Liberty Health & Wellbeing Foundation",
    title: "Liberty Health & Wellbeing Foundation | Better health. Stronger communities. Brighter futures.",
    description:
      "Advancing preventive health, health education, and equitable wellbeing opportunities for underserved communities in Nigeria.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Liberty Health & Wellbeing Foundation - Better health. Stronger communities. Brighter futures.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberty Health & Wellbeing Foundation | Better health. Stronger communities.",
    description:
      "Advancing preventive health, health education, and equitable wellbeing opportunities for underserved communities in Nigeria.",
    images: ["/images/hero.jpg"],
    creator: "@LibertyHWF",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/images/favicon-black.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        sizes: "512x512",
      },
      {
        url: "/images/favicon-white.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        sizes: "512x512",
      },
      {
        url: "/images/favicon-black.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/images/favicon-black.png",
    apple: "/images/favicon-black.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Liberty Health & Wellbeing Foundation",
  alternateName: "Liberty Foundation",
  url: "https://libertyhealthwellbeing.org",
  logo: "https://libertyhealthwellbeing.org/Liberty health & wellbeing foundation white logo.png",
  image: "https://libertyhealthwellbeing.org/images/hero.jpg",
  description:
    "Liberty Health & Wellbeing Foundation is a registered Nigerian nonprofit organisation (Incorporated Trustees, CAC No. 9469157) advancing preventive health, health education, and equitable wellbeing opportunities for underserved communities.",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  identifier: "CAC Registration No. 9469157 | TIN: 2623366408281",
  taxID: "2623366408281",
  foundingDate: "2026-04-07",
  email: "emmanuel.awosan@libertyhealthwellbeing.org",
  knowsAbout: [
    "Mental Health & Wellbeing",
    "Addiction & Gambling Awareness",
    "Preventive Healthcare & Health Access",
    "Women’s, Maternal & Child Health",
    "Health Information & Community Resources",
    "Research, Policy & Advocacy",
    "Global Health & Partnerships",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Plot 89, Vitus Mbaogu Street, Jikwoyi",
      addressLocality: "Abuja",
      addressRegion: "FCT",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "01 Federal Layout, Arkilla",
      addressLocality: "Sokoto",
      addressRegion: "Sokoto State",
      addressCountry: "NG",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`h-full scroll-smooth ${plusJakartaSans.variable} ${bricolageGrotesque.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-full flex flex-col bg-canvas text-dark font-sans antialiased ${plusJakartaSans.className}`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <OutreachFlyerModal />
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
