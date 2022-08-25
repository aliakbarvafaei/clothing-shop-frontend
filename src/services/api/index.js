import Axios from 'axios'

export const loginAPI = ( email, password ) =>
  Axios.post('http://localhost:5000/login', {
    email: email,
    password: password,
  })
export const registerAPI = ( fname, lname, email, password ) =>
  Axios.post('http://localhost:5000/register', {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
  })

export const getProducts = () =>
  Axios.get('http://localhost:5000/products')

export const getProduct = (idProduct) =>
  Axios.get(`http://localhost:5000/product/${idProduct}`)

export const getWishlist = (email) =>
  Axios.get(`http://localhost:5000/wishlist/${email}`)

export const postWishlist = (email,code) =>
  Axios.post(`http://localhost:5000/wishlist/${email}`, {
    code: code,
  })
export const deleteWishlist = (email,code) =>
  Axios.delete(`http://localhost:5000/wishlist/${email}!${code}`)

export const getCart = (email) =>
  Axios.get(`http://localhost:5000/cart/${email}`)

export const postCart = (email,code,quantity) =>
  Axios.post(`http://localhost:5000/cart/${email}`, {
    code: code,
    quantity: quantity,
  })
export const deleteCart = (email,code) =>
  Axios.delete(`http://localhost:5000/cart/${email}!${code}`)

export const updateCart = (email,code,quantity) =>
  Axios.patch(`http://localhost:5000/cart/${email}!${code}`,{
    quantity: quantity,
  })


