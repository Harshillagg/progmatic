function ContestCard({openModal}:any) {

  return (
    <>
      <div className="bg-red-700 h-64 w-96 rounded-3xl ml-4 ">
        <div className="bg-gray-300 h-52 w-96 pt-6 rounded-3xl">
          <div className="flex justify-between pr-4 items-center">
            <div className="text-center rounded-r-full bg-[#6DC956] h-8 w-28 flex justify-center items-center gap-2">
              <div>
                <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_live_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ic_fluent_live_24_filled" fill="#ffffff" fillRule="nonzero"> <path d="M6.34277267,4.93867691 C6.73329697,5.3292012 6.73329697,5.96236618 6.34277267,6.35289047 C3.21757171,9.47809143 3.21757171,14.5450433 6.34277267,17.6702443 C6.73329697,18.0607686 6.73329697,18.6939336 6.34277267,19.0844579 C5.95224838,19.4749821 5.3190834,19.4749821 4.92855911,19.0844579 C1.02230957,15.1782083 1.02230957,8.84492646 4.92855911,4.93867691 C5.3190834,4.54815262 5.95224838,4.54815262 6.34277267,4.93867691 Z M19.0743401,4.93867691 C22.9805896,8.84492646 22.9805896,15.1782083 19.0743401,19.0844579 C18.6838158,19.4749821 18.0506508,19.4749821 17.6601265,19.0844579 C17.2696022,18.6939336 17.2696022,18.0607686 17.6601265,17.6702443 C20.7853275,14.5450433 20.7853275,9.47809143 17.6601265,6.35289047 C17.2696022,5.96236618 17.2696022,5.3292012 17.6601265,4.93867691 C18.0506508,4.54815262 18.6838158,4.54815262 19.0743401,4.93867691 Z M9.3094225,7.81205295 C9.69994679,8.20257725 9.69994679,8.83574222 9.3094225,9.22626652 C7.77845993,10.7572291 7.77845993,13.2394099 9.3094225,14.7703724 C9.69994679,15.1608967 9.69994679,15.7940617 9.3094225,16.184586 C8.91889821,16.5751103 8.28573323,16.5751103 7.89520894,16.184586 C5.58319778,13.8725748 5.58319778,10.1240641 7.89520894,7.81205295 C8.28573323,7.42152866 8.91889821,7.42152866 9.3094225,7.81205295 Z M16.267742,7.81205295 C18.5797531,10.1240641 18.5797531,13.8725748 16.267742,16.184586 C15.8772177,16.5751103 15.2440527,16.5751103 14.8535284,16.184586 C14.4630041,15.7940617 14.4630041,15.1608967 14.8535284,14.7703724 C16.384491,13.2394099 16.384491,10.7572291 14.8535284,9.22626652 C14.4630041,8.83574222 14.4630041,8.20257725 14.8535284,7.81205295 C15.2440527,7.42152866 15.8772177,7.42152866 16.267742,7.81205295 Z M12.0814755,10.5814755 C12.9099026,10.5814755 13.5814755,11.2530483 13.5814755,12.0814755 C13.5814755,12.9099026 12.9099026,13.5814755 12.0814755,13.5814755 C11.2530483,13.5814755 10.5814755,12.9099026 10.5814755,12.0814755 C10.5814755,11.2530483 11.2530483,10.5814755 12.0814755,10.5814755 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
              </div>
              <div className="text-sm font-semibold">Live Now</div>
            </div>
            <span className="text-red-700 font-bold ">Daily Contest</span>
          </div>
          <div className="text-dark pl-8 pt-4">
            <p className="font-bold text-lg mb-6">Binary Search Contest</p>
            <div>
              <div className="relative h-8 -ml-1">
                <img className="w-8 h-8 rounded-full border-2 border-gray-400 absolute ml" src="/avatar.jpg" alt="Avatar 1" />
                <img className="w-8 h-8 rounded-full border-2 border-gray-400 absolute top-0 left-0 ml-6 " src="/avatar.jpg" alt="Avatar 2" />
                <img className="w-8 h-8 rounded-full border-2 border-gray-400 absolute top-0 left-0 ml-12 " src="/avatar.jpg" alt="Avatar 3" />
                <img className="w-8 h-8 rounded-full border-2 border-gray-400 absolute top-0 left-0 ml-[72px]" src="/avatar.jpg" alt="Avatar 4" />
              </div>
              <span>+53 participants</span>
            </div>
          </div>
        </div>
        <p className="text-center pt-2 font-bold"><button onClick={openModal} >Register & view details</button></p>
      </div>
      
    </>
  );
}

export default ContestCard;
