const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case "SAVE":
      return action.data;
    default:
      return null;
  }
};

export default tokenReducer;
