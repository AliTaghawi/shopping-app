import './App.css';

//components
import Stor from './components/Stor';

//contextComponents
import ProductsContextProvider from './contexts/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <Stor />
    </ProductsContextProvider>
  );
}

export default App;
