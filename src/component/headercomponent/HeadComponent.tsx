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
    }

    render() {
        if (this.state.isLoggedIn) {
            return (<LoggedInComponent />);
        }
        else {
            return (<LoggedOutComponent />);
        }
    }
}