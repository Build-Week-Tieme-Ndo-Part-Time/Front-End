import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import HomePage from './components/HomePage';
import UpdatedClient from './components/UpdatedClient';
import Client from './components/Client';
import ClientCard from './components/ClientCard';
import SignUp from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
// Switch is like a JS switch statement. The switch determines which of the following routes it will render.
function App() {
  return (
    <div className='App'>
      <PrivateRoute exact path="/clients" component={Client} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path="/" component={Login} />
      {
        //<Route exact path="/" render={() => { return <HomePage />;}}/>
      }

      {/* <Navbar /> */}
      <Route exact path='/login' component={Login} />
      <Route
        exact
        path='/homepage'
        render={() => {
          return <HomePage />;
        }}
      />
      <Route
        exact
        path='/clientlist'
        render={() => {
          return <Client />;
        }}
      />
      <Route exact path='/updatedclient' component={UpdatedClient} />

      <Route
        path='/clientlist/:id'
        render={(routeProps) => {
          return <ClientCard {...routeProps} />;
        }}
      />

    </div>
  );
}

export default App;
