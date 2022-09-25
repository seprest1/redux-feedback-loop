import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

//COMPONENTS
import AdminTable from "./AdminTable";
import Flagwords from './FlagWords/Flagwords';

function Admin ({getWords}){
    useEffect(() => {
        getFeedback();
      }, []);

    const [feedback, setFeedback] = useState([]);

    const getFeedback = () => {
        axios({
            method: 'GET', 
            url: '/feedback/admin'
        })
        .then((response) => {
            console.log(response.data);
            setFeedback(response.data);
        })
        .catch((error) => {
            console.log('Error in getting feedback', error)
        });
    };
  
    return(
        <div className='admin_body'>
            <div className='flag_word_container'>
                <Flagwords getWords={getWords}/>
            </div>
            <div className='feedback_header'>
                <h2>Feedback Results</h2>
            </div>
            <div className='feedback_results'>
                <table className='feedback_table'>
                    <thead className='thead'>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flag</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='table_body'>
                    {feedback.map(row => <AdminTable key={row.id} row={row} getFeedback={getFeedback}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin;