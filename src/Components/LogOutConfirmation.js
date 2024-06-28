import { useDispatch } from "react-redux";
import { Box, Flex } from "rebass";
import { SecondaryButton } from "./StyledComponents/StyledButtons";
import { logoutRequest } from "../Actions/LogoutAction";
import { useNavigate } from "react-router-dom";
import { userStateClear } from "../Actions/UserAction";
import { clearLoginState } from "../Actions/LoginAction";
import { StyledBox } from "./StyledComponents/StyledBox";
import { StyledHeading3, StyledP } from "./StyledComponents/StyledText";
import { clearGetSongsState } from "../Actions/GetSongsActions";


function LogoutConfirmation({onClose}){
  const  dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogoutButton = (e) => {
        e.preventDefault();
        dispatch(logoutRequest());
        dispatch(userStateClear());
        dispatch(clearLoginState());
        dispatch(clearGetSongsState());
        onClose();
        navigate('/');


    }
    return(  
        <StyledBox> 
            <Flex flexDirection={'column'}>
            <Flex justifyContent={'center'} textAlign={'center'}><StyledHeading3>Are You Sure You Want To Logout?</StyledHeading3></Flex>
        <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <SecondaryButton onClick={(e) => handleLogoutButton(e)}><StyledP>yes</StyledP></SecondaryButton>
            <SecondaryButton onClick={onClose}><StyledP>NO</StyledP></SecondaryButton>
        </Flex>
    </Flex>
    </StyledBox>);
 

}
export default LogoutConfirmation;