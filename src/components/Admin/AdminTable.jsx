import axios from "axios";
import './Admin.css';

//MUI
import Button from '@mui/material/Button';
import FlagIcon from '@mui/icons-material/Flag';
import ClearIcon from '@mui/icons-material/Clear';


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
            <td><Button onClick={() => flagFeedback(row)} color="secondary"><FlagIcon fontSize="small"/></Button></td>
            <td><Button onClick={deleteFeedback} color="secondary" size="small"><ClearIcon fontSize="small"/></Button></td>
        </tr>
    )
}

export default AdminTable;