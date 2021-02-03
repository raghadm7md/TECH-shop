// import /api from "./apiConfig";
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All products
const getAllProducts = () => {
  return axios.get(`/api/product/product`);
};

const getAllCovers = () => {
  return axios.get(`/api/product/covers`);
};

const getAllPowerBanks = () => {
  return axios.get(`/api/product/powerbanks`);
};

const getAllCables = () => {
  return axios.get(`/api/product/cables`);
};

const getAllUsers = () => {
  return axios.get(`/api/user/user`);
};

const getUserbyID = (id) => {
  return axios.get(`/api/user/userById/${id}`);
};

const deleteProductByID = (id) => {
  return axios.delete(`/api/product/product/${id}`);
};

//////////////////NAJD

const login = (req) => {
  return axios.post(`/api/user/login`, {
    email: req.email,
    password: req.password,
  });
};

const registeration = (req) => {
  return axios.post(`/api/user/register`, req);
};
// ###################### EditUser
const EditUser = (id, info) => {
  console.log("xxxx",id);
  console.log("zzzzz",info);
  return axios.put(`/api/user/`, info);
};

// Add new product ###########
const addProduct = (info) => {
  return axios.post(`/api/product/product`, info);
};

const SingIn = (signInEmail, signInPassword) => {
  console.log("AAAAAAAA", signInEmail);
  return axios.post(`/api/user/login`, {
    email: signInEmail,
    password: signInPassword,
  });
};

const LogOut = (signInEmail, signInPassword, token) => {
  return axios.get(`/api/user/logout?token=` + token, {
    email: signInEmail,
    password: signInPassword,
  });
};

// decrease quantitiy for product ##############
const DecQuantitiy = (id, info) => {
  return axios.put(`/api/product/product/${id}`, info);
};

export {
  getAllProducts,
  getAllUsers,
  getAllCovers,
  getAllPowerBanks,
  getAllCables,
  registeration,
  EditUser,
  login,
  addProduct,
  SingIn,
  LogOut,
  deleteProductByID,
  DecQuantitiy,
  getUserbyID,
};
