import React from 'react';
import {changeCurrentComponent} from '../../../../actions/component_actions';
import {connect} from 'react-redux';
import SliderForm from '../../form_types/slider_form';

class CircularProgressFormType extends React.Component {
  constructor(props) {
    super(props);
    this.updateNumericComponent = this.updateNumericComponent.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTab !== prevProps.currentTab) {
      this.forceUpdate();
    }
  }

  render() {
    const {currentTab} = this.props;
    return this.displayCorrectFormType(currentTab);
  }

  updateNumericComponent(currentTab) {
    const {name} = this.props;
    return (newSize) => {
      const properties = {};
      properties[currentTab] = newSize;
      this.props.changeComponentRendering(name, properties);
    };
  }

  displayCorrectFormType(currentTab) {
    switch (currentTab) {
      case "size":
        return (
          <SliderForm
            min={30}
            max={120}
            startingValue={75}
            onSlide={this.updateNumericComponent(currentTab)}
            currentTab={this.props.currentTab}
            />
        );
      case "thickness":
        return (
          <SliderForm
            min={1}
            max={11}
            startingValue={6}
            onSlide={this.updateNumericComponent(currentTab)}
            currentTab={this.props.currentTab}
            />
        );
      default:
        return <div></div>;
    }
  }

}

const mapStateToProps = ({currentComponent: {name}}, {currentTab}) => ({
  currentTab,
  name
});

const mapDispatchToProps = dispatch => ({
  changeComponentRendering: (componentName, properties) => {
    dispatch(changeCurrentComponent(componentName, properties));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CircularProgressFormType);
