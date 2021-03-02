import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmDetails from "./pages/FilmDetails";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main className="container">
        <section className="row justify-content-center">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/films">
              <Films />
            </Route>
            <Route exact path="/films/:filmid">
              <FilmDetails />
            </Route>
            <Route exact path="/people">
              <People />
            </Route>
            <Route exact path="/people/:peopleid">
              <PeopleDetails />
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
