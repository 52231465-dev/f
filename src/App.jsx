import{BrowserRouter, Route , Routes }from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Productdetails from "./pages/Productdetails";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ProductCard from "./assets/components/ProductCard";
import ProductGrid from "./assets/components/ProductGrid";
function App() {
  return (<BrowserRouter>
  <Navbar/>
  <Footer/>
  <ProductCard/>
  <ProductCard/>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Productdetails/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
     <Route path="/Footer" element={<Footer/>}/>
      <Route path="/ProductGrid" element={<ProductGrid/>}/>
       <Route path="/ProductCard" element={<ProductCard/>}/>
      
    <Route path="/cart" element={<CartPage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
