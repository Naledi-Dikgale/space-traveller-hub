import { configureStore } from '@reduxjs/toolkit';
import { rocketSlice } from '../features/Rockets/rocketSlice';
import { missionSlice } from '../features/Missions/missionSlice';

export default configureStore({
  reducer: {
    rockets: rocketSlice.reducer,
    missions: missionSlice.reducer,
  },
});
