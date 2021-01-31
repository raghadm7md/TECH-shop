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

// const login=()=>{
//   return axios.post(`${API_URL}/login`)
// }

// ###################### EditUser
const EditUser = (id,info) => {
  console.log(info)
  return axios.put(`${API_URL}/user/${id}`, info);
}


export { getAllProducts, getAllUsers ,getAllCovers , EditUser};