// eslint-disable-next-line
import React, { useReducer } from "react";
import reducer, {
  SELECT_SKILL,
  RENDER_COMPLETE
} from "../reducers/application";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    skills: [],
    rendered: false
  });
  
  const selectSkill = skill => dispatch(({ type: SELECT_SKILL, skill }));

  const renderComplete = () => dispatch(({ type: RENDER_COMPLETE}))

  return { 
    state,
    selectSkill,
    renderComplete
  };
}

export { useApplicationData }
