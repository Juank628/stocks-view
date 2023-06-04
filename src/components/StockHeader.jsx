import React from 'react';
import styles from './StockHeader.module.scss';

export default function StockHeader() {
  return (
    <div className={styles.container}>
      <div>
        <h1>AAPL</h1>
        <p>Apple inc.</p>
      </div>
      <div>
        <p className={styles.price}>$120.63</p>
      </div>
    </div>
  );
}
