import * as types from '../types';

export const changeTheme = theme => dispatch => {
  return dispatch({
    type: types.ON_CHANGE_THEME_SUCCESS,
    payload: theme,
  });
};
