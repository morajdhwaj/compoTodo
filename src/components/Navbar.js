/* eslint-disable arrow-body-style */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-5 bg-gray-200 h-10 items-center justify-between ">
      <div className="ml-20 font-bold text-2xl">
        <Link to="/">TODO</Link>
      </div>
      <div className="pr-10 space-x-5">
        <Link to="/profile/:username">Profile</Link>
        <Link to="/aboutus">About US</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link className="border border-black p-1"  to="/login">Log In</Link>
        <Link className="border border-black p-1"  to="/logout">Log Out</Link>
      </div>
    </div>
  );
};

export default Navbar;
