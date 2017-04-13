import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class BooleanForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <FlatButton
          label={this.props.trueLabel || "true"}
          className="boolean-button"
          onClick={this.props.onClickTrue}
          />
        <FlatButton
          label={this.props.falseLabel || "false"}
          className="boolean-button"
          onClick={this.props.onClickFalse}/>
      </div>
    );
  }
}

export default BooleanForm;
