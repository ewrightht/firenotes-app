import styled from 'styled-components';

export const Card = styled.div`
	border: 1px solid
		${(props) => (props.bordered ? props.theme.secondaryColor : 'none')};
	background: ${(props) => props.background};
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	max-width: 300px;
	word-wrap: break-word;
	transition: 0.3s;
	cursor: pointer;
	&:hover {
		transform-style: preserve-3d;
		transform: scale(1.03);
	}
`;

export const CardTitle = styled.p`
	color: ${(props) => props.label ? props.theme.secondaryColor : 'white'};
	font-weight: bolder;
	font-size: 22px;
`;

export const CardDescription = styled.p`
	color: ${(props) => props.label ? props.theme.secondaryColor : 'white'};
	font-weight: bold;
`;
