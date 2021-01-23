import React from 'react';

const TextListDl = ({ primary, secondary }) => {
  return (
    <>
      <dt>{secondary}</dt>
      <dd>{primary}</dd>
    </>
  );
};

export default TextListDl;
