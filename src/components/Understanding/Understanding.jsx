import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';

function Understanding(){
    const [understanding, setUnderstanding] = useState(0);

    const dispatch = useDispatch();
    const setUnderstandingReducer = () => {
        console.log(understanding);
        const action = {type:'SET_UNDERSTANDING', payload: Number(understanding)};
        dispatch(action);
        sendToNext();
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/support');
    }

    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <input 
                type="number"
                min="0"
                max="5"
                placeholder="Understanding?"
                value={understanding}
                onChange={(e) => setUnderstanding(e.target.value)}/>
            <button onClick={setUnderstandingReducer}>Next</button>
        </div>

    )
}

export default Understanding;