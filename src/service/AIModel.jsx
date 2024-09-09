import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate travel plan for Location: Las Vegas, for 3 days for Couple with a cheap budget, Give me a Hotels options list with Hotel name , Hotel Address, Price, Hotel image URL, geo coordinates, rating, description and suggest itinerary with place Name, place Details,Place image URL , GeoCoordinates, ticket Pricing, Time T travel each of the location for 3 days with each day plan with best time to visit in JSON format ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '## Las Vegas 3-Day Budget Trip for a Couple (JSON Format)\n\n```json\n{\n  "hotel_options": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$100/night",\n      "image_url": "https://www.theDcasino.com/images/hero/hero-fremont-street-experience.jpg",\n      "geo_coordinates": "36.1699, -115.1422",\n      "rating": "4.0 stars",\n      "description": "A retro-themed hotel with a central location on Fremont Street, offering affordable rooms and easy access to the vibrant Downtown area."\n    },\n    {\n      "name": "Golden Nugget Las Vegas",\n      "address": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price": "$70-$150/night",\n      "image_url": "https://golden nugget.com/wp-content/uploads/2022/08/GN_HeroImage_Desktop_Mobile_1.jpg",\n      "geo_coordinates": "36.1692, -115.1420",\n      "rating": "4.5 stars",\n      "description": "A luxurious hotel with a historic charm, featuring a famous shark tank, multiple pools, and a lively casino."\n    },\n    {\n      "name": "The Orleans Hotel & Casino",\n      "address": "4500 W Tropicana Ave, Las Vegas, NV 89103",\n      "price": "$60-$120/night",\n      "image_url": "https://www.orleanscasino.com/content/dam/caesars/orleans/home/hero-images/ORL_Hero_Desktop_1.jpg",\n      "geo_coordinates": "36.0978, -115.1866",\n      "rating": "4.0 stars",\n      "description": "A spacious hotel with a relaxed atmosphere, offering a variety of amenities including a large pool complex, bowling alley, and multiple dining options."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "name": "Downtown Las Vegas",\n      "details": "Explore the historic Fremont Street Experience, enjoy a free show at the Golden Nugget\'s aquarium, and have dinner at a local eatery.",\n      "place_image_url": "https://www.visitlasvegas.com/sites/default/files/styles/hero_image_4_3/public/2021-03/FremontStreetExperienceLasVegas_600x450.jpg",\n      "geo_coordinates": "36.1699, -115.1422",\n      "ticket_pricing": "Free for Fremont Street Experience",\n      "time_to_travel": "3 hours",\n      "best_time_to_visit": "Late afternoon/early evening"\n    },\n    "day2": {\n      "name": "The Strip & Bellagio Fountains",\n      "details": "Walk along the famous Las Vegas Strip, admire the Bellagio Fountains show, and enjoy a free cocktail at a casino.",\n      "place_image_url": "https://www.visitlasvegas.com/sites/default/files/styles/hero_image_4_3/public/2021-04/BellagioFountains_600x450.jpg",\n      "geo_coordinates": "36.1146, -115.1727",\n      "ticket_pricing": "Free for the fountains",\n      "time_to_travel": "4 hours",\n      "best_time_to_visit": "Evening"\n    },\n    "day3": {\n      "name": "Red Rock Canyon National Conservation Area",\n      "details": "Drive to Red Rock Canyon for stunning desert views, go for a hike, and enjoy a picnic lunch.",\n      "place_image_url": "https://www.nps.gov/redr/learn/nature/images/RedRockCanyon_001.jpg",\n      "geo_coordinates": "36.1317, -115.2863",\n      "ticket_pricing": "$15 per vehicle",\n      "time_to_travel": "5 hours",\n      "best_time_to_visit": "Morning/afternoon"\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary is a suggestion, and you can customize it based on your interests and preferences. \n* You can find cheap food options throughout Las Vegas, from food trucks to buffets.\n* Consider using public transportation or ride-sharing services to save on parking and gas.\n* Be sure to check for free events and promotions offered by the hotels and casinos.\n* Remember to stay hydrated and wear sunscreen, especially during outdoor activities.\n\n**Additional Tips:**\n\n* **Free Shows:** Many casinos offer free shows, including musical performances, magic acts, and more. Check the schedules online or at the hotel concierge.\n* **Happy Hour Deals:** Take advantage of happy hour deals at bars and restaurants, which can save you money on drinks and appetizers.\n* **Free Activities:** Las Vegas offers many free activities, such as exploring the Strip, visiting the Bellagio Conservatory & Botanical Gardens, and enjoying the Fremont Street Experience.\n* **Discount Cards:** Look into discount cards, such as the Las Vegas Entertainment Book or the Go Las Vegas Card, which can offer savings on attractions and shows.\n\n**Enjoy your budget-friendly trip to Las Vegas!** \n',
        },
      ],
    },
  ],
});

