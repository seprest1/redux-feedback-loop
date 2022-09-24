import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTable from "./AdminTable";
import './Admin.css';

function Admin(){
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
        <div>
            <div>
                <h2>Feedback Results!</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {feedback.map(row => <AdminTable key={row.id} row={row} getFeedback={getFeedback}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;