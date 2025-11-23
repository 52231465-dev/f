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
export default ProductCard;