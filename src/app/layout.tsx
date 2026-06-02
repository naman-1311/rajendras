import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import Layout from "@/components/hoc/main-layout";
import Navbar from "@/components/hoc/navbar";
import Footer from "@/components/hoc/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajendra's | Premium Dry Fruits & Spices Wholesale Supplier",
  description: "Rajendra's is a trusted wholesale supplier of premium dry fruits and spices. Rich in taste, best in quality. Serving 50+ cities across India.",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <NextTopLoader color="#c8a045" showSpinner={false} />
        <Layout>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Layout>
      </body>
    </html>
  );
}
