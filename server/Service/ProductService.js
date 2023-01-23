import Product from "../Models/Product.js";
import ProductImaginesService from "./ProductImaginesService.js";
import Order from "../Models/Order.js";

class ProductService {

    async getProduct(id) {
        let productEntity = await Product.findById(id).populate("imagines").populate("comments");
        return productEntity;
    }


    async getProducts(isForAdmin) {

        let options = isForAdmin ? {} : { limit: 1 }
        let productEntities = await Product.find().select("-comments").populate({path:'imagines', options:options})
        return productEntities;
    }


    async addProduct(product, imagines) {
        let productEntity = await Product.create(product);
        
        if (imagines.length != 0) {
            let createdImagines =await ProductImaginesService.addProductImagines(productEntity.id, imagines);
            productEntity.imagines = createdImagines.map(img => img.id);
            await productEntity.save();

        }
        return productEntity.populate("imagines")
    }


    async removeProduct(id) {
        await Product.findByIdAndDelete(id);
        await Order.findOneAndDelete({product:id})
        await ProductImaginesService.removeImagines(id);
    }

    async updateProduct(product, currentImages, newImages) {

        const productEntity = await Product.findOne({ _id: product.id }).select("-comments").populate("imagines", "_id");

        productEntity.title = product.title;
        productEntity.description = product.description;
        productEntity.price = product.price;
        productEntity.category = product.category;

        await ProductImaginesService.updateProductImagines(productEntity.id, currentImages );

        let insertedImages = await ProductImaginesService.addProductImagines(productEntity.id,newImages);
        
        productEntity.imagines = [...productEntity.imagines, ...insertedImages.map(img=>img.id)]
        await productEntity.save()

        return productEntity.populate("imagines");
    }


    async addProductComment(productId, commentId){
        const productEntity = await Product.findById(productId);
        productEntity.comments.push(commentId);
        await productEntity.save();
    }

    async getProductAverageRating(productId) {
        const comments = (await Product.findById(productId).populate("comments", "rating")).comments;

        if (comments.length == 0) {
            return 0;
        }

        const averageRating = comments.map(comment => comment.rating).reduce((prev, curr) => prev + curr) / comments.length;
        return averageRating;
    }
}

export default new ProductService();