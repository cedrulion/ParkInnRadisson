import React from 'react';


function Header() {
  return (
    <header className="shadow text-white bg-gray-500 bg-opacity-75" >
       
      <nav className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center text-sm">
        
        <div className="flex items-center justify-between ">
        
          <div className='md:flex  md:items-center '>
            <div className='flex flex-col ' >
            <a className="text-xl font-bold  hover:text-gray-700  " href="#"><u>RADISSON</u></a>
            <a className="text-xl font-bold  hover:text-gray-700 " href="#"> HOTELS</a>
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
            <a className="my-1 flex hover:text-blue-600 md:mx-4 md:my-0" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>MY RESERVATIONNS</a>
            <a className="my-1 flex hover:text-blue-600 md:mx-4 md:my-0" href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
</svg>ENGLISH</a>
            <a className="my-1 flex hover:text-blue-600 md:mx-4 md:my-0" href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
+250784960378</a>
           
          </div>
         
            <button className="mr-3 bg-purple-600 rounded-md text-white bg-purple rounded hover:text-blue-600 flex" href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>JOIN-SIGN IN</button>
            
          
        </div>
    
      </nav>
        
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
         
          
         
    </header>
  );
}

export default Header;
