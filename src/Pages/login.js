// Login.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterRequest } from '../Actions/RegiserAction';
import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../Components/StyledComponents/StyledButtons';
import { loginRequest } from '../Actions/LoginAction';
import { StyledContainer } from '../Components/StyledComponents/StyledContainer';
import { StyledBox, StyledErrorBox } from '../Components/StyledComponents/StyledBox';
import { StyledHeading,  StyledP } from '../Components/StyledComponents/StyledText';
import { Box, Flex } from 'rebass';
import { StyledInput } from '../Components/StyledComponents/StyledInput';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [method,setMethod]  = useState("login");
  const [userNameInputError,setUserNameInputError] = useState(null);
  const [passwordInputError,setPasswordInputError] = useState(null);
  const registerError = useSelector((state) => state.userRegisterReducer.error);
  const registerSuccess = useSelector((state) => state.userRegisterReducer.success);
  const loginSuccess = useSelector((state) => state.loginReducer.success);
  const loginError = useSelector((state) => state.loginReducer.error);




const validateUserName = (e) =>{
    setUsername(e.target.value);
    
      if(!username){
        setUserNameInputError("username required")

      }
      else if(username.length < 3 || username.length > 20){
        setUserNameInputError(" username should be between 3 and 20 characters")
      }
      else if(!/^[a-zA-Z0-9_.]+$/.test(username)){
        setUserNameInputError('username can only contain letters, numbers and underscores');
      }
      else{
        setUserNameInputError("");
      }
     

    


}
const validatePassword = (e) =>{
    setPassword(e.target.value);
    if(!password){
      setPasswordInputError('password required');
    }
    else if(password.length < 8){
      setPasswordInputError('password must be at least 8 characters')
    }
    else{
      setPasswordInputError('');
    }
    

}
const changeMethod = () => {
        setUsername('');
        setPassword('');
        setMethod(prevMethod => (prevMethod === 'register' ? 'login' : 'register'));
 
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(method === 'register' && userNameInputError === '' && passwordInputError === ''){
        dispatch(userRegisterRequest(username,password));
       
       
    }
    else if(method === 'login' && userNameInputError === '' && passwordInputError === ''){
        dispatch(loginRequest(username,password));
      
     
    }
   
 
   

   
  };
  useEffect(() =>{
    if (method === 'login' && loginSuccess ) {

        navigate('/');
    }
     
    else if (method === 'register' && registerSuccess) {
       changeMethod();
   }


  },[loginSuccess,registerSuccess,method,navigate]);


  return (
    <StyledContainer >
      {registerError && <StyledErrorBox>{registerError}</StyledErrorBox>}
      {loginError && <StyledErrorBox>{loginError}</StyledErrorBox>}
      <Flex flexDirection={'column'} width={'100%'}>
       
             <Box  position="fixed" marginTop={'10%'} width="100%"> <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} ><StyledHeading>Wellcome To</StyledHeading> 
             <StyledHeading>My Music</StyledHeading>
             
             </Flex></Box>
            
         
            <StyledBox>
              <form onSubmit={handleSubmit}>
                <Flex justifyContent={'center'}><StyledHeading>{method}</StyledHeading></Flex>
        <label>
          <StyledP> Username:</StyledP>
         
          <StyledInput type="text" value={username} onChange={(e) => validateUserName(e)} required />
          
        </label>
       { userNameInputError && <span><StyledP>{userNameInputError}</StyledP></span>}
        <br />
        <label>
          <StyledP>Password:</StyledP>
          
          <StyledInput type="password" value={password} onChange={(e) => validatePassword(e)} required />
        </label>
        {passwordInputError && <span> <StyledP>{passwordInputError}</StyledP></span>}
        <br />
        <Flex justifyContent={'center'}><SecondaryButton type="submit"><StyledP>{method}</StyledP></SecondaryButton></Flex>
        
      </form>
      
      { method === 'login'? 
      
      <StyledP onClick = {() => changeMethod() }>Don't have account? create </StyledP>:
      <StyledP onClick = {() => changeMethod()}>Have account? Login</StyledP>}
    </StyledBox>

    </Flex>
    </StyledContainer>
    
  );
};

export default Login;
