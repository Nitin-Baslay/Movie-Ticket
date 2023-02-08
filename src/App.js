import Zone1 from "./components/Zone1";
import Zone2 from "./components/Zone2";
import Zone3 from "./components/Zone3";
import Submit from "./components/Submit";
import Heading from "./components/Heading";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Ticket from "./components/Ticket";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Switch>
        <Route path="/" exact>
          <Zone1 />
          <Zone2 />
          <Zone3 />
          <Submit />
        </Route>
        <Route path="/tickets">
          <Ticket />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
