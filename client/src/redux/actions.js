const updateTheme = (dispatch, newTheme) => {
  dispatch({
    type: "UPDATE_THEME",
    payload: { theme: newTheme },
  });
};

const updateLogin = (dispatch, userData) => {
  dispatch({
    type: "UPDATE_LOGIN",
    payload: { id: userData.id, name: userData.name, theme: userData.theme },
  });
};

export { updateTheme, updateLogin };
