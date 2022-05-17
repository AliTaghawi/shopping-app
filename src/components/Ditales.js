import React , { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

//context
import { productContext } from '../contexts/ProductsContextProvider';


const Ditales = () => {
  const params = useParams()
  const products = useContext(productContext)
  const product = products[params.id - 1]

  if (product !== undefined) {
    return (
      <div>
        <img src={product.image} alt='productimage' />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><span>Category: </span>{product.category}</p>
        <div>
          <p><span>Price: </span>{product.price}$</p>
          <Link to='/products'>Back to Stor</Link>
        </div>
      </div>
    );
  }
};

export default Ditales;