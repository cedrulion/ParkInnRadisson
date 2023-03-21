import React from 'react';


function Header() {
  return (
    <header>
       <div>
      <nav className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center text-sm">
        
        <div className="flex items-center justify-between ">
        
          <div className='md:flex  md:items-center '>
            <div className='flex flex-col ' >
            <a className="text-xl font-bold text-black hover:text-gray-700  " href="#">Radisson</a>
            <a className="text-xl font-bold text-black hover:text-gray-700 " href="#"> Hotels</a>
          </div>
          </div>
          <div className="flex md:hidden">
            <button type="button" className="text-white hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M21 18.999H3v-2h18v2zm0-6H3v-2h18v2zm0-6H3V4h18v2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex md:items-center md:mx-6">
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">MY RESERVATIONNS</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">ENGLISH</a>
           
          </div>
         
            <button className="mr-3 bg-purple-600 rounded-md text-white bg-purple rounded hover:text-blue-600" href="#">JOIN-SIGN IN</button>
            
          
        </div>
    
      </nav>
      </div>
        
      <div className="md:flex md:items-center text-sm ">
          <div className="flex flex-col md:flex-row md:mx-1">
            <a className="my-1  hover:text-blue-600 md:mx-2 md:my-0" href="#">HOTELS</a>
            <a className="my-1  hover:text-blue-600 md:mx-2 md:my-0" href="#">DESTINATIONNS</a>
            <a className="my-1  hover:text-blue-600 md:mx-4 md:my-0" href="#">RADISSON REWARDS</a>
            <a className="my-1 hover:text-blue-600 md:mx-4 md:my-0" href="#">DEALS</a>
            <a className="my-1  hover:text-blue-600 md:mx-4 md:my-0" href="#">RADISSON MEETINGS</a>
            <a className="my-1  hover:text-blue-600 md:mx-4 md:my-0" href="#">EXPERIENCE</a>
            <a className="my-1 text-white hover:text-blue-600 md:mx-4 md:my-0" href="#">DIGITAL SERVICES</a>
            
          </div>
         
          </div>
         
          
          <div className="md:flex md:items-center md:mx-1 bg-white">
          <div className="flex flex-col pl-10 md:flex-row md:mx-1">
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#"> Overview</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#"> Rooms</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Deals</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Meetings & Events</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Restaurants & Bars</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Nearby Attractions</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Spa</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Contact</a>
            <a className="my-1 text-black hover:text-blue-600 md:mx-4 md:my-0" href="#">Review</a>
          </div>
          </div>
    </header>
  );
}

export default Header;
