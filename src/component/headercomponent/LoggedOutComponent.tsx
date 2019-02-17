import * as React from 'react';
import axios from 'axios';
import CreateUserComponent from './CreateUserComponent';


export default class LoggedOutComponent extends React.Component<{}, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isSignInMode: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    public signInUser() {
        axios.post("http://localhost:8080/sign-in-user", {
            "password": this.state.password,
            "username": this.state.username
        })
            .then(response => { alert(response.data) })
            .catch(error => alert(error));
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
        alert("State of name is now " + this.state.username);
    }

 
    private signInForm() {
        return (
            <div>
                <h1>Placeholder LoggedOut</h1>
                <form>
                    <input name="username" type="text" placeholder="Enter username..." onChange={this.handleChange} />
                    <input name="password" type="password" placeholder="Enter password..." onChange={this.handleChange} />
                </form>
            </div>
        );
    }

    render(){
        if(this.state.isSignInMode){
            return(this.signInForm());
        }
        else{
            return(<CreateUserComponent />);
        }
    }
}