function Admin(){
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
                        <th><button>Delete</button></th>
                    </tr>
                </thead>
                <tbody>
                    {/* //map through feedback */}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;