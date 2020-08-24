import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import BandSignup from "./pages/BandSignup";
import AdminSignup from "./pages/AdminSignup";
import Login from "./pages/Login";
import Evaluate from "./pages/Evaluate/Evaluate";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/home" exact component={Home} />
      <Route path="/" exact component={Home} />
      <Route path="/usersignup" exact component={UserSignup} />
      <Route path="/bandsignup" exact component={BandSignup} />
      <Route path="/adminsignup" exact component={AdminSignup} />
      <Route path="/login" exact component={Login} />
      <Route path="/evaluate" exact component={Evaluate} />
    </BrowserRouter>
  );
};

export default Router;
