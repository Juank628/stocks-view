import React from 'react';
import styles from './TimeSpanSelector.module.scss';

export default function TimeSpanSelector() {
  return (
    <div className={styles.container}>
      <button className={styles.nonSelected}>10y</button>
      <button className={styles.nonSelected}>5y</button>
      <button className={styles.nonSelected}>1y</button>
      <button className={styles.nonSelected}>6m</button>
      <button className={styles.selected}>3m</button>
      <button className={styles.nonSelected}>1m</button>
    </div>
  );
}
