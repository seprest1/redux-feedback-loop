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
                <h2>Welcome Back!</h2>
                <h3>I am a...</h3>
            </div>
            <Button onClick={sendToAdmin} variant="contained" color="secondary" className='admin'>Admin</Button>
            <Button onClick={sendToNext} variant="contained" className='student'>Student</Button>
        </div>
    )
}





export default Home;