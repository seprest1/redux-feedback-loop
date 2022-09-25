import { useHistory } from 'react-router-dom';
import './Home.css';

//MUI
import * as React from 'react';
import Button from '@mui/material/Button';

function Home(){
    const history = useHistory();
    const sendToNext = () => {
    history.push('/feelings');
        }
    const sendToAdmin = () => {
        history.push('/admin')
    }

    return(
        <div className='home_section'>
            <div className='welcome'>
                <h2 className='welcome_back'>Welcome Back!</h2>
            </div>
            <div className='buttons'>
                <Button onClick={sendToAdmin} variant="contained" className="actual_buttons">Admin</Button>
                <Button onClick={sendToNext} variant="contained" className="actual_buttons">Student</Button>
            </div>
        </div>
    )
}





export default Home;