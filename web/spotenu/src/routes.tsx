import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import UserSignup from "./pages/userSignup/UserSignup";
import BandSignup from "./pages/bandSignup";
import Login from "./pages/login";
import AdmSignUp from "./pages/signUpADM/AdmSignUp";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/usersignup" exact component={UserSignup} />
      <Route path="/bandsignup" exact component={BandSignup} />
      <Route path="/login" exact component={Login} />
      <Route path="/admsignup" exact component={AdmSignUp} />
    </BrowserRouter>
  );
};

export default Router;
