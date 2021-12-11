import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useMovies } from '../Hooks/useMovies';
import { useSearchs } from '../Hooks/useSearch';
import { CurrentMovie } from './CurrentMovie';
import { Header } from './Header';
import { ListMovies } from './ListMovies';

export function MoviesList() {
  const [keyword, setKeyword] = useState({ value: '&page=1' });
  const { loading, movies } = useMovies(keyword);

  const [showMovie, setShowMovie] = useState({ show: false, movie: {} });
  const { moviesSearch, handleSearch, setHandleSearch, setMoviesSearch } =
    useSearchs();

  const handleChange = (e) => {
    setHandleSearch(e.target.value);
  };

  const resetSearch = (e) => {
    setMoviesSearch({});
    setHandleSearch('');
  };

  return loading ? (
    <div>Cargando...</div>
  ) : (
    <>
      {showMovie.show ? (
        <CurrentMovie
          currentMovie={showMovie}
          onClose={(e) => setShowMovie({ show: false, movie: {} })}
        />
      ) : null}
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

      {moviesSearch.results ? (
        <>
          <button onClick={resetSearch} className='bg-rojo px-3 text-white'>
            Volver
          </button>
          <ListMovies
            resetSearch={resetSearch}
            movies={moviesSearch.results}
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
