import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Liberty Health & Wellbeing Foundation | A Healthier, Empowered and Sustainable Africa",
  description: "Liberty Health & Wellbeing Foundation is committed to improving health and wellbeing, empowering individuals and strengthening communities across Africa through meaningful and sustainable initiatives.",
  keywords: "Liberty Health Foundation, African Healthcare, Community Wellbeing, Empowerment, Sustainability, Health Africa, Non-profit",
  openGraph: {
    title: "Liberty Health & Wellbeing Foundation",
    description: "A Healthier, Empowered and Sustainable Africa.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth ${plusJakartaSans.variable} ${bricolageGrotesque.variable}`}
    >
      <body className={`min-h-full flex flex-col bg-canvas text-dark font-sans antialiased ${plusJakartaSans.className}`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
