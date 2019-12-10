import { createStore } from 'redux';

import reducer from './redusers';
//import saga from './sagas';

const store = createStore(
  reducer
);

export default store;