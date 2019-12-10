import { combineReducers } from 'redux';

const authReduser = (state = {}, action) => {
  switch (action.type) {
    case 'lOG_IN': //todo: удалить
      return action.payload;
    case 'LOG_IN_SUCCESS':
      return action.payload;
    case 'SIGN_IN_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

const pageTitleReduser = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers({
//  auth: authReduser,
  pageTitle: pageTitleReduser,
});

export default reducer;