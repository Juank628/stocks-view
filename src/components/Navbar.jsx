import React from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <nav className={styles.container}>
        <div>
          <p className={styles.logoRow1}>STOCKS</p>
          <p className={styles.logoRow2}>view</p>
        </div>

        <input className={styles.searchInput} type="text" placeholder="Search a stock..." />
      </nav>
      <ul>
        <li>
          <span>AAPL</span>
          <span>Apple inc.</span>
        </li>
      </ul>
    </>
  );
}
