
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