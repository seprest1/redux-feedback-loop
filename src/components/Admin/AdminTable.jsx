import axios from "axios";
import './Admin.css';

function AdminTable ({row, getFeedback}){
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

    return (
        <tr key={row.id} className={row.flagged === true ? 'flaggedRow' : 'normalRow'}>
            <td>{row.feeling}</td>
            <td>{row.understanding}</td>
            <td>{row.support}</td>
            <td>{row.comments}</td>
            <td><button onClick={deleteFeedback}>Delete</button></td>
        </tr>
    )
}

export default AdminTable;