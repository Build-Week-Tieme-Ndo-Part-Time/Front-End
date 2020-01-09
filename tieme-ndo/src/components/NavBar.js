import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login';

const NavBar = styled.nav`
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	background: #333333;
	z-index: 1;
	font-size: 1.4rem;
`;

//Space for LOGO here if needed.

const FlexContainer = styled.div`
	max-width: 120%;
	width: 100%;
	display: flex;
	margin: 1% auto;
	padding: 0 2%;
	justify-content: space-evenly;
	align-items: center;
	height: 5%;

	a {
		text-decoration: none;
		color: #46d2a3;
		width: 10%;
		border-bottom: 1px solid transparent;
		margin: 0 1.5%;
		text-decoration: none;
		cursor: pointer;

	&:hover {
		background: #4e4e4e;
		border-bottom: 1px solid #ffffff;
	}
`;

const ButtonFlexContainer = styled.div`
	width: 30%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

// Original code - might need later? const NavLinks = styled.a``;

export default function Navbar(props) {
	return (
		<div>
			<NavBar>
				<FlexContainer>
					<Link to='/'>Home</Link>
					<Link to='/about'>About Us</Link>
					{/* <Link to='/login'>Login</Link> */}
					<Link to='/clientlist'>Clients</Link>
					<ButtonFlexContainer>
						<Button>Log In</Button>
						{/* Will try this again later: onClick={this.props.login}*/}
						<Button primary>Register</Button>
					</ButtonFlexContainer>
				</FlexContainer>
			</NavBar>
		</div>
	);
}
