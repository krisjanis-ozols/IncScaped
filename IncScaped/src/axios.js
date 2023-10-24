import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
})

axiosClient.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
    return config;
});

axios.interceptors.request.use(response =>{
    return response;
},error => {
    if(error.response && error.response.status === 401){
        console.log(error);
        return error;
    }
    throw error;
})

export default axiosClient;