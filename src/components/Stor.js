import React, {useContext} from 'react';

//components
import Product from './common/Product';

//context
import { productContext } from '../contexts/ProductsContextProvider';

//styles
import styles from "./Stor.module.css";

const Stor = () => {
  const product = useContext(productContext);

  return (
    <div className={styles.container} >
      {product.map(item => <Product key={item.id} productData={item} />)}
    </div>
  );
};

export default Stor;