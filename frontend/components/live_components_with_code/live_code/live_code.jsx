import React from 'react';
import {connect} from 'react-redux';

class LiveCode extends React.Component {
  constructor(props) {
    super(props);
    this.atomTextFromPropInfo = this.atomTextFromPropInfo.bind(this);
    this.atomImportHeader = this.atomImportHeader.bind(this);
  }

  render() {
    const { currentComponent: { name, properties } } = this.props;
    const propKeys = Object.keys(properties);

    const atomStyling = propKeys.map((propKey, idx) => {
      const propValue = properties[propKey];
      return this.atomTextFromPropInfo(propKey, propValue, idx);
    });

    const atomImport = this.atomImportHeader();


    return (

      <div className="live-code-container">
        <div className="interior-live-code-container">

          {atomImport}

          <span className="atom-red">{`<${name}`}</span><br></br>

          {atomStyling}

          <span className="atom-red">{"/>"}</span>
        </div>
      </div>
    );
  }

  atomImportHeader() {
    const {currentComponent: {name}} = this.props;
    return (
      <div>
        <span className="atom-purple">import </span>
        <span className="atom-red">{name} </span>
        <span className="atom-purple">from </span>
        <span className="atom-green">{`"material-ui/${name}"`}</span>
        <span className="atom-grey">;</span>
        <br></br>
        <br></br>
      </div>
    );
  }

  atomTextFromPropInfo(propKey, propValue, idx) {
    const propType = typeof(propValue);
    if (propType === "boolean") {

      return (
        <div key={idx}>
          <span className="property atom-orange">{propKey}</span>
          <span className="atom-grey">=</span>
          <span className="atom-orange">{propValue ? "true" : "false"}</span><br></br>
        </div>
      );
    } else if (propType === "number") {
      return (
        <div key={idx}>
          <span className="property atom-orange">{propKey}</span>
          <span className="atom-grey">=</span>
          <span className="atom-orange">{propValue}</span><br></br>
        </div>
      );
    } else {
      return (
        <div key={idx}>
          <span className="property atom-orange">{propKey}</span>
          <span className="atom-grey">=</span>
          <span className="atom-green">{`"${propValue}"`}</span><br></br>
        </div>
      );
    }
  }
}

const mapStateToProps = ({currentComponent}) => ({
  currentComponent
});

  export default connect(mapStateToProps)(LiveCode);
