import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
