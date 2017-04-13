import React from 'react';
import Slider from 'material-ui/Slider';
import muiThemeable from 'material-ui/styles/muiThemeable';

class SliderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSliderValue: props.startingValue
    };
    this.onSlide = this.onSlide.bind(this);
    this.handleSliderValue = this.handleSliderValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTab !== nextProps.currentTab) {
      this.setState({
        currentSliderValue: nextProps.startingValue
      });
    }
  }

  onSlide(e) {
    e.preventDefault();
    this.props.onSlide(Math.floor(this.state.currentSliderValue));
  }

  handleSliderValue(e, newValue) {
    this.setState({
      currentSliderValue: newValue
    });
  }

  render() {
    const {min, max} = this.props;
    return(
      <div className="form-slider">
        <Slider
          min={min}
          max={max}
          value={this.state.currentSliderValue}
          onDragStop={this.onSlide}
          onChange={this.handleSliderValue}
          />
      </div>
    );
  }
}

export default muiThemeable()(SliderForm);
