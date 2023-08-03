import React from "react";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    href: "#",
    price: { monthly: "$0", annually: "$144" },
    description: "Free",
    features: [
      "Access to all",
      "Online meetings",
      "Networking 24/7",
      "Access to templtes",
      "Coworking ",
      "Investment search",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    href: "#",
    price: { monthly: "$799", annually: "$288" },
    description: "Leap",
    features: [
      "Access to all",
      "Online meetings",
      "Networking 24/7",
      "Access to templates",
      "Coworking ",
      "Investment search",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    href: "#",
    price: { monthly: "$199", annually: "$288" },
    description: "Pro",
    features: [
      "Access to all",
      "Online meetings",
      "Networking 24/7",
      "Access to templates",
      "Coworking(subscribption for 100 hours) ",
      "Selection of individual",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    href: "#",
    price: { monthly: "$199", annually: "$288" },
    description: "Growth",
    features: [
      "Access to all",
      "Online meetings",
      "Networking 24/7",
      "Access to templates",
      "Coworking(Unlimited for a year) ",
      "Investment search",
    ],
    cta: "Get started",
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const PricingPage = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);
  return (
    <div className="bg-black mx-auto pt-12  pb-16 bg-sign-bg bg-no-repeat px-7 relative bg-right-top-corner">
      <div className="flex justify-center">
        <div className=" relative pricing-bg  rounded-3xl   mx-5">
          <div className=" rounded-3xl bg-light-purple h-[120px] w-[330px] sm:w-[39rem]  md:w-[46rem] lg:w-[60rem] sm:h-[20rem] xl:h-[332px] xl:w-[1170px] opacity-80 shadow-sm " />
          <div className="absolute  top-12 left-28 sm:top-32 sm:left-[12rem] md:left-[15rem] lg:left-[22em] xl:left-[25rem]">
            <h2 className="font-semibold  font-4xl sm:text-5xl lg:text-6xl text-white ">
              
              Select Package
            </h2>
          </div>
        </div>
      </div>
      <div className=" py-32 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl text-center">
            <img
              src="./circle.png"
              className="absolute h-16 sm:h-32 sm:w-56 -top-4 sm:-top-8 sm:left-32  md:left-40 left-8 lg:left-72 "
            />
            <h2 className="text-4xl sm:text-5xl font-semibold leading-8 tracking-tight text-white">
              Pricing plans
            </h2>
          </div>

          <div className=" mt-6 sm:mt-16 flex justify-center text-white lg:space-x-8">
            <h2 className="font-semibold text-md mr-3 lg:mr-0 sm:text-2xl"> One time Suscription</h2>
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full sm:p-1 pl-1 pr-3 sm:px-2 py-1 mt-3 sm:mt-0 md:mt-0 bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border "
            >
            
              {frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? "bg-black " : "text-gray-500",
                      "cursor-pointer rounded-full  sm:px-4  h-7 w-7 "
                    )
                  }
                ></RadioGroup.Option>
              ))}
            </RadioGroup>
            <h2 className="font-semibold text-md sm:text-2xl ml-4"> One time Suscription</h2>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border"
                    : " bg-gray-black ",
                  "rounded-xl p-6  xl:p-8"
                )}
              >
                <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-white",
                      "text-4xl font-bold tracking-tight "
                    )}
                  >
                    {typeof tier.price === "string"
                      ? tier.price
                      : tier.price[frequency.value]}
                  </span>
                  {typeof tier.price !== "string" ? (
                    <span
                      className={classNames(
                        tier.featured ? "text-gray-300" : "text-white",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <p className="mt-2 text-white opacity-80 text-xl text-center ">
                  {tier.description}
                </p>
                {tier.featured ? (
                  <div className="border-white  border-b-[1px] mt-2 "></div>
                ) : (
                  <div></div>
                )}
                <ul
                  role="list"
                  className={classNames(
                    tier.featured
                      ? "text-white space-y-2 mb-6 "
                      : "text-white space-y-3 mb-11 ",
                    "mt-8 text-sm leading-6 xl:mt-10"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={classNames(
                          tier.featured ? "text-white " : "text-indigo-600 ",
                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="  text-white p-0.5  rounded-md bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border ">
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.featured
                        ? "bg-white text-light-purple focus-visible:outline-white"
                        : "text-white bg-black h-full w-full",
                      "block  rounded-md  py-2 px-4   text-center text-sm leading-6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    )}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative">
        <img
              src="./circle.png"
              className="absolute h-12 sm:h-32 sm:w-48 top-0  right-0  md:right-8 lg:left-[39rem] sm:-top-8 xl:left-[40rem] "
            />
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white ">
          Not sure where to start
        </h2>
        <div className=" mt-24 md:flex md:justify-center sm:items-center sm:space-x-16">
          <div>
            <img src="./Frame.png" className="w-[32rem]" />
          </div>
          <div className="grid grid-cols-2 gap-4 mx-auto lg:gap-8 mt-20 sm:mt-16 lg:mt-0">
            <div className="  max-w-xs text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  ">
              <div className="w-full h-full rounded-lg ">
                <img src="./chat.png" className="sm:pl-16 md:pl-10 py-8 px-10"/>
                <h2 className="font-semibold text-ms border-t py-5 px-5 border-t-white  ">Saled Live chat</h2>
                
              </div>
            </div>
            <div className="  max-w-xs text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  ">
              <div className="bg-black w-full h-full rounded-lg ">
                <img src="./ticket.png" className="sm:pl-16 md:pl-10 py-8 px-10"/>
                <h2 className="font-semibold text-ms border-t py-5 px-5 border-t-white  ">Suport Ticket</h2>
                
              </div>
            </div>
            <div className="  max-w-xs text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  ">
              <div className="bg-black w-full h-full rounded-lg ">
                <img src="./email.png" className="sm:pl-16 md:pl-10 py-8 px-10"/>
                <h2 className="font-semibold text-ms border-t py-5 px-5 border-t-white  ">Support Email</h2>
                
              </div>
            </div>
            <div className="  max-w-xs text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  ">
              <div className="bg-black w-full h-full rounded-lg ">
                <img src="./call.png" className="sm:pl-16 md:pl-10 py-8 px-10"/>
                <h2 className="font-semibold text-ms border-t py-5 px-5 border-t-white ">Support  Calls</h2>
                
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
