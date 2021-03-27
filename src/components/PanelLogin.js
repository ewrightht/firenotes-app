import styled from 'styled-components';

export const PanelForm = styled.div`
	width: 800px;
	height: 600px;
	background: white;
	display: flex;
	box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	overflow: hidden;
`;

export const FormContainer = styled.form`
	display: flex;
	justify-content: center;
  flex-direction: column;
	width: 50%;
	padding: 20px;
	color: #111;
	text-align: center;
`;

export const PanelInfo = styled.div`
	display: flex;
	justify-content: center;
	width: 50%;
	background: linear-gradient(
		to right,
		${(props) => props.theme.primaryColor},
		#1dd1a1
	);
  font-size: 100px;
  font-weight: 900;
  align-items: center;
  text-align: center;
  flex-direction: column;
  overflow: hidden;
`;

export const FormControl = styled.input`
  border: none;
  background: none;
  backdrop-filter: brightness(90%);
  height: 45px;
  border-radius: 5px;
  outline: none;
  padding: 0px 20px;
  font-size: 18px;
`;
