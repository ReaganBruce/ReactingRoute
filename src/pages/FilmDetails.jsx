import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const FilmDetails = () => {
  const { filmid } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((response) => response.json())
      .then((film) => setFilm(film));
  }, [filmid]);

  return (
    <div className="col-md-12">
      <div className="card shadow my-2">
        <div className="card-body p-5">
          <h4 className="card-title">{film?.title}</h4>
          <hr className="border border-primary"></hr>
          <p className="card-subtitle">Film Director: {film?.director}</p>
          <hr></hr>
          <p className="card-subtitle">Film Producer: {film?.producer}</p>
          <hr></hr>
          <p className="card-text">Film Release Date: {film?.release_date}</p>
          <p className="card-text">{film?.description}</p>
          <hr></hr>
          <Link to={`/films`} className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
