import { useHistory } from 'react-router-dom';
import './Success.css';

//MUI
import Button from '@mui/material/Button';

function Success(){
    const history = useHistory();
    const sendToNext = () => {
        history.push('/feelings');
    }

    return(
        <div className='success_section'>
            <h2 className='submission_header'>Thank you for your submission!</h2>
            <div className="new_feedback_button">
                <Button onClick={sendToNext} variant="contained">Leave New Feedback</Button>
            </div>
        </div>
    )
}

export default Success;