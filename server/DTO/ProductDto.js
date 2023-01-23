import ProductImagineDto from "./ProductImagineDto.js"
import CommentDto from "./CommentDto.js"

export default class ProductDto{
    constructor(product, rating = 0) {
        this.id = product._id;
        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.category = product.category;
        this.rating = rating;
        this.imagines = product.imagines.map(img=>new ProductImagineDto(img));
        if(product.comments)
            this.comments = product.comments.map(comm=> new CommentDto(comm))
    }
}