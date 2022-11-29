const About = (props) => {
  return (
    <div className="flex flex-row justify-center max-w-7xl mx-auto text-slate-900 px-4 sm:px-6 lg:px-8 ">
      <div>
        <img
          className="rounded-full mx-auto w-1/2 sm:hidden"
          src={props.about.portrait}
          alt="myself in the flesh"
        ></img>
        <h1 className="text-xl font-semibold capitalize mt-4 sm:text-3xl sm:mt-0">
          {props.about.header}
        </h1>
        <p className="mt-4">{props.about.description}</p>
        <br></br>
        <p>{props.about.footer}</p>
      </div>
      <div>
        <img
          className="hidden sm:block rounded-full"
          src={props.about.portrait}
          alt="myself in the flesh"
        ></img>
      </div>
    </div>
  );
};
export default About;
