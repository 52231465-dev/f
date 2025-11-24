import React from "react";
import products from "../../productsContent";
import ProductCard from "./ProductCard";
function ProductGrid(){
    return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product)=> {
return<ProductCard key={product.id} product={product}/>
        })}

    </div>
    ) 
}
export default ProductGrid;