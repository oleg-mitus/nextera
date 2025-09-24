import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import { Alice, Geist_Mono } from "next/font/google";
import "./globals.css";

const aliceSans = Alice({
  variable: "--font-alice-sans",
  weight: "400",
  style: "normal",
  subsets: ["cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextEra Production",
  description:
    "Мы — продакшн полного цикла, готовый воплотить в жизнь самые смелые идеи",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${aliceSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col overflow-hidden">
          <Header />
          <Providers>
            <main className="pt-25 grow">{children}</main>
          </Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
