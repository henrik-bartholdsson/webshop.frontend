const logedReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_LOGED":
      return !state;
    default:
      return state;
  }
};

export default logedReducer;
