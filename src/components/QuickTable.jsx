import React from 'react';
import { useSelector } from 'react-redux';
import MarketCap from './MarketCap';
import styles from './QuickTable.module.scss';

export default function QuickTable() {
  const { result } = useSelector((store) => store.stockFundamentals.data.quoteSummary);

  return (
    <table className={styles.qTable}>
      <tbody>
        <tr>
          <td className={styles.key}>Cap. Group</td>
          <td className={styles.value}><MarketCap /></td>
        </tr>
        <tr>
          <td className={styles.key}>Market cap</td>
          <td className={styles.value}>{result[0].price.marketCap.fmt}</td>
        </tr>
        <tr>
          <td className={styles.key}>PE Ratio</td>
          <td className={styles.value}>--</td>
        </tr>
        <tr>
          <td className={styles.key}>Industry</td>
          <td className={styles.value}>{result[0].summaryProfile.industry}</td>
        </tr>
        <tr>
          <td className={styles.key}>Sector</td>
          <td className={styles.value}>{result[0].summaryProfile.sector}</td>
        </tr>
      </tbody>
    </table>
  );
}
