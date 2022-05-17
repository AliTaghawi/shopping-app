import './App.css';
import {Route , Routes, Navigate} from 'react-router-dom'

//components
import Stor from './components/Stor';
import Ditales from './components/Ditales';

//contextComponents
import ProductsContextProvider from './contexts/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path='/product/:id' element={<Ditales/>} />
        <Route path='/product' element={<Stor/>} />
        <Route path='/*' element={<Navigate to='/product'/>} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
