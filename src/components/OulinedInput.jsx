import React from 'react';

export default function OulinedInput({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  isInvalid,
  errorMessage
}) {
  if (type === 'textarea') {
    return (
      <>
        <label
          id={id}
          className='block text-md order-1 font-medium mt-5 sm:mt-px sm:pt-2'
        >
          Message
        </label>
        <textarea
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
          id={id}
          className=' mt-5 border-white order-2 border-[1px] rounded-md bg-transparent  h-20 w-full'
        ></textarea>
        {isInvalid && (
          <div className='  text-red-700  my-1  '>
            <span className='block sm:inline'>{errorMessage}</span>
          </div>
        )}
      </>
    );
  }
  return (
    <div>
      <label
        id={id}
        className='block text-md font-medium mt-4  sm:mt-px sm:pt-2'
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        className='block border-b-[1px] border-white bg-transparent w-full'
      />
      {isInvalid && (
        <div className='  text-red-700  my-1  '>
          <span className='block sm:inline'>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
