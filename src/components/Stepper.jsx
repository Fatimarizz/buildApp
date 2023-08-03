import React, { Fragment } from 'react';
import Check from '../assets/Check.svg';
import { StepperSection } from './StepperSection';

export default function Stepper({
  steps,
  currentStep,
  handleProceedNext,
  selectedOptions,
  setSelectedOptions
}) {
  return (
    <div>
      <div className='pt-12 bg-black'>
        <div className='sm:mx-9 sm:px-12 px-9  pt-28'>
          <div className='flex items-center justify-center mx-auto '>
            {steps?.map((step, i) => (
              <Fragment key={i}>
                <div className='flex items-center  relative '>
                  <div className='absolute bottom-12 sm:bottom-16 md:bottom-20 -ml-12 text-center mt-16 w-28 lg:w-40 text-xs font-semibold sm:text-sm  lg:text-lg  uppercase text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-dark-purple'>
                    {step?.stepTitle}
                  </div>

                  {currentStep >= i ? (
                    <div className='rounded-full transition duration-500 ease-in-out h-8 w-8 md:h-10 md:w-10 p-1  bg-gradient-to-r from-light-purple to-dark-purple'>
                      <div className='rounded-full  bg-black'>
                        <img src={Check} alt={Check} className='w-8'/>
                      </div>
                    </div>
                  ) : (
                    <div className='rounded-full transition duration-500 ease-in-out h-8 w-8 md:h-10 md:w-10 p-1 bg-white border-white border-4'></div>
                  )}
                </div>
                {i !== steps?.length - 1 &&
                  (currentStep > i ? (
                    <div className='flex-auto border-t-[1px] transition duration-500 ease-in-out   h-1 border-dark-purple bg-gradient-to-r  from-light-purple to-dark-purple '></div>
                  ) : (
                    <div className='flex-auto border-t-2 transition duration-500 ease-in-out   h-1  border-gray-300'></div>
                  ))}
              </Fragment>
            ))}
          </div>
        </div>
        <div className='mt-8 p-4'>
          <StepperSection
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            handleNextStep={handleProceedNext}
            stepperItem={steps[currentStep]}
          />
        </div>
      </div>
    </div>
  );
}
