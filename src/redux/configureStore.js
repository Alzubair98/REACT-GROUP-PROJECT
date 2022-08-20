import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './Rockets/rockets';

const store = configureStore({
  reducer: {
    storeSlice,
  },
});

export default store;
