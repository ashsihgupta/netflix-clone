import React from "react";
import "./App.css";
import Row from "./Row.js";
import Banner from "./Banner.js";
import request from "./requests.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchCommedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
