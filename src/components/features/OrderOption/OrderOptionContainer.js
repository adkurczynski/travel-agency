import {connect} from 'react-redux';
import OrderOption from './OrderOption';
import {setOrderOption} from '../../../redux/orderRedux';
import {getOrderOptions} from '../../../redux/orderRedux';
import {addAllCkeckboxes} from '../../../redux/orderRedux';



const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
  addAllCkeckboxes: option => dispatch(addAllCkeckboxes(option)),

});


export default connect(mapStateToProps, mapDispatchToProps)(OrderOption);
