import React, { useState } from "react";
import { useLoginContext } from "../../context/useContext";

import "../logout/logout.style.css";

function Logout() {
  const { showLogout, setShowLogout } = useLoginContext();

  const confirmLogout = () => {
    localStorage.removeItem("user-token");
    window.location.href = "/";
  };

  const cancelLogout = () => {
    setShowLogout(false);
  };

  return (

    showLogout&&(
      <div className="relative z-50">
      {showLogout && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
        <div className="animate-slideDown bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <p className="font-semibold pb-3 ">
            Are you sure you want to logout?
          </p>
          <div className="flex justify-end gap-5 font-semibold">
            <button className="btn" onClick={confirmLogout}>
              Yes
            </button>
            <button className="btn" onClick={cancelLogout}>
              No
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
      
    )


    
  );
}

export default Logout;
