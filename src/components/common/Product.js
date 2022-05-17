import React from 'react';

//founctions
import { shortentitle } from '../../helpers/founctions';

const Product = ({productData}) => {

  return (
    <div>
      <img src={productData.image} alt='productimage' style={{width: "200px"}} />
      <h3>{shortentitle(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <a href='##'>Ditales</a>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;