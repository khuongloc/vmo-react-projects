import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import { history } from "../history/history";

import Navbar from "./navbar/Navbar";
import Counter from "./counter/Counter";
import Quote from "./quote/Quote";
import SlideAnimation from "./test/SlideAnimation";
import Todos from "./todos/Todos";

const App = () => {
  return (
    <Router history={history}>
      <Navbar />

      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/quotes" component={Quote} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/test" component={SlideAnimation} />
      </Switch>
    </Router>
  );
};

export default App;
