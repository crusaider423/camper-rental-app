import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "../operations/operations-catalog";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, {payload}) => {
        state.items = [...state.items, ...payload]
        state.isLoading = false;
        state.error = null;
       
      })
      .addCase(fetchCatalog.rejected, (state, {payload}) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export default catalogSlice.reducer;
