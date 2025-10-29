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
        <Container className="my-5 ">
          <Row className="g-0">
            <h4 className="mb-3">{this.props.saga}</h4>
            {this.state.gallery.map((card) => (
              <Col xs={6} md={3} xl={3} key={card.imdbID}>
                <Card className="border border-dark m-2 ">
                  <Card.Img variant="top" src={card.Poster} id="img-Card" />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default Gallery;
