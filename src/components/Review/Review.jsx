import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import './Review.css';

//MUI
import Button from '@mui/material/Button';

function Review(){
    useEffect(() => {
        setDefaultFlag();  //if feedback hasn't been flagged, set a key to default of false
      }, []);

    const feedback = useSelector(store => store.feedback);
        //defining keys for data object
        const feeling = feedback.feeling; 
        const understanding = feedback.understanding;
        const support = feedback.support;
        const comments = feedback.comments;
        const flagged = feedback.flagged;

    const setDefaultFlag = () => { 
        console.log(flagged);
        console.log(feedback);
        if (!(flagged)){ //if there's no flag status
            const action = {type:'SET_FLAGGED', payload: false}; //set status to false, default
            dispatch(action);
        }
    }
    

    const postFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling,
                understanding,
                support,
                comments,
                flagged
            }
        })
        .then(response => {
            console.log(response);
            sendToNext();
            clearData();
        })
        .catch(error => {
            console.log('Feedback failed to post', error);
        })
    };

    const history = useHistory();
    const sendToNext = () => {
        history.push('/success');
    }

    const dispatch = useDispatch();
    const clearData = () => {
        const action = {type: 'CLEAR_FEEDBACK'}
        console.log(feedback);
        dispatch(action);
    }

    return(
        <div className='review_section'>
            <h2>Review Your Feedback!</h2>
            <ul className='review_list'>
                <li>Feelings: {feeling}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li className="comment_review">Comments: {comments}</li>
            </ul>
            <div className="submit_button">
                    <Button onClick={postFeedback} variant="contained">Submit</Button>
            </div>
        </div>
    )
}

export default Review;