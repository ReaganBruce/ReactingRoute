import React from "react";

const Home = () => {
  return (
    <>
      <main className="col-md-12">
        <section className="row justify-content-center mt-5">
          <div className="card col-md-6 text-center shadow my-3">
            <div className="card-body">
              <h2 className="card-title text-center"> Studio Ghibli API LAB</h2>
              <p className="card-text text-muted">
                Studio Ghibli Inc. is a Japanese animation film studio headquartered in Koganei,
                Tokyo. The studio is best known for its animated feature films, and has also
                produced several short films, television commercials, and one television film.
              </p>
              <a href="mailto: ReaganBruceBirmingham@gmail.com">
                If you like what you see, let's talk!
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
