import api from "../http";
import axios from "axios";
class CommentService{
    // async getProductComments(productId){
    //     let response = await axios.get(`http://localhost:5000/comments/${productId}`);
    //     return response.data;
    // }

    async addComment(commentData, productId, userId){
        let response = await api.post(`/comments/`,{commentData, productId, userId});
        return response.data;
    }
}

export default new CommentService();