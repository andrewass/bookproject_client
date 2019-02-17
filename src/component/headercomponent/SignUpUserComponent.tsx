import * as React from 'react';
import { string } from 'prop-types';
import axios from 'axios';


export default class CreateUserComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            username: string,
            firstName: string,
            lastName: string,
            emailAddress: string,
            country: string
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ [event.target.name]: event.target.value });
    }

    private handleSubmit(event: any) {
        event.preventDefault();
        axios.post("http://localhost:8080/add-user", this.state)
            .catch(error => alert(error));
        this.props.setLoggedInState(true);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" type="text" placeholder="Enter username" onChange={this.handleChange} /> <br />
                    <input name="firstName" type="text" placeholder="Enter first name" onChange={this.handleChange} /> <br />
                    <input name="lastName" type="text" placeholder="Enter last name" onChange={this.handleChange} /> <br />
                    <input name="country" type="text" placeholder="Enter country" onChange={this.handleChange} /> <br />
                    <input name="emailAddress" type="email" placeholder="Enter email address" onChange={this.handleChange} /> <br />
                    <input name="password" type="password" placeholder="Select a password" onChange={this.handleChange} /> <br />
                    <input name="password" type="password" placeholder="Confirm selected password" onChange={this.handleChange} /> <br />
                    <button name="createUser">Create User</button><br />
                </form>
                <button name="cancel" onClick={this.props.cancel}>Cancel</button><br />
            </div>
        );
    }
}