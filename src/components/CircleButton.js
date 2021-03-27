import styled from 'styled-components';

export const CircleButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: ${props => props.theme.headerColor};
  background: transparent;
  flex-grow: unset;
  outline: none;
  transition: 0.30s;
  &:hover {
    backdrop-filter: brightness(90%);
  }
`;