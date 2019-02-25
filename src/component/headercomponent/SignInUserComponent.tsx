import * as React from 'react';
import { string } from 'prop-types';
import axios from 'axios';


export default class SignInUserComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            username: string,
            password: string
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ [event.target.name]: event.target.value });
    }

    private handleSubmit(event: any) {
        event.preventDefault();
        alert(this.state.username + " and password " + this.state.password);
        axios.get("http://localhost:8080/sign-in-user", {
            params: {
                username: this.state.username,
                password: this.state.password
            }
        })
            .then(response => {
                this.props.setUsername(this.state.username);
                this.props.setLoggedInState(true);
            })
            .catch(error => alert(error))

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" type="text" placeholder="Enter username" onChange={this.handleChange} /> <br />
                    <input name="password" type="password" placeholder="Enter password" onChange={this.handleChange} /> <br />
                    <button name="signIn">Sign In</button><br />
                </form>
                <button name="cancel" onClick={this.props.cancel}>Cancel</button><br />
            </div>
        );
    }
}