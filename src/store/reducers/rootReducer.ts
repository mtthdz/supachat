import authReducer from './authReducer';
import { combineReducers } from 'redux';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  // populate all reducers here
  auth: authReducer,
});

export default rootReducer;