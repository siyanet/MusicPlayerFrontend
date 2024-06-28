import styled from "@emotion/styled/macro";

export const StyledHeading = styled.h1`
font-family: ${props => props.theme.fonts.heading};
margin: 0;
padding: 0;
font-size: ${props => `${props.theme.fontSizes[3]}px`};
color: ${props => props.theme.colors.white};
font-weight:${props => props.theme.fontWeights.heading};

`;
export const StyledP= styled.p`
font-family: ${props => props.theme.fonts.body};
font-size: ${props => `${props.theme.fontSizes[props.size]}px`};
color: ${props => props.theme.colors.white};
font-weight:${props => props.theme.fontWeights[props.weight] || props.theme.fontWeights.body};

margin: 0;
padding:0;
`;
export const StyledHeading3 = styled.h3`
  font-size: ${props => `${props.theme.fontSizes[2]}px`};  // Use a static font size initially for testing
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-weight:${props => props.theme.fontWeights.bold};
 
  margin: 0;
  padding: 0;


`;

