import React, {useContext} from 'react';

//components
import Product from './common/Product';

//context
import { productContext } from '../contexts/ProductsContextProvider';

const Stor = () => {
  const product = useContext(productContext);

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}} >
      {product.map(item => <Product key={item.id} productData={item} />)}
    </div>
  );
};

export default Stor;