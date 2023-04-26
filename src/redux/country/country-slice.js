import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_INFO = 'air/region/GET_INFO';

const initialState = {
  co: 0,
  nh3: 0,
  no: 0,
  no2: 0,
  o3: 0,
  pm2_5: 0,
  pm10: 0,
  so2: 0,
};

export const getInfo = createAsyncThunk(GET_INFO, async (coordinates) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=08be01b4b955123c0de4895bafc095ef`,
  );
  const result = await response.json();
  return result.list[0].components;
});

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, action) => action.payload);
  },
});

export default infoSlice.reducer;
