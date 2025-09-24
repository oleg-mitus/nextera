import Project from "@/components/projects/Project";
import { projectsBlocks } from "@/data/projects";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const pages = projectsBlocks[0].projects;

  return pages.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projectsBlocks[0].projects.find(
    (item) => item.id.toString() === id
  );

  if (!project) return "";

  return <Project project={project} />;
}
