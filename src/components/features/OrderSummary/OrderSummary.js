import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary =  ({tripCost, tripOptions})=> {
  return (
    <h2 className={styles.component}>
      Total:
      <strong> {formatPrice(calculateTotal(tripCost, tripOptions))}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripOptions: PropTypes.object,
  tripCost: PropTypes.node,
};
export default OrderSummary;
