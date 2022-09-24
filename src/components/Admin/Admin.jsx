import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTable from "./AdminTable";

function Admin(){
    useEffect(() => {
        getFeedback();
      }, []);

    const [feedback, setFeedback] = useState([]);

    const getFeedback = () => {
        axios({
            method: 'GET', 
            url: '/admin'
        })
        .then((response) => {
            console.log(response.data);
            setFeedback(response.data);
        })
        .catch((error) => {
            console.log('Error in getting feedback', error)
        });
    };

    console.log(feedback);
    
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
                    <AdminTable/>
                   {/* {feedback.map(row => <AdminTable row={row}/>)} */}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;