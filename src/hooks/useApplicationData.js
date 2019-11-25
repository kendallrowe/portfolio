// eslint-disable-next-line
import React, { useReducer } from "react";
import reducer, {
  SELECT_SKILL,
} from "../reducers/application";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    skills: []
  });
  
  const selectSkill = skill => dispatch(({ type: SELECT_SKILL, skill }));

  return { 
    state,
    selectSkill
  };
}

export { useApplicationData }
