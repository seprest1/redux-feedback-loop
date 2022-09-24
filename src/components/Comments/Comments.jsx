import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';

function Comments(){
    const [comments, setComments] = useState('');

    const dispatch = useDispatch();
    const setCommentReducer = () => {
        console.log(comments);
        const action = {type:'ADD_COMMENTS', payload: comments};
        dispatch(action);
        sendToNext();
        if (support < 3){
            const action = {type:'SET_FLAG'};
            dispatch(action);
        }
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/review');
        }

    //FUNCTION TO FLAG COMMENTS
    const searchComments = (arrayOfFlaggedWords, string) =>{
        for (flaggedWord of arrayOfFlaggedWords){
            const result = string.indexOf(flaggedWord);     //search through string to find match

            if (result === -1){   //if there's no match
                console.log('clean');
                return false;
            }
            else{   //match
                console.log(flaggedWord, 'was found!');
                return true;
            }
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