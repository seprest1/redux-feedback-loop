import { useHistory } from 'react-router-dom';

function Comments(){
    const history = useHistory();
    const sendToNext = () => {
        history.push('/review');
        }

    return(
        <div>
            <h2>Any comments that you want to leave?</h2>
            <input placeholder="Comments?"/>
            <button onClick={sendToNext}>Next</button>
        </div>

    )
}

export default Comments;