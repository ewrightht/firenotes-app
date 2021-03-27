import styled from 'styled-components';

export const Navbar = styled.nav`
	width: 100%;
	height: 80px;
	box-sizing: border-box;
	background: ${props => props.theme.secondaryColor};
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5); */
`;
