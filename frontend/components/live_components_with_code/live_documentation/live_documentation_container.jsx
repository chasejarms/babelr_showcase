import {connect} from 'react-redux';
import LiveDocumentation from './live_documentation';

const mapStateToProps = ({currentComponent}) => ({
  currentComponent
});

export default connect(mapStateToProps)(LiveDocumentation);
