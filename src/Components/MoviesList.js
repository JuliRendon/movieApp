import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useMovies } from '../Hooks/useMovies';
import { SearchMovies } from '../services/searchMovies';
import { CurrentMovie } from './CurrentMovie';
import { Header } from './Header';
// import { Header } from './Header';
import { ListMovies } from './ListMovies';

export function MoviesList() {
  const [keyword, setKeyword] = useState({ value: '&page=1' });
  const { loading, movies } = useMovies(keyword);

  const [showMovie, setShowMovie] = useState({ show: false, movie: {} });
  const [handleSearch, setHandleSearch] = useState('');
  const [movieSearch, setMovieSearch] = useState({});

  const handleChange = (e) => {
    setHandleSearch(e.target.value);
  };

  useEffect(() => {
    if (handleSearch === null || handleSearch === '') return;
    SearchMovies(handleSearch).then((data) => {
      setMovieSearch(data);
    });
  }, [handleSearch]);

  const resetSearch = (e) => {
    setMovieSearch({});
    setHandleSearch('');
  };

  return loading ? (
    <div>Cargando...</div>
  ) : (
    <>
      <CurrentMovie
        currentMovie={showMovie}
        onClose={() => setShowMovie({ show: false, movie: {} })}
      />
      {keyword.value === '&page=1' ? <Header /> : ''}
      <form
        action=''
        className='relative w-6/12'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id='search-input'
          name='search'
          value={handleSearch}
          onChange={handleChange}
          type='text'
          placeholder='Que quieres ver...'
          className=' text-rojo h-6 border px-2 border-rojo w-full outline-none'
        />
        <FaSearch className='absolute right-3 top-1 text-rojo cursor-pointer' />
      </form>

      {movieSearch.results ? (
        <>
          <button onClick={resetSearch} className='bg-rojo px-3 text-white'>
            Volver
          </button>
          <ListMovies
            resetSearch={resetSearch}
            movies={movieSearch.results}
            setShowMovie={setShowMovie}
          />
        </>
      ) : (
        <>
          <ListMovies
            currentPage={movies.page}
            totalPages={movies.total_pages}
            movies={movies.results}
            setShowMovie={setShowMovie}
            setPage={setKeyword}
          />
        </>
      )}
    </>
  );
}
