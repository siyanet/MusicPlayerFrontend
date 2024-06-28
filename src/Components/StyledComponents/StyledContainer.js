import styled from '@emotion/styled';
export const StyledContainer = styled.div`
width: 100%;
height: 100vh;
margin: ${props => `${props.theme.space[0]}px`};
padding: ${props => `${props.theme.space[0]}px`};
background-color: ${props => props.theme.colors.black};
overflow: hidden;
display: flex;
`;