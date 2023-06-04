import React from 'react';
import styles from './QuickTable.module.scss';

export default function QuickTable() {
  return (
    <table className={styles.qTable}>
      <tbody>
        <tr>
          <td className={styles.key}>Cap. Group</td>
          <td className={styles.value}>Mega-cap</td>
        </tr>
        <tr>
          <td className={styles.key}>Market cap</td>
          <td className={styles.value}>854656</td>
        </tr>
        <tr>
          <td className={styles.key}>PE Ratio</td>
          <td className={styles.value}>32</td>
        </tr>
        <tr>
          <td className={styles.key}>Industry</td>
          <td className={styles.value}>Consumer Electronics xxxxxxxxxxxxxx</td>
        </tr>
        <tr>
          <td className={styles.key}>Sector</td>
          <td className={styles.value}>Technology</td>
        </tr>
      </tbody>
    </table>
  );
}
