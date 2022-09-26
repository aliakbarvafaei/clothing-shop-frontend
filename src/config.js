import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL : "http://clothing-shopping.ir/",
})