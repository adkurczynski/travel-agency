import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing';
import OrderOption from '../OrderOption/OrderOptionContainer';

const OrderForm = ({options, tripCost}) => {
  console.log(tripCost);
  return (
    <Row>
      {pricing.map(price => (
        <Col md={4} key={price.id}>
          <OrderOption {...price}/>
        </Col>
      ))}
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
