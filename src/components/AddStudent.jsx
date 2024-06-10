import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const[data,setData]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "course":"",
            "mobile":"",
            "dob":"",
            "email":"",
            "address":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})


    }
    const readValue=()=>
        {
            console.log(data)
            axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("success fully added")
                        
                    } else {
                        alert("failed")
                        
                    }
                }
            ).catch().finally()
        }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1 align="center"><u>Register</u></h1><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input type="text" className="form-control"name='lastname' value={data.lastname} onChange={inputHandler} />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">college</label>
                            <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">dob</label>
                            <input type="date" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course</label>
                            <select id="" className="form-control" name='course' value={data.course} onChange={inputHandler}>
                                <option value="Btech">Btech</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">phone no</label>
                            <input type="text" className="form-control"name='mobile' value={data.mobile} onChange={inputHandler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="email"  id="" className="form-control" name='email' value={data.email} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address </label>
                        <textarea  id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent