import { configureStore } from '@reduxjs/toolkit';
import { registerSlice } from '../modules/registerSlice';

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
  }
})