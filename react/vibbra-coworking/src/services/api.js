import axios from "axios";


const api = axios.create({
    //baseURL: "http://corujasdev-001-site7.etempurl.com/api"
    baseURL: "http://localhost:5000/api"
});

export default api;