import React from 'react';
import { classNames } from '../utils';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function DarkInput({
  label,
  type,
  name,
  id,
  autoComplete,
  placeholder,
  icon,
  bgIcon,
  value,
  onChange,
  isInvalid,
  errorMessage,
  onBlur,
  securityText = true,
  setShowPassword
}) {
  if (type === 'password') {
    return (
      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-2 sm:pt-3 relative'>
        <label
          htmlFor='Password'
          className='block text-lg font-medium  sm:mt-px sm:pt-2'
        >
          {label}
        </label>
        <div className='mt-1 sm:col-span-2 sm:mt-0 flex'>
          <div className='w-full'>
            <input
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              type={!securityText ? 'text' : type}
              name={name}
              id={id}
              placeholder={placeholder}
              className='block w-full bg-transparent appearance-none rounded-md border border-gray-600 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            />
            {isInvalid && (
              <div className='  text-red-700  my-1  '>
                <span className='block sm:inline'>{errorMessage}</span>
              </div>
            )}
          </div>
          <img
            onClick={() => setShowPassword(!securityText)}
            className='absolute   right-2 mt-5'
            src={!securityText ? './eyeopen.png' : './eyeclose.png'}
          ></img>
        </div>
      </div>
    );
  }
  if (type === 'phone') {
    return (
      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:pt-3'>
        <label
          htmlFor={name}
          className='block text-lg font-medium  sm:mt-px sm:pt-2'
        >
          {label}
        </label>
        <div className='mt-1 sm:col-span-2 sm:mt-0'>
          <PhoneInput
            international={false}
            defaultCountry='RU'
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            className=' flex w-full bg-transparent appearance-none rounded-md border border-gray-600 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          />
          {isInvalid && (
            <div className='  text-red-700  my-1  '>
              <span className='block sm:inline'>{errorMessage}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <>
      {icon ? (
        <div className=' lg:grid lg:grid-cols-3 lg:gap-4  sm:pt-3'>
          <label
            htmlFor={name}
            className='block text-lg font-medium  sm:mt-px sm:pt-2'
          >
            {label}
          </label>
          <div className='flex space-x-6 lg:space-x-10 md:space-x-14  w-full'>
            <div className='mt-1  sm:mt-2'>
              <input
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                onBlur={onBlur}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className='block lg:w-[32rem] sm:w-[30rem] md:w-[36rem] w-[12rem] bg-transparent appearance-none rounded-md border border-gray-600 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              />
              {isInvalid && (
                <div className='  text-red-700  my-1  '>
                  <span className='block sm:inline'>{errorMessage}</span>
                </div>
              )}
            </div>

            <div className='flex justify-end'>
              <a
                className={classNames(
                  'rounded-full  h-12 w-12 border-none border-[1.5px]  bg-origin-border   text-white shadow-sm hover:from-purple-700 hover:to-indigo-700  p-2',
                  bgIcon
                )}
              >
                <img src={icon} alt={icon} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-2 sm:pt-3'>
          <label
            htmlFor={name}
            className='block text-lg font-medium  sm:mt-px sm:pt-2'
          >
            {label}
          </label>
          <div className='mt-1 sm:col-span-2 sm:mt-0'>
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              id={id}
              onBlur={onBlur}
              autoComplete={autoComplete}
              placeholder={placeholder}
              className='block w-full bg-transparent appearance-none rounded-md border border-gray-600 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            />
            {isInvalid && (
              <div class='  text-red-700  my-1  '>
                <span class='block sm:inline'>{errorMessage}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
