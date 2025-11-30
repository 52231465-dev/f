<<<<<<< HEAD
import React,{useContext} from "react";
import{Link}from"react-router-dom";
import { CartContext } from "./CartContext";
function ProductCard({product}){
    const{cart, setCart}=useContext(CartContext);
    const addToCart=()=>{
        const existing=cart.find(item=> item.id===product.id);
        if(existing){
            setCart(
                cart.map(
                    item=>item.id=== product.id?{...item,quantity:item.quantity+1}:item
                )
            )
        }else{
            setCart([...cart,{...product,quantity:1}]);
        }
    };
return(

   
    <div className="shadow-lg rounded-md cursor-pointer">
         <Link>
<img src={product.image}/>
 </Link>
<div className="bg-gray-50 p-4">
    <h2 className="mt-2 font-bold">{product.price}</h2>
    <p className="text-gray-700">${product.Name}</p>
    <button onClick={addToCart} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add To Cart
    </button>
</div>

    </div>
   
)
}
=======
import React from "react";
import{Link}from"react-router-dom";
function ProductCard({product}){
return(
    <Link>
    <div className="shadow-lg rounded-md cursor-pointer">
<img src={product.image}/>
<div className="bg-gray-50 p-4">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
</div>

    </div>
    </Link>
)
}
>>>>>>> a6294dafac4cca4b04d9ae9112148556915d3587
export default ProductCard;