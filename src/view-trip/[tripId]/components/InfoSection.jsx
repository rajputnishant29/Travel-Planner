import React, { useEffect } from 'react'
import { Button } from '../../../components/ui/button'
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from '../../../components/custom/Header';


function InfoSection({trip}) {

  return (
    <div>
        <img className='w-full h-[350px] object-cover rounded' src="https://images.unsplash.com/photo-1702932637011-0cca9517139d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbGxpbmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
        
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
                <div className='flex gap-5'>
                    <h2 className='px-5 py-2 bg-gray-200 rounded-full text-gray-500 text-md'> 🗓️ {trip?.userSelection?.noOfDays} Days</h2>
                    <h2 className='px-5 py-2 bg-gray-200 rounded-full text-gray-500 text-md'> 🧑 Travellers: {trip?.userSelection?.peoples} </h2>
                </div>
            </div>
            <Button>
            <FaShareAlt /> 
            </Button>
        </div>

        {/* hotels */}
        <h2 className='font-bold text-2xl mt-5' >Hotel Recomendations</h2>
        <div className='grid grid-cols-3 gap-10'>
            {trip?.tripData?.hotel_options?.map((hotel,index)=>(
                <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel.name+',' +hotel.address} target='_blank'>
                 <div className='hover:scale-110 transition-all'>
                 <img className='rounded-2xl h-[200px] mt-10 w-full bg-blue-gray-400' src={hotel.img_url} alt='Sorry' />
                    <div className='my-2'>
                        <h2 className='font-medium'> 🏨{hotel.name}</h2>
                        <h2 className='text-sm text-gray-600 my-2'>📌 {hotel.address}</h2>
                        <h2 className='text-xs text-gray-500 bg-zinc-300 p-1 rounded'>{hotel.description}</h2>
                        <h2 className='text-lg font-bold text-green-500'>💵 {hotel.price}</h2>
                        <h2 className='text-lg font-bold text-yellow-400'>⭐ {hotel.rating}</h2>
                    </div>
                 </div>
                </Link>
            ))}


        </div>
            {/* DailyPlans */}

            <div>
                
                <h2 className="font-bold text-2xl mt-2">Daywise Plan & Places to Visit</h2>
                {trip?.tripData?.itinerary ? (
                Object.entries(trip.tripData.itinerary).map(([key, value]) => (
                    <Link to={'https://www.google.com/maps/search/?api=1&query='+value.name} target='_blank'>
                    <div key={key} className="mt-4 bg-gray-200 rounded-lg p-10 w-full hover:bg-gray-300 ">
                        <h1 className='font-bold text-xl mb-3 capitalize'>{key}</h1>
                        <h3 className="font-semibold text-xl">{value.name}</h3>
                        <img src={value.place_image_url} alt={value.name} className="w-full h-[250px] rounded-xl mt-2 bg-gray-400" />
                        <p className='py-1 mt-2'><span className="font-semibold">⌛ Time to Travel:</span> {value.time_to_travel}</p>
                        <p className='py-1'><span className="font-semibold">🌄 Best Time to Visit:</span> {value.best_time_to_visit}</p>
                        <p className='py-1 text-gray-800'><span className="font-semibold text-black">📜 Details:</span> {value.details}</p>
                        <p className='py-1 text-green-500'><span className="font-semibold">💲 Ticket Pricing:</span> {value.ticket_pricing}</p>
                    </div>
                    </Link>
                ))) : ( <p>No itinerary data available</p>)}
            </div>
    </div>
  )  
}

export default InfoSection