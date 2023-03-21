import React from 'react'
import RAD from './RAD.jpg'
function Meetings() {
  return (
    <div className='grid grid-cols-2  ml-8 mx-8'>
        <div>
      <h1 className='text-xl'>Meetings & Events</h1>
      <p className='text-sm'>Easily make the perfect business event come to life thanks to our adaptable
     and versatile event facilities comprising meeting, training and conference
     rooms spread across 500 square meters. Our space can host any type of
    event, from focused meetings for two to 18 people to large groups of up to 400 attendees. Our facilities are happy to provide you with complimentary Wi-Fi, natural daylight, air conditioning, well trained staff and an 
     environmentally conscious carbon offset program.
           </p>
           </div>
           <div className=''>
            <img src={RAD}/>
           </div>
    </div>
  )
}

export default Meetings
