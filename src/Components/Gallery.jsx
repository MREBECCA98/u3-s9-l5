import Card from "react-bootstrap/Card";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    gallery: [],
  };
  fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.props.saga}&apikey=e02ef249`);
      console.log("saga", this.props.saga);
      if (response.ok) {
        const film = await response.json();
        console.log(film);
        this.setState({ gallery: film.Search });
        console.log("film", film.Search);
      }
    } catch (error) {
      console.error("Errore di rete: ", error);
    }
  };
  componentDidMount() {
    this.fetchMovies(); //chiamiamo la funzione-fetch GET
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>{this.props.saga}</h1>
              {gallery.map}{" "}
              <Card>
                <Card.Img variant="top" src={this.state.gallery[0].Poster} />
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Gallery;
