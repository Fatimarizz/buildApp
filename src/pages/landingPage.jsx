import React from 'react';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router';
import { BillingTypes } from '../constants/AppConstants';
import ContactUs from '../containers/ContactUs';

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' }
];
const tiers = [
  {
    id:1,
    href: '#',
    price: { monthly: '$0', annually: '$144' },
    description: 'Free',
    features: [
      'Access to all',
      'Online meetings',
      'Networking 24/7',
      'Access to templtes',
      'Coworking ',
      'Investment search'
    ],
    cta: 'Get started',
    featured: false
  },
  {
    id:2,
    href: '#',
    price: { monthly: '$799', annually: '$288' },
    description: 'Leap',
    features: [
      'Access to all',
      'Online meetings',
      'Networking 24/7',
      'Access to templates',
      'Coworking ',
      'Investment search'
    ],
    cta: 'Get started',
    featured: false
  },
  {
    id:3,
    href: '#',
    price: { monthly: '$199', annually: '$288' },
    description: 'Pro',
    features: [
      'Access to all',
      'Online meetings',
      'Networking 24/7',
      'Access to templates',
      'Coworking(subscribption for 100 hours) ',
      'Selection of individual'
    ],
    cta: 'Get started',
    featured: true
  },
  {
    id:4,
    href: '#',
    price: { monthly: '$199', annually: '$288' },
    description: 'Growth',
    features: [
      'Access to all',
      'Online meetings',
      'Networking 24/7',
      'Access to templates',
      'Coworking(Unlimited for a year) ',
      'Investment search'
    ],
    cta: 'Get started',
    featured: false
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const LandingPage = () => {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className='bg-black mx-auto pt-6 pb-16 bg-sign-bg bg-no-repeat px-7 relative bg-right-top-corner  '>
      {/* first section */}
      <div className="md:flex text-white items-center justify-around ">
        <div className="relative max-w-xl  p-5  ">
          <img
            src="./circle.png"
            className="absolute top-0  h-16 w-32  sm:top-0 md:top-4 lg:-top-4 lg:h-32 lg:w-60  left-0 sm:left-0 "
          />
          <h1 className="lg:text-6xl sm:text-4xl text-3xl max-w-xs lg:max-w-full leading-tight  font-semibold font-sans">
            <span className="mr-4  text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-dark-purple">
              Create
            </span>
            an app like
            <span className='mx-2 text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-dark-purple'>
              never before
            </span>
            by using
            <span className='mx-2 text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-dark-purple'>
              Buildapp
            </span>
          </h1>
          <p className="mt-6 max-w-md lg:max-w-full">
            Buildapp will provide ci/cd code templates to build and deploy
            standard-based applications within 5 minutes.
          </p>
          <div className='mt-6 space-y-2'>
            <p className='flex items-center'>
              <img className='mr-2 h-4' src='./tick.png' />
              Make your app more exciting!
            </p>
            <p className='flex items-center'>
              <img className='mr-2 h-4' src='./tick.png' />
              Get the best ci/cd code templates from us !
            </p>
          </div>
          <button
            type='submit'
            className='flex mt-9 tracking-wide justify-center rounded-sm bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-1 sm:py-3 px-6 text-sm sm:text-lg font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
          onClick={()=>{
           navigate('/steps')
          }}
          >
            Join the waitlist
          </button>
        </div>

        <div className="relative ">
          <video className="my-5 h-[380px] sm:h-[320px] sm:w-[350px] lg:h-[538px] lg:w-[470px] w-[300px] rounded-lg" controls>
            <source src="./video.mp4" type="video/mp4" />
          </video>
          <img
            src='./Invoice-card.png'
            className='absolute -bottom-12 w-[150px] sm:w-[150px] lg:w-[200px] sm:-left-8 lg:-left-24 left-0'
          ></img>
        </div>
      </div>

      {/*why choose Build App */}
      <div className=' relative mt-24 sm:mt-60 font-semibold'>
        <img
          src="./circle.png"
          className="absolute h-16 w-40  md:top-0 lg:-top-8 lg:h-32 lg:w-60 top-8 sm:-top-8  right-24 sm:right-[11rem] lg:right-[32rem] "
        />
        <div className="flex justify-center">
          <h2 className="lg:text-5xl md:text-4xl text-3xl text-center text-white">
            Why Choose the Buildapp
          </h2>
        </div>
        <div className='mt-16 sm:flex sm:space-x-7 space-y-8 sm:space-y-0 justify-center '>
          <div className='  max-w-xs text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  '>
            <div className='bg-black w-full h-full rounded-lg py-5 px-10'>
              <h2 className='font-semibold text-2xl '>Ready Templates</h2>
              <p className='font-normal my-5 '>
                Over 18,500 ready templates for you
              </p>
            </div>
          </div>

          <div className='  max-w-xs text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  '>
            <div className='bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border w-full h-full rounded-lg py-5 px-10'>
              <h2 className='font-semibold text-2xl '>Trusted</h2>
              <p className='font-normal my-5'>
                For Entrepeneurs to fortune 500 companies
              </p>
            </div>
          </div>

          <div className='  max-w-xs text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  '>
            <div className='bg-black w-full h-full rounded-lg py-5 px-10'>
              <h2 className='font-semibold text-2xl '>Best Developers</h2>
              <p className='font-normal my-5'>
                Experts are always working to make it more resourceful.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unique templates */}
      <div className='sm:flex mt-10 sm:items-center  sm:justify-center sm:space-x-12'>
        <div>
          <img src='./code-template.png' />
        </div>
        <div className='relative sm:mt-48 mt-24 text-white max-w-lg'>
          <img
            src="./circle.png"
            className="absolute h-16 w-32  lg:h-32 lg:w-60  md:-top-4 lg:-top-8 -top-4 sm:-top-8 right-24 sm:right-32 "
          />
          <h2 className="font-semibold text-3xl  md:text-4xl lg:text-5xl max-w-2xl ">
            Unique templates for every budget and every project.
          </h2>
          <p className='mt-4'>
            Every week, our staff personally hand-pick some of the best new
            templates from our collection.
          </p>
          <h2 className=' my-4 font-semibold text-xl sm:text-3xl'>
            High Standards Code
          </h2>
          <p className='mt-2 '>
            Power your vision with Buildapp to build, manage and host stunning
            applications!
          </p>
          <button
            type='submit'
            className='flex mt-9 tracking-wide justify-center rounded-sm bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-1 sm:py-3 px-6 text-sm sm:text-lg font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
          onClick={()=>{
            navigate('/list')
          }}
          >
            View Templates
          </button>
        </div>
      </div>

      {/* reviews and love cards */}
      <div className="sm:flex mt-24 sm:mt-44 sm:px-2 lg:px-0 sm:justify-center sm:space-x-16 ">
        <div className=" text-white  max-w-sm lg:max-w-lg">
          <div className="flex space-x-4 items-center">
            <img src="./pic-icon.png" className=" " />
            <div>
              <h2 className="font-semibold text-4xl lg:text-5xl max-w-2xl ">
                John Malik
              </h2>
              <p className='mt-1'>UI Designer</p>
            </div>
          </div>
          <p className='mt-5 font-normal'>
            Once or twice a week your broadcast gather hundreds people, & some
            of them become your customers.Once or twice a week.. Once or twice a
            week your broadcast gather hundreds people, & some of them become.
          </p>
          <button
            type='submit'
            className='flex mt-12 tracking-wide justify-center rounded-sm bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-1 sm:py-3 px-6 text-sm sm:text-lg font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
          >
            Find More
          </button>
        </div>
        <div className='mt-12 sm:mt-0'>
          <img
            src="./love-card.png"
            className="absolute right-5 md:w-[37rem] lg:w-[48rem] md:-right-12 md:top-[109rem] lg:right-4 xl:right-32  top-[180rem] lg:top-[120rem]"
          />
          <img
            src="./section-pic.png"
            className="w-52 sm:w-[26rem] md:w-[105rem] lg:w-[90%] ml-12 sm:ml-0"
          />
        </div>
      </div>

      {/* Pricing  */}
      <div className=' py-32 sm:py-36'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='relative mx-auto max-w-4xl text-center'>
            <img
              src="./circle.png"
              className="absolute h-16 w-32  lg:h-32 lg:w-60 -top-4 md:top-0 lg:-top-8 left-8 md:left-60 lg:left-72 "
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-8 tracking-tight text-white">
              Pricing plans
            </h2>
          </div>

          <div className="sm:mt-12 flex justify-center"></div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8  md:grid-cols-2 md:max-w-lg lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border'
                    : ' bg-gray-black ',
                  'rounded-xl p-6  xl:p-8'
                )}
              >
                <p className='mt-6 flex items-baseline gap-x-1 justify-center'>
                  <span
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-white',
                      'text-4xl font-bold tracking-tight '
                    )}
                  >
                    {typeof tier.price === 'string'
                      ? tier.price
                      : tier.price[frequency.value]}
                  </span>
                  {typeof tier.price !== 'string' ? (
                    <span
                      className={classNames(
                        tier.featured ? 'text-gray-300' : 'text-white',
                        'text-sm font-semibold leading-6'
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <p className='mt-2 text-white opacity-80 text-xl text-center '>
                  {tier.description}
                </p>
                {tier.featured ? (
                  <div className='border-white  border-b-[1px] mt-2 '></div>
                ) : (
                  <div></div>
                )}
                <ul
                  role='list'
                  className={classNames(
                    tier.featured
                      ? 'text-white space-y-2 mb-6 '
                      : 'text-white space-y-3 mb-11 ',
                    'mt-8 text-sm leading-6 xl:mt-10'
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        className={classNames(
                          tier.featured ? 'text-white ' : 'text-indigo-600 ',
                          'h-6 w-5 flex-none'
                        )}
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className='  text-white p-0.5  rounded-md bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border '>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'bg-white text-light-purple focus-visible:outline-white'
                        : 'text-white bg-black h-full w-full',
                      'block  rounded-md  py-2 px-4   text-center text-sm leading-6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
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

      {/* companies */}
      <div className='sm:flex sm:flex-col sm:justify-center sm:items-center'>
        <div className='relative max-w-2xl'>
          <img
            src="./circle.png"
            className="absolute h-16 w-40  lg:h-32 lg:w-60 top-4  md:-top-4 lg:top-4 right-12 md:right-4 lg:left-24 "
          />
          <h2 className="text-white text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
            Trusted by the world's most innovative companies
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-5 sm:px-12 lg:px-0">
          <img src="./flickr.png" />
          <img src="./Pinterest.png" />
          <img src="./Spotify.png" />
          <img src="./Netflix.png" />
          <img src="./Disney.png" />
          <img src="./Amazon.png" />
          <img src="./space.png" />
          <img src="./microsoft.png" />
          <img src="./google.png" />
          <img src="./facebooklogo.png" />
        </div>
      </div>

      {/* project progress */}
      <div className=" py-28 relative sm:flex sm:flex-col sm:justify-center sm:items-center text-white">
      <img src="./pic1.png" className="absolute left-0 bottom-[16rem] sm:bottom-[5rem] md:bottom-8 lg:bottom-4 w-20 sm:w-28 md:w-40 lg:w-48"/>
      <img src="./pic2.png" className="absolute right-0 bottom-[29rem] sm:bottom-[26rem] md:bottom-[21rem] lg:bottom-[20rem] w-20 sm:w-28 md:w-40 lg:w-48"/>
        <div className="relative max-w-2xl text-center ">
          <img
            src="./circle.png"
            className="absolute h-16 w-40  lg:h-32 lg:w-60 top-16 md:top-8 lg:top-4 right-16 md:right-48 lg:right-16 "
          />
          <h2 className="  font-semibold text-3xl md:text-4xl lg:text-5xl">
            Other task managers are all about project progress
          </h2>
          <p className="mt-7 text-normal font-sm  sm:ml-20 max-w-md ">
            Focuses on increasing individual productivity, that ultimately
            improves team efficiency.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 items-center space-x-4">
          <img src="./add-task.png" className="mt-3 w-24 md:w-36" />
          <img src="./time-boxing.png" className="w-24 md:w-36" />
          <img src="./prioritisation.png"  className="ml-3 w-24 md:w-36"/>
        </div>

        <p className='font-medium text-lg text-center mt-8 max-w-xs'>
          Get hired full-time in marketing in eight weeks
        </p>

        <div className="relative sm:flex sm:space-x-12 mt-9 justify-center ">
       
          <div className="max-w-xs p-3  ">
            <div className="flex justify-center">
              <img src="./noun-job.png " />
            </div>
            <p className='font-medium text-center text-lg  mt-2'>Add Task</p>
            <p className='mt-3 font-normal'>
              Add your tasks for the day & update them. Check them once they're
              done.
            </p>
          </div>
         
          <div className="max-w-xs p-3 flex-col items-center justify-center ">
            <div className="flex justify-center">
              <img src="./job.png "  />
            </div>
            <p className='font-medium text-center text-lg  mt-2'>Time Boxing</p>
            <p className='mt-3 font-normal text-center'>
              Allocate time for each task for better time management &
              organization.
            </p>
          </div>
        </div>
        <button
          type='submit'
          className='ml-20 sm:ml-0 flex mt-12 tracking-wide justify-center rounded-sm bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-1 sm:py-3 px-6 text-sm sm:text-lg font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
        >
          Join the Wallet
        </button>
      </div>
      {/* form */}
      <div className=" pb-12 md:pb-24 text-white px-12 lg:px-0 space-y-8 sm:flex sm:space-x-14 lg:space-x-28 sm:items-center sm:justify-center">
        <div className="relative max-w-sm">
          <img
            src="./circle.png"
            className="absolute h-16 w-40  lg:h-32 lg:w-60  bottom-20 lg:bottom-8  right-20 lg:left-0 "
          />
          <h2 className="  font-semibold text-3xl md:text-4xl lg:text-5xl text-center sm:text-left">
            Find your templates Now
          </h2>
          <p className='mt-6 '>
            Our ready-made Cowork Platform is the place wherer art be comes
            unique
          </p>
        </div>
       <ContactUs />
      </div>
    </div>
  );
};
