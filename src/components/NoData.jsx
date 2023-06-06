import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoData.module.scss';

export default function NoData({ loading }) {
  return (
    <div className={styles.container}>
      {loading ? (
        <span className={styles.loader}>Loading</span>
      ) : (
        <p className={styles.noStockText}>Please use the navbar to search a stock</p>
      )}
    </div>
  );
}

NoData.propTypes = {
  loading: PropTypes.bool.isRequired,
};
