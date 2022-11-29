const RenderLink = ({ link, linkTitle }) => {
  if (link === undefined) {
    return null;
  } else {
    return (
      <a className="font-semibold text-sky-500" href={link}>
        {linkTitle}
      </a>
    );
  }
};

export const Box = ({ title, description, link, linkTitle }) => {
  return (
    <div className="bg-slate-50 flex flex-col max-w-screen px-4 py-4 space-y-2 rounded-md">
      <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
        {title}
      </h3>
      <p className="text-slate-700">{description}</p>
      <RenderLink linkTitle={linkTitle} link={link} />
    </div>
  );
};
