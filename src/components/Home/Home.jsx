import { useHistory } from 'react-router-dom';


function Home(){
    const history = useHistory();
    const sendToNext = () => {
    history.push('/feeling');
    }
    
    return(
        <div>
            <h1>Feedback goes here!</h1>
            <button onClick={sendToNext}>Click here</button>
        </div>
    )
}

export default Home;