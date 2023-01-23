import axios from "axios";
import { baseURL } from "../http";

class UserService{
    async login(userData){
        
        let response = await axios.post(`${baseURL}/auth/login`, userData, {withCredentials:true});
        return response.data;
    }

    async register(userData){
        let response  = await axios.post(`${baseURL}/auth/register`, userData, {withCredentials:true});
        return response.data;
    }

    async logout(){
        await axios.post(`${baseURL}/auth/logout`, {withCredentials:true});
    }

    async checkAuth(){
        let response =  await axios.get(`${baseURL}/auth/refresh`,{withCredentials:true});
        return response.data;
    }
}

export default new UserService();