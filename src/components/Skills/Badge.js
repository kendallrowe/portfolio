import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Badge.scss";

function Badge({ iconType, onClick }) {
  return (
    <FontAwesomeIcon icon={iconType} onClick={onClick}/>
  );
}

export default Badge;