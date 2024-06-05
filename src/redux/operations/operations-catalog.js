import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "../../Api/api";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await Api.fetchAdverts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
