export default function Movie({ data }) {
  return (
    <div className="card shadow-sm">
      <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}></img>

      <div className="card-body">
        <h6 className="card-title">{data.title}</h6>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  );
}
