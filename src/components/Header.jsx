import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <Navbar style={{zIndex:1,height:'60px'}} className="bg-secondary w-100 position-fixed" >
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand  className='fs-3 fw-bolder '>
            <i className='fa-solid fa-cart-plus  me-3'></i>
            EasyCart
          </Navbar.Brand>
          </Link>
          <Nav.Link  ><Link style={{textDecoration:'none'}} to={'/help'} >Help</Link></Nav.Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
