import Project from "@/components/projects/Project";
import { projectsBlocks } from "@/data/projects";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { use } from "react";

export async function generateStaticParams(): Promise<
  { id: string; locale: "en" | "ru" }[]
> {
  const pages = projectsBlocks[0].projects;

  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({ id: page.id.toString(), locale }))
  );
}

export default function Page({
  params,
}: {
  params: Promise<{ id: string; locale: "en" | "ru" }>;
}) {
  const { id, locale } = use(params);

  setRequestLocale(locale);

  const project = projectsBlocks[0].projects.find(
    (item) => item.id.toString() === id
  );

  if (!project) return "";

  return <Project project={project} />;
}


// Force static generation for this route
export const dynamic = 'force-static';
export const revalidate = false;