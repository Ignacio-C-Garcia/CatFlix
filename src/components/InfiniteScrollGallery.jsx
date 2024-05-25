import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from "./Movie";

const InfiniteScrollGallery = ({ movies, setMovies }) => {
  const [index, setIndex] = useState(1);
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTRkOTA0OTZiYzA5MjhlNzk4MjhhNTAwMDViOGU1NiIsInN1YiI6IjY2NDU0N2ZkZjJkMTkxNDRmMmNmOWM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DMi3d7QMooe-7veFsw5AKkCRZjNlsyJHD4Lu2vkP3f8",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${index}&sort_by=popularity.desc`,
      options
    );
    const res = await response.json();
    setMovies([...movies, ...res.results]);
    setIndex((prevIndex) => prevIndex + 1);
    console.log(res);
  };
  useEffect(() => {
    fetchData();
    return;
  }, []);
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchData}
      hasMore={true}
      loader={"Loading..."}
    >
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">
          {movies.map((item, i) => {
            return (
              <div key={i} className="col">
                <Movie data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollGallery;
