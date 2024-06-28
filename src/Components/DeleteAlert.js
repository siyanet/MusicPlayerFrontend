import { useDispatch, useSelector } from "react-redux";
import { SecondaryButton } from "./StyledComponents/StyledButtons";
import {Flex} from "rebass";
import {  deleteSongRequest } from "../Actions/deleteSongAction";
import { useEffect} from "react";
import { StyledBox, StyledErrorBox, StyledLoadingBox } from "./StyledComponents/StyledBox";
import { StyledHeading3, StyledP } from "./StyledComponents/StyledText";

function DeleteAlert({song,onClose}){
    const dispatch = useDispatch();
   
    const deleteLoading = useSelector(state => state.deleteSongReducer.loading);
    const deleteSongSuccess = useSelector(state => state.deleteSongReducer.success);
    const deleteSongError = useSelector(state => state.deleteSongReducer.error);
function handleDelete(e){
    e.preventDefault();
    dispatch(deleteSongRequest(song.id));
   

}
useEffect(() => {
    if (deleteSongSuccess) {
        onClose();    
    }
},[deleteSongSuccess]);
    return (
<StyledBox>
    {deleteLoading && <StyledLoadingBox><StyledP>Loading...  </StyledP></StyledLoadingBox>}
    {deleteSongError && <StyledErrorBox>{deleteSongError}</StyledErrorBox>}
<Flex justifyContent={'center'} textAlign={'center'}> <StyledHeading3>Do You Want To Delete {song.title} by {song.artist}?</StyledHeading3></Flex>
    <Flex flexDirection = 'row' justifyContent='space-between'>
        <SecondaryButton onClick={onClose}><StyledP>close</StyledP></SecondaryButton>
        <SecondaryButton onClick={(e) => handleDelete(e)}><StyledP>Delete</StyledP></SecondaryButton>
    </Flex>


</StyledBox>
  


    );

}
export default DeleteAlert;