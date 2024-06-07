import React from 'react'
import NavBar from './NavBar'

const DeletePatient = () => {
  return (
    <div>
        <br />
        <NavBar/>
        <h1><center>DELETE PATIENT</center></h1>
        
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Patient Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">Delete Patient</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePatient