import Pagination from './Pagination';

export function ListMovies({
  movies,
  setShowMovie,
  setPage,
  totalPages,
  currentPage,
}) {
  return movies.length && movies.length === 0 ? (
    <div>No hay resultados..</div>
  ) : (
    <main
      id='list'
      className='w-10/12  flex flex-col justify-center items-center gap-4'
    >
      <Pagination
        setPage={setPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <ul className='moviegrid text-base mt-2'>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className='cursor-pointer'
            onClick={() => {
              setShowMovie({ show: true, movie: movie });
            }}
          >
            <div className='shadow_movie relative w-40 h-60 flex justify-center'>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_title}
                />
              ) : (
                <img src='./img/img-not-found.jpg' alt={movie.original_title} />
              )}
              <div className='release_date'>
                <p className='p_release_date text-base'>{movie.release_date}</p>
              </div>
            </div>
            <h2 className='pt-2'>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
