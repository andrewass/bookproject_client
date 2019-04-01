import * as React from 'react';
import './App.css';
import HeaderComponent from './component/headercomponent/HeadComponent';
import MainComponent from './component/bodycomponent/MainComponent';
import { BrowserRouter, Route } from 'react-router-dom';
import BookDetailsComponent from './component/bodycomponent/BookDetailsComponent';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <HeaderComponent />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={MainComponent} />
            <Route exact path="/book/:id" component={BookDetailsComponent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
