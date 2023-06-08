import React from 'react';
import { useSelector } from 'react-redux';
import styles from './StockHeader.module.scss';

export default function StockHeader() {
  const { result } = useSelector((store) => store.stockFundamentals.data.quoteSummary);

  return (
    <div className={styles.container}>
      <div>
        <h1>{result[0].price.symbol}</h1>
        <p>{result[0].price.longName}</p>
      </div>
      <div>
        <p className={styles.price}>
          $
          {result[0].price.regularMarketPrice.raw}
        </p>
      </div>
    </div>
  );
}
