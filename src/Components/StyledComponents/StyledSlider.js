import styled from '@emotion/styled';
import { Slider } from "theme-ui";



export const CustomSlider = styled(Slider)`
 
  background-color: ${props =>  props.theme.colors.primary};
  
  &::-webkit-slider-thumb {
   
    background-color:${props =>  props.theme.colors.white};

  }

  &::-moz-range-thumb {
   
   background-color:${props =>  props.theme.colors.secondary};
   
  }

  &::-ms-thumb {
    
    background-color:${props =>  props.theme.colors.secondary};
   
  
  }


`;






