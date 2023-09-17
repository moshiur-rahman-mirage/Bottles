const getStoredCart=()=>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    else{
        return []
    }
}

const savedCartToLs=(cart)=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

const addToLocalStorage=(id)=>{
    const cart=getStoredCart();
    cart.push(id);
    savedCartToLs(cart);
}

export {addToLocalStorage,getStoredCart}