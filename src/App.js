import './App.css';
import {Route , Routes, Navigate} from 'react-router-dom'

//components
import Stor from './components/Stor';
import Ditales from './components/Ditales';
import Navbar from './components/common/Navbar';

//contextComponents
import ProductsContextProvider from './contexts/ProductsContextProvider';
import CartContextProvider from './contexts/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/product/:id' element={<Ditales/>} />
          <Route path='/product' element={<Stor/>} />
          <Route path='/*' element={<Navigate to='/product'/>} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
