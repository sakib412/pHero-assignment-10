import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.comp';
import Home from './components/Home/Home.comp';
import Login from './components/Login/Login.comp';
import Register from './components/Register/Register.comp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout.comp';
import NotFound from './components/NotFound/NotFound.comp';
import Blogs from './components/Blogs/Blogs.comp';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='/checkout' element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <ToastContainer />
      <Footer />

    </>
  );
}

export default App;
