import API_URL from './apiConfig';
import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All products
const getAllProducts = () => {
  return axios.get(`${API_URL}/product`);
};

const getAllCovers = () => {
  return axios.get(`${API_URL}/product/covers`);
};

// Delete products by ID
const getAllUsers = (id) => {
  return axios.get(`${API_URL}/user`);
}

export { getAllProducts, getAllUsers ,getAllCovers};