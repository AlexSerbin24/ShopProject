import api from "../http";
import axios from "axios";
class ProductService {
    async getAllProducts(isForAdmin = false) {
        let response = await api.get("/products/", {
            params: {
                isForAdmin
            }
        });

        let products = response.data;

        return products;
    }

    async getProductById(id) {
        let response = await api.get(`/products/${id}`);

        let product = response.data;

        return product
    }

    async addProduct(productData) {
        
        // let response = await axios.post("http://localhost:5000/products/",productData,{headers: {"Authorization":`Bearer ${localStorage.getItem("token")}` }})
        let response = await api.post("/products/",productData)
        let addedProduct = response.data
        return addedProduct;


    }

    async removeProduct(id) {
        await api.delete(`/products/${id}`);
    }

    async updateProduct(productData) {
        let response = await api.put("/products/", productData);
        let updatedProduct = response.data;
        return updatedProduct;
    }
}

export default new ProductService();