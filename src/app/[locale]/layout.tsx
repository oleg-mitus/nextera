import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import { Alice, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import { routing } from "@/i18n/routing";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

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

const axiforma = localFont({
  variable: "--font-alice-sans",
  src: [
    {
      path: "../../../public/fonts/axiforma/Axiforma-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/axiforma/Axiforma-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/axiforma/Axiforma-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/axiforma/Axiforma-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  return {
    title: t("title"),
  };
}

export default async function RootLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      <body
        className={`${axiforma.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <div className="min-h-screen flex flex-col overflow-hidden">
            <Header />
            <Providers>
              <main className="pt-16 lg:pt-25 grow">{children}</main>
            </Providers>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
