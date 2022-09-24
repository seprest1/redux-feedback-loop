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
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/review');
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