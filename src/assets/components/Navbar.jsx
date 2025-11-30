import { Link } from "react-router-dom";
import React, { useState } from "react";
import { User,ShoppingCart } from "lucide-react";

function Navbar() {
    const[IsOpen,setIsOpen]=useState(false);
    const handleUser =()=>
        {
        setIsOpen(!IsOpen);
};
  return (
    <header className="bg-white shadow-md">
      <div className="py-4 shadow-md">
        <ul className="container mx-auto flex flex-wrap justify-between items-center px-2 items-center relative">
          <div className="flex gap-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">FAQs</Link></li>
            <li><Link to="/">Contact</Link></li>
          </div>
         <div className="relative">
          <User size={40} className="bg-gray-200 p-2 text-black rounded cursor-pointer"
          onClick={handleUser}/>
         
          <ul className={'${IsOpen ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4":"hidden"}'}>
          
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/account">My Account</Link></li>
            <User size={40} className="bg-gray-200 p-2 text-black rounded cursor-pointer" />
            onClick={handleUser}
          
        </ul>
        </div>
        </ul>
        </div>
      <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
        <div>
          <Link to="/">
     <img src= "https://images.unsplash.com/photo-1590658165737-15a047b8b5e0?w=300&h=300&fit=crop"alt="logo" className="h-12"/>
     </Link>
        </div>
        <form className="=w-1/2 sm:block hidden">
          <input type="text" 
          placeholder="Search Product"
          className="bg-zinc-100 rounded-md border border-zinc-200 focus :outline-none py-3 px-3 w-full"/>
        </form>
        <Link >
        <ShoppingCart size={54} className="counter-pointer bg-gray-100 px-3 py-2 rounded"/>
        </Link>
      </nav>
     
    </header>
  );
}

export default Navbar;