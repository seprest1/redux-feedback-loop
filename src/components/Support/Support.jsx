import { useHistory } from 'react-router-dom';



function Support(){
    const history = useHistory();
    const sendToNext = () => {
        history.push('/comments');
    }

    return(
        <div>
            <h2>How well are you being supported?</h2>
            <input placeholder="Support?"/>
            <button onClick={sendToNext}>Next</button>
        </div>

    )
}

export default Support;