export const isLoged = () => {
  return {
    type: "IS_LOGED",
  };
};

export const isNotLoged = () => {
  return {
    type: "IS_NOT_LOGED",
  };
};

export const saveToken = (token) => {
  return {
    type: "SAVE",
    data: token,
  };
};