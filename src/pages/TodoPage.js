/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, } from "react";
import { useMutation, useQueryClient } from "react-query";
import { inputDB } from "../database/PouchDB";
import InsertList from "../components/InsertList";
import {GET_TODOS} from "../utils/components";

const TodoPage = () => {
  const [insertData, setinsertData] = useState("");
  const queryClient=useQueryClient();

  
  const {mutate} = useMutation(inputDB,{
  onSuccess:()=>{
  queryClient.invalidateQueries(GET_TODOS)
}    
  });
  const itemEvent = (e) => {
    setinsertData(e.target.value);
  };

  const SubmitItems = async (e) => {
    e.preventDefault();
    const toItems = {

      task: insertData,
      date: new Date(),
    };
    mutate(toItems);
    setinsertData("");
  }
  
 
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

