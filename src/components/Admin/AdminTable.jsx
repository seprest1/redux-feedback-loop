function AdminTable ({row}){
    console.log(row);

    return (
        <tr>
            <td>Feeling</td>
            <td>Comprehension</td>
            <td>Support</td>
            <td>Comments</td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default AdminTable;