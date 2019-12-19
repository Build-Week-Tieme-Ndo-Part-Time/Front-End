import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
	background: white;
	color: #46d2a3;
	width: 10%;
	height: 2%;
	border-radius: 5px;
	border: 1px solid #232328;
	margin: 0.5%;
	padding: 1%;

	${(props) =>
		props.primary &&
		css`
			background: #46d2a3;
			color: white;
		`};
`;

// const Container = styled.div`text-align: center;`;

export default Button;
