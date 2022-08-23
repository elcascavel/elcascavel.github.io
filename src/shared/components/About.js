import React from "react";
import Portrait from "../../portrait.jpg";

const About = () => {
  return (
    <div className="flex flex-row justify-center max-w-7xl mx-auto text-gray-700 px-4 sm:px-6 lg:px-8 ">
      <div>
      <img className="rounded-full mx-auto w-1/2 sm:hidden" src={Portrait} alt="myself in the flesh"></img>
        <h1 className="text-xl font-semibold capitalize mt-4 sm:text-3xl sm:mt-0">Olá, I'm Simão Amaral.</h1>
        <p className="mt-4">I started to code in 2020 by taking on a behemoth sized Unity 3D project with no experience. Suffice to say it didn't go well. Enrolled back into college and dove deep into web development. I'm currently in my third and final year of college.</p>
        <br></br>
        <p>I am passionate about web development and web design. I am focused on the backend but I'm not privy to front-end frameworks such as React and Vue.</p>
        </div>
      <div>
        <img className="hidden sm:block rounded-full" src={Portrait} alt="myself in the flesh"></img>
      </div>
    </div>
  );
};
export default About;
