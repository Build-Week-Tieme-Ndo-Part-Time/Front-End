import styled, { css } from 'styled-components';

const Button = styled.button`
	background: white;
	color: #46d2a3;
	width: 20%;
	height: 2%;
	border-radius: 5px;
	border: none;
	margin: 0.5%;
	padding: 1%;

	${(props) =>
		props.primary &&
		css`
			background: #46d2a3;
			color: white;
		`};

	&:hover {
		background: none;
		border-bottom: 1px solid #ffffff;
	}
`;

// const Container = styled.div`text-align: center;`;

export default Button;
