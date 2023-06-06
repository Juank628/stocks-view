import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StockHeader from '../components/StockHeader';
import Chart from '../components/Chart';
import TimeSpanSelector from '../components/TimeSpanSelector';
import QuickTable from '../components/QuickTable';
import CompanyProfile from '../components/CompanyProfile';
import styles from './Home.module.scss';

export default function Home() {
  const { data } = useSelector((store) => store.stockFundamentals);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (data.quoteSummary) setIsData(true);
  }, [data]);

  return (
    <div className={styles.container}>
      { isData ? (
        <>
          <StockHeader />
          <Chart />
          <TimeSpanSelector />
          <QuickTable />
          <CompanyProfile />
        </>
      ) : (
        <p>No data</p>
      ) }
    </div>
  );
}
