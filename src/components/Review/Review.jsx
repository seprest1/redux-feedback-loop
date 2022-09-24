import { useHistory } from 'react-router-dom';



function Review(){
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
            <button onClick={sendToNext}>Submit</button>
        </div>
    )
}

export default Review;