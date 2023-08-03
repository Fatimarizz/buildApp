import { classNames } from "../utils";
import Check from "../assets/Check.svg"


function StepSelecter({ label, icon, selected,handleSelect }) {
  return (
    <div className='grid grid-cols-2 items-center'>
      <div onClick={handleSelect} className='  mt-8 max-w-xs cursor-pointer text-white p-0.5  text-center  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   rounded-lg  '>
        <div
          className={classNames(
            selected
              ? 'bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border '
              : 'bg-black ',
            ' w-full h-full rounded-lg py-3  px-4 sm:px-4 md:px-8 flex justify-center'
          )}
        >
          {icon ? (
            <div className='flex space-x-3 md:space-x-5'>
              <img alt={icon} className=' w-7 lg:w-9' src={icon} />
              <h2 className='font-semibold text-lg md:text-xl lg:text-2xl '>{label}</h2>
            </div>
          ) : (
            <h2 className='font-semibold text-sm md:text-lg lg:text-2xl '>{label}</h2>
          )}
        </div>
      </div>
      {selected && (
        <div className='ml-5 mt-6 rounded-full transition duration-500 ease-in-out h-7 w-7 p-0.5  bg-gradient-to-r from-light-purple to-dark-purple'>
          <div className='rounded-full  bg-black'>
            <img src={Check} alt={Check} />
          </div>
        </div>
      )}
    </div>
  );
}

export default StepSelecter;
