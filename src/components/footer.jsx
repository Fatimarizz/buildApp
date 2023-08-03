import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black sm:px-2 px-6  pt-12 grid grid-cols-1 sm:grid-cols-2 text-white mx-auto">
      <div className="px-5 my-4 mx-auto ">

        <h2 className="text-semibold font-sm">Buildapp</h2>
        <h1 className="font-bold  text-3xl mt-8 max-w-xs ">
          Ready To Take A New Surge Of Creativity
        </h1>
        <p className="mt-2 font-normal">
          We offer the best services for your work
        </p>
        <div className="flex space-x-4 mt-6 ">
          <a className="border-dark-purple border-[1.5px] rounded-full bg-transparent p-2">
          <svg className='h-5 w-5' fill="white" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z" fillRule="evenodd"></path> </g></svg>
          </a>
          <a className="rounded-full border-dark-purple border-[1.5px] bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border   text-white shadow-sm hover:from-purple-700 hover:to-indigo-700  p-2">
            <svg
              className="h-5 w-5"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M56 16.46a67.49 67.49 0 0 0-8.11-.73 9.75 9.75 0 0 0-16.56 8.91c-8.08-.41-14.2-4.56-19.92-10.73-.78 1.52-2.26 6.37-1.11 9.87a19.1 19.1 0 0 0 6.75 8.59 26.05 26.05 0 0 1-8.52-1.85c1.41 4.63 6.25 11.35 13.86 12.4a19.46 19.46 0 0 1-12.07 4.19A19.66 19.66 0 0 1 8 47a27.42 27.42 0 0 0 14.9 4.39c17.87 0 27.65-14.89 27.65-27.81v-1.27z"></path>
              </g>
            </svg>
          </a>

          <a className="rounded-full border-dark-purple border-[1.5px] bg-transparent p-2">
            <svg
              className="h-5 w-5"
              fill="white"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
        <img  className=' mt-8' src="./footer.png"></img>
      </div>
      <div className="mx-auto sm:my-0 my-8 px-5">
        <div className="flex align-center">
        <p>CO-WORKING </p>
         <span className="ml-4 border-b-white border-b-2 mb-3  w-16"></span>
         </div>
        <h1 className="font-bold  text-3xl mt-4 ">Subcribe to our weekly update. </h1>
      <div className="flex mt-4 border-b-2 pb-2 border-b-white">
        
      <input className=" relative bg-transparent w-full "/>
      
      <button  className="font-bold"> Submit</button>
      </div>
     <video className='my-5 rounded-3xl' width="503" height="278" controls >
      <source src="./video.mp4" type="video/mp4"/>
     </video>
      </div>
    </div>
  );
};
