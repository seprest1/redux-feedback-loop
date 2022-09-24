import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from 'react';


function Feeling(){
    const [feelings, setFeelings] = useState(0);

    const dispatch = useDispatch();
    const setFeelingReducer = () => {
        console.log(feelings);
        const action = {type:'SET_FEELINGS', payload: Number(feelings)};
        dispatch(action);
        sendToNext();
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
                value={feelings}
                onChange={(e) => setFeelings(e.target.value)}/>
            <button onClick={setFeelingReducer}>Next</button>
        </div>

    )
}

export default Feeling;