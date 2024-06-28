import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 100%;
  margin: ${props => `${props.theme.space[3]}px`};
padding: ${props => `${props.theme.space[3]}px`};
  border:  ${props => `${props.theme.space[1]}px`} solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;