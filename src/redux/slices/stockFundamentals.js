import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loading: false,
  errors: {},
};

export const readFundamentals = createAsyncThunk(
  'stockFundamentals/readFundamentals',
  async (ticker) => {
    const { VITE_API_2_URL, VITE_API_2_KEY, VITE_API_2_HOST } = import.meta.env;
    const res = await fetch(`${VITE_API_2_URL}/stocks/${ticker}?modules=assetProfile%2CsummaryProfile%2Cprice`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': VITE_API_2_KEY,
        'X-RapidAPI-Host': VITE_API_2_HOST,
      },
    });
    const data = await res.json();
    return data;
  },
);

const stockFundamentalsSlice = createSlice({
  name: 'stockFundamentals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readFundamentals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readFundamentals.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(readFundamentals.rejected, (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    });
  },
});

export default stockFundamentalsSlice.reducer;
