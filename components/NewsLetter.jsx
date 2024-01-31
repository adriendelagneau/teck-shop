'use client'
import { subscribeToNewsletter } from '@/actions/userActions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const NewsLetter = () => {
  const {
    register,
    handleSubmit,
      formState: { errors },
      reset,
  } = useForm();

    const onSubmit = async (data) => {
      
    const res = await subscribeToNewsletter(data.email)
        toast.info(res.msg);
        reset()
    };
  
  
  
  const containerRef = useRef(null)
  const phraseRef = useRef(null)
  const secondPhraseRef = useRef(null)
  const notifiRef = useRef(null)
  const buttonRef = useRef(null)
  const inputRef = useRef(null)
  
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let Tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none play reverse",
      },
    });

    Tl.fromTo(
      phraseRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );

    Tl.fromTo(
      secondPhraseRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );

    Tl.fromTo(
      notifiRef.current,
      { opacity: 0, translateX: "-20px" },
      { opacity: 1, translateX: 0, duration: 0.4, ease: "none" },
      "init"
    );



    
  }, [])

  return (
    <div className='my-12' ref={containerRef}>

      <div className='w-full mt-12 rounded-lg bg-gradient-to-r from-gray-300/80 to-gray-100'>
        <div className="px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h3 className="text-3xl font-bold leading-8 tracking-tight text-skin-base sm:text-4xl sm:leading-9" ref={notifiRef}>
              Get notified whenever we publish something new
            </h3>
            <p className="max-w-3xl mt-3 text-lg leading-6 text-skin-base" id="newsletter-headline" ref={phraseRef}>
              Sign up for our newsletter to stay up to date.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form onSubmit={handleSubmit(onSubmit)} className="sm:flex" aria-labelledby="newsletter-headline">
              <input
                aria-label="Email address"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 8,
                    message: "Min length is 8",
                  },
                  maxLength: {
                    value: 32,
                    message: "Max length is 32",
                  },
                })}
                required
                className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400"
                placeholder="Enter your email"
                ref={inputRef}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400"
                  ref={buttonRef}
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm leading-5 text-gray-700" ref={secondPhraseRef}>We will never spam. That's our promise.</p>
            {errors.email && <p className="mt-3 text-sm leading-5 text-red-500">{errors.email.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
