import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomePage from './components/HomePage';
import UpdatedClient from './components/UpdatedClient';
import ClientList from './components/ClientList';
import ClientCard from './components/ClientCard';
import SignUp from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
// Switch is like a JS switch statement. The switch determines which of the following routes it will render.
function App() {
	return (
		<div className='App'>
			<Route exact path='/login' component={Login} />
			{
				//<Route exact path="/" render={() => { return <HomePage />;}}/>
			}
			<header className='App-header'>
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>

      <Navbar />
			<Route exact path='/login' component={Login} />
			<Route
				exact
				path='/'
				render={() => {
					return <HomePage />;
				}}
			/>
			<Route
				exact
				path='/clientlist'
				render={() => {
					return <ClientList />;
				}}
			/>
			<Route exact path='/update-client/:id' component={UpdatedClient} />

			<Route
				path='/clientlist/:id'
				render={(routeProps) => {
					return <ClientCard {...routeProps} />;
				}}
			/>

			<Route exact path='/signup' component={SignUp} />
		</div>
	);
}

export default App;
