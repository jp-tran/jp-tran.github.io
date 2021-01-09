import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const LinkButtons = ({ url, repo }) => {
  const externalButton = (
    <a target="_blank" rel="noopener noreferrer" className="project-link-buttons" href={url}>
      <BiLinkExternal />
    </a>
  );

  const repoButton = (
    <a target="_blank" rel="noopener noreferrer" className="project-link-buttons" href={repo}>
      <FaGithub />
    </a>
  );
  if (url && repo) {
    return (
      <>
        {externalButton}
        {repoButton}
      </>
    );
  } else if (url) {
    return <>{externalButton}</>;
  } else if (repo) {
    return <>{repoButton}</>;
  } else {
    return <></>;
  }
};

export default LinkButtons;
