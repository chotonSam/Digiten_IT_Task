import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = JSON.parse(
  localStorage.getItem("searchHistory") || "[]"
);

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      const city = action.payload.trim().toLowerCase();

      if (!state.includes(city)) {
        state.unshift(city);
        localStorage.setItem(
          "searchHistory",
          JSON.stringify(state.slice(0, 5))
        );
      }
    },
    clearHistory: () => {
      localStorage.removeItem("searchHistory");
      return [];
    },
  },
});

export const { addToHistory, clearHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
