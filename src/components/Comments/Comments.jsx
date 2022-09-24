import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Comments(){
    useEffect(() => {
        getWords();
      }, []);

    const [comments, setComments] = useState('');
    const [flaggedWords, setFlaggedWords] = useState([]);

    //GET FLAGGED WORDS FROM DB
    const getWords = () => {
        axios({
            method: 'GET',
            url: '/feedback/flaggedwords'
        })
        .then((response) => {
            console.log(response.data);
            setFlaggedWords(response.data);
        })
        .catch((error) => {
            console.log('Error getting flagged words from DB', error);
        });
    };

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
        <div>
            <h2>Any comments that you want to leave?</h2>
            <input 
                type="text"
                placeholder="Comments?"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                />
            <button onClick={setCommentReducer}>Next</button>
        </div>

    )
}

export default Comments;