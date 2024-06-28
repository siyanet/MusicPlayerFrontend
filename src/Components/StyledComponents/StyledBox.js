import { Box } from 'rebass';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => `${props.theme.space[3]}px`};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

`;
export const StyledErrorBox = styled(Box)`
background-color: red;
width: 100%;
`;
export const StyledLoadingBox = styled(Box)`
text-align: center;
width: 100%;
`;
