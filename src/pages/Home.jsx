import React from 'react';
import StockHeader from '../components/StockHeader';
import Chart from '../components/Chart';
import TimeSpanSelector from '../components/TimeSpanSelector';
import QuickTable from '../components/QuickTable';
import CompanyProfile from '../components/CompanyProfile';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <StockHeader />
      <Chart />
      <TimeSpanSelector />
      <QuickTable />
      <CompanyProfile />
    </div>
  );
}
