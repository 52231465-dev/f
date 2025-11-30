<<<<<<< HEAD

import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="border-b border-gray-600">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
              <p className="text-gray-300 mt-2">Get the latest updates and offers</p>
            </div>
            <form className="w-full md:w-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-full text-gray-800 w-full md:w-64"
              />
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full flex items-center gap-2"
              >
                <Mail size={20} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Accusantium consequatur adipisicing elit. Possimus repudiandae 
              porro distinctio dolorum in consequatur doloribus?
            </p>
          </div>

           
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>📧 email@example.com</p>
              <p>📞 +123 456 7890</p>
              <p>📍 Your Address Here</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Facebook size={30} className="bg-white text-black rounded-md p-1 cursor-pointer hover:bg-gray-200" />
              <Twitter size={30} className="bg-white text-black rounded-md p-1 cursor-pointer hover:bg-gray-200" />
              <Instagram size={30} className="bg-white text-black rounded-md p-1 cursor-pointer hover:bg-gray-200" />
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
=======
import React from 'react'
import Logo from'../images/showcase/logo.svg';
import { Facebook, Twitter, Youtube } from 'lucide-react';
function Footer() {
  return (
   <footer className='bg-slate-900 shadow-md'>
    <div className='container mx-auto px-4'>
        <div className='min-h-16'>
            <div className='flex-justify-between items-center flex-col md:flex-row'>
            <h2>Subsribe Our NewsLetter</h2>
            <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
                <input type="text" placeholder='Enter Your Email' className='py-4 px-4 rounded shadow-md w-full'></input>
           <button className='bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1'>
            Submit
           </button>
            </form>
        </div>
        </div>
    </div>
    <div className='bg-slate-800 text-white py-8'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-colrs-4 gap-4'>
                <div className='flexx items-center gap-8 mt-5'>
                    <imag src={Logo} className="my-4"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo a iusto fuga voluptatum officia ex id vel nisi excepturi,
          possimus nostrum repudiandae porro distinctio dolorum in consequatur doloribus? Accusamus!
          </p>
                
                <Facebook size={40} className='bg-white text black rounded-md p-2'/>
<Twitter size={40} className='bg-white text black rounded-md p-2'/>        
<Youtube size={40} className='bg-white text black rounded-md p-2'/>

 </div>
        </div>
        <div><h2 className='text-2xl font-semibold my-4'>Pages</h2></div>
        </div>
    </div>
   </footer>
  )
}

export default Footer;
>>>>>>> a6294dafac4cca4b04d9ae9112148556915d3587
