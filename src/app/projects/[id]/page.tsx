import Project from "@/components/projects/Project";
import { projectsBlocks } from "@/data/projects";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const project = projectsBlocks[0].projects.find((item) => item.id == id);

  if (!project) return ''

  return <Project project={project} />;
}
