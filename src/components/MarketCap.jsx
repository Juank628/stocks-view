import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './MarketCap.module.scss';

export default function MarketCap() {
  const { result } = useSelector((store) => store.stockFundamentals.data.quoteSummary);
  const marketCapValue = result[0].price.marketCap.raw;
  const [classification, setClassification] = useState('');

  useEffect(() => {
    let group = 'micro-cap';
    if (marketCapValue >= 250000000) group = 'small-cap';
    if (marketCapValue >= 2000000000) group = 'mid-cap';
    if (marketCapValue >= 10000000000) group = 'large-cap';
    if (marketCapValue >= 200000000000) group = 'mega-cap';
    setClassification(group);
  }, [marketCapValue]);

  return (
    <div className={styles.container}>
      <p>{classification}</p>
      <div className={classification === 'micro-cap' ? styles.currentLevel : styles.level} />
      <div className={classification === 'small-cap' ? styles.currentLevel : styles.level} />
      <div className={classification === 'mid-cap' ? styles.currentLevel : styles.level} />
      <div className={classification === 'large-cap' ? styles.currentLevel : styles.level} />
      <div className={classification === 'mega-cap' ? styles.currentLevel : styles.level} />
    </div>
  );
}
