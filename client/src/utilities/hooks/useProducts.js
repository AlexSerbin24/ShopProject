import { useMemo } from "react"

export const useCategoryProducts = (products, category) => {
    const categoryProducts = useMemo(() => {
        if(category){
            return products.filter(product=>product.category.toLocaleLowerCase() == category.toLocaleLowerCase());
        }
        return products;
    }, [category, products]);

    return categoryProducts;
}

export const useProducts = (products, category, text) => {
    const categoryProducts = useCategoryProducts(products, category);
    const filteredProducts = useMemo(() => {
        if(text){
            return categoryProducts.filter(product=>product.title.includes(text));
        }
        return categoryProducts;
    }, [text,categoryProducts]);

    return filteredProducts;
}