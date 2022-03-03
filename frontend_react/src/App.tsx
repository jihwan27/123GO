import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./components/home";
import { Button } from 'react-bootstrap';

function App() {
  const [backendMessage, setBackendMessage] = useState("Maybe back-end server is not running ... ");

  const getData = async() => {
    axios.get("/main").then(res => setBackendMessage(res.data.message));
  }; 
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Hello w REACT front end!</h1>
      <div>{backendMessage}</div>
      <div>Here must be Router.</div>
      <Button variant="outline-primary">Primary</Button>{'boot strap button. '}
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;