import { configureStore } from '@reduxjs/toolkit';
import presentation from './feature/presentation';

export const store = configureStore({
  reducer: {
    presentation,
  },
});
