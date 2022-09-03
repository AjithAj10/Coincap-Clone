import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    return (
        
             <Navbar bg="light" id='nav' expand="lg"  fixed="top">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Coins</Nav.Link>
            <Nav.Link href="#link">Exchanges</Nav.Link>
            <Nav.Link href="#home">Charts</Nav.Link>
            <Nav.Link href="#link">Swap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Container style={{marginLeft:'5rem', marginRight:'2rem'}}>
          <Navbar.Brand href="#home">
            <img
              src="https://coincap.io/static/logos/black.svg"
              width="80"
              height="50"
              className="d-inline-block align-top"
              alt="CoinCap logo"
            />
          </Navbar.Brand>
        </Container>
        <Container>

        <Nav className="me-auto" id='last'>
            <Nav.Link href="#link"><i className="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link href="#home"><i className="fa-solid fa-gear"></i></Nav.Link>
            <Button>Connect wallet</Button>
          </Nav>
        </Container>
        
      </Container>
    </Navbar>
      
    );
}

export default Header;