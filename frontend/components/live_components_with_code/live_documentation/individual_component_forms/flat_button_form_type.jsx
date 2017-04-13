import React from 'react';
import BooleanForm from '../../form_types/boolean_form';
import TextForm from '../../form_types/text_form';
import {changeCurrentComponent} from '../../../../actions/component_actions';
import {connect} from 'react-redux';

class FlatButtonFormType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
    this.onClickTrue = this.onClickTrue.bind(this);
    this.onClickFalse = this.onClickFalse.bind(this);
    this.displayCorrectFormType = this.displayCorrectFormType.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTab !== prevProps.currentTab) {
      this.setState({
        textInput: ""
      });
    }
  }

  onClickTrue() {
    const properties = {};
    properties[this.props.currentTab] = true;
    this.props.changeComponentRendering(
      this.props.name,
      properties
    );
  }

  onClickFalse() {
    const properties = {};
    properties[this.props.currentTab] = false;
    this.props.changeComponentRendering(
      this.props.name,
      properties
    );
  }

  onTextChange(propertyKey) {
    return (newInput) => {
      const properties = {};
      properties[propertyKey] = newInput;
      this.setState({
        textInput: newInput
      });

      this.props.changeComponentRendering(
        this.props.name,
        properties
      );
    };
  }

  render() {
    const {currentTab} = this.props;
    return this.displayCorrectFormType(currentTab);
  }

  displayCorrectFormType(currentTab) {
    switch (currentTab) {
      case "fullWidth":
        return (
          <BooleanForm
            onClickTrue={this.onClickTrue}
            onClickFalse={this.onClickFalse}/>
        );
      case "href":
        return (
          <TextForm
            onTextChange={this.onTextChange(currentTab)}
            hintText="ex. http://www.google.com"
            value={this.state.textInput}
            />
        );
      case "label":
        return (
          <TextForm
            onTextChange={this.onTextChange(currentTab)}
            hintText="I'm a flat button"
            value={this.state.textInput}
            />
        );
      default:
        return (
          <BooleanForm
            onClickTrue={this.onClickTrue}
            onClickFalse={this.onClickFalse}/>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(FlatButtonFormType);
