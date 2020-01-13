import styled, { css } from 'styled-components';

const Button = styled.button`
	background: white;
	color: #46d2a3;
	width: 30%;
	height: 2%;
	border-radius: 5px;
	border: none;
	margin: 1%;
	padding: 2%; 

	${(props) =>
		props.primary &&
		css`
			background: #46d2a3;
			color: white;
		`};

	&:hover {
		background: none;
		cursor: pointer;
		border-bottom: 1px solid #ffffff;
	}
`;

// const Container = styled.div`text-align: center;`;

export default Button;
