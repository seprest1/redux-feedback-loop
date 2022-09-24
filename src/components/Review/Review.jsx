import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review(){
    // let dataObject = {
    //     feeling: 4,
    //     understanding: 5,
    //     support: 3,
    //     comments: 'Hi I hope this works'
    // }

    const postFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: 
            {
                feeling: 4,
                understanding: 5,
                support: 3,
                comments: 'Hi I hope this works'
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
                <li>Feelings: 5</li>
                <li>Understanding: 5</li>
                <li>Support: 5</li>
                <li>Comments: I love this stuff!</li>
            </ul>
            <button onClick={postFeedback}>Submit</button>
        </div>
    )
}

export default Review;