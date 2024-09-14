import React from "react";
import Header from"../custom/Header"

function Leaflet() {
  return (
    <div>
      <Header/>
        <h3 className="text-center text-3xl font-extrabold p-8 text-[#227a6c]">Find The Destination of Your Choice</h3>
    <div className="w-full h-screen flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d156372.3094698907!2d78.5902630254943!3d25.451760942861018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39777700213d0a51%3A0x23fd61b57aaadf0a!2sBundelkhand%20University%2C%20Jhansi!5e1!3m2!1sen!2sin!4v1726301966964!5m2!1sen!2sin"
        width="90%"
        height="100%"
        loading="eager"
      ></iframe>
    </div>
    </div>
  );
}

export default Leaflet;
