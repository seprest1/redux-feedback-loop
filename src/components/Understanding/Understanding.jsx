import { useHistory } from 'react-router-dom';

function Understanding(){
    const history = useHistory();
    const sendToNext = () => {
        history.push('/support');
    }

    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <input placeholder="Understanding?"/>
            <button onClick={sendToNext}>Next</button>
        </div>

    )
}

export default Understanding;