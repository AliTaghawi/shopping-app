import React , {createContext , useReducer} from 'react';

const counting = item => {
  const itemsCounter = item.selectedItems.reduce((total , product) => total + product.quantity, 0)
  const total = item.selectedItems.reduce((total, product) => total + product.quantity * product.price,0).toFixed(2);
  return {itemsCounter , total}
}

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false
}

const cartReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD-ITEM':
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1
        })
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...counting(state)
      }
    case 'REMOVE-ITEM':
      const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...counting(state)
      }
    case 'INCREASE':
      const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...counting(state)
      }
    case 'DECREASE':
      const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...counting(state)
      }
    case 'CHECKOUT':
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true
      }
    case 'CLEAR':
      return{
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false
      }
    default:
      return state;
  }
}

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [state , dispatch] = useReducer(cartReducer , initialState);
  return (
    <CartContext.Provider value={{state , dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;