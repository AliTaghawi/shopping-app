import React , {useContext} from 'react';

//context 
import { CartContext } from '../../contexts/CartContextProvider';

//function
import { shortentitle } from '../../helpers/functions';

//icons
import removeIcon from '../../icons/trash.svg'

//styles
import styles from "./Cart.module.css";

const Cart = ({data}) => {
  const {dispatch} = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={data.image} alt='product' />
      <div className={styles.data}>
        <h3 title={data.title}>{shortentitle(data.title)}</h3>
        <p>{data.price}</p>
      </div>
      <div>
        <span className={styles.quantity}>{data.quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {
          data.quantity > 1 ?
          <button onClick={() => dispatch({type: 'DECREASE', payload: data})} >-</button> :
          <button onClick={() => dispatch({type: 'REMOVE-ITEM', payload: data})} >{<img src={removeIcon} alt='trash' style={{width: '20px'}} />}</button>
        }
        <button onClick={() => dispatch({type: "INCREASE", payload: data})} >+</button>
      </div>
    </div>
  );
};

export default Cart;