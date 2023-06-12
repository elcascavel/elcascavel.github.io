import Header from "@/components/Header";
import ProjectContent from "./components/ProjectContent";

import getSingleProject from "@/actions/getSingleProject";
import ProjectHeader from "./components/ProjectHeader";

export const revalidate = 0;

export default async function Project({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = await getSingleProject(id);
  return (
    <div
      className="
      bg-gradient-to-b from-neutral-800 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <ProjectHeader project={project} />
      </Header>
      <div className="mt-2 mb-7 px-6">
        <ProjectContent project={project} />
      </div>
    </div>
  );
}
