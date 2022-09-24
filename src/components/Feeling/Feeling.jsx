import { useHistory } from "react-router-dom";


function Feeling(){
    const history = useHistory();
    const sendToNext = () => {
        history.push('/understanding');
    }
    return(
        <div>
            <h2>How are you feeling today?</h2>
            <input placeholder="Feeling?"/>
            <button onClick={sendToNext}>Next</button>
        </div>

    )
}

export default Feeling;