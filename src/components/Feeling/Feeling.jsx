import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from 'react';


function Feeling ( ) {
    const [feelings, setFeelings] = useState(0);

    const dispatch = useDispatch();
    const setFeelingReducer = () => {
        if (feelings >= 1){     //if user has put in input, send to reducer
            const action = {type:'SET_FEELINGS', payload: Number(feelings)};
            dispatch(action);
            sendToNext();
            if (feelings < 3){     //if input is too low, send to reducer
                const action = {type:'SET_AS_FLAGGED'}
                dispatch(action);
                console.log('Feedback is flagged');
            }
        }
        else{
            alert('Please fill in a response.');
        }
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/understanding');
    }

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <input 
                type="number"
                min="0"
                max="5"
                placeholder="Feeling?"
                required={true}
                value={feelings}
                onChange={(e) => setFeelings(e.target.value)}/>
            <button onClick={setFeelingReducer}>Next</button>
        </div>

    )
}

export default Feeling;