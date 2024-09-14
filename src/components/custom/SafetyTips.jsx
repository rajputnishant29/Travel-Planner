import React from 'react'
import Header from './Header';

function SafetyTips() {
    const safetyTips = [
        "Research your destination: Understand the local customs, laws, and safety concerns of your destination. Check travel advisories and local news for any recent updates.",
        "Keep copies of important documents: Make photocopies or digital backups of your passport, visa, travel insurance, and other important documents. Store them separately from the originals.",
        "Secure your belongings: Use a money belt or hidden pouch for valuables like cash, credit cards, and important documents. Avoid carrying large amounts of cash.",
        "Avoid public Wi-Fi for sensitive transactions: Avoid using public Wi-Fi networks for online banking or accessing sensitive information. Use a VPN if necessary.",
        "Be aware of your surroundings: Stay alert and pay attention to your surroundings, especially in crowded areas or unfamiliar places. Trust your instincts.",
        "Use reliable transportation: Use reputable and licensed transportation services. Avoid accepting rides from strangers or using unmarked taxis.",
        "Follow local laws and regulations: Adhere to local laws and regulations, including rules about alcohol consumption, dress codes, and behavior.",
        "Stay informed about health risks: Check for any health risks or vaccination requirements for your destination. Carry any necessary medications and a basic first aid kit.",
        "Verify accommodation legitimacy: Book accommodations through reputable websites or agencies. Read reviews and check for any red flags.",
        "Lock your accommodation: Always lock doors and windows when you’re inside your accommodation. Use the hotel safe for valuables if available.",
        "Know emergency exits: Familiarize yourself with the emergency exits and fire escape routes in your accommodation.",
        "Blend in: Dress modestly and avoid drawing unnecessary attention to yourself. Try to blend in with the locals to avoid being targeted as a tourist.",
        "Use safe ATMs: Use ATMs in well-lit and secure areas, preferably within bank branches or shopping centers. Be cautious of anyone hovering around you.",
        "Avoid risky areas: Stay away from areas known for high crime rates or areas that are poorly lit or deserted.",
        "Limit alcohol consumption: Drink alcohol responsibly and be aware of your surroundings. Avoid accepting drinks from strangers.",
        "Stay connected: Keep in touch with friends or family regularly. Share your travel itinerary and emergency contact details with someone you trust.",
        "Know local emergency numbers: Familiarize yourself with the local emergency contact numbers (e.g., police, medical services, fire department).",
        "Have a local SIM card or international roaming: Ensure you have a way to make phone calls or access the internet in case of emergencies. Consider getting a local SIM card or enabling international roaming.",
        "Carry a first aid kit: Carry a basic first aid kit with essential items like bandages, pain relievers, antiseptic wipes, and any personal medications."
      ];
  return (
    <div>
        <Header/>
        <div className='px-10 h-full relative'>
        <div className='relative'>
        <img className="h-[600px] w-full object-cover " src="https://cdn.vectorstock.com/i/1000v/13/34/adventure-hike-of-happy-friends-vector-8221334.jpg" alt="" />
        <h1 className='absolute bottom-0 left-40 text-[#2ba87f]  px-4 py-2 text-[75px] text-center font-bold'>Safety Tips For Travelling</h1>
        </div>
        <div className='px-20 m-10'>
        <img className="absolute right-0 bottom-80 "src="https://th.bing.com/th/id/OIP.iEv7L571YtrM0O0hiztCXAAAAA?w=119&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        
        {/* <h4 className='text-lg font-semibold m-10'>Ensure you have a way to make phone calls or access the internet in case of emergencies. Consider getting a local SIM card or enabling international roaming.</h4>
        <h4 className='text-lg font-semibold m-10'>Ensure you have a way to make phone calls or access the internet in case of emergencies. Consider getting a local SIM card or enabling international roaming.</h4>
        <h4 className='text-lg font-semibold m-10'>Ensure you have a way to make phone calls or access the internet in case of emergencies. Consider getting a local SIM card or enabling international roaming.</h4>
        <h4 className='text-lg font-semibold m-10'>Ensure you have a way to make phone calls or access the internet in case of emergencies. Consider getting a local SIM card or enabling international roaming.</h4>
        <h4 className='text-lg font-semibold m-10'>Ensure you have a way to make phone calls or access the internet in case of emergencies. Consider getting a local SIM card or enabling international roaming.</h4>  */}

        <div>
            <img className='h-[250px] absolute left-0 mt-80' src="https://thumbs.dreamstime.com/b/worker-presentation-pose-d-illustration-51526000.jpg" alt="" />
            {/* <img className="absolute left-0 mt-"src="https://th.bing.com/th/id/OIP.iEv7L571YtrM0O0hiztCXAAAAA?w=119&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /> */}
        {safetyTips.map((tip, index) => (
            <div>
                <h4 className='text-lg font-semibold mx-10 my-5 bg-pink-50 p-8 rounded-xl hover:scale-105 transition-all' key={index}>{tip}</h4>
            </div>
        ))}
        </div>

    </div>
    </div>

    </div>  
    )
}

export default SafetyTips