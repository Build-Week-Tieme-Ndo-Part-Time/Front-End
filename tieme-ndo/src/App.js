import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './components/Login';
import ClientList from './components/ClientList';
import Client from './components/Client';
import { UpdatedClient } from './components/UpdatedClient';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      {//<Route exact path="/" render={() => { return <HomePage />;}}/>
      }
      <header className="App-header">
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
      </header>
      <Route exact path="/login" component={Login} />
      <Route 
        exact 
        path="/"
        render={() => {
          return <HomePage />; 
        }}
      />
      <Route
        exact
        path="/clientlist"
        render={() => {
          return <ClientList />
        }}
      />
      <Route
        exact
        path='/update-client/:id' component={UpdatedClient}
      />

      <Route 
        path="/clientlist/:id"
        render={routeProps => {
          return <ClientCard {...routeProps}  />;
        }}
      />
    </div>
  );
}

export default App;
