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
    }

    toggleLoggedInState(newState : boolean){
        this.setState({isLoggedIn : newState});
    }

    render() {
        if (this.state.isLoggedIn) {
            return (<LoggedInComponent setLoggedInState={this.toggleLoggedInState} />);
        }
        else {
            return (<LoggedOutComponent setLoggedInState={this.toggleLoggedInState}/>);
        }
    }
}