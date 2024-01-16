import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'
import MovieCardView from './MovieCard';
function MovieslistView({ moviesList, titlefilter, ratingfilter }) {
    return (
        <Row xs={2} md={4} className="g-4">
            
            {moviesList.filter(
                (movieElement) =>
                    movieElement.title?.toLowerCase()
                        .includes(titlefilter?.toLowerCase().trim()) &&
                    movieElement.rating >= ratingfilter
            ).map((movieElement, idx) => (
                <Col key={idx}>
                    <MovieCardView movie={movieElement} />
                </Col>
            ))}
            
        </Row>
    );
}

export default MovieslistView;