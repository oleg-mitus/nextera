import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import About from "@/components/about/About";

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  return <About />;
}

export const dynamic = 'force-static';
export const revalidate = false;