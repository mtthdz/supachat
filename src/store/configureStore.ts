import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import monitorReducerEnhancer from './middleware/monitorReducerEnhancer';
import loggerMiddleware from './middleware/loggerMiddleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  enhancers: [monitorReducerEnhancer],
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;