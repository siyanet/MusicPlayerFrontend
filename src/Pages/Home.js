import { Box, Flex } from 'rebass';
import { StyledHeading, StyledHeading3, StyledP } from '../Components/StyledComponents/StyledText';
import { StyledContainer } from '../Components/StyledComponents/StyledContainer';
import { PrimaryButton, SecondaryButton, StyledIcon } from '../Components/StyledComponents/StyledButtons';
import { Table, TableBody, TableHead, TableHeader, TableRow ,TableCell} from '../Components/StyledComponents/StyledTable';
import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch } from '../Actions/GetSongsActions';
import { createRef, useEffect,useRef, useState } from 'react';
import EditForm from '../Components/EditForm';
import { useNavigate } from 'react-router-dom';
import DeleteAlert from '../Components/DeleteAlert';
import { logoutStateClear } from '../Actions/LogoutAction';
import { getDefaultSongsFetch } from '../Actions/DefaultSongAction';
import LogoutConfirmation from '../Components/LogOutConfirmation';
import SongController from '../Components/SongController';
import { faEdit, faTrashAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { clearUpdateSongState } from '../Actions/UpdateSongsActions';
import { clearSongDeleteState } from '../Actions/deleteSongAction';
import { StyledErrorBox, StyledLoadingBox } from '../Components/StyledComponents/StyledBox';


function Home(){
  
    const songs = useSelector((state) => state.songsReducer.songs);
    const defaultSongs = useSelector((state) => state.defaultSongsReducer.songs);
    const audioRefs = useRef({});
    const [currentPlayingSongId,setCurrentPlayingSongId] = useState(null);
    const [showEditForm,setShowEditForm] = useState(false);
    const [selectedSong,setSelectedSong] = useState(null);
    const [showDeleteAlert,setShowDeleteAlert] = useState(false);
    const [navigateToUpload,setNavigateToUpload] = useState(false);
   
    const loggedOut = useSelector((state) => state.logoutReducer.loggedOut);
    const loginSuccess = useSelector((state) => state.loginReducer.success);
    const user = useSelector((state) => state.userFetchReducer.success);
    const [showLogout,setShowLogout] = useState(false);
    const [playingSong,setPlayingSong] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [playingError,setPlayingError] = useState(null);
    const [playingLoading,setPlayingLoading] = useState(false);
    const [playingRequestSong,setPlayingRequestSong] = useState(null);
    const [songIdArray, setSongIdArray] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getSongsFetch());
        dispatch(getDefaultSongsFetch());
    }, [dispatch]); 
    if(navigateToUpload === true){
       navigate('/upload');
    }
   
    const closeEditForm = () =>{
        setShowEditForm(false);
        setSelectedSong(null);
        dispatch(clearUpdateSongState());
        dispatch(getSongsFetch());
    }
    const openEditForm = (song) =>{
        setShowEditForm(true);
        setSelectedSong(song);
        
    }
    const closedLogout = () =>{
        setShowLogout(false);
    }
    const openLogout = () =>{
        setShowLogout(true);
    }
    const closeDeleteAlert = () =>{
        setShowDeleteAlert(false);
        setSelectedSong(null);
        dispatch(clearSongDeleteState());
        dispatch(getSongsFetch());
    }
    const openDeleteAlert = (song) =>{
        setShowDeleteAlert(true);
        setSelectedSong(song)
        

    }


const logIn = () =>{
    dispatch(logoutStateClear());
    navigate('/login');
}
useEffect(() => {
    const allSongIds = [...songs.map(song => song.id), ...defaultSongs.map(song => song.id)];
    setSongIdArray(allSongIds);
}, [songs,defaultSongs]);

useEffect(() => {
    if (playingRequestSong) {
        handlePlayPause();
    }
}, [playingRequestSong]);

const handlePlayPause = async() => {
 


    

    const audioRef = playingRequestSong && audioRefs.current[playingRequestSong.id] 
    ? audioRefs.current[playingRequestSong.id].current 
    : null;
    
    if(!audioRef) return;
    setIsButtonDisabled(true);
    Object.values(audioRefs.current).forEach((ref) => {
        if (ref.current && !ref.current.paused && ref.current !== audioRef) {
          ref.current.pause();
        }
      });
      setPlayingLoading(true);
      try{
        if(audioRef.paused){
             await audioRef.play();
            setCurrentPlayingSongId(playingRequestSong.id);
            setPlayingSong(playingRequestSong);
            }
       else{
               audioRef.pause();
               setCurrentPlayingSongId(null)
           }
      }
      catch(error){
        setPlayingError("error in playing the song");
      }
      finally{
        setIsButtonDisabled(false);
        setPlayingLoading(false);
      }
 


}




    return(
     <StyledContainer width= {'100%'} height='100%'>
                <Flex flexDirection={'row'}width = '100%' height={'100%'}>      
            <Box width={'15%'} height={'100%'} margin={2}>
                <Flex flexDirection={'column'} width={'100%'}  justifyContent={'space-between'}>
                    <Flex flexDirection='column' height={'10%'} width = {'100%'} justifyContent={'center'} alignItems={'center'}>    
                <StyledHeading> My</StyledHeading>
                <StyledHeading>Music</StyledHeading>
                </Flex>
               
            
                    <Box height={'77vh'}>  
                    
                        <Flex flexDirection={'column'}>
                         <PrimaryButton backgroundColor="#006100" hoverColor="#059e08">
                    <StyledHeading3>Home</StyledHeading3>
                </PrimaryButton>
            <PrimaryButton backgroundColor="#006100" hoverColor="#059e08"> <StyledHeading3 onClick={() => setNavigateToUpload(true)}>Upload</StyledHeading3></PrimaryButton> 
              {loggedOut &&  <Box  ><PrimaryButton onClick = {logIn}><StyledHeading3>LogIn</StyledHeading3></PrimaryButton></Box>}
             {loginSuccess && <Box><PrimaryButton onClick={openLogout}><StyledHeading3>LogOut</StyledHeading3></PrimaryButton></Box>}
             </Flex>
             </Box>


                   {playingSong && <Box height={'13%'} width={'100%'}>
                    <Flex  flexDirection={'column'} width={'100%'} height = {'100%'}alignItems={'center'}>
                        <StyledHeading3> {playingSong.title}</StyledHeading3>
                        <StyledP>{playingSong.artist}</StyledP>
                    </Flex>
                        </Box>}  
                        
                  
            </Flex>
        </Box>
        <Box width={'85%'} margin={3} height={'100%'}>
            <Flex flexDirection={'column'} height = {'100%'}width={'100%'}>
            {playingError && <StyledErrorBox><StyledHeading3>{playingError}</StyledHeading3></StyledErrorBox>}
            {playingLoading && <StyledLoadingBox><StyledHeading3>Loading a song ...</StyledHeading3></StyledLoadingBox>}  
                <Box height='10%'>               
        <Flex flexDirection={'row'} justifyContent={'flex-end'} width={'100%'}>
           
        <StyledHeading>Hi {user && user.username}</StyledHeading>
        </Flex>
        </Box>
      
        
   
        {(songs && songs.length > 0 )|| (defaultSongs && defaultSongs.length > 0)? (
            <Box height={'77%'} overflowX={'hidden'} overflowY={'auto'}>      <Table>
            <TableHead>
                <TableRow>
                <TableHeader>Play</TableHeader>
             <TableHeader>Title</TableHeader>
             <TableHeader>Musican</TableHeader>
             {user && <TableHeader>Actions</TableHeader>}
                </TableRow>
             
            </TableHead>
            
                <TableBody >
          { songs && songs.map((song) => {
           
             
               
                  
                  if (!audioRefs.current[song.id]) {
                    audioRefs.current[song.id] = createRef();
                  
              }
         
        return( <TableRow key ={song.id}> 
       
          <TableCell> 
              <SecondaryButton disabled= {isButtonDisabled} onClick = {()=> setPlayingRequestSong(song)}>
              {currentPlayingSongId === song.id? <StyledIcon icon={faPause}/>: <StyledIcon icon={faPlay}/>} </SecondaryButton>
          <audio  ref = {audioRefs.current[song.id]} src = {song.file}/>
          </TableCell>
     
      <TableCell><StyledP>{song.title} </StyledP></TableCell>
      <TableCell><StyledP>{song.artist} </StyledP></TableCell>
      {user && <TableCell> <SecondaryButton onClick={() => openEditForm(song)}><StyledIcon icon={faEdit} /></SecondaryButton>
      <SecondaryButton onClick={() => openDeleteAlert(song)}><StyledIcon icon={faTrashAlt}/></SecondaryButton></TableCell>}
  
       </TableRow>);
          
             })}
               {defaultSongs && defaultSongs.map((defaultSong) => {
              
                                      if (!audioRefs.current[defaultSong.id]) {
                                          audioRefs.current[defaultSong.id] = createRef();
                                      }

                                      return (
                                          <TableRow key={defaultSong.id}>
                                              <TableCell>
                                              
                                                  <SecondaryButton disabled={isButtonDisabled} onClick={() =>setPlayingRequestSong(defaultSong)}>
                                                      {currentPlayingSongId === defaultSong.id ? <StyledIcon icon={faPause}/>: <StyledIcon icon={faPlay}/>}
                                                  </SecondaryButton>
                                                  <audio ref={audioRefs.current[defaultSong.id]} src={defaultSong.file} />
                                              </TableCell>
                                              <TableCell><StyledP>{defaultSong.title}</StyledP></TableCell>
                                              <TableCell><StyledP>{defaultSong.artist}</StyledP></TableCell>
                                              
                                          </TableRow>
                                      );
                                  })}
              
              
          </TableBody>
            
      </Table>
      </Box>
        
            )
        
        
        
        : (<StyledHeading3> No Available Songs</StyledHeading3>)}
        {showEditForm && selectedSong && <EditForm  song = {selectedSong} onClose = {closeEditForm}/>}
      
        {showDeleteAlert && selectedSong && <DeleteAlert song = {selectedSong} onClose = {closeDeleteAlert}/>}
        {showLogout && <LogoutConfirmation onClose = {closedLogout}/>}
        {playingSong && 
        <Box height={'13%'} width={'100%'} > 
        <SongController audioRefs={audioRefs} songIdArray={songIdArray} playingSong={playingSong} currentPlayingSongId={currentPlayingSongId}
        playingRequestSong = {playingRequestSong} setPlayingRequestSong={setPlayingRequestSong} handlePlayPause={handlePlayPause} isButtonDisabled={isButtonDisabled}
        songs = {songs} defaultSongs={defaultSongs}
        setCurrentPlayingSongId= {setCurrentPlayingSongId}>

        </SongController>
        
        </Box>
            
            
            }
       
        </Flex>
        </Box>
        </Flex>
     </StyledContainer>
    

     
  
    );
}
export default Home;