import React from 'react';
import { getKey } from '../utils';
import Button from './Button';
import StepSelecter from './StepSelecter';


export const StepperSection = ({
  stepperItem,
  handleNextStep,
  selectedOptions,
  setSelectedOptions
}) => {
  const handleSelect = (selectedLabel) => {
    let options = { ...selectedOptions };

    options[getKey(stepperItem?.stepTitle)] = selectedLabel;
    setSelectedOptions(options);
  };

  return (
    <div>
      <>
        <div className='mt-12'>
          <div className='sm:flex  sm:justify-center sm:items-center md:space-x-4  '>
            <div className='relative p-4 '>
              <img
                src='./circle.png'
                className='absolute top-0  h-16 w-32 sm:-top-8 sm:h-28 sm:w-36  left-24 sm:left-28 '
              />
              <h2 className='font-semibold text-3xl text-center sm:text-4xl max-w-xs text-white '>
                {stepperItem?.title}
              </h2>
              <div className='mt-12 ml-12'>
                {stepperItem?.btntext?.map((btn, i) => (
                  <StepSelecter
                    key={btn?.text + i}
                    handleSelect={() => handleSelect(btn.text)}
                    icon={btn?.icon}
                    label={btn?.text}
                    selected={
                      selectedOptions[getKey(stepperItem?.stepTitle)] ===
                      btn?.text
                    }
                  />
                ))}
              </div>
            </div>
            <div>
              <img
                src={stepperItem?.src}
                className='mt-12 sm:mt-0 w-72 ml-12 sm:ml-0 lg:w-full'
              ></img>
            </div>
          </div>
          <div className='mt-24 flex justify-center'>
            <Button
              disabled={!selectedOptions[getKey(stepperItem?.stepTitle)]}
              onClick={handleNextStep}
              title={'Proceed to next'}
            />
          </div>
        </div>
      </>
    </div>
  );
};
