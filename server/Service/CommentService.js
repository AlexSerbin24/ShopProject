import Comment from "../Models/Comment.js";
import ProductService from "./ProductService.js";
class CommentService{

    async addComment(comment,productId, userId){
        const commentEntity = await Comment.create({...comment, date:new Date(), productId:productId, userId: userId});
        await ProductService.addProductComment(productId, commentEntity.id);
        return commentEntity;
    }
}

export default new CommentService