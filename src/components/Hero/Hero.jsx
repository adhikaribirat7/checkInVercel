import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import hero from "../../assets/ronaldo.jpg.png";

const Hero = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, 100, {
      duration: 2,
    });
  }, []);
  return (
    <div className="w-full mt-1 sm:col-span-12 bg-bg-grey  flex lg:flex-row flex-col col-span-7">
      <div className="col-span-7  flex  justify-center gap-4  items-center">
        <div className="w-4/5 flex  flex-col md:gap-4">
          <span className="sm:text-7xl text-4xl w-3/4 font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </span>
          <span className="text-gray-400 font-semibold sm:text-xl text-sm">
            Browse through our diverse range of meticulosly crafted grments,
            designed to bring out your individuality and cater to your sense of
            style.
          </span>
          <button
            className="bg-black text-white sm:w-44 w-24 h-12 mt-5 rounded-full"
            type="submit"
          >
            Shop Now
          </button>
          {/* <motion.span className="lg:text-6xl text-3xl font-semibold">
                    {rounded > 0 ? `${rounded}` : rounded}
                  </motion.span> */}
          <div className=" lg:col-span-6 col-span-12 mt-5">
            <div className="flex lg:flex-nowrap flex-wrap gap-4 justify-evenly">
              <div className="">
                <motion.span className="lg:text-6xl text-4xl font-semibold">
                  {rounded > 0 ? `${rounded}  `  : rounded}
                </motion.span>
                <p>International brands</p>
              </div>
              <div className="">
                <motion.span className="lg:text-6xl text-4xl font-semibold">
                  {rounded > 0 ? `${rounded}` : rounded}
                </motion.span>
                <p>Quality products</p>
              </div>
              <div className="">
                          <motion.span className="lg:text-6xl text-4xl font-semibold">
                    {rounded > 0 ? `${rounded}` : rounded}
                  </motion.span>
                  <p>Personal satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 col-span-12 ">
        <img src={hero} className="" alt="" />
        {/* <VerticalDemo/> */}
      </div>
    </div>
  );
};

export default Hero;
