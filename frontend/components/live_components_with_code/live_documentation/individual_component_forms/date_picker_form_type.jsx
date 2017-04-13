import React from 'react';
import {changeCurrentComponent} from '../../../../actions/component_actions';
import {connect} from 'react-redux';
import BooleanForm from '../../form_types/boolean_form';
import TextForm from '../../form_types/text_form';

class DatePickerFormType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formText: ""
    };
    this.changeCurrentText = this.changeCurrentText.bind(this);
    this.onClickTrue = this.onClickTrue.bind(this);
    this.onClickFalse = this.onClickFalse.bind(this);
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

  changeCurrentText(currentTab) {
    return (newValue) => {
      const properties = {};
      properties[currentTab] = newValue;
      this.setState({
        formText: newValue
      });
      this.props.changeComponentRendering(this.props.name, properties);
    };
  }

  onClickTrue() {
    const properties = {};
    properties[this.props.currentTab] = "landscape";
    this.props.changeComponentRendering(
      this.props.name,
      properties
    );
  }

  onClickFalse() {
    const properties = {};
    properties[this.props.currentTab] = "portrait";
    this.props.changeComponentRendering(
      this.props.name,
      properties
    );
  }

  displayCorrectFormType(currentTab) {
    switch (currentTab) {
      case "hintText":
        return (
          <TextForm
            hintText="Set the placeholder label here"
            value={this.state.formText}
            onTextChange={this.changeCurrentText(currentTab)}
            />
        );
      case "mode":
        return (
          <BooleanForm
            trueLabel="landscape"
            falseLabel="portrait"
            onClickTrue={this.onClickTrue}
            onClickFalse={this.onClickFalse}
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

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerFormType);
