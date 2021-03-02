import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((films) => setFilms(films));
  }, []);

  return (
    <>
      {films.map((film) => (
        <div key={`films-card-${film.id}`} className="col-md-12">
          <div className="card shadow my-2">
            <div className="card-body p-5">
              <h1 className="card-title">{film.title}</h1>
              <hr className="border border-primary"></hr>
              <hr></hr>
              <p className="card-text">{film.description.substring(0, 175)}.......</p>
              <hr></hr>
              <Link to={`/films/${film.id}`} className="btn btn-primary">
                Click to continue reading
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Films;
