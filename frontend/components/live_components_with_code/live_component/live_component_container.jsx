import {connect} from 'react-redux';
import LiveComponent from './live_component';

const mapStateToProps = ({currentComponent}) => ({
  currentComponent
});

export default connect(mapStateToProps)(LiveComponent);
