import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  loading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios.get('https://api.spacexdata.com/v3/rockets')
  .then((response) => response.data.map((rocket) => (
    {
      rocket_id: rocket.rocket_id,
      rocket_img: rocket.flickr_images[0],
      rocket_name: rocket.rocket_name,
      rocket_description: rocket.description,
      reserved: false,
    }
  ))));

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const temp = [];
      state.rockets.forEach((rocket) => {
        if (rocket.rocket_id === action.payload) {
          temp.push({ ...rocket, reserved: !rocket.reserved });
          // return { ...rocket, reserved: true };
        } else {
          temp.push(rocket);
        }
        // return rocket;
      });
      return { ...state, rockets: temp };
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state, loading: false, rockets: action.payload, error: '',
    }));
  },
});

export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
