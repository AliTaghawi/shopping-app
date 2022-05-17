import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//icons&images
import removeIcon from '../../icons/trash.svg';

//context
import { CartContext } from '../../contexts/CartContextProvider';

//founctions
import { shortentitle , isAdded , quantityConter } from '../../helpers/functions';

const Product = ({productData}) => {
  const {state , dispatch } = useContext(CartContext)
  return (
    <div>
      <img src={productData.image} alt='productimage' style={{width: "200px"}} />
      <h3 title={productData.title} >{shortentitle(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/product/${productData.id}`}>Ditales</Link>
        <div>
          {quantityConter(state, productData.id) === 1 && <button onClick={() => dispatch({type: 'REMOVE-ITEM', payload: productData})} >{<img src={removeIcon} alt='trash' style={{width: '20px'}} />}</button>}
          {quantityConter(state, productData.id) > 1 && <button onClick={() => dispatch({type: 'DECREASE', payload: productData})} >-</button>}
          {
          isAdded(state , productData.id) ? 
          <button onClick={() => dispatch({type: "INCREASE", payload: productData})} >+</button> :
          <button onClick={() => dispatch({type: "ADD-ITEM", payload: productData})} >Add to Cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;