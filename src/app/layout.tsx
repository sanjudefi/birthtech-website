import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "BirthTech Innovations | Safer Maternal Healthcare Through Technology",
    template: "%s | BirthTech Innovations",
  },
  description:
    "BirthTech Innovations builds integrated medical devices and digital platforms to make maternal and neonatal healthcare safer, smarter, and more accessible worldwide.",
  keywords: [
    "maternal healthcare",
    "neonatal care",
    "smart birthing chair",
    "medical devices",
    "pregnancy monitoring",
    "BirthPro",
    "BirthMithra",
    "MomSense",
    "healthcare technology",
    "maternal mortality",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
