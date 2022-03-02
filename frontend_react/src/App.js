import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [backendMessage, setBacendMessage] = useState("");

  const getData = async() => {
    axios.get("/main").then(res => setBacendMessage(res.data.message));
  } 
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Hello REACT front end!</h1>
      <div>{backendMessage}</div>
      <div>Here must be Router.</div>
    </div>
  )
}

export default App;