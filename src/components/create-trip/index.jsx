import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { AI_PROMPT, SelectBudget, SelectTravelsList } from '../../constants/options';
import { Button } from '../ui/button';
import { useToast } from "@/components/ui/use-toast";
import { chatSession } from '../../service/AIModel';
import { doc, setDoc } from "firebase/firestore"; 
import { TbLoader } from "react-icons/tb";
import { db } from '../../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Header from '../custom/Header';
import { RotatingCircleLoader } from 'react-loaders-kit';

function CreateTrip() {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const SaveAiTrip = async (TripData) => {
        setLoading(true);
        console.log("AI Response:", TripData);

        try {
            const parsedTripData = JSON.parse(TripData);
            const docId = Date.now().toString();
            await setDoc(doc(db, "AiTrips", docId), {
                userSelection: formData,
                tripData: parsedTripData,
                id: docId,
            });
            navigate('/view-trip/' + docId);
        } catch (error) {
            console.error("Failed to parse JSON:", error);
            toast({ description: "Failed to generate trip. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const OnGenerateTrip = async () => {
        const user = localStorage.getItem('user');

        if (!formData?.noOfDays || !formData?.peoples || !formData?.location) {
            toast({
                description: "Please Fill all Details!"
            });
            return;
        } else {
            setLoading(true);
            const FINAL_PROMPT = AI_PROMPT
                .replace('{location}', formData?.location)
                .replace('{totalDays}', formData?.noOfDays)
                .replace('{peoples}', formData?.peoples);

            console.log(FINAL_PROMPT);

            try {
                const result = await chatSession.sendMessage(FINAL_PROMPT);
                const responseText = await result?.response?.text();
                console.log(responseText);

                if (responseText) {
                    SaveAiTrip(responseText);
                } else {
                    throw new Error("Empty response from AI");
                }
            } catch (error) {
                console.error("Error during AI call:", error);
                toast({ description: "Failed to generate trip. Please try again." });
                setLoading(false);
            }
        }
    };
    const loaderProps = {
        loading,
        size: 40,
        duration: 1.2,
        colors: ['#5e22f0', '#5e22f0', '#f6b93b', '#ef5777'],
    }

    return (
        
        <div>
            <Header />
           {loading ? <div className='flex justify-center items-center mt-60'><RotatingCircleLoader {...loaderProps} /> </div>: 
           <div className='sm:px-10 md:px-32 lg:px-56 px-5 mt-10'>
               <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
               <p className='mt-3 text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni rem quas tempora.</p>
               <div className='mt-10 flex flex-col gap-5'>
                   <div>
                       <h2 className='text-xl my-3 font-medium'>What is the destination of choice?</h2>
                       <Input
                           placeholder={'Ex. New York'}
                           type="text"
                           onChange={(e) => handleInputChange('location', e.target.value)}
                       />
                   </div>
                   <div>
                       <h2 className='text-xl my-3 font-medium'>For how many days are you planning your trip?</h2>
                       <Input
                           placeholder={"Ex. 3"}
                           type="number"
                           onChange={(e) => handleInputChange('noOfDays', e.target.value)}
                       />
                   </div>
                   <div>
                       <h2 className='text-xl my-3 font-medium'>Who is travelling?</h2>
                       <div className='grid grid-cols-3 gap-5 mt-5'>
                           {SelectTravelsList.map((item, index) => (
                               <div
                                   key={index}
                                   onClick={() => handleInputChange('peoples', item.title)}
                                   className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.peoples === item.title ? 'shadow-lg border-black' : ''}`}
                               >
                                   <h2 className='text-3xl'>{item.icon}</h2>
                                   <h2 className='font-bold text-lg'>{item.title}</h2>
                                   <h2 className='text-sm text-gray-600'>{item.Desc}</h2>
                               </div>
                           ))}
                       </div>
                   </div>
                   <div>
                       <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
                       <div className='grid grid-cols-3 gap-5 mt-5'>
                           {SelectBudget.map((item, index) => (
                               <div
                                   key={index}
                                   onClick={() => handleInputChange('budget', item.title)}
                                   className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.budget === item.title ? 'shadow-lg border-black' : ''}`}
                               >
                                   <h2 className='text-3xl'>{item.icon}</h2>
                                   <h2 className='font-bold text-lg'>{item.title}</h2>
                                   <h2 className='text-sm text-gray-600'>{item.Desc}</h2>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>

               <div className='my-10 flex justify-end'>
                   <Button onClick={OnGenerateTrip}>
                       {loading ? <RotatingCircleLoader {...loaderProps} /> : 'Generate Trip'}
                   </Button>
               </div>
           </div>
           }
        </div>
    );
}

export default CreateTrip;
