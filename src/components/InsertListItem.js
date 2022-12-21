/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { removeToDB, updateDB } from "../database/PouchDB";
import { useMutation, useQueryClient } from "react-query";
import {GET_TODOS} from "../utils/components";

const InsertListItem = ({ tasks, tasksId, date }) => {
  const queryClient= useQueryClient();


  console.log("hey this ",tasksId)

  const [editTodo, setEditTodo] = useState("");

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: () => removeToDB(tasksId),
    onSuccess:()=>{
      queryClient.invalidateQueries(GET_TODOS)
    }    
  });
  const remove = (event) => {
    event.preventDefault();
    mutate();
  };
  console.log("isLoading ", isLoading, "isSucess", isSuccess, "Error", isError);

  const {
    mutate: isMutate,
    isLoading: isLoader,
    isSuccess: isSuccer,
    isError: isErr,
  } = useMutation({
    mutationFn: () => updateDB(tasksId, { task:editTodo }),
    onSuccess:()=>{
      queryClient.invalidateQueries(GET_TODOS)
    }    
  });

  const edit = (event) => {
    event.preventDefault();
    setEditTodo("");
    isMutate();
    
  };
  return (
    <div className="space-y-5 flex space-x-5 items-center">
      <div className="flex space-x-5 space-y-2">
        <input
          type="text"
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
          className="border"
          
        />
        <button type="button" onClick={edit}>
          Edit
        </button>
        <button className="border bg-red-400 p-1" type="button" onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default memo(InsertListItem);

InsertListItem.propTypes = {
  tasks: PropTypes.string,
  tasksId: PropTypes.string,
  date: PropTypes.string,
};

InsertListItem.defaultProps = {
  tasks: "sample task",
  tasksId: "id",
  date: "//-//-//",
};
