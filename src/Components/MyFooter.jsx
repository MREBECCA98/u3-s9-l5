import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer>
      <Container className="d-flex justify-content-center gap-3">
        <Row>
          <Col xs={3}>
            <ul className="d-flex flex-column g-5">
              <li className="d-flex ">
                <a className="text-decoration-none text-secondary " href="#">
                  <i className="bi bi-facebook me-2"></i>
                  <i className="bi bi-instagram me-2"></i>
                  <i className="bi bi-twitter me-2"></i>
                  <i className="bi bi-youtube me-2"></i>
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Audio and Subtitles
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Media Center
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Privacy
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="d-flex flex-column">
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Audio Description
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Investor Relations
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Legal Notices
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="d-flex flex-column">
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Help Center
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Jobs
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="d-flex flex-column">
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Gift Cards
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Terms of Use
                </a>
              </li>
              <li className="d-flex">
                <a className="text-decoration-none text-secondary" href="#">
                  Corporate Information
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
