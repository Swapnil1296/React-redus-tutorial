import {configureStore, createSlice} from '@reduxjs/toolkit';

const couterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0},
  reducers: {
    increment(state, action) {
      state.counter ++;
    },
    Decrement(state, action) {
      state.counter --;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = couterSlice.actions;

const store = configureStore({
  reducer: couterSlice.reducer,
});

export default store