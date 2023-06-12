import Header from "@/components/Header";
import ProjectContent from "./components/ProjectContent";

export const revalidate = 0;

export default function Project({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Project Name - {id}
          </h1>
        </div>
      </Header>
      <ProjectContent />
    </div>
  );
}
