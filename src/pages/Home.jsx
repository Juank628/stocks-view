import React from 'react'
import Chart from '../components/Chart'
import QuickTable from '../components/QuickTable'
import TimeSpanSelector from '../components/TimeSpanSelector'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>AAPL</h1>
        <Chart />
        <TimeSpanSelector />
        <QuickTable />
    </div>
  )
}
