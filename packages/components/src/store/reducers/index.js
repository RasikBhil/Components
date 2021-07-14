import * as types from '../types';

const initialState = {
  theme: 'light',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_CHANGE_THEME_SUCCESS:
      return {theme: action.payload};
    default:
      return {...state};
  }
};

export default reducer;
