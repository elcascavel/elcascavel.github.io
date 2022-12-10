import { FeaturedProject } from "./_atoms/FeaturedProject/FeaturedProject";

const Experience = (props) => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 text-slate-900 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-semibold capitalize">Relevant Experience</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-2 mt-4">
          {props.experience.map((experience) => (
            <FeaturedProject
              key={experience.id}
              title={experience.title}
              description={experience.description}
              link={experience.link}
              linkTitle={experience.linkTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
