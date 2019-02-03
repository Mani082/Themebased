import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Home from "./Components/Auth/Home";
//import Post from "./Components/Post/Post";
import Register from "./Components/Auth/Register";
import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/app" component={App} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
