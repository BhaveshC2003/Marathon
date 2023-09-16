import React from 'react'
import '../../App.css'
import Header from '../../components/Header/Header'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function RegisterPresidents() {
  return (
    <div>
      <div className='App'>
        <Header />
    </div>
    
    <div style={{marginLeft:"2rem", marginTop:"2rem"}}>
    <button className='button' style={{fontSize:"1.5rem", padding:"0.5rem 1rem 0.5rem 1rem", borderRadius:"1.5rem"}}>
      Add Users +
    </button>
    </div>

    <div style={{marginLeft:"20rem", marginTop:"8rem", marginBottom:"10rem", fontSize:"2rem"}}>
    <section className='border p-4 text-center mb-4'>
    <MDBTable responsive>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Phone</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          </tr>
      </MDBTableBody>
    </MDBTable>
    </section>
    </div>

    </div>
  )
}

export default RegisterPresidents