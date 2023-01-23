export default class ProductImagineDto{
    constructor(productImagine) {
        this.id = productImagine._id
        this.image = productImagine.imageUrl
    }
}