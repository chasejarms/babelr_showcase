import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import DatePicker from 'material-ui/DatePicker';
import ReactDOM from 'react-dom';
import App from '../../app';

class LiveComponent extends React.Component {
  constructor(props) {
    super(props);
    this._renderCorrectComponent = this._renderCorrectComponent.bind(this);
    this.blurBackground = this.blurBackground.bind(this);
    this.clarifyBackground = this.clarifyBackground.bind(this);
  }

  render() {
    const { currentComponent } = this.props;
    return(
      <div className="live-component-container">
        { this._renderCorrectComponent(currentComponent.name)}
      </div>
    );
  }

  _renderCorrectComponent(compName) {
    const componentProperties = this.props.currentComponent.properties;
    switch(compName) {
      case "FlatButton":
        const {fullWidth, label, href, disabled} = componentProperties;
        return <FlatButton
          className="flat-button-display"
          fullWidth={fullWidth}
          label={label}
          href={href}
          disabled={disabled}
          target="_blank"
        />;
      case "CircularProgress":
        const {size, thickness} = componentProperties;
        return <CircularProgress
          size={size}
          thickness={thickness}
        />;
      case "DatePicker":
        const {hintText, mode} = componentProperties;
        return <DatePicker
          onShow={this.blurBackground}
          onDismiss={this.clarifyBackground}
          onChange={this.clarifyBackground}
          hintText={hintText}
          mode={mode}
        />;
      default:
        return <FlatButton label="Default button"/>;
    }
  }

  blurBackground() {
    document.getElementById('page-container').classList.add('blur-background');
  }

  clarifyBackground() {
    document.getElementById('page-container').classList.remove('blur-background');
  }
}

export default LiveComponent;
