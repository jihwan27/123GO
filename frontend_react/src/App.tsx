import { useEffect, useState } from "react";
import axios from "axios";
import AppRouter from "modules/app-router";
import { HomeApi } from "modules/api/home-api";
import SubmitForm from "components/shared/submit-form";
import Header from "components/shared/header";
import { Row, Col } from "react-bootstrap";

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
    <div>
      <h1>Hello w REACT front end!</h1>
      <div>BACKEND CONNECTION::: {backendMessage}</div>
      <div>:::TOTAL TEST AREA:::</div>
      <SubmitForm />
      <div className="container-fluid">
        <Row>
          <Col></Col>
          <Col xs={10}>           
            <Header />
            <AppRouter />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  )
}

export default App;

