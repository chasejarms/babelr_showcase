import { connect } from 'react-redux';
import ComponentListItem from './component_list_item';
import {changeCurrentComponent} from '../../actions/component_actions';

const mapStateToProps = (state, {name}) => ({
  name
});

const mapDispatchToProps= dispatch => ({
  changeCurrentComponent: compName => dispatch(changeCurrentComponent(compName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentListItem);
