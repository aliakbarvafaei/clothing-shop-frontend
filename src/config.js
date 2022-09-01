import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : "https://clothing-shop-ali.herokuapp.com/",
})