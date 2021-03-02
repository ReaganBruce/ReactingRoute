import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((response) => response.json())
      .then((people) => setPeople(people));
  }, []);

  return (
    <>
      {people.map((person) => (
        <div className="col-md-12" key={`people-card-${person.id}`}>
          <div className="card shadow my-2">
            <div className="card-body p-5">
              <h1 className="card-title">{person.name}</h1>
              <hr className="border border-primary"></hr>
              <Link to={`/people/${person.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default People;
