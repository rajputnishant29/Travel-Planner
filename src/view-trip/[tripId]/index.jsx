import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import InfoSection from './components/InfoSection';
// import { toast } from 'sonner';

function Viewtrip() {

const {tripId} = useParams();
const [trip,setTrip] = useState([]);

useEffect(()=>{
    tripId&&GetTripData();
},[tripId]);

const GetTripData=async()=>{
    const docRef = doc(db,'AiTrips',tripId);
    const docSnap = await getDoc(docRef)

    if(docSnap.exists){
        console.log("Document:",docSnap.data())
        setTrip(docSnap.data())
    }
    else{
        console.log("No Such Document");
        // toast('No trip found');
    }
}
  return (
    <div className='p-5 md:p-10 xl:p-20'>
       {/* Information Section */}
        <InfoSection trip= {trip}/>
       {/* Recommended Hotels */}
       {/* Daily Plan */}

    </div>
  )
}

export default Viewtrip