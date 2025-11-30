<<<<<<< HEAD
import React from "react";
import products from "../../productsContent";
import ProductCard from "./ProductCard";
function ProductGrid(){
    return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product)=> (
<ProductCard key={product.id} product={product}/>
        ))}

    </div>
    ) 
}
=======
import React from "react";
import products from "../../productsContent";
import ProductCard from "./ProductGard";
function ProductGrid(){
    return(
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product)=> {
return<ProductGird key={product} product={product}/>
        })}

    </div>
    ) 
}
>>>>>>> a6294dafac4cca4b04d9ae9112148556915d3587
export default ProductGrid;