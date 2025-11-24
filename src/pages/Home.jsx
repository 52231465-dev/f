import React from 'react';
const categories=[
"All",
"Graphic cards",
"Laptop",
"Monitors",
"Power supply",
];
function Home() {
  return (
    <div >
      <div className='bg'></div>
      <div className='container mx-auto my-10 px-4'>
        <div className='flex gap-4'>
          {categories.map((cat) =>{
            return(
          <button className='bg-gray-300 py-2 px-4 rounded-md text-black acctive:scale-95 hover:bg-zinc-400 transition-all case-in'
           key={cat}>
           {cat}
            
            ALL</button>
            );
})}
        </div>
        <ProductGrid/>
      </div>
      <Footer/>
    </div>
  )
}


export default Home;

