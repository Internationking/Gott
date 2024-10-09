"use client";
import React, { useState } from "react";
import { Description, Field, Textarea } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <section className="mt-mega">
        <h1 className="my-8 text-4xl tracking-tight text-center">Contact Us</h1>
        <div className="flex">
          <div className="hidden md:block -mt-12">
            <Image src="/mail.svg" width={400} height={400} alt="phone_icon" />
          </div>
          <div className=" items-center mx-auto max-w-screen sm:mb-12">
            <div className="w-full max-w-md px-4 my-8">
              <Field>
                <Description className="text-sm/6">
                  We will like to know more on how to improve our services
                </Description>
                <Textarea
                  className={clsx(
                    "mt-3 block w-full border-none  py-1.5 px-3 text-sm/6",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                />
              </Field>
            </div>
            <div className="items-center bg-primary/9 text-center border-2 border-button-hover rounded-t">
              <h1 className="my-4 tracking-tight ">
                Hope you enjoyed out services, give us a rating
              </h1>
              <div>
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={`w-6 h-6 ${
                        index <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } focus:outline-none`}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-full h-full"
                      >
                        <path d="M9.049 2.927a1 1 0 011.902 0l1.518 3.859a1 1 0 00.95.69h4.104a1 1 0 01.591 1.81l-3.322 2.58a1 1 0 00-.364 1.118l1.23 3.706a1 1 0 01-1.541 1.155L10 14.347l-3.317 2.498a1 1 0 01-1.541-1.155l1.23-3.706a1 1 0 00-.364-1.118l-3.322-2.58a1 1 0 01.591-1.81h4.104a1 1 0 00.95-.69l1.518-3.859z" />
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="text-center my-6">
              <button className=" btn-semi">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rating;
