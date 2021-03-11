import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AllTeams from "./components/AllTeams/AllTeams";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HeaderHero />
            <AllTeams />
          </Route>
          <Route path="/home">
            <HeaderHero />
            <AllTeams />
          </Route>
          <Route path="/teamDetails/:idTeam">
            <TeamDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
