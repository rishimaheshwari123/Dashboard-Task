import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MobileRetirementStrategy from "./components/MobileRetirementStrategy";
import Home from "./pages/Home";
import RetirementIncome from "./pages/RetirementIncome";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/retirementIncome" component={RetirementIncome} />
          <Route
            exact
            path="/retirementStrategy"
            component={MobileRetirementStrategy}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
