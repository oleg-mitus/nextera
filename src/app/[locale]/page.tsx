import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Home from "@/components/Home";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  return <Home lang={"ru"} />;
}

export const dynamic = 'force-static';
export const revalidate = false;