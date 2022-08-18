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

export const getChart = () =>
  Axios.get('https://dummy.restapiexample.com/api/v1/employees')
