import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './About';
import Contact from './contact';
import Users from './users';
import CreateUser from './CreateUser';
import Home from './home';

function Navbars() {
  return (
      <Router>
    <> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link id="link" href="#Home"><Link to="/">Home</Link></Nav.Link>
        <Nav.Link id="link" href="#About"><Link to="/about">About Us</Link></Nav.Link>
        <Nav.Link id="link" href="#Contact"><Link to="/contact">Contact</Link></Nav.Link>
        <Nav.Link id="link" href="#Users"><Link to="/list">Users list</Link></Nav.Link>
        <Nav.Link id="link" href="#CreateUser"><Link to="/CreateUser">Create User</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
                Another action
         </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
                Separated link
        </NavDropdown.Item>
       </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
          <Route path="/CreateUser">
            <CreateUser />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    </>
      </Router>  
  );
}

export default Navbars;
