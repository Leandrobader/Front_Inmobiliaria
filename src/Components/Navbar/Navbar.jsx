import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PersonCircle } from "react-bootstrap-icons";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo/logo_inmobiliaria.png";

function App() {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" className="nav_bg">
      <Navbar.Brand href="#home" className="py-0">
        <img
          src={logo}
          width="55"
          height="55"
          className="d-inline-block align-top ms-5"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mx-auto justify-content-center">
        <NavLink to="/Home" className="links_style ms-4">INCIO</NavLink>
          <NavLink to="/Alquileres" className="links_style ms-4">ALQUILERES</NavLink>
          <NavLink to="/Ventas" className="links_style ms-4">VENTAS</NavLink>
          <NavLink to="/Contacto" className="links_style ms-4">CONTACTO</NavLink>
          <NavLink to="/Nosotros" className="links_style ms-4">NOSOTROS</NavLink>
        </Nav>
        <Nav>
          <NavLink href="#icon">
          <PersonCircle className="icon_link fs-3 mx-3" />          
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      {/* <div className="w-100">
        <Row className="w-100 mx-0">
          {["lg"].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className="fixed nav_bg py-0"
              data-bs-theme="dark"
              sticky="top"
              expanded={expanded}
            >
              <Container fluid>
                <Navbar.Brand>
                  <Nav.Link>
                    <Image
                      src="#"
                      width="60"
                      height="60"
                      alt="Logo"
                      className=""
                    />
                  </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header
                    closeButton
                    className="nav_bg"
                    data-bs-theme="dark"
                  >
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <NavLink to="/">
                        <Image
                          src={logo}
                          width="60"
                          height="60"
                          alt="Logo BurgerScript"
                        />
                      </NavLink>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="nav_bg">
                    <Nav className="justify-content-end flex-grow-1 pe-4 nav_toggle">
                      <NavLink
                        to=""
                        activeclassname="active"
                        className="nav_bg pe-4 pt-1"
                      >
                        Inicio
                      </NavLink>
                      <Nav.Link
                        to="/#destacados"
                        className="navbar_link pe-4 pb-1"
                      >
                        Destacados
                      </Nav.Link>
                      <NavLink to="" className="navbar_link pe-4 pb-1">
                        Burgers
                      </NavLink>
                      <NavLink to="" className="navbar_link pe-4 pb-1">
                        Contacto
                      </NavLink>
                      <NavLink to="" className="navbar_link pe-4 pb-1">
                        Nosotros
                      </NavLink>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </Row>
      </div> */}
    </>
  );
}

export default App;
