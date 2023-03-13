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
        <div className="main-searchbar-flex">
          <div className="search-text">find by name or phone_number</div>
                             
       </div>             
        </>
    )
}
export default Searchbar;