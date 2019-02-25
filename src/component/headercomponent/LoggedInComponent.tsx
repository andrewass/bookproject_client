import * as React from 'react';

export default class LoggedInComponent extends React.Component<any, any>{

    constructor(props : any){
        super(props);

        this.logOut = this.logOut.bind(this);
    }

    private logOut(event : any){
        this.props.setLoggedInState(false);
    }

    render() {
        return (
            <div>
                <h1>Placeholder LoggedIn - Logged in as user {this.props.signedInUser}</h1>
                <button onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}