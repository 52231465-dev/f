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
export default ProductGrid;