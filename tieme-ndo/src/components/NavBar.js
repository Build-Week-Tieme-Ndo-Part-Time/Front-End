import React from 'react';
// import Button from './Button';
import { Link, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import Login from './Login';
// import Signup from './Signup';

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
	margin: 1% auto;
	height: 5%;
	display: flex;
	// border: 2px solid green;
`;

/*
FlexContainer Styles 
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
*/

const LeftFlexContainer = styled.div`
	width: 60%;
	height: 3%;
	padding-left: 1%;
	display: flex;
	// border: 1px solid purple;
`;

const RightFlexContainer = styled.div`
	width: 40%;
	height: 3%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	// border: 1px solid yellow;
`;

const StyledLink = styled(Link)`
  width: 20%;
	height: 5%;
	padding: 1%;
  border-radius: 25px;
  border: 1px solid #fff;
  color: #46d2a3;
  font-size: 15px;
	text-decoration: none;
	text-align: center;
  
`;

// Original code - might need later? const NavLinks = styled.a``;

/* Original code from Button styles, now Linked
${(props) =>
	props.primary &&
	css`
		background: #46d2a3;
		color: white;
	`};
	 */

/* Trying to send Home button to marketing page external link.
	<Route
							exact
							path='/'
							component={() => {
								window.location.href = 'https://suspicious-lewin-05d82c.netlify.com/';
								return null;
							}}
	/> 
*/

export default function Navbar(props) {
	return (
		<div>
			<NavBar>
				<FlexContainer>
					<LeftFlexContainer>
						<StyledLink to='/'>Home</StyledLink>
						{/* <Link to='/about'>About Us</Link> */}
						{/* <Link to='/login'>Login</Link> */}
						{/* <Link to='/clientlist'>Clients</Link> */}
					</LeftFlexContainer>
					<RightFlexContainer>
						<StyledLink to='./Login'>Log In</StyledLink>
						{/* Will try this again later: onClick={this.props.login}*/}
						<StyledLink to='./Signup'>Sign Up</StyledLink>
					</RightFlexContainer>
				</FlexContainer>
			</NavBar>
		</div>
	);
}
