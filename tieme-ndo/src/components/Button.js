import styled, { css } from 'styled-components';

const Button = styled.button`
	background: white;
	color: #46d2a3;
	width: 60%;
	height: 100%;
	border-radius: 5px;
	border: none;
	margin: 5px;
	padding: 10px;

	${(props) =>
    props.primary &&
    css`
			background: #46d2a3;
			color: white;
		`};

	&:hover {
		background: #46d2a3;
    cursor: pointer;
    color:white
	}
`;

// const Container = styled.div`text-align: center;`;

export default Button;
