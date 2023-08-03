import React from 'react'
import Button from '../components/Button'
const template = [
    {id:1, name: 'template 1', price:'$144', description: 'free' },
    { id:2, name: 'template 2', price:'$144', description: 'free' },
    { id:3, name: 'template 3', price:'$144', description: 'free' },
    { id:4,name: 'template 4', price:'$144', description: 'free' },
    { id:5, name: 'template 5', price:'$144', description: 'free' },
    { id:6, name: 'template 6', price:'$144', description: 'free' },
    // More template...
  ]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export const ListTemplates = () => {
  return (
    <div className='bg-black py-12'>

    <div className="px-8 sm:px-20  lg:px-24 mx-auto    ">
      <div className="sm:flex sm:items-center  mx-auto">
        <div className="sm:flex-auto sm:justify-center">
        <img
              src="./circle.png"
              className="absolute h-16 sm:h-32 sm:w-56 top-24 sm:top-16 sm:left-24  md:left-40 left-36 lg:top-16 lg:left-[16rem] xl:left-[32rem] "
            />
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center">Templates</h1>
          <p className="mt-5 text-sm text-white text-center">
            A list of all the templates , complete details about pricing and description
          </p>
        </div>
        <div className="mt-4 sm:mt-0 ml-16  sm:flex-none">
          <Button
            title={'Add New Template'}
            onClick={'#'}
            className='text-md'
            />
          
        </div>
      </div>
      
      <div className="mt-24 lg:ml-64 flow-root max-w-3xl rounded-2xl bg-gray-800 ">
        <div className=" ">
          <div className="inline-block min-w-full py-2  align-middle rounded-2xl">
            <table className="min-w-full">
              <thead className='border-b-2 border-gray-600'>
                <tr className='mx-5'>
                  <th scope="col" className="py-3.5 pl-8 pr-3 text-left text-sm font-semibold text-white sm:pl-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                Role
                  </th>
                 
                  <th scope="col" className="relative py-3.5 pl-3 pr-6 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 rounded-b-2xl mx-3">
                {template.map((temp, ) => (
                  <tr key={temp.id} >
                    <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-white sm:pl-3">
                      {temp.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{temp.price}</td>
                    <td className="whitespace-nowrap px-2 py-4 text-md text-gray-500">{temp.description}</td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-center text-sm font-medium sm:pr-3">
                      <a href="#" className="text-md text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-dark-purple">
                        Edit<span className="sr-only">, {temp.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </div>
  
</div>)
}
