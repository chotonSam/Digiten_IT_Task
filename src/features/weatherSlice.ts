import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "City not found");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null as WeatherData | null,
    loading: false,
    error: null as string | null,
    searchHistory: [] as string[],
  },
  reducers: {
    addToHistory: (state, action) => {
      const city = action.payload;
      if (!state.searchHistory.includes(city)) {
        state.searchHistory.unshift(city);
        if (state.searchHistory.length > 5) {
          state.searchHistory.pop();
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "City not found";
      });
  },
});

export const { addToHistory } = weatherSlice.actions;
export default weatherSlice.reducer;
