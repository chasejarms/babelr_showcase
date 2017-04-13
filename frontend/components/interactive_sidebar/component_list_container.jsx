import { connect } from 'react-redux';
import ComponentList from './component_list';
import {changeCurrentComponent} from '../../actions/component_actions';

const mapStateToProps = ({ allComponents }) => ({
  allComponents
});

export default connect(mapStateToProps)(ComponentList);
