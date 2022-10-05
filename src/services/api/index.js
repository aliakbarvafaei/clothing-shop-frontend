import {axiosInstance} from '../../config'

export const loginAPI = ( email, password ) =>
axiosInstance.post('/login', {
    email: email,
    password: password,
  })
export const registerAPI = ( fname, lname, email, password ) =>
axiosInstance.post('/register', {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
  })

export const getProducts = () =>
axiosInstance.get('/products')

export const getProductsWithPage = (pageNumber,pageSize,filters) =>
axiosInstance.post('/productsFilter',{
  pageNumber: pageNumber,
  pageSize: pageSize,
  filters: filters
})

export const getProduct = (idProduct) =>
axiosInstance.get(`/product/${idProduct}`)

export const getWishlist = (email) =>
axiosInstance.get(`/wishlist/${email}`)

export const postWishlist = (email,code) =>
axiosInstance.post(`/wishlist/${email}`, {
    code: code,
  })
export const deleteWishlist = (email,code) =>
axiosInstance.delete(`/wishlist/${email}!${code}`)

export const getCart = (email) =>
axiosInstance.get(`/cart/${email}`)

export const postCart = (email,code,quantity) =>
axiosInstance.post(`/cart/${email}`, {
    code: code,
    quantity: quantity,
  })
export const deleteCart = (email,code) =>
axiosInstance.delete(`/cart/${email}!${code}`)

export const updateCart = (email,code,quantity) =>
axiosInstance.patch(`/cart/${email}!${code}`,{
    quantity: quantity,
  })

export const isInCart = (email,code) =>
axiosInstance.get(`/isincart/${email}!${code}`)

