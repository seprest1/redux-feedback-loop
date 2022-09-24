import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Review(){
    const feedback = useSelector(store => store.feedback);
        const feeling = feedback.feeling; 
        const understanding = feedback.understanding;
        const support = feedback.support;
        const comments = feedback.comments;

    const postFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling,
                understanding,
                support,
                comments
            }
        })
        .then(response => {
            console.log(response);
            sendToNext();
        })
        .catch(error => {
            console.log('Feedback failed to post', error);
        })
    };

    const history = useHistory();
    const sendToNext = () => {
        history.push('/success');
    }

    return(
        <div>
            <h2>Review Your Feedback!</h2>
            <ul>
                <li>Feelings: {feeling}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments}</li>
            </ul>
            <button onClick={postFeedback}>Submit</button>
        </div>
    )
}

export default Review;