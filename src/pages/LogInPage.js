/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const[pass,setPass]= useState("");
  const[username,setUsername]= useState("");

  let navigate = useNavigate();

  const loginHand = () =>{
    if (pass === "12345" & username ==="moraj"){
      localStorage.setItem("usernamekey",username);
      localStorage.setItem("passkey",pass);
      localStorage.setItem("isLogin",true);
      navigate("/todopage");
    }else{
      alert("Warning:  Incorrect Username and Password")
    }
    // setUsername("");
    // setPass("");
  };



  return (
    <div className="flex flex-col justify-center items-center my-20 space-y-2 ">
      <div>
        <h1  className="font-bold">username</h1>
        <input
          type="text"
          className="border  border-black "
          placeholder="Enter ID"
          onChange={(e)=>{setUsername(e.target.value);}}
        />
      </div>
      <div>
        <h1 className="font-bold">Password</h1>
        <input
          type="password"
          className="border border-black"
          placeholder="Password"
          onChange={(e)=>{setPass(e.target.value);}}

        />
      </div>
      <button className="font-semibold bg-green-300 p-1" onClick={loginHand}>LogIn</button>
    </div>
  );
};

export default LogInPage;
