import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import UpdatedClient from './components/UpdatedClient';
import ClientListTable from './components/ClientListTable';
import SignUp from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import CreateClient from "./components/CreateClient";
// Switch is like a JS switch statement. The switch determines which of the following routes it will render.
function App() {
	return (
		<div className='App'>
			<Route exact path='/login' component={Login} />

			<Route exact path='/' component={HomePage} />

			<Route exact path='/update-client' component={UpdatedClient} />

			<Route exact path='/createclient' component={CreateClient} />

			<Route exact path='/signup' component={SignUp} />
		</div>
	);
}

export default App;
