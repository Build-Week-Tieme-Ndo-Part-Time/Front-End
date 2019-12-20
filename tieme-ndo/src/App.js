import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ClientList from './components/ClientList';
import ClientCard from './components/ClientCard';

// Switch is like a JS switch statement. The switch determines which of the following routes it will render. 
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>

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
