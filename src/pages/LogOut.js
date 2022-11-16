import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const buttonHand = () => {
    localStorage.setItem("isLogin", false);
    localStorage.clear();
    navigate("/login");
  };
  
  return (
    <div className="flex justify-end">
      <button type="button" onClick={buttonHand} className="border bg-red-400 p-1 m-8 items-end">
        LOGOUT
      </button>
    </div>
  );
};
export default LogOut;
