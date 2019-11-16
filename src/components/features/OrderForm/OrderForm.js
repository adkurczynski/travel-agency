import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col} from 'react-flexbox-grid';

const OrderForm = ({options, tripCost}) => {
  console.log(tripCost);
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options}/>
      </Col>
    </Row>

  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.node,
};
export default OrderForm;
