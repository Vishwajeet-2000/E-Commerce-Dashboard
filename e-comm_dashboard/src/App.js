import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Update from './Components/Update'
import Signup from './Components/Signup'
import ProductList from './Components/ProductList'
import AddProduct from './Components/AddProduct';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Container from 'react-bootstrap/esm/Container';
import PrivateComponent from './Components/PrivateComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>

            <Route element={<PrivateComponent />}>
              <Route path='/' element={<ProductList />} />
              <Route path='/add' element={<AddProduct />} />
              <Route path='/update' element={<Update />} />
              <Route path='/logout' element={<h1>Logout Component</h1>} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
