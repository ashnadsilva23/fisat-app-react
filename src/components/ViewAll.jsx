import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
  const [data, changeData] = useState(
    [
    
      ]

  )
  

  const fetchData = () => {
    axios.get("https://courseapplogix.onrender.com/getdata").then(

      (response) => {
        console.log(response.data)
        changeData(response.data)

      }

    ).catch(
      (error) => {
        console.log(error)
        alert(error.message)
      }


    ).finally()
  }
  useEffect(() => fetchData(), [])
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 align="center"><u>View Students </u></h1><br></br>

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"> ID </th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">college</th>
                  <th scope="col">DOB</th>
                  <th scope="col">course</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">v</th>



                </tr>
              </thead>
              <tbody>


          {data.map(
            (value,index)=>{
              return <tr>
                <td>{value._id}</td>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.college}</td>
                <td>{value.dob}</td>
                <td>{value.course}</td>
                <td>{value.mobile}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
                <td>{value.__v}</td>
              </tr>

            }
          )}
                
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll