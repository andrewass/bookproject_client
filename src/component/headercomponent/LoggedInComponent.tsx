import * as React from 'react';

export default class LoggedInComponent extends React.Component<any, any>{

    private logOut(event : any){
        alert("Button clicked! Now logging out");
    }

    render() {
        return (
            <div>
                <h1>Placeholder LoggedIn</h1>
                <button onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}