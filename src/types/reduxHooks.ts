import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/configureStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const reduxDispatch = () => useDispatch<AppDispatch>();
export const reduxSelect: TypedUseSelectorHook<RootState> = useSelector;