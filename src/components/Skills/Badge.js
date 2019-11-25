import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Badge.scss";

function Badge({ iconType }) {

  return (
    <FontAwesomeIcon icon={iconType} />
  );
}

export default Badge;