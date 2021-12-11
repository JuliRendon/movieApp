import { MoviesList } from './Components/MoviesList';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MiLista } from './Components/MiLista';
import { Header } from './Components/Header';
import Menu from './Components/Menu';

function Home() {
  return (
    <>
      <div className='home flex flex-col justify-center items-center gap-y-6 pb-8'>
        <Router>
          <Menu />

          <Routes>
            <Route path='/' element={<MoviesList />}></Route>
            <Route path='milista' element={<MiLista />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default Home;
