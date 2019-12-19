import React from 'react';
import Button from './Button';
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

const FlexContainer = styled.div`
	max-width: 120%;
	display: flex;
	margin: auto;
	padding: 0 2%;
	justify-content: space-evenly;
	height: 5%;

	a {
		text-decoration: none;
		color: #46d2a3;
		width: 80%;
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
				<a href='https://www.github.com'>About Us</a>
				<a href='https://www.github.com'>Stories</a>
				<a href='https://www.github.com'>Staff</a>
				<a href='https://www.github.com'>Contact</a>
			</FlexContainer>
			<Button>Log In</Button>
			<Button primary>Register</Button>
		</NavBar>
	);
}
