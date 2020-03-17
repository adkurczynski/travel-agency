import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';


const OrderOptionCheckboxes= ({values, setOptionValues}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <div className={styles.checkboxes} key={value.id} id={value.id} onChange={event => setOptionValues(event.currentTarget.id )}>
        <label><input type='checkbox'/>{value.id} {formatPrice(value.price)}</label>
      </div>
    ))}
  </div>
);
OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValues: PropTypes.any,
  key: PropTypes.number,
};

export default OrderOptionCheckboxes;
