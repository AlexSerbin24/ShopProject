export default function getTotalPrice(cart) {
    if(cart.length == 0 ) return 0;

    let result = cart.map(cartLine => cartLine.count * cartLine.product.price).reduce((prev, cur) => prev + cur);

    return result.toFixed(2);
}