import React, { useEffect } from 'react'
import { Button } from '../../../components/ui/button'
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from '../../../components/custom/Header';


function InfoSection({trip}) {

  return (
    <div>
        <img className='w-full h-[420px] object-cover rounded' src="https://static.vecteezy.com/system/resources/previews/004/928/884/original/travel-3d-text-design-travel-the-world-in-famous-landmarks-and-famous-destinations-with-3d-text-in-blue-background-for-adventure-vacation-illustration-vector.jpg" alt="" />
        
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
                <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel.HotelName+',' +hotel.HotelAddress} target='_blank'>
                 <div className='hover:scale-110 transition-all'>
                 <img className='rounded-2xl h-[260px] mt-10 w-full bg-blue-gray-400' src="https://static.turbosquid.com/Preview/2014/07/09__07_56_47/1.jpg90ab0737-001c-42ee-a3b1-488c25e455bbOriginal.jpg" alt='Sorry' />
                    <div className='my-2'>
                        <h2 className='font-medium'> 🏨{hotel.HotelName}</h2>
                        <h2 className='text-sm text-gray-600 my-2'>📌 {hotel.HotelAddress}</h2>
                        <h2 className='text-xs text-gray-500 bg-zinc-300 p-1 rounded'>{hotel.description}</h2>
                        <h2 className='text-lg font-bold text-green-500'>💵 {hotel.Price}</h2>
                        <h2 className='text-lg font-bold text-orange-400 mb-1'>⭐ {hotel.rating}</h2>
                        <a href='https://www.oyorooms.com/'><Button color="white">Book Now</Button></a>
                    </div>
                 </div>
                </Link>
            ))}


        </div>
            {/* DailyPlans */}
<div>
    <h2 className="font-bold text-2xl mt-10">Daywise Plan & Places to Visit</h2>
    {trip?.tripData?.itinerary ? (
        Object.entries(trip.tripData.itinerary)
            .sort(([keyA], [keyB]) => {
                // Extract day numbers and sort them
                const dayA = parseInt(keyA.replace(/\D/g, ""), 10);
                const dayB = parseInt(keyB.replace(/\D/g, ""), 10);
                return dayA - dayB;
            })
            .map(([key, value]) => (
                <Link to={'https://www.google.com/maps/search/?api=1&query=' + value.name} target='_blank' key={key}>
                    <div className="mt-4 bg-gray-200 rounded-lg p-10 w-full hover:bg-gray-300 ">
                        <h1 className='font-bold text-xl mb-3 capitalize'>{key}</h1>
                        <h3 className="font-semibold text-xl">{value.placeName}</h3>
                        <p className='py-1 mt-2'><span className="font-semibold">⌛ Time to Travel:</span> {value.timeToTravel}</p>
                        <p className='py-1'><span className="font-semibold">🌄 Best Time to Visit:</span> {value.bestTimeToVisit}</p>
                        <p className='py-1 text-gray-800'><span className="font-semibold text-black">📜 Details:</span> {value.placeDetails}</p>
                        <p className='py-1 text-green-500'><span className="font-semibold">💲 Ticket Pricing:</span> {value.ticketPricing}</p>
                    </div>
                </Link>
            ))
    ) : (
        <p>No itinerary data available</p>
    )}
</div>

    </div>
  )  
}

export default InfoSection