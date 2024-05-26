import ContestCard from "../components/ContestCard";
import React, { useState } from "react";
import ContestInfoModal from "../components/ContestInfoModal.tsx";

type ContestTypes= {
    
};

const Contest:React.FC<ContestTypes> = () => {
    
    const [isActiveButton, setIsActiveButton] = useState('button1');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        // document.body.classList.add('overflow-hidden');
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        // document.body.classList.remove('overflow-hidden');
    };

  const handleButtonClick = (button: string) => {
    setIsActiveButton(button);
  }

    return(
        <div className="pb-12 bg-[#111010]">
            <div className=" pt-24 text-center">
                <img src="/trophy.jpg" alt="trophy" className=" h-56 rounded-full mx-auto shadow-sm-light " />
                <h1 className="mt-2 text-4xl text-light text-center">Progmatic Contest</h1>
                <p className="mt-1 text-gray-400">Contest contest, contest Contest-Contest. So, contest.</p>
            </div>
            <div className="flex flex-wrap justify-center mt-8 gap-12">
                <ContestCard openModal={openModal} />
                <ContestCard openModal={openModal} />
            </div>
            <div className=" bg-[#262629] shadow-xl mt-16 rounded-xl mx-auto w-2/3 ">
                <div className=" flex justify-center gap-6 p-4 ">
                    <button 
                        className={`py-2 px-4 rounded-lg text-lg font-semibold ${
                        isActiveButton === 'button1' ? 'bg-[#434345] text-white' : 'text-[#c3c3c4]'
                        } hover:text-light`}
                        onClick={() => handleButtonClick('button1')}
                    >
                        Past Contests
                    </button>
                    <button 
                        className={`py-2 px-4 rounded-lg text-lg font-semibold ${
                        isActiveButton === 'button2' ? 'bg-[#434345] text-white' : 'text-[#c3c3c4]'
                        } hover:text-light`}
                        onClick={() => handleButtonClick('button2')}
                    >
                        Current Contests
                    </button>
                    <button 
                        className={`py-2 px-4 rounded-lg text-lg font-semibold ${
                        isActiveButton === 'button3' ? 'bg-[#434345] text-white' : 'text-[#c3c3c4]'
                        } hover:text-light`}
                        onClick={() => handleButtonClick('button3')}
                    >
                        My Contests
                    </button>
                </div>
                <div>
                    <div className={`flex flex-wrap gap-6 p-6 justify-center  ${isActiveButton === 'button1' ? 'visible' : 'hidden'}`}>
                        <ContestCard openModal={openModal} />
                        <ContestCard openModal={openModal} />
                        <ContestCard openModal={openModal} />
                        <ContestCard openModal={openModal} />
                        <ContestCard openModal={openModal} />
                        <ContestCard openModal={openModal} />
                    </div>
                    <div className={`flex flex-wrap gap-6 p-6 justify-center  ${isActiveButton === 'button2' ? 'visible' : 'hidden'}`}>
                        <ContestCard openModal={openModal} />
                        <ContestCard openModal={openModal} />
                    </div>
                </div>
            </div>

            {isModalOpen && <ContestInfoModal closeModal={closeModal} />}
        </div>
    )
    
}

export default Contest;