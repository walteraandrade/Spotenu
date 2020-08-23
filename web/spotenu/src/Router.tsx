import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import BandSignup from "./pages/BandSignup";
import AdminSignup from "./pages/AdminSignup";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/usersignup" exact component={UserSignup} />
      <Route path="/bandsignup" exact component={BandSignup} />
      <Route path="/adminsignup" exact component={AdminSignup} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
};

export default Router;
