/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  let navigate = useNavigate();

  const loginHand = () => {
    if ((pass === "12345") & (username === "moraj@1234")) {
      localStorage.setItem("usernamekey", username);
      localStorage.setItem("passkey", pass);
      localStorage.setItem("isLogin", true);
      navigate("/todopage");
    } else {
      // alert("Warning:  Incorrect Username and Password")
    }
    setUsername("");
    setPass("");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20 space-y-2 ">
        {/* <div>
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

 */}

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our Todo
            </h5>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                required
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={loginHand}
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
