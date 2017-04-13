import React from 'react';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    e.preventDefault();
    this.props.onTextChange(e.target.value);
  }

  render() {
    return(
      <TextField
        underlineStyle={{borderColor: this.props.muiTheme.palette.accent1Color}}
        underlineFocusStyle={{borderColor: this.props.muiTheme.palette.accent2Color}}
        onChange={this.handleTextChange}
        hintText={this.props.hintText}
        value={this.props.value}
        />
    );
  }
}

export default muiThemeable()(TextForm);
