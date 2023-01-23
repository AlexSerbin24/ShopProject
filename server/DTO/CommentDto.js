class CommentDto{
    constructor(comment) {
        this.id = comment._id;
        this.text = comment.text;
        this.rating = comment.rating;
        this.date = comment.date;
        this.user = `${comment.userName} ${comment.userLastName}`
    }
}

export default CommentDto;