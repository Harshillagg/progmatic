function ContestInfoModal({closeModal}:any) {
    return (
      <div className="fixed top-0 left-0 pt-20 right-0 bottom-0 flex justify-center items-center bg-[#061220]">
          <div className="px-10 py-6 h-[630px] w-[1150px] bg-dark max-h-[625px] rounded-2xl  shadow-sm-light">
              <div className="flex justify-between">
                  <div className="max-w-2/3 flex gap-8 flex-col">
                      <span className=" text-7xl font-extrabold">Weekly Contest 69</span>
                      <div className="ml-8">
                          <span className="text-2xl font-semibold inline-block mb-2">Contest Process: </span>
                          <div className="ml-4">
                              <div className="mb-1">
                                  <span className="font-medium mr-11">Registration:</span>
                                  <span className="text-gray-400">Register on Weekly Contest 69 for fun</span>
                              </div>
                              <div className="mb-1">
                                  <span className="font-medium mr-10">Participation:</span>
                                  <span className="text-gray-400">4 high Quality coding problems</span>
                              </div>
                          </div>
                      </div>
                      <div className="ml-8">
                          <span className="text-2xl font-semibold inline-block mb-2">Contest Format: </span>
                          <div className="ml-4">
                              <div className="mb-1">
                                  <span className="font-medium mr-16">Duration:</span>
                                  <span className="text-gray-400">Register on Weekly Contest 69 for fun</span>
                              </div>
                              <div className="mb-1">
                                  <span className="font-medium mr-14">Problems:</span>
                                  <span className="text-gray-400">4 high Quality coding problems</span>
                              </div>
                              <div className="">
                                  <span className="font-medium mr-12">Languages:</span>
                                  <span className="text-gray-400">4 high Quality coding problems</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-center pr-12 pt-16 text-black">
                      <div className="bg-[#BCE29E] h-36 w-72 flex relative rounded-xl py-1 px-3">
                          <div className="flex flex-col justify-between">
                              <span className="font-semibold">Contest starts in:</span>
                              <div className="flex gap-8 px-2">
                                  <span>Days</span>
                                  <span>Hours</span>
                                  <span>Mins</span>
                                  <span>Secs</span>
                              </div>
                          </div>
                      </div>
                      <div className="bg-[#6DC956] font-bold text-5xl pt-2 -translate-x-6 -translate-y-6 h-[80px] w-[340px] flex justify-center absolute rounded-xl">
                          6 | 9 | 6 | 9
                      </div>
                      <button className="bg-red-600 rounded-full px-6 py-2 w-fit mx-auto text-light hover:bg-red-800">Register Now</button>
                  </div>
              </div>
              <div className="my-4 ml-8">
                  <span className="text-2xl font-semibold inline-block mb-2">Contest Format: </span>
                  <div className="flex gap-32 px-8 mb-2 text-gray-400 text-lg">
                      <span>Total Problems</span>
                      <span>Total Points</span>
                      <span>Start time</span>
                      <span>End time</span>
                      <span>Duration</span>
                  </div>
                  <div className="bg-[#212321] h-[90px] w-[1000px] rounded-xl ">
                      <div className="flex gap-16 px-16 pt-4 divide-x-2 mb-2 font-semibold text-lg items-center ">
                          <span className="pr-10">69</span>
                          <span className="pl-20 ">100</span>
                          <span className="pl-20 ">31 Feb 2025 </span>
                          <span className="pl-20">31 Feb 2025</span>
                          <span className="pl-20">0 Hours</span>
                      </div>
                  </div>
              </div>
              <div className="text-center">
                  <button className="bg-red-600 rounded-full px-6 py-1 text-lg hover:bg-red-800" onClick={closeModal}> Close</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default ContestInfoModal