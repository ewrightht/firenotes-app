import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
	width: ${(props) => props.block && '100%'};
	background: ${(props) =>
		props.primary ? props.theme.secondaryColor : props.color};
  height: 45px;
  margin: ${props => props.center ? '0px auto' : '0px'};
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  color: white;
  outline: none;
  transition: 0.30s;
  &:hover {
    background: #008067;
  }
`;
