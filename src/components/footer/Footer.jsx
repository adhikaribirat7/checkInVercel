import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className="col-span-12 flex flex-col w-full m-auto p-3 ">
      <div className="sm:w-[80%] w-[95%] border-2 bg-black p-3 text-white flex justify-center lg:flex-row flex-col items-center m-auto rounded-3xl lg:h-64 ">
        <div className=" lg:w-[50%] flex justify-center items-center h-full">
          <span className="lg:text-6xl text-3xl font-extrabold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </span>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 w-full lg:w-[40%] p-3">
          <div className="flex justify-center items-center w-full">
            {/* <MdEmail className="bg-white lg:h-14 h-10 p-1 text-black rounded-l-xl  sm:text-6xl text-3xl" />
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-r-full text-black w-full pl-4 lg:text-xl outline-none lg:h-14 h-10"
            /> */}
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="flex  bg-bg-grey justify-evenly items-center  flex-wrap ">
        <div className="h-full justify-evenly  w-[100%] gap-4 sm:w-[30%]  flex flex-col">
          <span className="text-6xl font-extrabold">VINTAGE SPORTS</span>
          <span className="text-xl text-gray-500 font-semibold">
            We have clothes that suits your style and which you''re proude to
            wear. From woment to men
          </span>
          <div className="flex gap-4 text-3xl">
            <span>
              <Link>
                <FaInstagram />
              </Link>
            </span>

            <span>
              <Link>
                <FaFacebook />
              </Link>
            </span>
          </div>
        </div>
        <div className="h-full justify-evenly gap-4 flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
        <div className="h-full justify-evenly gap-4  flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
        <div className="h-full justify-evenly gap-4 flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
        <div className="h-full justify-evenly gap-4 flex flex-col">
          <span className="text-2xl font-bold">Company</span>
          <span className="text-xl text-gray-500 font-semibold">About</span>
          <span className="text-xl text-gray-500 font-semibold">Features</span>
          <span className="text-xl text-gray-500 font-semibold">Works</span>
          <span className="text-xl text-gray-500 font-semibold">Carrer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="h-full justify-evenly  flex flex-col">
<span className="text-2xl font-bold">Company</span>
<span className="text-xl text-gray-500 font-semibold">About</span>
<span className="text-xl text-gray-500 font-semibold">Features</span>
<span className="text-xl text-gray-500 font-semibold">Works</span>
<span className="text-xl text-gray-500 font-semibold">Carrer</span>
</div> */
}
