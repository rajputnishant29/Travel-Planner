import { useState, useEffect } from "react";
import { Carousel, Button } from "@material-tailwind/react";
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
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <Carousel
        className="overflow-hidden"
        activeIndex={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        transition={{ duration: 1.5 }} // Smooth transition
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-screen w-full object-cover"
            />
            <div className="absolute inset-0 grid w-full place-items-center bg-black/60">
              <div className="w-3/4 text-center md:w-2/4 px-4 md:px-0">
                <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-[#8ad8c4]">
                  Discover Your Next Adventure with Us:
                  <span className="block text-white mt-2">
                    Personalized Planning at Your Fingertips
                  </span>
                </h1>
                <div className="flex justify-center gap-4 mt-6">
                  <Link to="/create-trip">
                    <Button
                      color="white"
                      className="text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
