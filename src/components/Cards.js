import React from 'react';
import "tailwindcss/tailwind.css";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './Header.css' 
import RAD from './RAD.jpg'


function Cards() {
 
  return (
    <div className='mx-8 text-sm p-6 '>
       <div className="md:flex md:items-center md:mx-1 bg-white ">
          <div className="flex flex-col pl-10 md:flex-row md:mx-1">
           <button className=' '> <a className="my-1 text-black hover:underline md:mx-4 md:my-0" href="#"> Overview</a></button>
           <button><a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#"> Rooms</a></button>
           <button><a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Deals</a></button>
           <button> <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Meetings & Events</a></button>
           <button> <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Restaurants & Bars</a></button>
           <button> <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Nearby Attractions</a></button>
           <button> <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Spa</a></button>
           <button> <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Contact</a></button>
           <button> <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Review</a></button>
          </div>
    
          </div>
      <h1 className='p-4 text-xl'>A contemporary hotel in the Rwandan capital</h1>
      <p className='p-4 '>
      Offering a prime city center location, the Park Inn by Radisson Kigali is the premier hotel choice in Rwanda's capital city. The hotel is within easy reach of government buildings like the Presidential Palace and the Kigali Genocide Memorial Center. The international airport is just 12 kilometers away, and airport shuttles to and from the hotel are available. Our 161 modern rooms and suites include amenities like free high-speed Wi-Fi and vibrant furnishings, so you can stay connected in comfort. When it comes to dining, the Live Inn Room Restaurant offers a modern, cozy atmosphere, along with a delectable range of international dishes. The restaurant is open for breakfast, lunch, and dinner.
      </p>
      <button className='text-red-400 p-4'>Read more</button>
   <div className='p-4 '>
      <h1 className='text-xl'>Modern and cozy rooms in Kigali</h1>
      <p>Park Inn by Radisson Kigali features 161 rooms for business or leisure travelers, complete with free Wi-Fi and in-room </p>
      <p>coffee and tea facilities.</p>
      
        </div>
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div className='w-15 h-10'><img  className="img w-full h-auto" src= {RAD}/>
           <h1 className='text-xl'>Standard Room</h1>
           <p className='text-sm p-2'>Our Standard Rooms offer ample space and the choice between double and twin beds</p>
           </div>  
           <div ><img  className="img" src= {RAD}/>
           <h1 className='text-xl'>High Floor Standard Room</h1>
           <p className='text-sm p-2'>Our Standard Rooms offer ample space and the choice between double and twin beds.</p>
           </div>  
           <div ><img  className="img" src= {RAD}/>
           <h1 className='text-xl'>Superior Room</h1>
           <p className='text-sm p-2'>Upgrade your stay with our Superior Rooms to enjoy more space and additional in-room amenities.</p>
           </div>  
           <div ><img  className="img" src= {RAD}/>
           <h1 className='text-xl'>One Bedroom Suite</h1>
           <p className='text-sm p-2'>If you are traveling with friends or family, book one of our Suites and enjoy extra space and comfort</p>
           </div>  
           <div ><img  className="img" src= {RAD}/>
           <h1 className='text-xl'>Family Room</h1>
           <p className='text-sm p-2'>With a choice of extra beds and cots, our Family Rooms provide optimal space when traveling with children.</p>
           </div>  
           <div ><img  className="img" src= {RAD}/>
           <h1 className='text-xl'>Friend & Family Stay-Multiple Room</h1>
           <p className='text-sm p-2'>Our Standard Rooms offer ample space and the choice between double and twin beds.</p>
           </div>  
       
         
         
      </OwlCarousel>  
   
      </div>  
      <div class="flex justify-center">
  <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
    Book Now
  </button>
</div>
    </div>
      
        
 
  );
}




export default Cards
