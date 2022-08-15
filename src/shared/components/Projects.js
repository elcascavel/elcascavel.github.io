import React from "react";
import Box from "./Box";

const Projects = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-semibold capitalize">Stuff I've built</h1>
          <div className="grid grid-cols-2 justify-between gap-2">
          <Box name="Núcleo de Estudantes de Comunicação e Multimédia" description="I was responsible for managing this project to completion and played a pivotal role to developing its backend and frontend. We used Laravel and Vue." linkTitle="Website" link="https://necm.utad.pt/" />
          <Box name="Snake" description="Snake clone built with C++ using SDL2. Videogames have been a huge part of my life and though I play less and less, I'm still fascinated by them." linkTitle="Github" link="https://github.com/elcascavel/Snake" />
          <Box name="Personal Website" description="Built with React and Tailwind as a learning project." linkTitle="Source" link="https://github.com/elcascavel/elcascavel.github.io" />
          </div>
        </div>
    </div>
  );
};
export default Projects;
