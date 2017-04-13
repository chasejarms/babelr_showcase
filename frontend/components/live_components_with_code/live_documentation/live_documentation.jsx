import React from 'react';
import DocumentationForm from './documentation_form';

class LiveDocumentation extends React.Component {
  constructor(props) {
    super(props);
    this._renderPropertyTabs = this._renderPropertyTabs.bind(this);
    this._renderCurrentDocumentation = this._renderCurrentDocumentation.bind(this);
    this.setCurrentTab = this.setCurrentTab.bind(this);

    const {currentComponent} = this.props;
    const componentProps = Object.keys(currentComponent.properties);

    this.state = {
      propertyKeys: componentProps,
      currentTab: componentProps[0]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentComponent: { name }} = this.props;
    if (prevProps.currentComponent.name !== name) {
      const {currentComponent} = this.props;
      const componentProps = Object.keys(currentComponent.properties);
      this.setState({
        propertyKeys: componentProps,
        currentTab: componentProps[0]
      });
    }
  }

  render() {
    const {currentComponent:{name}} = this.props;
    return(
      <div className="live-documentation-container">
        <div>
          {this._renderPropertyTabs()}
          {this._renderCurrentDocumentation()}
        </div>
        <div className="documentation-form-inputs">
          <DocumentationForm
            componentName={name}
            currentTab={this.state.currentTab}
            />
        </div>
      </div>
    );
  }

  setCurrentTab(tabName) {
    return () => this.setState({
      currentTab: tabName
    });
  }

  _renderPropertyTabs() {
    return(
      <ul className="live-documentation-tabs">
        {this.state.propertyKeys.map((propName, idx) => {
          const divStyle = {flex: "1 1"};
          if (propName === this.state.currentTab) {
            divStyle["backgroundColor"] = "#1E88E5";
          }

          return (
            <li
              key={idx}
              style={divStyle}
              onClick={this.setCurrentTab(propName)}>
              { propName }
            </li>
          );
        })}
      </ul>
    );
  }

  _renderCurrentDocumentation() {
    const {currentComponent: {documentation}} = this.props;
    return (
      <div className="current-documentation">
        <p>{ documentation[this.state.currentTab] }</p>
      </div>
    );
  }

}

export default LiveDocumentation;
