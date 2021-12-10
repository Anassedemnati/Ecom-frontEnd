import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
    return (
        <header>
            
  <Navbar collapseOnSelect  bg="primary" variant="dark" >
    <Container>
      <LinkContainer to='/'>
      <Navbar.Brand >ADSHOP</Navbar.Brand>
      </LinkContainer>
    
    <Nav className="me-auto">
    <LinkContainer to='/'>
      <Nav.Link >Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/cart'>
      <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/login'>
      <Nav.Link  ><i className="fas fa-user"></i>Login</Nav.Link>
      </LinkContainer>
    </Nav>
    </Container>
  </Navbar>
  <br />
 

 

        </header>
    )
}

export default Header
