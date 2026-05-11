import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reduxSlice/counterSlice'

export const store = configureStore({
  reducer:{
    counter:counterReducer
  }
})
