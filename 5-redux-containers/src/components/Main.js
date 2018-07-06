import React from 'react';
import { render } from 'react-dom';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "", age: ""
        }
    }
    render() {
        const userList = this.props.data.map( x => {
            return <h1 key= {x.name.toString()} >{ x.name } - {x.age} </h1>
        })
        return(
            <form className="container col-sm-10">
                { userList }
                <div class="form-group">
                    <label for="exampleInputEmail1">Full name</label>
                    <input type="text" placeholder="Input Name" value={this.state.name} onChange={this.onNameChanged} className="form-control"/>
                    <label for="exampleInputEmail1">Age</label>
                    <input type="text" placeholder="Input Age" value={this.state.age} onChange={this.onAgeChanged} className="form-control"/>
                </div>
                <button type="button" onClick={this.onSubmit} className="btn btn-success">Submit</button>
            </form>
        );
    }

    onSubmit = (e) => {
        this.props.onAddUser({name: this.state.name, age: this.state.age})
    }

    onNameChanged = (event) => {
        this.setState({ name: event.target.value });
    }

    onAgeChanged = (event) => {
        this.setState({ age: event.target.value });
    }
}