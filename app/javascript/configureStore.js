import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './redux/greetingReducer';

const store = configureStore({
  reducer: greetingReducer,
});

export default store;
