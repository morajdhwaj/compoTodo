/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
// import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getToData } from "../database/PouchDB";
import InsertListItem from "./InsertListItem";

const InsertList = () => {
  const { data } = useQuery("key", async () => {
    const dataList = await getToData();
    return dataList;
  });
  console.log("this is your", data);

  return (
    <div>
      <div>
        <ul>
          {data?.rows
            .sort((a, b) => new Date(b.doc.date) - new Date(a.doc.date))
            .map((item) => (
              <div>
                <li key={item.id}>{item.doc.task}</li>
                <InsertListItem tasksId={item.id} />
                {console.log("idddddddddd", item.id)}
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default InsertList;
