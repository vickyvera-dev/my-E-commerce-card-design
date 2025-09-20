import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <div className=''>
      <h1 className='bg-green-700 p-6 rounded-full mx-10 my-5 text-center text-2xl text-white font-extrabold'>Welcome</h1>
      <p className='text-gray-700 p-6 mx-10 my-5 mt-4 bg-amber-600 text-center rounded-tl-2xl rounded-br-2xl'>This text here is centered and padded!</p>
      <BusinessCard />
    </div>
  )
}

export default App;
function BusinessCard () {
  return (
    <div className='grid grid-cols-12 gap-2 mx-2 my-8'>
      
     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/basket-tomato.jpeg" alt="Basket Tomato" className='w-50 h-50' /></div>

      <div className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Basket Tomato</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span> adipisicing Molestiae, provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$80</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/sweet-tomato.jpeg" alt="Sweet Tomato" className='w-50 h-50' /></div>

      <div className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Sweet Tomato</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span> adipisicing elit. Molestiae, provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$150</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/fresh-tomato.jpeg" alt="Fresh Tomato" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Fresh Tomato</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>  adipisicing elit. Molestiae, provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$175</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/red-tomato.jpeg" alt="Red Tomato" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Red Tomato</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae, provident nemo aliquam commodi consectetur doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$20</span>
      </div>
     </div>

     
     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/pepper.jpeg" alt="Pepper" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Bell Pepper</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>  adipisicing elit. Molestiae, provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$120</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/cap-rice.jpeg" alt="Cap Rice" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Cap Rice</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>  adipisicing elit. Molestiae, provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$40</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/stack-rice.jpeg" alt="Stack Rice" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Stack Rice</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae, provident nemo aliquam commodi doloremque consectetur laudantium? consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$110</span>
      </div>
     </div>
    

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/royal-rice.jpeg" alt="Royal Rice" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Royal Rice</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae, provident nemo aliquam commodi doloremque consectetur laudantium?  consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$50</span>
      </div>
      </div>

     
     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/1L-vegetable-oil.jpeg" alt="1L Vegetable-oil" className='w-50 h-50' /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>1L Vegetable-oil</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$250</span>
      </div>
     </div> 
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/5L-vegetable-oil2.jpeg" alt="5L Vegetable-oil" className='w-50 h-50' /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>5L Vegetable-oil</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$170</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/canola-vegetableoil.jpeg" alt="Canola Oil" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Canola Vegetableoil</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$1150</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/laser-vegetable-oil4.jpeg" alt="Laser Vegetableoil" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Laser Vegetableoil</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$230</span>
      </div>
     </div>

     
     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/egg-crates.jpeg" alt="Egg Crates" className='w-50 h-50' /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Egg Crates</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$400</span>
      </div>
     </div>
     

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/fresh-egg.jpeg" alt="Fresh Eggs" className='w-50 h-50' /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Fresh Eggs</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$300</span>
      </div>
     </div>
    

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/water-1.jpeg" alt="Can Water" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Can Water</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque consectetur laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4'>Price:$280</span>
      </div>
     </div>

     <div className='col-span-3 p-3 rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg hover:border-green-400 transition duration-300'>
      <div className='flex justify-center'><img src="/images/bottled-water.jpeg" alt="Bottled Water" className='w-50 h-50'  /></div>

      <div  className='bg-yellow-50 p-5 text-green-600 mt-3 rounded-lg text-center justify-center'>
        <h1 className='text-2xl font-bold'>Bottled Water</h1>
      <p>Lorem ipsum dolor sit amet,<span className='font-bold text-2xl text-amber-400 ml-5'>consectetur</span>adipisicing elit. Molestiae,doloremque consectetur provident nemo aliquam commodi doloremque laudantium?</p>
      <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Add to Cart</button>
      <span className='font-bold text-green-600 ml-5 mt-4 hover:border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300'>Price:$180</span>
      </div>
     </div>
     
  </div>
  )
}
