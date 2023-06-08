import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StockHeader from '../components/StockHeader';
import Chart from '../components/Chart';
import QuickTable from '../components/QuickTable';
import CompanyProfile from '../components/CompanyProfile';
import NoData from '../components/NoData';
import styles from './Home.module.scss';

export default function Home() {
  const { data, loading } = useSelector((store) => store.stockFundamentals);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (data.quoteSummary) setIsData(true);
  }, [data]);

  return (
    <div className={styles.container}>
      { isData && !loading ? (
        <>
          <StockHeader />
          <Chart />
          <QuickTable />
          <CompanyProfile />
        </>
      ) : (
        <NoData loading={loading} />
      ) }
    </div>
  );
}
