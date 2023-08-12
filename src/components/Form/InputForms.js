function InputForms() {
    return ( 
        <>
            <div className="mb-3">
                <label htmlFor="formGroupStudentName" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="formGroupStudentName" placeholder="Please Enter Student Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupStudentRollNumber" className="form-label">Student Roll Number</label>
                <input type="text" className="form-control" id="formGroupStudentRollNumber" placeholder="Please Enter Student Roll Number" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupStudentCity" className="form-label">Student City</label>
                <input type="text" className="form-control" id="formGroupStudentCity" placeholder="Please Enter Student City" />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </>
    );
}

export default InputForms;