import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const token = localStorage.getItem('token')

console.log("token", token)

export const api= axios.create({
  baseURL: `${baseURL}`,
  headers: {
   'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
  },
});

 



