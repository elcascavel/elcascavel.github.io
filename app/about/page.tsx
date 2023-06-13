import Header from "@/components/Header";
import AboutHeader from "./components/AboutHeader";
import AboutContent from "./components/AboutContent";

export const revalidate = 0;

export default async function About() {
  return (
    <div
      className="
          bg-gradient-to-b from-neutral-600
            rounded-lg 
            h-full 
            w-full 
            overflow-hidden 
            overflow-y-auto
          "
    >
      <Header className="from-bg-neutral-900">
        <AboutHeader />
      </Header>
      <div className="mt-2 mb-7 px-6">
        <AboutContent />
      </div>
    </div>
  );
}
