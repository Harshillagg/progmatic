import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className=" relative ">
      <div className="relative bg-[#14184a83] isolate px-6 pt-24">
        <div className="relative mx-auto max-w-4xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              ></path>
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC"></stop>
                  <stop offset="1" stopColor="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="hidden sm:block sm:text-7xl font-bold tracking-tight sm:pb-20 mb-20 text-white md:text-8xl">
              &lt; progmatic / &gt;
            </h1>
            <h1 className="sm:hidden  font-bold tracking-tight  mb-20 text-white text-6xl ">
              PROGMATIC
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#ffe44d] md:mb-20 sm:text-2xl md:text-3xl">
              “Code, Compete and Conquer Your way to Coding Excellence!”
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <Link to="/code">
                <button
                  type="button"
                  className="rounded-md bg-black px-6 py-2 text-lg font-semibold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-primary transition-all duration-200 lg:mb-12 mb-6"
                >
                  Get Started
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
