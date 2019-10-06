import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer } from './reducers';

export default createStore(
    combineReducers({
      clone: reducer,
      form: formReducer
    })
  );