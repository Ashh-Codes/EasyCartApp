import React from 'react'
import { Button,Modal ,Form,FloatingLabel} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{minHeight:'300px'}} className='container  mt-5 w-100'>
    <div className="d-flex row justify-content-center">
       <div className="col-md-5">
        <h5><i className='fa-solid fa-cart-plus  me-3'></i>EasyCart</h5>
        <p className='mt-4 text-white'>EasyCart  app is to store Ecommerce website links .<br/> so that you want to save according to your taste and categorries accordings for best experience and easy access.</p>

       </div>
       <div className="col-md-2"> <h5>Links</h5>
       <div className='d-flex flex-column justify-content-center'>
       <Link to={'/home'} style={{textDecoration:'none'}} className=' text-white' >Home</Link>
       <a className='text-decoration-none text-white' href="">Category</a>
       <Link to={'/history'} style={{textDecoration:'none'}} className=' text-white' >History</Link>
       <a className='text-decoration-none text-white' href="">List</a>
       </div>
       </div>
       <div className="col-md-2"> <h5>Guides</h5>
       <div className='d-flex flex-column justify-content-center'>
       <a className='text-decoration-none text-white' href="">React</a>
       <a className='text-decoration-none text-white' href="">React Bootstrap</a>
       <a className='text-decoration-none text-white' href="">Router</a>
       </div>
       </div>
       <div className="col-md-3"><h5>Contact Us</h5>
       <div className='d-flex'>
  <Form>
         
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
        <Form.Control style={{width:'200px'}} type="email" placeholder="name@example.com" />
      </Form.Group>
  </Form>
  <a href="https://mail.google.com/mail/u/0/?hl=en#inbox" target='_blank'><button style={{height:'40px'}} className='btn btn-secondary ms-3 '><i class="fa-solid fa-arrow-right"></i></button></a>

       </div>
       <div className='d-flex justify-content-between'>
       <a  className='text-decoration-none' href="https://github.com/Ashh-Codes" target='_blank'><i class="fa-brands fa-github"></i></a>
      <a  className='text-decoration-none' href=""> <i class="fa-brands fa-facebook"></i></a>
      <a  className='text-decoration-none' href="">  <i class="fa-brands fa-instagram"></i></a>
      <a  className='text-decoration-none' href=""> <i class="fa-brands fa-twitter"></i></a>
      <a  className='text-decoration-none' href=""> <i class="fa-brands fa-linkedin"></i></a>
    
      
       
       
       
       </div>
       </div>
       
    </div>

    <div className='text-center mt-5'>copyright @copy;  May 2024 @reg; EasyCart</div>
  
</div>
  )
}

export default Footer
