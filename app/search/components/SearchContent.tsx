"use client";

import { Project } from "@/types";
import SidebarProjectItem from "@/components/SidebarProjectItem";

interface SearchContentProps {
  projects: Project[];
}

const SearchContent: React.FC<SearchContentProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        No projects found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {projects.map((project: Project) => (
        <div key={project.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <SidebarProjectItem onClick={() => {}} data={project} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
