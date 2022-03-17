import { useEffect, useState } from "react";
import AppRouter from "modules/app-router";
import { HomeApi } from "modules/api/home-api";
import SubmitForm from "components/shared/submit-form";
import Header from "components/shared/header";
import { Row, Col, Container } from "react-bootstrap";
import "./styles/styles.css"

function App() {
  const homeApi = new HomeApi();

  const [backendMessage, setBackendMessage]: [string, any] = useState("Maybe back-end server is not running ... ");

  const getData = () => {
    homeApi.getBackendConnection().then(res => {
      setBackendMessage(res.data.message);
    });
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1>Hello w REACT front end!</h1>
      <div>BACKEND CONNECTION::: {backendMessage}</div>
      <div>:::TOTAL TEST AREA:::</div>
      <SubmitForm />
      <Header />
      <AppRouter />
    </Container>
  )
}

export default App;

