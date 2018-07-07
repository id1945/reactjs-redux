import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: ''}
    }
    componentDidMount = () =>{
        console.log(this.props);
        this.props.fetchUsers();
    }
    render(){
        console.log(this.props.data.users);
        const phone =  this.props.data.users.map((x)=> x.phone) ;
        const pic =  this.props.data.users.map((x)=> x.picture.thumbnail) ;
        return(
            <div>
                <h2>Number Phone...</h2>
                <h2><img src={pic}/>{phone}</h2>
            </div>
        );
    }
}
export default Users;