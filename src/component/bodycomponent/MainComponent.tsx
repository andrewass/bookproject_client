import * as React from 'react';
import RecentlyAddedBooksComponent from './RecentlyAddedBooksComponent'
export default class MainComponent extends React.Component<{}, {}>{

    render(){
        return(
            <RecentlyAddedBooksComponent count={20} />
        );
    }
}