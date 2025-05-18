import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Header from "../custom/Header";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(""); 
  const API_KEY = "26e3d37b8a19c9f5faacbd2d91d3a693";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching the weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    return date.toLocaleTimeString(); 
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
        <Header/>
      <h2 className="text-center text-3xl font-bold mt-20 text-[#2ba87f]">
        Check Weather Before your Trip!!{" "}
      </h2>
      <div className="w-[96%] flex justify-center items-center">
        <Input
          className="m-10 "
          placeholder={"Search for a City"}
          type="text"
          onChange={handleCityChange}
        />
        <Button onClick={handleCityChange}>Search</Button>
      </div>

      {weather ? (
        <div className="relative h-screen">
          <img
            className="w-[80%] h-[95%] mx-auto object-cover rounded-3xl"
            src="https://media.istockphoto.com/id/1830419112/vector/3d-cartoon-planet-earth-in-clouds-with-sun.jpg?s=612x612&w=0&k=20&c=Z4TT8aRZznyJEzA7hrpPBkkYqYM1-CTO9-4xqC0TvRY="
            alt=""
          />
          <div className="absolute top-0 left-60 font-bold text-2xl leading-loose text-white">
          <h2 className="py-5 text-gray-800">📌{weather.name}</h2>
           <div className="flex justify-between items-center gap-20">
           <div>
            <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">🌡️ Temperature: {weather.main.temp}°C</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">😌 Feels Like: {weather.main.feels_like}°C</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">☁️ Weather: {weather.weather[0].description}</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">💧 Humidity: {weather.main.humidity}%</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">🍃 Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          <div>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">↗️ Wind Direction: {weather.wind.deg}°</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">🌫️ Visibility: {weather.visibility / 1000} km</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">😶‍🌫️ Cloudiness: {weather.clouds.all}%</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">🌄 Sunrise: {convertTimestampToTime(weather.sys.sunrise)}</p>
          <p className="bg-black rounded-xl px-10 py-5 bg-opacity-60 mb-3">🌇 Sunset: {convertTimestampToTime(weather.sys.sunset)}</p>
          </div>
           </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            className="h-[400px]"
            src="https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Weather;
