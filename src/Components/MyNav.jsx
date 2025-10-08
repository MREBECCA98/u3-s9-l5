import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";

const MyNav = function (props) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#0F0F0F" }} className="mt-3">
      <Container>
        <Navbar.Brand href="#">{props.img}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" text-white">
            <Nav.Link as={Link} to={"/"} className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"tv-show"} className="text-white">
              TV Show
            </Nav.Link>
          </Nav>

          {/* dropdown */}
          <Nav className="ms-auto  ">
            <Nav.Link href="#" className="text-white">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              KIDS
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>

            <NavDropdown menuVariant="dark" title={props.imgProfile} id="basic-nav-dropdown" className="ms-auto d-none d-md-none d-lg-block ">
              <NavDropdown.Item href="#" className="text-white">
                Your Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-white">
                Kids Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
