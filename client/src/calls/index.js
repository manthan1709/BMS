import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://bms-backend-tz89.onrender.com", // Remove /api from here
    headers : {
        'Content-Type' : 'application/json',
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
})