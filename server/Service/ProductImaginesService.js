import ProductImagine from "../Models/ProductImagine.js";

class ProductImaginesService {

  async addProductImagines(productId, images) {
    let imagesForInsert = [];
    images.forEach((img) => {
      imagesForInsert.push({product:productId, imageUrl: img.path})
    });
    let createdImagines = await ProductImagine.insertMany(imagesForInsert);

    return createdImagines

  }

  async removeImagines(productId) {
    await ProductImagine.remove({ product: { $eq: productId } })
  }


  async updateProductImagines(productId, currentImages) {

    let productImagines = await ProductImagine.find({ product: productId });

    let removedImgs = productImagines.filter(productImg => !currentImages.find(img => img.id == productImg.id)).map(removedImg => removedImg.id);

    if (removedImgs.length)
      await ProductImagine.deleteMany({ _id: removedImgs });
  }
}

export default new ProductImaginesService();