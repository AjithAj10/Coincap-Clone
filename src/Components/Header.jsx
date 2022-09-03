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
        <Container style={{marginLeft:'4rem'}}>
          <Navbar.Brand href="#home">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CRq-3-3Q7Qw0O3B0qzjb1gHaDh%26pid%3DApi&f=1"
              width="115"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
        <Container>

        <Nav className="me-auto">
            <Nav.Link href="#link"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link href="#home"><i class="fa-solid fa-gear"></i></Nav.Link>
            <Button>Connect wallet</Button>
          </Nav>
        </Container>
        
      </Container>
    </Navbar>
      
    );
}

export default Header;