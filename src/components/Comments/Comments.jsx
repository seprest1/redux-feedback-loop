import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import './Comments.css';

//MUI
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';

function Comments ( ){
    const [comments, setComments] = useState('');
    const flaggedWords = useSelector(store => store.flaggedWords);

    //FUNCTION TO FLAG COMMENTS
    const searchComments = (arrayOfFlaggedWords, string) =>{
        let isFlagged = false;
        for (let {word} of arrayOfFlaggedWords){
            let result = string.indexOf(word);     //search through string to find match
            if (result !== -1){   //match
                console.log(`Comments are flagged for containing ${word}`);
                return isFlagged = true;
            }
        }//end of loop
        return isFlagged;
    }

    //SEND TO NEXT PAGE
    const history = useHistory();
    const sendToNext = () => {
        history.push('/review');
        }

    //SEND DATA TO REDUCER
    const dispatch = useDispatch();
    const setCommentReducer = () => {
        const action = {type:'ADD_COMMENTS', payload: comments}; //send to reducer
        dispatch(action);
        setFlag();
        setDefaultFlag();
        sendToNext(); //send to next page
    }
    const setFlag = () => {
        let isFlagged = searchComments(flaggedWords, comments);
        if (isFlagged === true){ //flagged
            const action = {type:'SET_FLAGGED', payload: true}; //send to reducer
            dispatch(action);
        }
    }
    const flagStatus = useSelector(cart => cart.feedback.flagged);
    console.log(flagStatus, 'hi please work');
    const setDefaultFlag = () => {
        if (!flagStatus){ //if there's no flag status
            const action = {type:'SET_FLAGGED', payload: false}; //set status to false, default
            dispatch(action);
        }
    }
    
    return(
        <div className='comment_section'>
            <h2>Any comments?</h2>
            <div className='comment_field'>
                <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Comments" 
                    variant="outlined" 
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}/>
            </div>
             <div className="comment_button">
                <Button onClick={setCommentReducer} variant="contained">Next</Button>
            </div>
        </div>

    )
}

export default Comments;