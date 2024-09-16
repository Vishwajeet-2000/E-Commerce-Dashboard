import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './Components/NavBar';
import Update from './Components/Update'
import Signup from './Components/Signup'
import ProductList from './Components/ProductList'
import AddProduct from './Components/AddProduct';
import Footer from './Components/Footer';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update' element={<Update />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Signup />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
