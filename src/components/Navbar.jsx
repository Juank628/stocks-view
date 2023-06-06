import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readAllTickers } from '../redux/slices/stocksList';
import { readFundamentals } from '../redux/slices/stockFundamentals';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const dispatch = useDispatch();
  const { tickers } = useSelector((store) => store.stocksList);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  const getStockData = (e) => {
    dispatch(readFundamentals(e.currentTarget.name));
    setSearchText([]);
  };

  useEffect(() => {
    if (searchText.length < 2) {
      setSearchResult([]);
    } else {
      const filteredTickers = tickers.filter(
        (ticker) => ticker.symbol.toLowerCase().includes(searchText.toLowerCase())
          || ticker.companyName.toLowerCase().includes(searchText.toLowerCase()),
      );
      setSearchResult(filteredTickers);
    }
  }, [searchText]);

  useEffect(() => {
    dispatch(readAllTickers());
  }, []);

  return (
    <>
      <nav className={styles.container}>
        <div>
          <p className={styles.logoRow1}>STOCKS</p>
          <p className={styles.logoRow2}>view</p>
        </div>

        <input className={styles.searchInput} type="text" placeholder="Search a stock..." value={searchText} onChange={searchHandler} />
      </nav>
      <ul className={styles.dropDownMenu}>
        <li>
          {
            searchResult.map((item) => (
              <button key={item.symbol} name={item.symbol} type="button" className={styles.searchItem} onClick={getStockData}>
                <span>{item.symbol}</span>
                <span>{item.companyName}</span>
                <span>{item.exchangeShortName}</span>
              </button>
            ))
          }
        </li>
      </ul>
    </>
  );
}
