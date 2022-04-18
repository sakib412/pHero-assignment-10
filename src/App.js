import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.comp';
import Home from './components/Home/Home.comp';
import Login from './components/Login/Login.comp';
import Register from './components/Register/Register.comp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>

              <Home />
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
