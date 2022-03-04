import { useEffect, useState } from "react";
import axios from "axios";
import AppRouter from "modules/app-router";
import { HomeApi } from "modules/api/home-api";

function App() {
  const homeApi = new HomeApi();

  const [backendMessage, setBackendMessage] = useState("Maybe back-end server is not running ... ");

  const getData = () => {
    homeApi.getBackendConnection().then(res => {
      setBackendMessage(res.data.message);
    });
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Hello w REACT front end!</h1>
      <div>BACKEND CONNECTION::: {backendMessage}</div>
      <hr></hr>
      <AppRouter />
    </div>
  )
}

export default App;