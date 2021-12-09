import { MoviesList } from './Components/MoviesList';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MiLista } from './Components/MiLista';

function Home() {
  return (
    <>
      <Router>
        <div className='home flex flex-col justify-center items-center gap-y-6 pb-8'>
          <Routes>
            <Route path='/' element={<MoviesList />}></Route>
            <Route path='milista' element={<MiLista />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default Home;