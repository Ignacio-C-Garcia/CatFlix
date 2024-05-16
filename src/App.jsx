import Header from "./components/Header";
import Gallery from "./components/Gallery";
import "./css/App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([1, 2, 3, 4, 5]);
  const getMovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.TMDB_token,
      },
    };

    try {
      const fetchResponse = fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const response = fetchResponse.json();
      setMovies(response.results);
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(getMovies, []);
  return (
    <>
      <Header></Header>
      <Gallery {...{ movies }}></Gallery>
    </>
  );
}

export default App;
