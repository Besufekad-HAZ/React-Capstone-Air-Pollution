import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './country/country-slice';
import regionsReducer from './home/home-slice';
import countriesReducer from './region/region-slice';

const store = configureStore({
  reducer: {
    regions: regionsReducer,
    countries: countriesReducer,
    info: infoReducer,
  },
});

export default store;
