import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [

            { "sno":1,"patientname": "san", "Regno": 2501, "doctor": "xyz" },
            { "sno":2,"patientname": "san", "Regno": 2501, "doctor": "xyz" },
            { "sno":3,"patientname": "san", "Regno": 2501, "doctor": "xyz" },
            { "sno":4,"patientname": "san", "Regno": 2501, "doctor": "xyz" }

        ]
    )
    return (
        <div>
            <NavBar />
            <h1><center>PATIENT RECORDS</center></h1>
            <div className="container">
                <div className="row g-3">
                    {data.map(
                        (value, index) => {
                            return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sno{<value.sno/>}</th>
                                        <th scope="col">Patient Name{<value.patientname/>}</th>
                                        <th scope="col">Reg no{<value.Regno/>}</th>
                                        <th scope="col">Doctor{<value.doctor/>}</th>
                            

                                    </tr>
                                </thead>
                               
                            </table>
                        </div>
                        }
                    )}
                    
        </div>
                         
            </div>
        </div>
    )
}

export default ViewAll