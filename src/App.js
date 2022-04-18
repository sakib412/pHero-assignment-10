import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.comp';
import Home from './components/Home/Home.comp';
import Login from './components/Login/Login.comp';
import Register from './components/Register/Register.comp';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
