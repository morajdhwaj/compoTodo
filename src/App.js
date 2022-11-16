/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProfilePage from "./pages/ProfilePage";
import LogInPage from "./pages/LogInPage";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import TodoPage from "./pages/TodoPage";
import LogOut from "./pages/LogOut";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected TodoProp={TodoPage} />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/todopage" element={<TodoPage />} />

      </Routes>
    </div>
  );
};

export default App;
