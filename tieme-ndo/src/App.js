import React from "react";
import { Route, Switch } from "react-router-dom";
import Clients from "./components/clients";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/clients" component={Clients} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
