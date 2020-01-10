import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import UpdatedClient from './components/UpdatedClient';
import ClientList from './components/ClientList';
import SignUp from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
// Switch is like a JS switch statement. The switch determines which of the following routes it will render.
function App() {
	return (
		<div className='App'>
			<Route exact path='/login' component={Login} />

			<Route exact path='/' component={HomePage} />

			<Route exact path='clientlist' component={ClientList} />

			<Route exact path='/update-client/:id' component={UpdatedClient} />

			<Route exact path='/signup' component={SignUp} />
		</div>
	);
}

export default App;
