import Project from "@/components/projects/Project";
import { projectsBlocks } from "@/data/projects";
import { use } from "react";

export async function generateStaticParams(): Promise<
  { id: string; }[]
> {
  const pages = projectsBlocks[0].projects;

  return pages.map((page) => ({ id: page.id.toString()})
  );
}

export default function Page({
  params,
}: {
  params: Promise<{ id: string; }>;
}) {
  const { id } = use(params);

  const project = projectsBlocks[0].projects.find(
    (item) => item.id.toString() === id
  );

  if (!project) return "";

  return <Project project={project} />;
}
