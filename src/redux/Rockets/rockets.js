import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const LOADING = 'LOADING';

const url = 'https://api.spacexdata.com/v3/rockets';

export const loadRockets = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url);
  const res = response.data;
  const data = res.map((item) => ({
    id: item.id,
    name: item.rocket_name,
    description: item.description,
    img: item.flickr_images[0],
    value: false,
  }));
  return data;
});

const storeSlice = createSlice({
  name: 'space Hup',
  initialState: [],
  reducers: {
    rocketReserve(state, action) {
      const newState = state.map((rocket) => {
        if (rocket.id === Number(action.payload.id)) {
          return {
            ...rocket,
            value: !rocket.value,
          };
        }
        return {
          ...rocket,
        };
      });
      return newState;
    },
  },

  extraReducers: {
    [loadRockets.fulfilled]: (state, action) => action.payload,
  },
});
const rocketAction = storeSlice.actions;
export { rocketAction };
export default storeSlice.reducer;
