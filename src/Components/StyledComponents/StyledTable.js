import styled from '@emotion/styled';

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
margin: ${props => `${props.theme.space[2]}px ${props.theme.space[3]}px`};
font-family: ${props => props.theme.fonts.body};
`;
export const TableHeader = styled.th`
color: ${props => props.theme.colors.white};
text-align: left;
font-size: ${props =>`${props.theme.fontSizes[1]}px`};
font-weight: ${props => props.theme.fontWeights.bold};
padding: ${props => `${props.theme.space[2]}px`};
`;
export const TableRow = styled.tr`
&:nth-of-type(even){
background-color: ${props => props.theme.colors.gray}};

`;
export const TableCell = styled.td`
padding: ${props =>`${props.theme.space[1]}px`};
margin: ${props => `${props.theme.space[3]}px`};

`;
export const TableBody = styled.tbody``;
export const TableHead = styled.thead``;