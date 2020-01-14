import React from 'react';
import Navbar from './NavBar'
import Client from './Client'
import styled from 'styled-components';



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <Container className='main-container'>
      <Navbar />
      <Client />
    </Container>
  )
}
