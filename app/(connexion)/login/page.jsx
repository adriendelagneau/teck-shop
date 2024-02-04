"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";
import RippleButton from "@/components/buttons/RippleButton";
import GoogleButton from "@/components/buttons/GoogleButton";



const Login = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submit = async (data) => {
    const { email, password } = data;
      await signIn('credentials', { email, password, callbackUrl: "/" });
  };

  return (
    <div className=" w-[300px] min-h-screen flex flex-col items-center mx-auto">
      <h1 className="pb-8 text-5xl">Login</h1>
      <div className="p-4 border shadow-xl border-light_primary dark:border-dark_primary">

        <form  className="w-full h-auto p-4 rounded-lg " onSubmit={handleSubmit(submit)}>

          <div className="relative mt-6">
            <input
              type="email"
              className="relative dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] z-10 w-full p-2 bg-transparent border-2 border-light_primary rounded-lg outline-none peer focus:border-dark_primary placeholder:text-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(239,239,239)] dark:border-dark_primary  dark:focus:border-light_secondary"
              id="email"
              placeholder="email"
              name='email'
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 8,
                  message: "Min length is 8"
                },
                maxLength: {
                  value: 32,
                  message: "Max length is 32"
                }
              })}
            />
            <label htmlFor="email"  className="absolute z-20 px-1 text-xs capitalize transition-all bg-light_primary dark:bg-dark_primary left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-placeholder-shown:text-sm peer-focus:text-xs">Email</label>
            <p className='w-full h-5 pt-1 text-light_red dark:text-dark_red'>{errors.email?.message}</p>
          </div>

          <div className="relative mt-6">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="relative dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] z-10 w-full p-2 bg-transparent border-2 border-light_primary rounded-lg outline-none peer focus:border-dark_primary placeholder:text-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(239,239,239)] dark:border-dark_primary  dark:focus:border-light_secondary"
              id="password"
              placeholder="password"
              name='password'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Min length is 8"
                },
                maxLength: {
                  value: 32,
                  message: "Max length is 32"
                }
              })}
            />
            <label htmlFor="password"  className="absolute z-20 px-1 text-xs capitalize transition-all bg-light_primary dark:bg-dark_primary left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-placeholder-shown:text-sm peer-focus:text-xs">Password</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute w-4 h-4 top-3.5 right-3 hover:cursor-pointer z-10"
              onMouseDown={(e) => {
                e.preventDefault()
                setIsPasswordVisible(prevState => !prevState);
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="w-full h-5 pt-1 text-light_red dark:text-dark_red ">{errors.password?.message}</p>
          </div>
         
          <RippleButton type={"submit"} text={"Login"} buttonClasses={"w-full mt-10 text-xl rounded-md bg-almond_green "} />
       
        </form>
        <p className="mt-2">
          <Link href={'/forgotPassword'} className="">forgot password ?</Link>
          </p>


        <div className="my-6 text-center">- OR -</div>
        <div className="w-full"><GoogleButton /></div>

      </div>

      <Link className="mt-6 hover:text-light-primrytext-md" href="/register">No account yet, REGISTER</Link>
      
    </div>
  )
}


export default Login;
