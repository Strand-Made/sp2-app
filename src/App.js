import Nav from "./components/navbar/Nav";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Error from "./components/pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/products"></Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
