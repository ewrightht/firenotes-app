import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.backColor};
`;

export const Typography = styled.h1`
	font-size: ${(props) => props.h1 && '50px'};
	font-size: ${(props) => props.h2 && '35px'};
	font-size: ${(props) => props.h3 && '25px'};
	font-weight: 900;
	color: ${(props) => props.theme.headerColor};
`;

export const Paragraph = styled.p`
	color: ${(props) => props.lead && 'grey'};
`;

export const SizedBox = styled.div`
	width: ${(props) => props.w && props.w};
	height: ${(props) => props.h && props.h};
`;

export const Container = styled.div`
  width: 90%;
  margin: 0px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;