const SELECT_SKILL = "SELECT_SKILL";

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_SKILL:
      return {
        ...state, 
        skills: [ ...state.skills,
                  action.skill
        ]
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default reducer;

export { SELECT_SKILL }
