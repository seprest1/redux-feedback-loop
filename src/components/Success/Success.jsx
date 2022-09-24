import { useHistory } from 'react-router-dom';

function Success(){
    const history = useHistory();
    const sendToNext = () => {
        history.push('/feelings');
    }

    return(
        <div>
            <div>
                <h2>Feedback!</h2>
            </div>
            <div>
                <h2>Thank you!</h2>
                <button onClick={sendToNext}>Leave New Feedback</button>
            </div>
        </div>
    )
}

export default Success;