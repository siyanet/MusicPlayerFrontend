import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const PrimaryButton = styled.button`
margin: ${props => `${props.theme.space[1]}px`};
padding: ${props => `${props.theme.space[1]}px`};
background-color: ${props => props.theme.colors.primary};
border-radius: ${props => `${props.theme.radii.default}px`};
cursor: pointer;
width: 100%;
text-align: center;


&:hover{
background-color:${props => props.hoverColor || props.theme.colors.secondary};
}
`;
export const SecondaryButton = styled.button`
border-radius: ${props => `${props.theme.radii[props.size]}px` ||`${props.theme.radii.circle}px`};
cursor: pointer;
margin: ${props => `${props.theme.space[1]}px`};
background-color: ${props => props.theme.colors.primary};
&:hover{
background-color:${props =>  props.theme.colors.secondary};
padding: ${props => `${props.theme.space[3]}px`};
}
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  color:  ${props => props.theme.colors.white};
 ;
`;