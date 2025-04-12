import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
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
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Las Vegas, for 3 days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates,rating, descriptions and suggest itinerary with placeName, placeDetails, Place Image Url, Geo Coordinates, ticket Pricing,  rating, Time travel each of the location for 3 days with each day plan with best time to visit in json format. ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '## Las Vegas Budget Trip for a Couple (3 Days) \n\n**Hotels:**\n\n```json\n[\n  {\n    "HotelName": "Circus Circus Hotel & Casino",\n    "HotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n    "Price": "$50-$100/night",\n    "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/CircusCircusHotelAndCasino.jpg/1200px-CircusCircusHotelAndCasino.jpg",\n    "GeoCoordinates": "36.1086,-115.1712",\n    "Rating": "3.5 stars",\n    "Description": "A classic Las Vegas hotel with a carnival theme, offering budget-friendly rooms, a circus act, and a variety of dining options."\n  },\n  {\n    "HotelName": "The D Las Vegas",\n    "HotelAddress": "301 Fremont St, Las Vegas, NV 89101",\n    "Price": "$40-$80/night",\n    "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/TheDLasVegas.jpg/1280px-TheDLasVegas.jpg",\n    "GeoCoordinates": "36.1683,-115.1437",\n    "Rating": "3.5 stars",\n    "Description": "Located on Fremont Street, this hotel offers a retro vibe with affordable rooms and access to the vibrant pedestrian mall."\n  },\n  {\n    "HotelName": "Golden Nugget Las Vegas",\n    "HotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n    "Price": "$60-$120/night",\n    "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/GoldenNuggetLasVegas.jpg/1024px-GoldenNuggetLasVegas.jpg",\n    "GeoCoordinates": "36.1685,-115.1418",\n    "Rating": "4 stars",\n    "Description": "A luxurious hotel with a vibrant casino, a shark tank aquarium, and various dining options. Offers more upscale experience at a slightly higher price."\n  }\n]\n```\n\n**Itinerary:**\n\n```json\n[\n  {\n    "Day": 1,\n    "Plan": [\n      {\n        "Time": "10:00 AM",\n        "PlaceName": "Fremont Street Experience",\n        "PlaceDetails": "Explore the vibrant pedestrian mall with its canopy of lights, street performers, and numerous shops and restaurants.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/FremontStreetExperience-VegasSign.jpg/1280px-FremontStreetExperience-VegasSign.jpg",\n        "GeoCoordinates": "36.1689,-115.1419",\n        "TicketPricing": "Free",\n        "Rating": "4.5 stars",\n        "TimeTravel": "2-3 hours"\n      },\n      {\n        "Time": "1:00 PM",\n        "PlaceName": "The Mob Museum",\n        "PlaceDetails": "Learn about the fascinating history of organized crime in Las Vegas and its impact on the city.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Mob_Museum_Las_Vegas.jpg/1280px-The_Mob_Museum_Las_Vegas.jpg",\n        "GeoCoordinates": "36.1682,-115.1443",\n        "TicketPricing": "$25-$35",\n        "Rating": "4 stars",\n        "TimeTravel": "2 hours"\n      },\n      {\n        "Time": "6:00 PM",\n        "PlaceName": "Dinner at a local diner",\n        "PlaceDetails": "Enjoy a budget-friendly and delicious meal at a classic American diner.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Las_Vegas_Neon_Museum_Entrance.jpg/1280px-Las_Vegas_Neon_Museum_Entrance.jpg",\n        "GeoCoordinates": "36.1708,-115.1426",\n        "TicketPricing": "N/A",\n        "Rating": "4 stars",\n        "TimeTravel": "1 hour"\n      },\n      {\n        "Time": "7:30 PM",\n        "PlaceName": "Free Show on the Strip",\n        "PlaceDetails": "Catch a free show on the Las Vegas Strip like the Bellagio Fountains or the Wynn\'s Lake of Dreams.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bellagio_Fountains.jpg/1280px-Bellagio_Fountains.jpg",\n        "GeoCoordinates": "36.1170,-115.1732",\n        "TicketPricing": "Free",\n        "Rating": "4.5 stars",\n        "TimeTravel": "1 hour"\n      }\n    ]\n  },\n  {\n    "Day": 2,\n    "Plan": [\n      {\n        "Time": "9:00 AM",\n        "PlaceName": "Las Vegas Natural History Museum",\n        "PlaceDetails": "Learn about the diverse natural history of Nevada and the Southwest.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Las_Vegas_Natural_History_Museum.jpg/1280px-Las_Vegas_Natural_History_Museum.jpg",\n        "GeoCoordinates": "36.1671,-115.1443",\n        "TicketPricing": "$15-$20",\n        "Rating": "4 stars",\n        "TimeTravel": "2 hours"\n      },\n      {\n        "Time": "11:00 AM",\n        "PlaceName": "Neon Museum",\n        "PlaceDetails": "Explore a collection of vintage neon signs from Las Vegas\' history.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Las_Vegas_Neon_Museum_Entrance.jpg/1280px-Las_Vegas_Neon_Museum_Entrance.jpg",\n        "GeoCoordinates": "36.1708,-115.1426",\n        "TicketPricing": "$20-$25",\n        "Rating": "4.5 stars",\n        "TimeTravel": "1.5 hours"\n      },\n      {\n        "Time": "1:00 PM",\n        "PlaceName": "Lunch at a food court",\n        "PlaceDetails": "Enjoy a quick and affordable lunch at a food court in one of the casinos.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Caesar%27s_Palace_Casino.jpg/1024px-Caesar%27s_Palace_Casino.jpg",\n        "GeoCoordinates": "36.1142,-115.1710",\n        "TicketPricing": "N/A",\n        "Rating": "3.5 stars",\n        "TimeTravel": "1 hour"\n      },\n      {\n        "Time": "2:30 PM",\n        "PlaceName": "Free Pool Day",\n        "PlaceDetails": "Take advantage of the free pool access at your hotel or a nearby casino.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/TreasureIslandLasVegasPoolArea.jpg/1280px-TreasureIslandLasVegasPoolArea.jpg",\n        "GeoCoordinates": "36.1120,-115.1728",\n        "TicketPricing": "Free",\n        "Rating": "4 stars",\n        "TimeTravel": "3 hours"\n      },\n      {\n        "Time": "6:00 PM",\n        "PlaceName": "Dinner at a buffet",\n        "PlaceDetails": "Enjoy a delicious and affordable dinner at a casino buffet. Many casinos offer discounted buffet prices for dinner."\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Las_Vegas_Buffet.jpg/1280px-Las_Vegas_Buffet.jpg",\n        "GeoCoordinates": "36.1155,-115.1699",\n        "TicketPricing": "$20-$30",\n        "Rating": "4 stars",\n        "TimeTravel": "2 hours"\n      }\n    ]\n  },\n  {\n    "Day": 3,\n    "Plan": [\n      {\n        "Time": "10:00 AM",\n        "PlaceName": "Red Rock Canyon National Conservation Area",\n        "PlaceDetails": "Enjoy scenic drives and hiking trails in this beautiful desert landscape just outside of Las Vegas.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Red_Rock_Canyon_National_Conservation_Area%2C_Nevada_USA.jpg/1280px-Red_Rock_Canyon_National_Conservation_Area%2C_Nevada_USA.jpg",\n        "GeoCoordinates": "36.1671,-115.1443",\n        "TicketPricing": "$15 per vehicle",\n        "Rating": "4.5 stars",\n        "TimeTravel": "4 hours"\n      },\n      {\n        "Time": "2:00 PM",\n        "PlaceName": "Lunch at a park",\n        "PlaceDetails": "Pack a picnic and enjoy a relaxing lunch at a park in Las Vegas.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Las_Vegas_Springs_Preserve%2C_Nevada%2C_USA_-_panorama.jpg/1280px-Las_Vegas_Springs_Preserve%2C_Nevada%2C_USA_-_panorama.jpg",\n        "GeoCoordinates": "36.1009,-115.1842",\n        "TicketPricing": "N/A",\n        "Rating": "4 stars",\n        "TimeTravel": "1.5 hours"\n      },\n      {\n        "Time": "4:00 PM",\n        "PlaceName": "Free Casino Games",\n        "PlaceDetails": "Try your luck at the slot machines or table games with a free casino offer or low-limit tables.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Venetian_Casino.jpg/1280px-Venetian_Casino.jpg",\n        "GeoCoordinates": "36.1182,-115.1707",\n        "TicketPricing": "Free",\n        "Rating": "3.5 stars",\n        "TimeTravel": "2 hours"\n      },\n      {\n        "Time": "6:00 PM",\n        "PlaceName": "Dinner at a food truck",\n        "PlaceDetails": "Sample the diverse offerings of Las Vegas\' food truck scene for an affordable and flavorful meal.",\n        "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Food_truck_rally.jpg/1280px-Food_truck_rally.jpg",\n        "GeoCoordinates": "36.1683,-115.1437",\n        "TicketPricing": "N/A",\n        "Rating": "4 stars",\n        "TimeTravel": "1 hour"\n      }\n    ]\n  }\n]\n```\n\n**Note:** This itinerary is a suggestion and can be adjusted based on your interests and preferences. Remember to check for any promotions or discounts on tickets and attractions. \n',
        },
      ],
    },
  ],
});
