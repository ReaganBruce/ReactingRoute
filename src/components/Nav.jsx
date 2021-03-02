import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <main className="container col-md-6">
        <section className="row">
          <div className="card col-md-12 shadow">
            <div className="card-body">
              <img
                className="mx-auto col-md-12"
                src="https://ghibliapi.herokuapp.com/images/logo.svg"
                alt="Studio Ghibli logo"
              />
              <div className="d-flex justify-content-center">
                <Link to={`/`} className="btn btn-info m-2">
                  Home
                </Link>
                <Link to={`/films`} className="btn btn-info m-2">
                  Films
                </Link>
                <Link to={`/people`} className="btn btn-info m-2">
                  People
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Nav;
