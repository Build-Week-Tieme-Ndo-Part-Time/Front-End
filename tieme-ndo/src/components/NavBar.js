import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	background: #333333;
	z-index: 1;
	font-size: 1.4rem;
`;

// const Logo = styled.img`

// `;

const FlexContainer = styled.div`
	max-width: 120%;
	width: 60%;
	display: flex;
	margin: 1% auto;
	padding: 0 2%;
	justify-content: space-evenly;
	align-items: center;
	height: 5%;

	a {
		text-decoration: none;
		color: #46d2a3;
		max-width: 100%;
		border-bottom: 1px solid transparent;
		margin: 0 1.5%;
		text-decoration: none;
		cursor: pointer;

	&:hover {
		background: #4e4e4e;
		border-bottom: 1px solid #ffffff;
	}
`;

// const NavLinks = styled.a``;

export default function Navbar(props) {
	return (
		<NavBar>
			<FlexContainer>
				<Link to='/about'>About Us</Link>
				<Link to='/stories'>Stories</Link>
				<Link to='/staff'>Staff</Link>
				<Link to='/contact'>Contact</Link>
				<Button>Log In</Button>
				<Button primary>Register</Button>
			</FlexContainer>
		</NavBar>
	);
}
