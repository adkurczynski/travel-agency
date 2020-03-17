import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice, handleIcons} from '../../../utils/formatPrice.js';

const OrderOptionIcons= ({values, setOptionValue}) => (

  <div>
    {values.map(value =>(
      <div className={styles.icon} key={value.id} id={value.id} onClick={event => setOptionValue(event.currentTarget.id)
        & handleIcons(styles.Active, styles.icon)
        //& console.log(document.querySelectorAll('.'+styles.icon)[0])
        & event.currentTarget.classList.add(styles.Active)
      }>
        <span><Icon name={value.icon} value={value.name}/> {value.name}  </span>
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.any,
  key: PropTypes.number,
};
export default OrderOptionIcons;
