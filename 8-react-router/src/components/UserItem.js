import React from 'react';
import bgHover from './style.css';

const UserItem = (props) => (
  <div className='border-bottom bgHover'>
    <img class="rounded-circle ml-3 mt-2 mb-2" src={props.user.picture.thumbnail} />
    <span className="ml-4 font-weight-bold">{props.user.login.username}</span>
  </div>
)

export default UserItem