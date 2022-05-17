import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//icons&images
import removeIcon from '../../icons/trash.svg';

//context
import { CartContext } from '../../contexts/CartContextProvider';

//founctions
import { shortentitle , isAdded , quantityConter } from '../../helpers/functions';

//styles
import styles from "./Product.module.css";

const Product = ({productData}) => {
  const {state , dispatch } = useContext(CartContext)
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt='productimage' style={{width: "200px"}} />
      <h3 title={productData.title} >{shortentitle(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/product/${productData.id}`}>Ditales</Link>
        <div className={styles.buttonContainer}>
          {quantityConter(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: 'REMOVE-ITEM', payload: productData})} >{<img src={removeIcon} alt='trash' style={{width: '20px'}} />}</button>}
          {quantityConter(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: 'DECREASE', payload: productData})} >-</button>}
          {quantityConter(state, productData.id) > 0 && <span className={styles.counter}>{quantityConter(state, productData.id)}</span>}
          {
          isAdded(state , productData.id) ? 
          <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})} >+</button> :
          <button onClick={() => dispatch({type: "ADD-ITEM", payload: productData})} >Add to Cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;