import React from 'react';

const UserItem = (props) => (
  <div className='alert alert-danger col-sm-3'>
    <img src={props.user.picture.thumbnail} />
    <span className="text ml-4">{props.user.login.username}</span>
  </div>
)

export default UserItem