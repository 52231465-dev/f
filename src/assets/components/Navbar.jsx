import { Link } from "react-router-dom";
import React, { useState } from "react";
import { User } from "lucide-react";

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
         
          <div className={'${IsOpen ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg zing-50 p-4 gap-4":"hidden" :}'}>
          
            <li><Link to="/">Sign In</Link></li>
            <li><Link to="/">My Account</Link></li>
            <User size={40} className="bg-gray-200 p-2 text-black rounded cursor-pointer" />
            onClick={handleUser}
          </div>

        </ul>
        </div>
      <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
        <div>
          <Link to="/">
     <img src="{logo}" alt=""/>
     </Link>
        </div>
        <form className="=w-1/2 sm:block hidden">
          <input type="text" 
          placeholder="Search Product"
          className="bgg-zing-100100 rounded-md border border-zinc-200 focus :outline-none py-3 px-3 w-full"/>
        </form>
        <Link >
        <shoppingCart size={54} className="counter-pointer bg-gray-100 px-3 py-2 rounded-b-full"/>
        </Link>
      </nav>
     
    </header>
  );
}

export default Navbar;