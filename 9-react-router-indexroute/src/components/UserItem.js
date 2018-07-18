import React from 'react';
import './style.css';

const UserItem = (props) => (
  <div className='border-bottom'>
    <img class="rounded-circle ml-3 mt-2 mb-2" src={props && props.user.picture.thumbnail} alt=""/>
    <span className="ml-4 font-weight-bold">{props.user.login.username}</span>
  </div>
)

export default UserItem