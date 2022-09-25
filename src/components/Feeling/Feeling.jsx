import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import '../App/Inputs.css';

//MUI
import { Slider } from "@mui/material";
import Button from '@mui/material/Button';
import swal from 'sweetalert';

function Feeling ( ) {
    const [feelings, setFeelings] = useState(0);

    const dispatch = useDispatch();
    const setFeelingReducer = () => {
        if (feelings >= 1){     //if user has put in input, send to reducer
            const action = {type:'SET_FEELINGS', payload: Number(feelings)};
            dispatch(action);
            sendToNext();
            if (feelings < 3){     //if input is too low, send to reducer
                const action = {type:'SET_FLAGGED', payload: true}
                dispatch(action);
                console.log('Feedback is flagged');
            }
        }
        else{
            swall("Please fill in a response!");
        }
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/understanding');
    }

    return(
        <div className="inputs_section">
            <h2>How are you feeling today?</h2>
            <div className="input_slider">
                <Slider
                    defaultValue={2}
                    valueLabelDisplay="on"
                    step={1}
                    marks={true}
                    min={0}
                    max={5}
                    
                    value={feelings}
                    onChange={(e) => setFeelings(e.target.value)}
                />
            </div>
            <div className="input_button">
                <Button onClick={setFeelingReducer} variant="contained">Next</Button>
            </div>
        </div>
        )
    }

export default Feeling;