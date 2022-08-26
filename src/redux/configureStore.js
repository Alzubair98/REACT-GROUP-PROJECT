import { configureStore } from '@reduxjs/toolkit';
import rocketStore from './Rockets/rockets';
import missionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    storeSlice: rocketStore,
    missions: missionsReducer,
  },
});

export default store;
