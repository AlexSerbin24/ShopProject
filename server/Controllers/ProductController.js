import ProductService from "../Service/ProductService.js";
import ProductDto from "../DTO/ProductDto.js";

class ProductController {
    async addProduct(req, res) {
        try {
            let { product } = req.body;
            let newImages = req.files;
            let createdProduct = await ProductService.addProduct(JSON.parse(product), newImages);
            let productDto = new ProductDto(createdProduct, 0);
            return res.send(productDto);
        } catch (error) {
            (error);
            return res.status(500).send({ message: error.message });
        }
    }

    async getProduct(req, res) {
        try {
            const id = req.params.id;
            let productEntity = await ProductService.getProduct(id)
            let product = new ProductDto(productEntity);
            return res.send(product);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async getProducts(req, res) {
        try {
            const { isForAdmin } = req.query
            let productEntities = await ProductService.getProducts(isForAdmin);

            let products = await Promise.all(productEntities.map(async (productEntity) => {
                let rating = await ProductService.getProductAverageRating(productEntity.id);
                return new ProductDto(productEntity, rating);
            }));


            return res.send(products);

        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async removeProduct(req, res) {
        try {
            const id = req.params.id;
            await ProductService.removeProduct(id);
            return res.sendStatus(200);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {

            let { product, currentImages } = req.body;
            let newImages = req.files;
            let updatedProduct = await ProductService.updateProduct(JSON.parse(product), JSON.parse(currentImages), newImages);
            let productDto = new ProductDto(updatedProduct);

            return res.send(productDto);

        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

export default new ProductController();