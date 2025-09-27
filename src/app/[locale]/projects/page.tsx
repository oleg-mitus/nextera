import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Projects from "@/components/projects/Projects";

const ProjectsPage = ({
  params,
}: {
  params: Promise<{ locale: "en" | "ru" }>;
}) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <Projects />;
};

export default ProjectsPage;

export const dynamic = "force-static";
export const revalidate = false;
