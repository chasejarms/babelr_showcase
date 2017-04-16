import React from 'react';

export default class UserAvatarAndDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, location, role } = this.props;
    const visible = this.props.visible ? 'active' : 'collapse';
    return(
      <div className={`text-with-avatar ${visible}`}>
        <img
          className='avatar-image'
          src={ this.props.imageURL }
          />
        <div className='user-info-container'>
          <p className='username-container'><span>{username}</span> - {location}</p>
          <p className='role'>{role}</p>
        </div>
      </div>
    );
  }
}
