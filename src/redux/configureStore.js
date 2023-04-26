import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './country/country-slice';
import continentsReducer from './home/home-slice';
import countriesReducer from './region/region-slice';

const store = configureStore({
  reducer: {
    continents: continentsReducer,
    countries: countriesReducer,
    info: infoReducer,
  },
});

export default store;
