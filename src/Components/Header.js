import { useMoviesHeader } from '../Hooks/useMoviesHeader';
import Menu from './Menu';

export function Header({ setShowMovie }) {
  const { loading, moviesHeader } = useMoviesHeader();

  if (moviesHeader > 0) {
    moviesHeader.sort((a, b) => {
      if (a.vote_count > b.vote_count) return -1;
      if (a.vote_count < b.vote_count) return 1;
      return 0;
    });
  }
  const estilo = {
    classHeader:
      'Header w-10/12 flex flex-col justify-center items-center pb-6 border-b-2 border-rojo gap-4',
    classRecomended:
      'Header-Recomended w-10/12 flex flex-row place-content-center h-96 justify-around overflow-hidden cursor-pointer',
    classRecomendedFull:
      'Recomende-full relative flex flex-row  justify-center w-max max-w-xs',
    img1: 'object-cover h-full w-full',
    tituloPelicula:
      'absolute bottom-2 w-10/12 text-center p-1 bg-rojo bg-opacity-60 text-white',
    headergrouprecomended: 'hidden sm:w-2/3 sm:flex sm:flex-row sm:flex-wrap',
    recomended4: 'relative flex justify-center w-1/2 max-w-lg h-1/2',
  };

  return loading ? (
    <>
      <Menu />
      <div>Cargando...</div>
    </>
  ) : (
    <header className={estilo.classHeader}>
      <Menu />
      <div className={estilo.classRecomended}>
        <div
          className={estilo.classRecomendedFull}
          onClick={() => {
            setShowMovie({ show: true, movie: moviesHeader[0] });
          }}
        >
          <img
            className={estilo.img1}
            src={`https://image.tmdb.org/t/p/w300${moviesHeader[0].poster_path}`}
            alt='Recomendadas'
          />
          <div className={estilo.tituloPelicula}>
            <h3 className='font-bold text-white'> {moviesHeader[0].title}</h3>
          </div>
        </div>
        <div className={estilo.headergrouprecomended}>
          <div
            className={estilo.recomended4}
            onClick={() => {
              setShowMovie({ show: true, movie: moviesHeader[1] });
            }}
          >
            <img
              className='object-cover h-full w-full'
              src={`https://image.tmdb.org/t/p/w500${moviesHeader[1].backdrop_path}`}
              alt='Recomendadas'
            />
            <div className={estilo.tituloPelicula}>
              <h3 className='font-bold'> {moviesHeader[1].title}</h3>
            </div>
          </div>
          <div
            className={estilo.recomended4}
            onClick={() => {
              setShowMovie({ show: true, movie: moviesHeader[2] });
            }}
          >
            <img
              className='object-cover h-full w-full'
              src={`https://image.tmdb.org/t/p/w500${moviesHeader[2].backdrop_path}`}
              alt='Recomendadas'
            />
            <div className={estilo.tituloPelicula}>
              <h3 className='font-bold'> {moviesHeader[2].title}</h3>
            </div>
          </div>
          <div
            className={estilo.recomended4}
            onClick={() => {
              setShowMovie({ show: true, movie: moviesHeader[3] });
            }}
          >
            <img
              className='object-cover h-full w-full'
              src={`https://image.tmdb.org/t/p/w500${moviesHeader[3].backdrop_path}`}
              alt='Recomendadas'
            />
            <div className={estilo.tituloPelicula}>
              <h3 className='font-bold'> {moviesHeader[3].title}</h3>
            </div>
          </div>
          <div
            className={estilo.recomended4}
            onClick={() => {
              setShowMovie({ show: true, movie: moviesHeader[4] });
            }}
          >
            <img
              className='object-cover h-full w-full'
              src={`https://image.tmdb.org/t/p/w500${moviesHeader[4].backdrop_path}`}
              alt='Recomendadas'
            />
            <div className={estilo.tituloPelicula}>
              <h3 className='font-bold'> {moviesHeader[4].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
