import InputForms from "../Form/InputForms";
function Home() {
    return ( 
        <>
            <div className="container mb-3">
                <h1>Student Table </h1>
                <table className="table table-striped table-bordered table-hover table-sm">
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Student Name </th>
                            <th> Roll No. </th>
                            <th> City </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-success">
                            <td> 1 </td>
                            <td> Kundan Kumar </td>
                            <td> 104 </td>
                            <td> Sheikhpura </td>
                            <td> 
                                <button type="button" className="btn btn-primary">Edit</button>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container">
                <InputForms />
            </div>
            
        </>
    );
}

export default Home;