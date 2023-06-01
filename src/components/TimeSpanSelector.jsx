import React from 'react'
import styles from './TimeSpanSelector.module.scss'

export default function TimeSpanSelector() {
  return (
    <div className={styles.container}>
        <button>10y</button>
        <button>5y</button>
        <button>1y</button>
        <button>6m</button>
        <button>3m</button>
        <button>1m</button>
    </div>
  )
}
