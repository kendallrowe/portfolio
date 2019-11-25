const SELECT_SKILL = "SELECT_SKILL";
const RENDER_COMPLETE = "RENDER_COMPLETE";

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_SKILL:
      const skillIndex = state.skills.indexOf(action.skill);
      console.log(state);
      if (skillIndex === -1) {
        return {
          ...state, 
          skills: [ ...state.skills,
                    action.skill
          ]
        }
      }

      return {
        ...state,
        skills: state.skills.filter((item, index) => index !== skillIndex)
      }

    case RENDER_COMPLETE:
      return {
        ...state,
        rendered: true
      }

      default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default reducer;

export { SELECT_SKILL, RENDER_COMPLETE }
