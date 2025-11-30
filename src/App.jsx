import{BrowserRouter, Route , Routes }from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Productdetails from "./pages/Productdetails";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ProductCard from "./assets/components/ProductCard";
import ProductGrid from "./assets/components/ProductGrid";
<<<<<<< HEAD
import { CartContext, CartProvider } from "./assets/components/CartContext";

function App() {
  return (
    <CartProvider>
  <BrowserRouter>

  <Navbar/>
  <Footer/>
  <ProductCard/>
  <ProductGrid/>
=======
function App() {
  return (<BrowserRouter>
  <Navbar/>
  <Footer/>
  <ProductCard/>
  <ProductCard/>
>>>>>>> a6294dafac4cca4b04d9ae9112148556915d3587
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Productdetails/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
     <Route path="/Footer" element={<Footer/>}/>
<<<<<<< HEAD
=======
      <Route path="/ProductGrid" element={<ProductGrid/>}/>
       <Route path="/ProductCard" element={<ProductCard/>}/>
>>>>>>> a6294dafac4cca4b04d9ae9112148556915d3587
      
    <Route path="/cart" element={<CartPage/>}/>
  </Routes>
  </BrowserRouter>
<<<<<<< HEAD
  </CartProvider>
=======
>>>>>>> a6294dafac4cca4b04d9ae9112148556915d3587
  )
}

export default App;
