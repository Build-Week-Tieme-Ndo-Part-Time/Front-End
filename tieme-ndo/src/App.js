import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './components/Login';
import ClientList from './components/ClientList';
import Client from './components/Client';
import { UpdatedClient } from './components/UpdatedClient';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      {//<Route exact path="/" render={() => { return <HomePage />;}}/>
      }
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
          return <Client {...routeProps}  />;
        }}
      />
    </div>
  );
}

export default App;
