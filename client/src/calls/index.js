import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL: "https://bms-backend-tz89.onrender.com/api", // Base URL set to your live backend endpoint

    headers : {

        'Content-Type' : 'application/json',
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
})
