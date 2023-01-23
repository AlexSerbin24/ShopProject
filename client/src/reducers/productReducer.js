export default function(state, action){
    switch (action.type) {
        case "fetchProducts":
            const {products} = action.payload;
            return [...products];
        case "addProduct":
            return [...state, action.payload.product];
        case "updateProduct":
            return state.map(product=>{
                if(product.id == action.payload.product.id){
                    return action.payload.product; 
                }
                return product;
            });
        case "removeProduct":
            return state.filter(product=>product.id != action.payload.id)
        default:
            return state;
    }
}