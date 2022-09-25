import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import '../App/Inputs.css';

//MUI
import { Slider } from "@mui/material";
import Button from '@mui/material/Button';

function Support ( ) {
    const [support, setSupport] = useState(0);

    const dispatch = useDispatch();
    const setSupportReducer = () => {
        if (support >= 1){   //if user has put in input, send to reducer
            console.log(support);
            const action = {type:'SET_SUPPORT', payload: Number(support)};
            dispatch(action);
            sendToNext();
            if (support < 3){     //if input is too low, send to reducer
                const action = {type:'SET_FLAGGED', payload: true}
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
        history.push('/comments');
    }

    return(
        <div className='inputs_section'>
            <h2>How well do you feel supported?</h2>
            <div className="input_slider">
                <Slider
                    defaultValue={2}
                    valueLabelDisplay="on"
                    step={1}
                    marks={true}
                    min={0}
                    max={5}
                    
                    value={support}
                    onChange={(e) => setSupport(e.target.value)}
                />
            </div>
            <div className="input_button">
                <Button onClick={setSupportReducer} variant="contained">Next</Button>
            </div>
        </div>

    )
}

export default Support;