/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getToData } from "../database/PouchDB";
import { useQuery } from "react-query";

export const ApiContextVar = createContext();

export const ApiContext = ({ children }) => {
  const [listRecord, setListRecord] = useState([]);

  const getToDBFun = async () => {
    const dataList = await getToData();
    setListRecord(dataList?.rows);
  };

  const {isFatching,error,status,data}= useQuery("meta-store",()=>
  getToDBFun()
  )

  // value is object , we wrap it to Memo
  const myValue = React.useMemo(() => ({ getToDBFun, listRecord }), [listRecord]);


  console.log("render info", myValue);
  return (
    // children is App component
    <ApiContextVar.Provider value={myValue}>{children}</ApiContextVar.Provider>
  );
};

ApiContext.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};
