import axios from "axios";

export const baseURL = "http://localhost:5000";

const api = axios.create({
    withCredentials: true,
    baseURL: baseURL
})

api.interceptors.request.use(config => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    return config;
});

api.interceptors.response.use((config) => {
    return config;
},
   async (error) => {
        const originalRequest = error.config;
        if (error.response.status == 401) {
            
            const response = await axios.get(`${baseURL}/auth/refresh`,{withCredentials:true});
            localStorage.setItem("token", response.data.accessToken)
            const headers = {...error.config.headers};
            return api({...originalRequest, headers})
        }

        throw error;
        
    })

export default api;