import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login';

const NavContainer = styled.div`
  height: 100%
	width: 15%;
`;

const NavBar = styled.nav`
  height: 100%
	width: 100%;
	background: #46d2a3;
	z-index: 1;
	font-size: 1.4rem;
`;

//Space for LOGO here if needed.

const FlexContainer = styled.div`
	width: 100%;
  display: flex;
  flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 100%;

	a {
		text-decoration: none;
		color: white;
		width: 50%;
		margin: 0 1.5%;
		text-decoration: none;
		cursor: pointer;

	&:hover {
	color: white
	}
`;

const ButtonFlexContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// Original code - might need later? const NavLinks = styled.a``;

export default function Navbar(props) {
  return (
    <NavContainer className='nav-container'>
      <NavBar>
        <FlexContainer>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          {/* <Link to='/login'>Login</Link> */}
          <Link to='/clients'>Clients</Link>
          <ButtonFlexContainer>
            <Button component='Login'>Sign Out</Button>
          </ButtonFlexContainer>
        </FlexContainer>
      </NavBar>
    </NavContainer>
  );
}
