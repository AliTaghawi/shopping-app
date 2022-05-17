import React , { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

//context
import { productContext } from '../contexts/ProductsContextProvider';

//styles
import styles from './Ditales.module.css'

const Ditales = () => {
  const params = useParams()
  const products = useContext(productContext)
  const product = products[params.id - 1]

  if (product !== undefined) {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={product.image} alt='productimage' />
        <div className={styles.textContainer}>
          <h3>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.category}><span>Category: </span>{product.category}</p>
          <div className={styles.buttonContainer}>
            <span className={styles.price}>{product.price} $</span>
            <Link to='/products'>Back to Stor</Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Ditales;