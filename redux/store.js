import { configureStore } from '@reduxjs/toolkit';
import boxesSlice from './slices/boxes';

export const store = configureStore({
  reducer: {
    boxes: boxesSlice,
  },
});
