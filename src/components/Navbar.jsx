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
      <ul className={styles.dropDownMenu}>
        <li>
          <button type="button" className={styles.searchItem}>
            <span>AAPL</span>
            <span>Apple inc.</span>
            <span>NASDAQ</span>
          </button>
        </li>
        <li>
          <button type="button" className={styles.searchItem}>
            <span>AAPL</span>
            <span>Apple inc.</span>
            <span>NASDAQ</span>
          </button>
        </li>
        <li>
          <button type="button" className={styles.searchItem}>
            <span>AAPL</span>
            <span>Apple inc.</span>
            <span>NASDAQ</span>
          </button>
        </li>
      </ul>
    </>
  );
}
