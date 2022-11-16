/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { TodoProp } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login")?.toLocaleLowerCase()==="true";
    if (!login) {
      navigate("/login");
    }
    console.log(login)
  });
  return (
    <div>
      <TodoProp />
    </div>
  );
};

export default Protected;
