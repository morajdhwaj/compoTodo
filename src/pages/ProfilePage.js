/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  let { username } = useParams();

  return (
    <div className="text-3xl font-bold"> This is Profile Page of {username}</div>
  );
};

export default ProfilePage;
