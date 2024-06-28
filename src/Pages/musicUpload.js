import { Box,Flex } from "rebass";
import { StyledContainer } from "../Components/StyledComponents/StyledContainer";
import { SecondaryButton} from "../Components/StyledComponents/StyledButtons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCreateSongState, createSongRequest } from "../Actions/CreateSongsActions";
import { useNavigate } from "react-router-dom";
import { StyledHeading, StyledHeading3, StyledP } from "../Components/StyledComponents/StyledText";
import { StyledInput } from "../Components/StyledComponents/StyledInput";
import { StyledErrorBox, StyledLoadingBox } from "../Components/StyledComponents/StyledBox";



function Upload(){
  const  [title,setTitle] = useState('');
   const [artist,setArtist] = useState('');
   const [file,setFile] = useState('');
   const [titleError,setTitleError] = useState(null);
   const [artistError,setArtistError] = useState(null);
   const [fileError,setFileError] = useState(null);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [created,setCreated] = useState(false);
   const createSuccess = useSelector((state) => state.createSongReducer.success);
   const createLoading = useSelector((state) => state.createSongReducer.loading);
   const createError = useSelector((state) => state.createSongReducer.error);
   function handleFileChange(e) {
    try {
        const selectedFile = e.target.files[0];
        const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
        if (!selectedFile) {
            setFileError("File is required");
            return;
        }

        if (fileExtension !== 'mp3') {
            setFileError("Only MP3 files are allowed");
            setFile(null);
            return;
        }

       
        setFile(selectedFile);
        setFileError('');
    } catch (error) {
        setFileError("An error occurred while handling the file");
    }
}

    function handleUpload(e){
       e.preventDefault();
       const formData = new FormData();
       if(titleError === ''){
        formData.append('title', title);
       }
       if(artistError === ''){
        formData.append('artist', artist);

       }
       if(fileError === ''){
        formData.append('file', file);
       }
       if(titleError === '' && artistError === '' && fileError === ''){
        
       dispatch(createSongRequest(formData))
       setCreated(true);
       }
       
       

        
    }
    const handleUpdateCancel = (e) =>{
        e.preventDefault();
        setTitle('');
        setArtist('');
        setFile('');
        navigate('/');
        dispatch(clearCreateSongState());
    }
    const handleTitleValidation = (e) =>{
        setTitle(e.target.value);
        if(!title){
            setTitleError("title is required");
        }
        else if(title.length < 3 || title.length > 100){
            setTitleError("title must be between 3 and 100 character");
        }
        else{
            setTitleError('');
        }

    }
    const handleArtistValidation = (e) =>{
        setArtist(e.target.value);
        if(!artist){
            setArtistError("Artist name is required");
        }
        else if(title.length < 3 || title.length > 100){
            setArtistError("Artist name must be between 3 and 100 character");
        }
        else{
            setArtistError('');
        }

    }
 useEffect(() =>{
    if(createSuccess && created){
    navigate('/');
    setCreated(false);
    dispatch(clearCreateSongState());
}
 },[createSuccess]);
    return(
        <Box  display="flex" justifyContent="center" alignItems="center" height="100vh">
        <StyledContainer >
           
        <Flex flexDirection='column' height={'10%'} width = {'10%'} justifyContent={'center'} alignItems={'center'}>    
                <StyledHeading> My</StyledHeading>
                <StyledHeading>Music</StyledHeading>
                </Flex>
            <Flex flexDirection = 'column' alignItems={'center'} width={'100%'} height={'100%'} >
              <Box margin={3}><StyledHeading>Upload Your Song</StyledHeading></Box>
                <Box>  
                {createError && <StyledErrorBox>{createError}</StyledErrorBox>}
                {createLoading && <StyledLoadingBox><StyledP>Loading...</StyledP></StyledLoadingBox>}
                    
                    <label htmlFor="title"><StyledHeading3>Title</StyledHeading3></label>
                
                <StyledInput  value = {title} type='text' onChange={(e) => handleTitleValidation(e)} name = 'title'/>
                    {titleError && <span><StyledP>{titleError}</StyledP></span>}
             
                <label htmlFor="artist"><StyledHeading3>Artist</StyledHeading3></label>
                
                <StyledInput value = {artist}  onChange = {(e) => handleArtistValidation(e)} type='text' name = 'artist'/>
                    {artistError && <span><StyledP>{artistError}</StyledP></span>}
                
                <label htmlFor="file"> <StyledHeading3>File</StyledHeading3></label>
            
                <StyledInput   onChange ={(e) => handleFileChange(e)}type = 'file' name = 'file' accept="audio/mp3"/>
                    {fileError && <span><StyledP>{fileError}</StyledP></span>}
                <Box height={'1vh'}></Box>
                <Box width={'100%'}>
                    <Flex flexDirection= 'row'  width={'100%'} justifyContent='space-between'> 
                    <SecondaryButton onClick={(e)=>handleUpload(e)}><StyledHeading3>Upload</StyledHeading3></SecondaryButton>

                    <SecondaryButton onClick = {(e)=>handleUpdateCancel(e)}><StyledHeading3>Cancel</StyledHeading3></SecondaryButton>
                </Flex></Box>
                </Box>
                
              
            </Flex>
           
        </StyledContainer>
        </Box>
     


    );
}
export default Upload;