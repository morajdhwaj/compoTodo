/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApiContext } from "./context/ApiContext";
import { QueryClient, QueryClientProvider } from "react-query";

 
const root = ReactDOM.createRoot(document.getElementById("root"));
const val = new QueryClient;
// ReactDOM.render(<App/>, document.getElementById("root") )
root.render(
  // <React.StrictMode>
<QueryClientProvider client={val}>

  <BrowserRouter>
  <ApiContext>
    <App />
  </ApiContext>
  </BrowserRouter>
</QueryClientProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-35
reportWebVitals();
