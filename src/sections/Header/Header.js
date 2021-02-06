import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import Scrollspy from "react-scrollspy";


const Header = () => {
    return (
        <Navbar bg="light" expand="lg" style={{minHeight: "80px"}} fixed="top">
            

            <Container>
            <Navbar.Brand href="#">Nitish Bala</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Scrollspy 
                    items={["about","experience","projects","contact"]}
                    componentTag={Nav}
                    currentClassName="active"
                    offset={-200}
                    style={{marginLeft : "auto"}}>

                    
                        <Nav.Link active={false} href="#about">About Me</Nav.Link>
                        <Nav.Link active={false} href="#experience">Work Experence</Nav.Link>
                        <Nav.Link active={false} href="#projects">Projects</Nav.Link>
                        <Nav.Link active={false} href="#contact">Contact Me</Nav.Link>
                    
                </Scrollspy>
                
                </Navbar.Collapse>

            </Container>
                
        </Navbar>
    );
};

export default Header;