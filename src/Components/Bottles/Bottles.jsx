import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../Utils/Localstorage";

const Bottles = () => {
    const [bottles,setBottles]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(
        ()=>{
            fetch('/bottles.json')
            .then(res=>res.json())
            .then(data=>setBottles(data))
        }
        ,[])

    useEffect(()=>{
        if (bottles.length>0){
        const localData=getStoredCart();
        }
    },[bottles])

    const handleAddToCart=(bottle)=>{
        const newCart=[...cart,bottle]
        setCart(newCart)
        addToLocalStorage(bottle.id)
    }
    return (
        <div>
            <h4>Bottles Here {bottles.length}</h4>
            <h3>Cart Item No : {cart.length}</h3>
            <div className="bottles">
            {
                bottles.map((bottle)=>{
                   return(<Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                    />)
                })
            }
            </div>
           
        </div>
    );
};

export default Bottles;