import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import shoppingcart from '../assets/shoppingcart.gif'
import giphy from '../assets/giphy.gif'
import amazonlogo from '../assets/amazonlogo.png'
import FlipkartLogo from '../assets/FlipkartLogo.png'
import image from '../assets/image.avif'
import ajio from '../assets/ajio.png'
import nykaa from '../assets/nykaa.png'
import {Form ,Row,Col, FloatingLabel, Button} from 'react-bootstrap'
import message from '../assets/message.gif'
import { ToastContainer, toast } from 'react-toastify';






const Landing = () => {

  const [messageDetails,setMessageDetails]= useState({
    fName:'',
    lName:'',
    phone:'',
    email:'',
    message:''

  })

  const sendMessage =(e)=>{
    console.log(messageDetails);
    
    e.preventDefault()
    const {fName,lName,phone,email,message} = messageDetails
    if(fName&&lName&&phone&&email&&message){
      alert("Message sent successfully!")
      setMessageDetails({...messageDetails,fName:'',lName:'',phone:'',email:'',message:''})

      
      
    }
    else{
      alert("Please fill the details to send message")
    }
    
  }
  
  return (
    <>
    <div style={{paddingTop:'100px'}} className='container  mb-5'>
     <div className="row align-items-center">
      <div className="col-lg-6">
        <h2 className='mb-5 text-start'>Welcome to <span className='fw-bolder fs-1 '>EasyCart</span></h2>
        <p style={{textAlign:'justify'} } className='text-white'>EasyCart  website is to store and access Ecommerce website links so that you can  save links  according to your taste and categorries accordings for best experience and easy access.This website helps you to keep a trackof your purchase history.<br/>
        This website makes  </p>
        <Link to={'/home'} className='btn btn-secondary'>Get Started</Link>
      </div>
      
      <div className="col-lg-5 ms-5">
        <img width={'350px'}  src={shoppingcart} alt="" />
      </div>
      
     </div>
     
     
     
    </div>
    <hr style={{marginTop:'125px'}} className='mb-5' />
    <marquee scrollamount="20">
    <div className="container mt-5">
     
      <div className="row align-items-center">
        <div className="col-lg-3">
          <a href="https://www.amazon.in" target='_blank'><img className='img-fluid '  src={amazonlogo} alt="" /></a>
        </div>
        <div className="col-lg-2">
        <a href="https://www.flipkart.in" target='_blank'><img className='img-fluid '  src={FlipkartLogo} alt="" /></a>
        </div>
        <div className="col-lg-2 ms-3">
        <a href="https://www.myntra.com" target='_blank'><img className='img-fluid '  src={image} alt="" /></a>

        </div>
        <div className="col-lg-2">
        <a href="https://www.ajio.com" target='_blank'><img className='img-fluid '  src={ajio} alt="" /></a>

        </div>
        <div className="col-lg-2">
        <a href="https://www.nykaa.com" target='_blank'><img className='img-fluid '  src={nykaa} alt="" /></a>

        </div>
       
      </div>
      
    </div>
    </marquee>
    <hr style={{marginTop:'110px'}} />
    <div>
      <h2 className='text-center mt-4'>Message Us</h2>
      <div className="container  mt-5 shadow border  bg-dark" style={{minHeight:'65vh'}}>
       <Form>
       <div className="d-flex">
          <div className="col-md-6">
            <div className="d-flex">
            <Form.Group className='me-2' controlId="validationCustom01">
          <Form.Label className='mt-3'>First name</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="First name"
            value={messageDetails.fName}
            onChange={e=>setMessageDetails({...messageDetails,fName:e.target.value})}
        
          />
          
        </Form.Group>
        <Form.Group className='ms-4 mb-4' controlId="validationCustom02">
          <Form.Label className='mt-3  '>Last name</Form.Label>
          <Form.Control
      
            type="text"
            placeholder="Last name"
            value={messageDetails.lName}
            onChange={e=>setMessageDetails({...messageDetails,lName:e.target.value})}
        
          />
          
        </Form.Group>
              
            </div>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={messageDetails.email} onChange={e=>setMessageDetails({...messageDetails,email:e.target.value})} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="" value={messageDetails.phone} onChange={e=>setMessageDetails({...messageDetails,phone:e.target.value})}/>
      </Form.Group>

          </div>
          <div className="col-md-6">
          <Form.Group className="mb-3 ms-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label > </Form.Label>
        <Form.Control value={messageDetails.message} onChange={e=>setMessageDetails({...messageDetails,message:e.target.value})} as="textarea" rows={9} placeholder='Type your message here...'/>
      </Form.Group>
     
          </div>
          
        </div>
        <div className='text-end'>
        <Button onClick={e=>sendMessage(e)} style={{width:'100px'}} className='btn btn-secondary text-center '>Send</Button>
        </div>
        
       </Form>
       </div>
    </div>
   
    </>
  )
}

export default Landing
