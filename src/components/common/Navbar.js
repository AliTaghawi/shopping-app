import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../../contexts/CartContextProvider';

//icons&images
import shopCart from '../../icons/shop.svg'

const Navbar = () => {
  const {state} = useContext(CartContext)

  return (
    <div>
      <div>
        <Link to='/products'>Products</Link>
        <div>
          <Link to='/#'>
          <img src={shopCart} alt='shop' />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;