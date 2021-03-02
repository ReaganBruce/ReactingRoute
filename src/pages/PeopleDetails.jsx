import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PeopleDetails = () => {
  const { peopleid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
      .then((response) => response.json())
      .then((person) => setPerson(person));
  }, [peopleid]);

  return (
    <div className="col-md-12">
      <div className="card shadow my-2">
        <div className="card-body p-5">
          <h3 className="card-title text-center"> {person?.name}</h3>
          <hr className="border border-primary"></hr>
          <h5 className="card-subtitle">Character's Age: {person?.age}</h5>
          <hr></hr>
          <h5 className="card-subtitle">Character's Gender: {person?.gender}</h5>
          <hr></hr>
          <h5 className=">card-subtitle">Character's Eye Color: {person?.eye_color}</h5>
          <hr></hr>
          <h5 className="card-subtitle">Character's Hair Color: {person?.hair_color}</h5>
          <hr></hr>
          <Link to={`/people`} className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;
