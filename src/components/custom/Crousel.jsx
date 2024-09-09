import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function Crousel() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
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
              <p className="text-xl text-gray-500 py-3 text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores{" "}
              </p>
            </Typography>
            <div className="flex justify-center gap-2">
            <Link to={'/create-trip'}>
                <Button color="white">Get Started</Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
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
              <p className="text-xl text-gray-500 py-3 text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores{" "}
              </p>
            </Typography>
            <div className="flex gap-2">
            <Link to={'/create-trip'}>
                <Button color="white">Get Started</Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
