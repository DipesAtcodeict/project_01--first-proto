import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import BlogPage from "./pages/blogPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
      </Switch>
    </div>
  );
}

export default App;
