import API_URL from './apiConfig';
import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All products
const getAllProducts = () => {
  return axios.get(`${API_URL}/product`);
};

const getAllCovers = () => {
  return axios.get(`${API_URL}/covers`);
};

const getAllPowerBanks = () => {
  return axios.get(`${API_URL}/powerbanks`);
};

const getAllCables = () => {
  return axios.get(`${API_URL}/cables`);
};

// Delete products by ID
const getAllUsers = (id) => {
  return axios.get(`${API_URL}/user`);
}

const deleteProductByID = (id) => {
  return axios.delete(`${API_URL}/product/${id}`);
}

//////////////////NAJD

const login=(req)=>{
  return axios.post(`${API_URL}/login`,{
    email:req.email,
    password:req.password
  })
}
const registeration=(req)=>{
  return axios.post(`${API_URL}/register`,req)
}
// ###################### EditUser
const EditUser = (id,info) => {
  console.log(info)
  return axios.put(`${API_URL}/user/${id}`, info);
}

// Add new product ###########
const addProduct = (info) => {
  return axios.post(`${API_URL}/product`,info);
}



const SingIn = (signInEmail, signInPassword) => {
  console.log("AAAAAAAA",signInEmail);
  return axios.post(`${API_URL}/login`, {
    email: signInEmail,
    password: signInPassword
  });
}


const LogOut = (signInEmail, signInPassword, token) => {
  return axios.get(`${API_URL}/logout?token=` + token, {
      email: signInEmail,
      password: signInPassword,
  });
}



export { getAllProducts, getAllUsers ,getAllCovers,getAllPowerBanks,getAllCables,registeration, EditUser,login, addProduct,SingIn, LogOut, deleteProductByID , };

