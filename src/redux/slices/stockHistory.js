import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  prices: [],
  loading: false,
  errors: {},
};

export const readPriceHistory = createAsyncThunk(
  'stockHistory/readPriceHistory',
  async (ticker) => {
    const { VITE_API_2_URL, VITE_API_2_KEY, VITE_API_2_HOST } = import.meta.env;
    const nowUnix = new Date().getTime();
    const res = await fetch(`${VITE_API_2_URL}/price/${ticker}?period1=1356998400&period2=${nowUnix}&interval=1d`, {
      headers: {
        'X-RapidAPI-Key': VITE_API_2_KEY,
        'X-RapidAPI-Host': VITE_API_2_HOST,
      },
    });
    const data = await res.json();
    return data;
  },
);

const selectData = (originalData) => {
  const { result } = originalData.chart;
  const { timestamp } = result[0];
  const price = result[0].indicators.quote[0].close;

  return timestamp.map((unixTime, index) => ({
    time: unixTime,
    price: price[index],
  }));
};

const stockHistorySlice = createSlice({
  name: 'stockHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readPriceHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readPriceHistory.fulfilled, (state, action) => {
      selectData(action.payload);
      state.prices = selectData(action.payload);
      state.loading = false;
    });
    builder.addCase(readPriceHistory.rejected, (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    });
  },
});

export default stockHistorySlice.reducer;
