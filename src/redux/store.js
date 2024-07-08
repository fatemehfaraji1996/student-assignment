import { configureStore } from '@reduxjs/toolkit'
import addCountry from './reducers'

export const store = configureStore({
  reducer: {
    countryReducer: addCountry
  },
})