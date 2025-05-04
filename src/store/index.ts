import { configureStore } from "@reduxjs/toolkit";
import searchHistoryReducer from "../features/searchHistorySlice";
import weatherReducer from "../features/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    searchHistory: searchHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
