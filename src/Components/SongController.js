import { Flex,Box } from "rebass";
import { SecondaryButton, StyledIcon } from "./StyledComponents/StyledButtons";
import { useEffect, useState } from "react";
import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { CustomSlider} from "./StyledComponents/StyledSlider";
import { StyledP } from "./StyledComponents/StyledText";

function SongController({audioRefs ,setCurrentPlayingSong,defaultSongs,songs,handlePlayPause,isButtonDisabled,songIdArray,playingSong,currentPlayingSongId,playingRequestSong,setPlayingRequestSong}){
     const audioRef = audioRefs.current[playingSong.id];
    const [currentTime,setCurrentTime] = useState(0);
    const [duration,setDuration] = useState(0);
   
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };
    useEffect(() => {
        const handleTimeUpdate = () => {
            
                setCurrentTime(audioRef.current.currentTime);
        
            
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

            setDuration(audioRef.current.duration); // Set initial duration
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);

            }
        };
    }, [audioRef]);


    const handlePrevious = () => {
        const currentIndex = songIdArray.findIndex(id => id === playingSong.id);
        if (currentIndex > 0) {
            const previousSongId = songIdArray[currentIndex - 1];
            const previousSong = songs.find(song => song.id === previousSongId) || defaultSongs.find(song => song.id === previousSongId);
            
            setPlayingRequestSong(previousSong);
           
        }
        else{

        }
    };
    
    const handleNext = () => {
        const currentIndex = songIdArray.findIndex(id => id === playingSong.id);
        if (currentIndex < songIdArray.length - 1) {
            const nextSongId = songIdArray[currentIndex + 1];
            const nextSong = songs.find(song => song.id === nextSongId) || defaultSongs.find(song => song.id === nextSongId);
            
            setPlayingRequestSong(nextSong);
          
        }
    };


    return(
        <Box>
            <Flex flexDirection={'column'} width={'100%'}>
            <Flex flexDirection={'row'} width={'100%'} justifyContent={"center"}>

                <SecondaryButton onClick={() => setCurrentPlayingSong(null)}><StyledIcon icon={faStepBackward}/></SecondaryButton>

                <SecondaryButton disabled = {isButtonDisabled}onClick={handlePlayPause}>
                    {currentPlayingSongId?  <StyledIcon icon={faPause}/> : <StyledIcon icon={faPlay}/>} </SecondaryButton>

                <SecondaryButton onClick={handleNext}><StyledIcon icon={faStepForward}/></SecondaryButton>
            </Flex>
            <Flex flexDirection={'row'} justifyContent={"center"}>
                <StyledP width= {'5%'}>{formatTime(currentTime)}</StyledP>
                <CustomSlider sx ={{width:'90%'}} value = {currentTime} max={duration}/>
          

                <StyledP width={'5%'}>{formatTime(duration)}</StyledP>

            </Flex>
            </Flex>
           
        </Box>
    );
}
export default SongController;



