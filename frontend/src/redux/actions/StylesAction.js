
export const CHANGE_THEME = 'CHANGE_THEME';


export const changeTheme = status => dispatch => {
    dispatch({
      type: CHANGE_THEME,
      payload: status
    });
};
