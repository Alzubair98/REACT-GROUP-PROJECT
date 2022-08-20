import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const LODING = 'LODING';

const url = 'https://api.spacexdata.com/v3/rockets';

export const loadRockets = createAsyncThunk(LODING, async () => {
  const response = await axios.get(url);
  const res = response.data;
  const data = res.map((item) => ({
    id: item.id,
    name: item.rocket_name,
    description: item.description,
    img: item.flickr_images[0],
  }));
  return data;
});

const storeSlice = createSlice({
  name: 'space Hup',
  initialState: [],
  extraReducers: {
    [loadRockets.fulfilled]: (state, action) => action.payload,
  },
});

export default storeSlice.reducer;
