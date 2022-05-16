import React , { useEffect , createContext , useState } from 'react';

//API
import { getProductsData } from '../services/api';

export const productContext = createContext()

const ProductsContextProvider = ({children}) => {

  const [data , setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setData( await getProductsData())
    }
    fetchData();
  }, [])

  return (
    <productContext.Provider value={data} >
      {children}
    </productContext.Provider>
  );
};

export default ProductsContextProvider;