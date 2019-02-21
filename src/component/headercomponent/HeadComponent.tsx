import * as React from 'react';
import LoggedInComponent from './LoggedInComponent';
import LoggedOutComponent from './LoggedOutComponent';




export default class HeaderComponent extends React.Component<{}, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: ''
        };
        this.toggleLoggedInState = this.toggleLoggedInState.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }

    toggleLoggedInState(newState: boolean) {
        this.setState({ isLoggedIn: newState });
    }

    setUsername(username: string) {
        this.setState({ username: username });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (<LoggedInComponent setLoggedInState={this.toggleLoggedInState}
                updateUsername={this.setUsername} />);
        }
        else {
            return (<LoggedOutComponent setLoggedInState={this.toggleLoggedInState}
                updateUsername={this.setUsername} />);
        }
    }
}