import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

const defaultProps = {
  name: undefined,
  description: undefined,
  link: undefined,
};

const RenderLink = ({link, linkTitle}) => {
  if (link === undefined) {
    return null;
  }
  else {
    return (
      <a className="text-cyan-500" href={link}>
        {linkTitle}
      </a>
    );
  }
};

const Box = ({
  name,
  description,
  link,
  linkTitle,
}) => {

  return (
    <div className="bg-gray-200 flex flex-col max-w-screen px-4 py-4 space-y-2 rounded-md">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p>{description}</p>
        <RenderLink linkTitle={linkTitle} link={link}/>
    </div>
  );
};

export default Box;
