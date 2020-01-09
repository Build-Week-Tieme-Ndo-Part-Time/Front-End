import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../actions';
import EndlessRiver from '../Images/EndlessRiver.jpg';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: #fff;
`;

const LoginContainer = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: black;
`;

const SignUpContainer = styled.div`
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

class Login extends Component {
	state = {
		username : '',
		password : '',
	};

	handleChange = (e) => {
		this.setState({
			profile : {
				...this.state.profile,
				[e.target.name]: e.target.value,
			},
		});
	};

	loginSubmit = (e) => {
		e.preventDefault();
		let userInfo = {
			username : this.state.username,
			password : this.state.password,
		};
		this.props
			.loginUser(userInfo)
			.then(() => {
				this.props.history.push('/clients');
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	render() {
		return (
			<Container className='container-login'>
				<LoginContainer className='container-form'>
					<div>
						<img src={require('../corncob.svg')} />
						<h1>Log in to Tieme Ndo!</h1>
					</div>
					<Form className='form-form'>
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
						<Button>Login</Button>
					</Form>
				</LoginContainer>
				<SignUpContainer>
					<h1>Hello, Friends!</h1>
					<p>Join us today to start your journey.</p>
					<Linked to='/signup'>Sign Up</Linked>
				</SignUpContainer>
			</Container>
		);
	}
}

const mapDispatchToProps = {
	loginUser,
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
