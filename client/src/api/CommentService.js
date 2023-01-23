import api from "../http";
import axios from "axios";
class CommentService{

    async addComment(commentData, productId, userId){
        let response = await api.post(`/comments/`,{commentData, productId, userId});
        return response.data;
    }
}

export default new CommentService();