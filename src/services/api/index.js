import {axiosInstance, configToken} from '../../config'

export const loginAPI = ( email, password ) =>
axiosInstance.post('/login', {
    email: email,
    password: password,
  },configToken)
export const registerAPI = ( fname, lname, email, password ) =>
axiosInstance.post('/register', {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
  },configToken)

export const getUser = () =>
axiosInstance.get(`/user`,configToken)

export const updatePassword = (email,LastPassword,NewPassword) =>
axiosInstance.patch(`/user/${email}`,{
    LastPassword: LastPassword,
    NewPassword: NewPassword
  },configToken)

export const getProducts = () =>
axiosInstance.get('/products',configToken)

export const getProductsWithPage = (pageNumber,pageSize,filters) =>
axiosInstance.post('/productsFilter',{
  pageNumber: pageNumber,
  pageSize: pageSize,
  filters: filters
},configToken)

export const getProduct = (idProduct) =>
axiosInstance.get(`/product/${idProduct}`,configToken)

export const getWishlist = (email) =>
axiosInstance.get(`/wishlist/${email}`,configToken)

export const postWishlist = (email,code) =>
axiosInstance.post(`/wishlist/${email}`, {
    code: code,
  },configToken)
export const deleteWishlist = (email,code) =>
axiosInstance.delete(`/wishlist/${email}!${code}`,configToken)

export const getCart = (email) =>
axiosInstance.get(`/cart/${email}`,configToken)

export const postCart = (email,code,quantity) =>
axiosInstance.post(`/cart/${email}`, {
    code: code,
    quantity: quantity,
  },configToken)
export const deleteCart = (email,code) =>
axiosInstance.delete(`/cart/${email}!${code}`,configToken)

export const updateCart = (email,code,quantity) =>
axiosInstance.patch(`/cart/${email}!${code}`,{
    quantity: quantity,
  },configToken)

export const isInCart = (email,code) =>
axiosInstance.get(`/isincart/${email}!${code}`,configToken)

