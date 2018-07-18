import React from 'react';
import UserItem from './UserItem';
import Button from './Button';
const boxShadow = {
    boxShadow: '0px 3px 20px #000000'
};
class Users extends React.Component {

    componentDidMount = () =>{
        console.log(this.props);
        this.props.fetchUsers();
    }
    
    render(){
        const { data, fetchUsers } = this.props;
        return (
          <div className='container'>
              <div className="row justify-content-center">
                <div class="col-12 text-center">
                     <Button onClick={fetchUsers} text={'Fetch Users'} className={'btn btn-info mt-2 mb-2'}/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-7 col-9 pl-0 pr-0 border" style={boxShadow}>
                    {data.users.map((user, i) => {
                    return <UserItem key={i} user={user}/>
                    })}
                </div>
              </div>
          </div>
        )
    }
}
export default Users;