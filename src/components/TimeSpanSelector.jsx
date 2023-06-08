import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TimeSpanSelector.module.scss';

export default function TimeSpanSelector({ selectTime }) {
  const [activeButton, setActiveButton] = useState('7884000');

  const changeTime = (e) => {
    setActiveButton(e.target.name);
    selectTime(parseInt(e.target.name, 10));
  };

  return (
    <div className={styles.container}>
      <button type="button" name="315360000" onClick={changeTime} className={activeButton === '315360000' ? styles.selected : styles.nonSelected}>10y</button>
      <button type="button" name="157680000" onClick={changeTime} className={activeButton === '157680000' ? styles.selected : styles.nonSelected}>5y</button>
      <button type="button" name="31536000" onClick={changeTime} className={activeButton === '31536000' ? styles.selected : styles.nonSelected}>1y</button>
      <button type="button" name="15768000" onClick={changeTime} className={activeButton === '15768000' ? styles.selected : styles.nonSelected}>6m</button>
      <button type="button" name="7884000" onClick={changeTime} className={activeButton === '7884000' ? styles.selected : styles.nonSelected}>3m</button>
      <button type="button" name="2628000" onClick={changeTime} className={activeButton === '2628000' ? styles.selected : styles.nonSelected}>1m</button>
    </div>
  );
}

TimeSpanSelector.propTypes = {
  selectTime: PropTypes.func.isRequired,
};
