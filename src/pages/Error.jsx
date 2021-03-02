import React from "react";

const Error = () => {
  return (
    <main className="col-md-6 card shadow my-5">
      <section className="card-body">
        <h1 className=" card-title text-center">
          Whoops, looks like you went to an unauthorized location!
        </h1>
        <img
          src="https://64.media.tumblr.com/8efefed74e2eed5cd6ef19b74995a3fd/tumblr_n1t87bGOBU1soicrco1_400.jpg"
          className="col-md-12"
          alt="Studio Ghibli Error Message"
        ></img>
      </section>
    </main>
  );
};

export default Error;
