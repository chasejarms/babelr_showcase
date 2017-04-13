import React from 'react';

class ComponentListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  changeCurrentComponent(compName) {
    return () => this.props.changeCurrentComponent(compName);
  }

  render() {
    const {name} = this.props;
    return(
      <li className="component-list-item" onClick={this.changeCurrentComponent(name)}>
        <p>{name}</p>
      </li>
    );
  }
}

export default ComponentListItem;
