import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
import AlbumsListContainer from './components/AlbumsListContainer'
import PhotoPageContainer from './components/PhotoPageContainer'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header> */}
          {/* <AlbumsListContainer/> */}
          <Route exact path="/" component={AlbumsListContainer} />
          <Route exact path="/albums/:id" component={PhotoPageContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
