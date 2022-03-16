import Home from "../components/main/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;