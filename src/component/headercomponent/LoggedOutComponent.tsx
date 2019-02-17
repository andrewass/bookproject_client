import * as React from 'react';
import CreateUserComponent from './SignUpUserComponent';
import SignInUserComponent from './SignInUserComponent';


export default class LoggedOutComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            isSignInMode: false,
            showButtons: true
        }
        this.switchToSignIn = this.switchToSignIn.bind(this);
        this.switchToSignUp = this.switchToSignUp.bind(this);
        this.switchToButtons = this.switchToButtons.bind(this);
    }

    private switchToButtons() {
        this.setState({
            showButtons: true
        })
    }

    private switchToSignIn() {
        this.setState({
            isSignInMode: true,
            showButtons: false
        });
    }

    private switchToSignUp() {
        this.setState({
            isSignInMode: false,
            showButtons: false
        })
    }

    render() {
        if (this.state.showButtons) {
            return (
                <div>
                    <button name="signUp" onClick={this.switchToSignUp}>Sign-Up User</button><br />
                    <button name="signIn" onClick={this.switchToSignIn}>Sign-In User</button>
                </div>
            );
        }
        else if (this.state.isSignInMode) {
            return (<SignInUserComponent setLoggedInState={this.props.setLoggedInState} cancel={this.switchToButtons} />);
        }
        else {
            return (<CreateUserComponent setLoggedInState={this.props.setLoggedInState} cancel={this.switchToButtons} />);
        }
    }
}