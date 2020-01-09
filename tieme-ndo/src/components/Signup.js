import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EndlessRiver from '../Images/EndlessRiver.jpg';
import signupUser from '../actions';
import '../App.css';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: #fff;
`;

const SignUpContainer = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: black;
`;

const LoginContainer = styled.div`
	width: 40%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url(${EndlessRiver});
	color: white;
`;

const Form = styled.form`
	width: 35%;
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	width: 90%;
	height: 15%;
	border-radius: 13px;
	border: 1px solid black;
	margin: 10px;
	outline: none;
	color: #4e4e4e;
	font-size: 12px;
	padding: 5px;
`;

const Button = styled.button`
	width: 35%;
	height: 15%;
	border-radius: 25px;
	border: none;
	background-image: url(${EndlessRiver});
	color: white;
	font-size: 15px;
`;

const Linked = styled(Link)`
  width: 20%;
  height: 5%;
  border-radius: 25px;
  border: 1px solid #fff;
  color: white;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class SignUp extends Component {
	state = {
		username : '',
		password : '',
	};

	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	SignupSubmit = (e) => {
		e.preventDefault();
		let username = this.state.username;
		let password = this.state.password;
		this.props
			.signupUser(username, password)
			.then(() => {
				this.history.push('/clients');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<Container className='container-signup'>
				<SignUpContainer className='container-form'>
					<div>
						<img src={require('../corncob.svg')} />
						<h1>Create Account</h1>
					</div>
					<Form className='form-form' onSubmit={this.SignupSubmit}>
						<Input
							placeholder='Username'
							type='text'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Input
							placeholder='Password'
							type='password'
							name='password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<Button type='submit'>Sign Up</Button>
					</Form>
				</SignUpContainer>
				<LoginContainer>
					<h1>Welcome Back!</h1>
					<p>To connect with us login in to your account</p>
					<Linked to='/login'>Login</Linked>
				</LoginContainer>
			</Container>
		);
	}
}

export default SignUp;
