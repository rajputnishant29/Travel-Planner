import { useState, useEffect } from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Crousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Carousel
      className="rounded-xl"
      activeIndex={activeIndex} // Control which slide is shown
      onChange={(index) => setActiveIndex(index)} // Handle manual slide change
    >
      {images.map((image, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                <h1 className="font-extrabold text-[40px] text-center mt-12">
                  <span className="text-[#8ad8c4]">
                    Discover your next adventure with us :
                  </span>{" "}
                  Personalized Planning at your Fingertips
                </h1>
              </Typography>
              <div className="flex justify-center gap-2">
                <Link to={'/create-trip'}>
                  <Button color="white">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
