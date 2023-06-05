import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  tickers: [],
  loading: false,
  errors: {},
};

export const readAllTickers = createAsyncThunk(
  'stocksList/readAllTickers',
  async () => {
    const { VITE_API_3_URL, VITE_API_3_KEY } = import.meta.env;
    const res = await fetch(`${VITE_API_3_URL}/stock-screener?limit=2000&exchange=NASDAQ&exchange=NYSE&apikey=${VITE_API_3_KEY}`);
    const data = await res.json();
    return data;
  },
);

const stocksListSlice = createSlice({
  name: 'stocksList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readAllTickers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readAllTickers.fulfilled, (state, action) => {
      state.tickers = action.payload;
      state.loading = false;
    });
    builder.addCase(readAllTickers.rejected, (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    });
  },
});

export default stocksListSlice.reducer;
