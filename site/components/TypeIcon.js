import React from 'react';
import './TypeIcon.css';

const TypeIcon = props => {
  let { type, sizing } = props;
  type = type.toLowerCase();
  if (!sizing) sizing = 'info-area';

  return (
    <div className={`icon ${sizing} ${type}`}>
      <img src={`${window.location.origin}/assets/types/icons/${type}.svg`} alt={type} />
    </div>
  );
};

export default TypeIcon;
