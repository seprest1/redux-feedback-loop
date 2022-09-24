import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
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
            setFlaggedWords(response.data)
        })
        .catch((error) => {
            console.log('Error getting flagged words from DB', error);
        });
    };

    //FUNCTION TO FLAG COMMENTS
    const searchComments = (arrayOfFlaggedWords, string) =>{
        for (let word of arrayOfFlaggedWords){
            const result = string.indexOf(word.name);     //search through string to find match

            if (result === -1){   //if there's no match
                const action = {type:'NOT_FLAGGED'}; // send to reducer
                dispatch(action);
                console.log('Word not found.');
            }
            else{   //match
                const action = {type:'SET_AS_FLAGGED'}; // send to reducer
                dispatch(action);
                console.log(`Comments are flagged for containing ${word}`);
            }
        }//end of loop
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/review');
        }

    const dispatch = useDispatch();
    const setCommentReducer = () => {
        const action = {type:'ADD_COMMENTS', payload: comments}; //send to reducer
        dispatch(action);
        searchComments(flaggedWords, comments); //search comments for flagged words
        sendToNext();
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