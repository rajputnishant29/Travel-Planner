import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Header from"../custom/Header"

function Vlogs() {
  const [city, setCity] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (city) {
      setCity(city);
      console.log(city);
    }
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (!city) return;

    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(city)}%20travel%20blog&key=AIzaSyDC7s4GgPYxP3SNfMCGCgPTz0KDsGO6QQU=&type=video&maxResults=5`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        setError(error.message); // Use 'error' here
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [city]);

  return (
    <div className="w-full">
      <Header/>
      <h2 className="text-3xl font-bold m-4 text-center">
        Travel Vlogs
      </h2>
      <div className="w-[96%] flex justify-center items-center">
      <Input
        className="m-10 "
        placeholder={"Search for a City"}
        type="text"
        onChange={handleCity}
      />
      <Button onClick={handleSubmit}>Search</Button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id.videoId} className="flex justify-center m-10 p-5 rounded-md hover:scale-95">
              <iframe
                width="900"
                height="315"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.snippet.title}
              ></iframe>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center ">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-result-found-2161436-1815078.png" alt="" />
          </div>        
        )}
      </div>
    </div>
  );
}

export default Vlogs;
