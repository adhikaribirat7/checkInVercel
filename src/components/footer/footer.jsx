import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className="col-span-12 flex mt-20 flex-col w-full m-auto ">
      <div className="lg:w-[80%] w-[95%]  bg-black p-3 text-white flex justify-center lg:flex-row flex-col items-center m-auto rounded-3xl lg:h-64 ">
        <div className=" lg:w-[50%] flex justify-center items-center h-full">
          <span className="lg:text-6xl text-3xl font-extrabold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </span>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 w-full lg:w-[40%] p-3">
          <div className="flex justify-center items-center w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="flex bg-bg-grey border-2 lg:flex-row flex-col justify-center w-full items-center p-3">
        <div className="h-full justify-evenly w-full items-startlg:gap-4 gap-2 flex flex-col">
          <span className="lg:text-6xl text-4xl font-semibold">VINTAGE SPORTS</span>
          <span className="text-sm text-bg-gray">
            We have clothes that suits your style and which you''re proude to
            wear. From woment to men
          </span>
          <div className="flex gap-4 text-xl">
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
        <div className="h-full pt-4 justify-evenly gap-4 flex w-full ">
          <div className="flex justify-center items-start flex-col">
          <span className="text-sm font-semibold">Company</span>
          <span className="text-sm text-gray-500">About</span>
          <span className="text-sm text-gray-500">Features</span>
          <span className="text-sm text-gray-500">Works</span>
          <span className="text-sm text-gray-500">Carrer</span>
          </div>
          <div className="flex justify-center items-start flex-col">
          <span className="text-sm font-semibold">Company</span>
          <span className="text-sm text-gray-500 ">About</span>
          <span className="text-sm text-gray-500 ">Features</span>
          <span className="text-sm text-gray-500 ">Works</span>
          <span className="text-sm text-gray-500 ">Carrer</span>
          </div>
          <div className="flex justify-center items-start flex-col">
          <span className="text-sm font-semibold">Company</span>
          <span className="text-sm text-gray-500">About</span>
          <span className="text-sm text-gray-500">Features</span>
          <span className="text-sm text-gray-500">Works</span>
          <span className="text-sm text-gray-500">Carrer</span>
          </div>

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
