import React from "react";
import signUp from "/vector.jpg";
import logo from "/LOGO2.png";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-bg-grey p-4 rounded-3xl lg:flex justify-center items-center gap-4 mt-20 col-span-12 m-auto ">
      <div className="flex p-3 flex-col">
        <div className="text-2xl font-semibold tracking-widest">
          <span className="flex items-center lg:text-4xl font-bold tracking-widest justify-center  p-2 text-blue-900">
            <img src={logo} alt="" srcSet="" className="h-[60px]" />
            Vintage Sports
          </span>
        </div>
        <div className=" p-3">
          <img
            src={signUp}
            alt=""
            srcSet=""
            className='<img class="h-auto max-w-full" src="/docs/images/examples/image-1@2x.jpg" alt="image description">'
          />
        </div>
      </div>

      <div className="flex justify-start gap-4 items-center flex-col">
        <div className="flex flex-col items-center gap-2 justify-center">
          <span className="lg:text-4xl text-3xl font-bold">
            Welcome back chief !!
          </span>
          <span className="text-xl text-bg-gray">Login to your account</span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 w-full flex flex-col gap-4"
        >
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              {...register("emailAddress", { required: true })}
              className="border-2 border-x-bg-grey rounded-xl pl-3 w-full h-10 outline-none"
              placeholder="Enter your Email Address"
            />
            {errors.emailAddress && <span>Invalid Email Address</span>}
            <input
              type="password"
              {...register("password", { required: true })}
              className="border-2 border-x-bg-grey rounded-xl pl-3  w-full h-10 outline-none"
              placeholder="Password"
            />

            {errors.password && <span>Invalid Password</span>}
          </div>
          <button
            type="submit"
            className="w-full border-2 border-blue-500  tracking-widest text-white text-xl h-10 bg-blue-500 rounded-xl outline-none"
          >
            Submit
          </button>
        </form>

        <div className=" w-full flex flex-col gap-5">
          <div className="flex justify-center items-center gap-1">
            <hr className="w-full bg-white  h-[2px] border-white" />

            <span className="flex justify-center items-center basis-9/12">
              or login with
            </span>
            <hr className="w-full bg-white  h-[2px] border-white " />
          </div>
          <div className="flex justify-evenly h-10 items-center  ">
            <button className="h-full  basis-4/12  flex justify-center items-center gap-2 bg-white rounded-md ">
              {" "}
              <FcGoogle /> Google
            </button>
            <button className="h-full basis-4/12 flex justify-center items-center gap-2 bg-white rounded-md ">
              <FaFacebookF className="text-blue-500" />
              Facebook
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full" >
          <p className="text-bg-gray flex gap-2">Don't have an account?<Link className="text-blue-500 underline">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
