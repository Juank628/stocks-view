import { configureStore } from '@reduxjs/toolkit';
import stocksListReduce from './slices/stocksList';

const store = configureStore({
  reducer: {
    stocksList: stocksListReduce,
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
