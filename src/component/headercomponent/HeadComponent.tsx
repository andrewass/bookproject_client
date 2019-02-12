import * as React from 'react';
import LoggedInComponent from './LoggedInComponent';
import LoggedOutComponent from './LoggedOutComponent';


interface IHeaderState {
    isLoggedIn: boolean;
    username: string;
}

export default class HeaderComponent extends React.Component<{}, IHeaderState>{

    constructor(props: any) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: ''
        };
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <LoggedInComponent />
                </div>
            );
        }
        return (<LoggedOutComponent />);
    }
}