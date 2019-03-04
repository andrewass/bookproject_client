import * as React from 'react';
import './App.css';
import HeaderComponent from './component/headercomponent/HeadComponent';
import MainComponent from './component/bodycomponent/MainComponent';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <HeaderComponent />
        <MainComponent />
      </div>
    );
  }
}

export default App;
