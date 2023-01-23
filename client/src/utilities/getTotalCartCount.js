export  function getTotalCartCount(cart){
    if(!cart.length) return 0;
    
    return cart.map(cartLine=>cartLine.count).reduce((prev,cur)=>prev+cur);
}