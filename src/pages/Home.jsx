import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='container'>
          <div className="row" style={{minHeight:"100vh"}}>
            <div className="ban col-lg-5 d-flex flex-column justify-content-center">
              <div data-aos="zoom-out">
                <h1 style={{fontSize:"80px",color:"skyblue"}} className='m-0 ps-1'>EDU-WORLD</h1>
                <p style={{fontSize:"30px",color:"orangered"}} className='ms-2'>“Education is the most powerful weapon which you can use to change the world.” —Nelson Mandela</p>
                <p className='ms-2'>New Student? Click here to register</p>
                <Link to={'/register'}><button style={{width:"120px"}} className='btn btn-success ms-2'>Register</button></Link>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-center align-items-center">
              <img className='img-fluid w-100' src="https://a0.anyrgb.com/pngimg/984/1628/cartoon-college-students-student-group-student-school-college-students-social-group-deposit-fun-community-public-relations-conversation.png" alt="" />
            </div> 
          </div>
        </div> 
    </div>
  )
}

export default Home