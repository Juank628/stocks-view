import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CompanyProfile.module.scss';

export default function CompanyProfile() {
  const { result } = useSelector((store) => store.stockFundamentals.data.quoteSummary);

  return (
    <div className={styles.container}>
      <h2>Company profile</h2>
      <p>{result[0].summaryProfile.longBusinessSummary}</p>
    </div>
  );
}
