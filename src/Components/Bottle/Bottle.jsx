import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price}=bottle
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img}/>
            <h4>Price:{price}</h4>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;