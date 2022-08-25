import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './Rockets/rockets';
import missionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    storeSlice,
    missions: missionsReducer,
  },
});

export default store;
