import React from "react";
import '../App.css'
import Badge from 'react-bootstrap/Badge';
import AddMovies from "./AddMovie";
import Rating from '@mui/material/Rating';
function FilterMovie({ setFilterbytitle, setFilterbyrating, rating, addMovie }) {
    return (

        <div className="searchBar">
            <AddMovies addMovie={addMovie} />
            {/* Filtrage by Title */}
            <input
                className="inputsearch"
                type="text"
                placeholder="Search movie by title"
                onChange={(e) => setFilterbytitle(e.target.value)}
            />
            {/* Filtrage by Rating */}
            <Badge bg="secondary">
                <Rating
                    name="half-rating"
                    value={rating}

                    precision={0.5}
                    onChange={(_element, newValue) => {
                        setFilterbyrating(newValue);
                    }}
                />
            </Badge>
        </div>

    );
}

export default FilterMovie;