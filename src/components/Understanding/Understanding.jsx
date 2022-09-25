import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import '../App/Inputs.css';

//MUI
import { Slider } from "@mui/material";
import Button from '@mui/material/Button';
import swal from 'sweetalert';

function Understanding ( ) {
    const [understanding, setUnderstanding] = useState(0);

    const dispatch = useDispatch();
    const setUnderstandingReducer = () => {
        if (understanding >= 1){    //if user has put in input, send to reducer
            console.log(understanding);
            const action = {type:'SET_UNDERSTANDING', payload: Number(understanding)};
            dispatch(action);
            sendToNext();
            if (understanding < 3){     //if input is too low, send to reducer
                const action = {type:'SET_FLAGGED', payload: true}
                dispatch(action);
                console.log('Feedback is flagged');
            }
        }
        else {
            swal("Please fill in a response!");
        }
    }

    const history = useHistory();
    const sendToNext = () => {
        history.push('/support');
    }

    return(
        <div className='inputs_section'>
            <h2>How well are you understanding the content?</h2>
                <div className="input_slider">
                    <Slider
                        defaultValue={2}
                        valueLabelDisplay="on"
                        step={1}
                        marks={true}
                        min={0}
                        max={5}
                        
                        value={understanding}
                        onChange={(e) => setUnderstanding(e.target.value)}
                    />
                </div>
                <div className="input_button">
                    <Button onClick={setUnderstandingReducer} variant="contained">Next</Button>
                </div>
        </div>
    )
}

export default Understanding;