import CommentService from "../Service/CommentService.js";
import CommentDto from "../DTO/CommentDto.js";


class CommentController {

    async addComment(req, res, next) {
        try {
            const { commentData, productId, userId } = req.body;

            const createdComment = await CommentService.addComment(commentData, productId, userId);
            const comment = new CommentDto(createdComment);

            return res.json(comment);
        } catch (error) {
            next(error)
        }
    }
}

export default new CommentController();