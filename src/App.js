import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.comp';
import Login from './components/Login/Login.comp';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
