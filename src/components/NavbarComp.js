import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Forms from './Forms'; 
import Details from './Details';
import News from './News';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Student-application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/form"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/details"}>Details</Nav.Link>
                    <Nav.Link as={Link} to={"/News"}>News</Nav.Link>

                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Switch>   
                <Route path="/News">
                <News/>
                </Route>
                <Route path="/Details/:id">
                <Details />
                </Route>
                <Route path="/">
                <Forms/>
                </Route>
                </Switch>
            </div>
            </Router>
        )
    }
}
