import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  loading: false,
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchmissions', () => axios.get('https://api.spacexdata.com/v3/missions')
  .then((response) => response.data.map((mission) => (
    {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      mission_description: mission.description,
      joined: false,
    }
  ))));

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    join: (state, action) => {
      const temp = [];
      state.missions.forEach((elem) => {
        if (elem.mission_id === action.payload) {
          temp.push({ ...elem, joined: !elem.joined });
        } else {
          temp.push(elem);
        }
      });
      return { ...state, missions: temp };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetchMissions.fulfilled, (state, action) => ({
      ...state, loading: false, missions: action.payload, error: '',
    }));
  },
});

export const { join } = missionSlice.actions;
export default missionSlice.reducer;
