import React from 'react';
import UserAction from '../actions/fetchUser';
import Store from '../store';


class UserInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {status: '', statusClass: '', name: '', email: '', gender:''}
        Store.subscribe(() => {
            const state = Store.getState();
            this.setState({name: state.user && state.user.name});
            this.setState({email: state.user && state.user.email});
            this.setState({gender: state.user && state.user.gender});
            this.setState({status: state.status});
            this.setState({statusClass: state.statusClass});
        })
    }
    render() {
        return (
            <div className="container">
                <button className='btn btn-info' onClick={ this.handleGetUser }>New Random User</button>
                <h2 className={ this.state.statusClass }>{ this.state.status }</h2>       
                <h2>{ this.state.name }</h2>
                <h2>{ this.state.email }</h2>
                <h2>{ this.state.gender }</h2>
            </div>
        );
    }
    handleGetUser = (e) => {
        Store.dispatch(UserAction());
    }
}

export default UserInfo;