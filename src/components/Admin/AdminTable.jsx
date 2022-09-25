import axios from "axios";
import { RowDescriptionMessage } from "pg-protocol/dist/messages";
import { useState } from 'react';
import './Admin.css';

function AdminTable ({row, getFeedback}){
    //DELETE ROUTE
    const deleteFeedback = () => {
        axios({
            method: 'DELETE',
            url: `/feedback/${row.id}`
        })
        .then(response => {
            console.log('Deleted feedback');
            getFeedback();
        })
        .catch(error => {
            console.log('Error deleting feedback', error);
        });
    };

    //PUT ROUTE
    const flagFeedback = (row) => {
        axios({
            method: 'PUT',
            url: `/feedback/${row.id}`,
            data: {flagged: !row.flagged}
        })
        .then(response => {
            console.log('Switched feedback to:', !row.flagged);
            getFeedback();
        })
        .catch(error => {
            console.log('Error flagging feedback', error);
        });
    };

    return (
        <tr key={row.id} className={row.flagged === true ? "flaggedRow" : "normalRow"}>
            <td>{row.feeling}</td>
            <td>{row.understanding}</td>
            <td>{row.support}</td>
            <td>{row.comments}</td>
            <td><button onClick={() => flagFeedback(row)}>Flag</button></td>
            <td><button onClick={deleteFeedback}>Delete</button></td>
        </tr>
    )
}

export default AdminTable;