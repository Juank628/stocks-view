import { configureStore } from '@reduxjs/toolkit';
import stocksListReducer from './slices/stocksList';
import stockFundamentalsReducer from './slices/stockFundamentals';

const store = configureStore({
  reducer: {
    stocksList: stocksListReducer,
    stockFundamentals: stockFundamentalsReducer,
  },

  /*
  Increate the warning time for writing state due the large ammount of data
  */
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  }),
});

export default store;
