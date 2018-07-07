import React from 'react';
import UserItem from './UserItem';
import Button from './Button';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () =>{
        console.log(this.props);
        this.props.fetchUsers();
    }
    render(){
        const { data, fetchUsers } = this.props;
        return (
          <div className='container'>
              <Button onClick={fetchUsers} text={'Fetch Users'} className={'btn btn-info mt-2 mb-2'}/>
              <div>
                {data.users.map((user, i) => {
                  return <UserItem key={i} user={user}/>
                })}
              </div>
          </div>
        )
    }
}
export default Users;