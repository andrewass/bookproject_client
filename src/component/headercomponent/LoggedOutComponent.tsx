import * as React from 'react';
import axios from 'axios';


interface LoggedOutState{
    password : string;
    username : string;
    email : string
}

export default class LoggedOutComponent extends React.Component<{}, LoggedOutState>{

    constructor(props : any){
        super(props);
        this.state = {
            username : '',
            password : '',
            email : ''
        }
    }

    public createUser() {
        axios.post("http://localhost:8080/add-user", {
            "password": this.state.password,
            "username": this.state.username
        })
            .catch(error => alert(error));
        this.resetForm();
    }

    public signInUser() {
        axios.post("http://localhost:8080/sign-in-user", {
            "password": this.state.password,
            "username": this.state.username
        })
        .then(response => {alert(response.data)})
            .catch(error => alert(error));
        this.resetForm();
    }

    render() {
        return (
            <div>
                <h1>Placeholder LoggedOut</h1>
            </div>
        );
    }
    private resetForm() {
        this.setState({
            password: '',
            username: ''
        });
    }
}