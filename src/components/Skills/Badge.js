import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Badge.scss";

const classNames = require('classnames');


function Badge({ iconType, onClick, selected, allSelected, label }) {
  
  const badgeClasses = classNames("skill-badge", {
    "skill-badge--selected": selected,
    "skill-badge--all": allSelected
  });

  const captionClasses = classNames("skill-badge-caption", {
    "skill-badge-caption--hide": selected
  });

  return (
    <article className={badgeClasses} onClick={onClick}>
      <FontAwesomeIcon icon={iconType} />
      <p className={captionClasses}>{label}</p>
    </article>
  );
}

export default Badge;