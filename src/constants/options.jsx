export const SelectTravelsList=[
    {
        id: 1,
        title:'Just Me',
        Desc:'A solo traveller in exploration',
        icon:'👦',
        people:'1'
    },
    {
        id: 2,
        title:'A couple',
        Desc:'Two travellers in tandem',
        icon:'💑',
        people:'2'
    },
    {
        id: 3,
        title:'Family',
        Desc:'Family trip ',
        icon:'👨‍👩‍👧‍👦',
        people:'5'
    }
]
export const SelectBudget=[
    {
        id: 1,
        title:'Low',
        Desc:'Free or Low Price Hotels and Low Price Tickets',
        icon:'💵',
        Budget:'Low'
    },
    {
        id: 2,
        title:'Medium',
        Desc:'Mid Price Hotels and  Fare Price Tickets',
        icon:'💷',
        Budget:'Medium'
    },
    {
        id: 3,
        title:'High',
        Desc:'Luxury Hotels',
        icon:'💰',
        Budget:'High'
    },
]

export const AI_PROMPT =  "Generate Travel Plan for Location: {location}, for {totalDays} Days for {peoples} with a low budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url from google easy open, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url from google, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."