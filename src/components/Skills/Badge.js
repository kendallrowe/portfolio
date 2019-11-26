import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Badge.scss";

const classNames = require('classnames');


function Badge({ iconType, onClick, selected, allSelected }) {
  
  const badgeClasses = classNames("skill-badge", {
    "skill-badge--selected": selected,
    "skill-badge--all": allSelected
  });

  return (
    <FontAwesomeIcon className={badgeClasses} icon={iconType} onClick={onClick}/>
  );
}

export default Badge;