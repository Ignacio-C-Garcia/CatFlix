import Movie from "./Movie";
export default function Gallery({ movies }) {
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {movies.map((film) => {
          return (
            <div className="col">
              <Movie data={film}></Movie>;
            </div>
          );
        })}
      </div>
    </div>
  );
}
