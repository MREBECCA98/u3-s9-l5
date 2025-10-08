import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Row } from "react-bootstrap";
const MyNav2 = function () {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#0F0F0F" }}>
      <Container>
        <Nav className="  d-flex justify-content-center align-items-center gap-5 text-white">
          <Nav.Link href="#" className="text-white">
            <h2>TV Shows</h2>
          </Nav.Link>

          <Dropdown>
            <Dropdown.Toggle variant="dark" className="border border-white" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark ">
              <Dropdown.Item href="#">Show 1</Dropdown.Item>
              <Dropdown.Item href="#">Show2</Dropdown.Item>
              <Dropdown.Item href="#">SHow3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        {/* dropdown */}

        <Nav.Link href="#" className=" d-none d-md-none d-lg-block">
          <i className="bi bi-list text-white fs-1"></i>
          <i className="bi bi-three-dots text-white fs-1"></i>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
export default MyNav2;
