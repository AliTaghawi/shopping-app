import axios from 'axios';

const getProductsData = async () => {
  const respons = await axios.get('https://fakestoreapi.com/products');
  return respons.data;
}

export { getProductsData };