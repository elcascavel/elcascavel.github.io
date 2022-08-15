import React from "react";

const About = () => {
  return (
    <div className="flex flex-row justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-semibold capitalize">Olá, I'm Simão Amaral.</h1>
        <p>I started to code in 2020 by taking on a behemoth sized Unity 3D project. Suffice to say it didn't go well. Enrolled back into college and dove deep into web development. I'm currently in my third and final year of college.</p>
        <br></br>
        <p>I am passionate about web development and web design. I am focused on the backend but I'm not privy to front-end frameworks such as React and Vue.</p>
        </div>
      <div>
        <img src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_set.png" alt="myself in the flesh"></img>
      </div>
    </div>
  );
};
export default About;
