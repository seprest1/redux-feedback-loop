import { useHistory } from 'react-router-dom';


function Home(){
    const history = useHistory();
    const sendToNext = () => {
    history.push('/feelings');
        }
    const sendToAdmin = () => {
        history.push('/admin')
    }
    
    return(
        <div>
            <h1>Feedback goes here!</h1>
            <button onClick={sendToAdmin}>Admin</button>
            <button onClick={sendToNext}>Student</button>
        </div>
    )
}

export default Home;