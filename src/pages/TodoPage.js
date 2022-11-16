/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useContext } from "react";
import { ApiContextVar} from "../context/ApiContext";
import { inputDB } from "../database/PouchDB";
import InsertList from "../components/InsertList";

const TodoPage = () => {
  const [insertData, setinsertData] = useState("");
  const dataVal = useContext(ApiContextVar);
  const itemEvent = (e) => {
    setinsertData(e.target.value);
  };

  const SubmitItems = async (e) => {
    e.preventDefault();
    // const user = "user"
    // if (insertData ==="" || insertData !== user){
    //   alert("Please Login First")
    //   setinsertData("");
    //   return
    // }
    const toItems = {

      task: insertData,
      date: new Date(),
    };
    const responseID = await inputDB(toItems);
  
    toItems.id = responseID?.id;
    setinsertData("");
    const ret = await dataVal?.getToDBFun();
    console.log("ret======== ", ret);
  };

  return (
    <div className=" flex flex-col items-center mt-10">
      <h1 className="text-2xl font-semibold text-center pr-12 py-3 ">TODO</h1>
      <form onSubmit={SubmitItems} name="myForm">
        <input
          name="myTodo"
          type="text"
          required={React}
          placeholder="Add Tasks"
          value={insertData}
          onChange={itemEvent}
          className="border border-black py-1 px-2 "
        />
        <button
          type="submit"
          name="myForm"
          className="ml-5 border-black bg-green-400 px-3 py-1 text-white"
        >
          Add
        </button>
      </form>
      <InsertList />
    </div>
  );
};

export default TodoPage;

