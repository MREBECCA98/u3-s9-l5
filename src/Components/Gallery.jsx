import Card from "react-bootstrap/Card";
import { Component } from "react";

class Gallery extends Component {
  state = {
    gallery: [],
  };
  fetchMovies = async () => {
    try {
      const response = await fetch(` http://www.omdbapi.com/?s=${this.props.saga}&apikey=e02ef249`);
      console.log("saga", this.props.saga);
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        this.setState({ gallery: data });
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
        <h1>titolo saga</h1>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
        </Card>
      </>
    );
  }
}
export default Gallery;
