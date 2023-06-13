"use client";

import { Project } from "@/types";
import { Editor, EditorState, convertFromRaw } from "draft-js";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const contentState = convertFromRaw(JSON.parse(project.description));

  return (
    <div className="relative leading-relaxed my-4 z-0">
      <Editor
        editorState={EditorState.createWithContent(contentState)}
        onChange={() => {}}
        readOnly={true}
      />
    </div>
  );
};

export default ProjectContent;
