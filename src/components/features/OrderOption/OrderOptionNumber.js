import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber= ({setOptionValue, defaultValue, limits, value }) => (
  <div className={styles.number}>
    <input className={styles.input} type='number'
      value={value} defaultValue={defaultValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionNumber.propTypes = {
  value: PropTypes.array,
  setOptionValue: PropTypes.any,
  key: PropTypes.number,
  defaultValue: PropTypes.any,
  limits: PropTypes.any,
};

export default OrderOptionNumber;
