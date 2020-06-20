import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./partials/header/Header";
import Footer from "./partials/footer/Footer";
import HomePage from "./pages/homepage/HomePage";
import Course from "./pages/coursepage/CoursePage";
import Classes from "./pages/classes/Classes";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/classes/:id" component={Classes} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
