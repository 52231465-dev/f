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
