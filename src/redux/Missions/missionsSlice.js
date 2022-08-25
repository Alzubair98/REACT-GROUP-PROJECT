import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMissions(state, action) {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return {
            ...mission,
            status: !mission.status,
          };
        }
        return {
          ...mission,
        };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      .addCase(getMissions.fulfilled, (state, action) => action.payload.map(
        (mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          more: mission.wikipedia,
          status: false,
        }),
      ));
  },
});

export const { joinMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
