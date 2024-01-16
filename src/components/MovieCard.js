import React from "react";
import '../card.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FaStar } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';

function MovieCardView(props) {
  const movie = props.movie;

  return (
    /* Movie Card */
    <Card className="custom-movie-card">
      <div className="card-image-container">
        <img className="card-img-top" src={movie.posterURL} alt={movie.title} />
        <div className="overlay">
          <BiCameraMovie className="movie-icon" />
        </div>
      </div>
      <Card.Body>
        <Card.Title className="text-success">{movie.title}</Card.Title>
        <Card.Text className="description-color">
          {movie.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="rating-section">
          <h6>Rating</h6>
          <Badge bg="secondary" className="rating-badge">
            <FaStar className="star-icon" />
            {movie.rating}
          </Badge>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default MovieCardView;
