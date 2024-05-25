import '@fortawesome/fontawesome-free/css/all.min.css';
function Leaderboard() {
  const players = [
    { name: "Null and Void", points: 120 },
    { name: "Null and Void", points: 110 },
    { name: "Null and Void", points: 100 },
    { name: "Null and Void", points: 90 },
    { name: "Null and Void", points: 80 },
    { name: "Null and Void", points: 70 },
    { name: "Null and Void", points: 60 },
    { name: "Null and Void", points: 50 },
    { name: "Null and Void", points: 40 },
    { name: "Null and Void", points: 30 }
  ];

return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen py-10">
        <div className="text-4xl font-bold mb-8">Leader Board</div>
        <div className="flex justify-center items-center space-x-8 mb-10">
            <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-slate-800 to-slate-500  border-[3px] border-slate-400 w-32 h-32 rounded-full flex items-center justify-center relative opacity-50 translate-y-[70px]">
                </div>
                <div className="bg-gray-400 w-24 h-24 rounded-full flex items-center justify-center relative translate-y-[-40px] translate-x-[-3px]">
                </div>
                <span className="text-2xl font-bold ">#2 Ashwin Bansal</span>
            </div>
            <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-slate-600 to-yellow-400  border-[3px] border-yellow-200 w-44 h-44 rounded-full flex items-center justify-center relative opacity-50 -z-1">     
            </div>
            <div className="bg-yellow-300 w-32 h-32 rounded-full flex items-center justify-center relative translate-y-[-150px] translate-x-[-6px]"></div>
                
                <span className="text-2xl font-bold  translate-y-[-110px]">#1 Ansh Jain</span>
            </div>
            <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-slate-800 to-orange-400  border-[3px] border-orange-500   w-32 h-32 rounded-full flex items-center justify-center relative opacity-50 translate-y-[70px]">
                </div>
                <div className="bg-orange-500 w-24 h-24 rounded-full flex items-center justify-center relative translate-y-[-40px] translate-x-[-3px]">
                </div>
                <span className="text-2xl font-bold">#3 Abhinav Gupta</span>            
              </div>
        </div>
        <div >
            
        </div>
        <div className="w-full max-w-2xl rounded-xl">
          <div className="w-25% ml-[430px]  max-w-md mx-auto mb-8 relative ">
            <input
                type="text"
                placeholder="Search"
                className="w-15% p-3 pl-10 rounded-3xl  border bg-gray-300  border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
          {players.map((player, index) => (
    <div key={index} className="flex justify-between items-center text-lg font-semibold bg-green-600 p-4 rounded-3xl mb-2">
        <div className="flex items-center">
            <span>#{index + 4}</span>
            <span className="ml-[20px] rounded-full w-[30px] h-[30px] flex-shrink-0">
                <img src="/logo.jpg" alt="" className="w-full h-full rounded-full" />
            </span>
            <span className="ml-[20px]">{player.name}</span>
        </div>
        <span className="text-lg">Points: {player.points}</span>
    </div>
))}

        </div>
    </div>
);
}

export default Leaderboard