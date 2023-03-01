import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Profile from "./Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const Searchbar=()=>{
    return(
        <>
        <div className="searchbar">
           <Container>
             <Navbar expand="lg" variant="light" bg="light" style={{ width:1367, borderBottom: "solid" }}>
              <Container >
             <Navbar.Brand href="#" >
                <h5 style={{ color:"gray"}}>Find by Name or Phone Number</h5>
                <div className="Dropdown" >
                <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Gender"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Female</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Male
              </NavDropdown.Item>
            
            </NavDropdown>
          </Nav>
                             
                </div>
             </Navbar.Brand>
             </Container>
            </Navbar>
         </Container>
         </div>      
        </>
    )
}
export default Searchbar;