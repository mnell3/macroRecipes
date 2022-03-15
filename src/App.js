import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Macro1 from "./pages/Macro1";
import Macro2 from "./pages/Macro2";
import Macro3 from "./pages/Macro3";
import Recipe from "./pages/recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//route renders out a component based on the URL

import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Nutrition</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/macro1">
                  <Nav.Link>Bodybuilding</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/macro2">
                  <Nav.Link>Maintenance</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/macro3">
                  <Nav.Link>Fat Loss</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/macro1" element={<Macro1 />} />
          <Route path="/macro2" element={<Macro2 />} />
          <Route path="/macro3" element={<Macro3 />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
