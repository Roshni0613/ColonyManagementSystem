import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import LoginComponent from "./components/Login";
import Home from "./components/Home";
import Complaints from "./components/Complaints";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OwnerHomePageComponent from "./UserDashboard/OwnerHomePageComponent";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import AdminHomePageComponent from "./AdminDashBoard/AdminHomePageComponent.js";
import RulesandReguslaations from "./components/RulesandReguslaations";
import Footer from "./components/Footer";
import WhyGharkul from "./components/WhyGharkul";



function App() {
  return (
    <>
      <Router>
        <div className="app_main">
          
        </div>

        <switch>
          <Route path="/Complaints" component={Complaints} exact />
          <Route path="/Login" component={LoginComponent} exact />

          <Route path="/Card" component={Card} exact />
          <Route path="/" exact component={Home} />
          <Route path="/Admin" component={AdminHomePageComponent} />
          <Route path="/House-owner" component={OwnerHomePageComponent} />
          {/* <Route path="/about" component={AboutUs}/> */}
          {/* <Route path="/Contact-us" component={ContactUs}/> */}
          <Route path="/Rules" component={RulesandReguslaations}/>
          <Route path="/Why-Gharkul" component={WhyGharkul}/>

          <Route
            path="/login/forget-password"
            component={ForgotPasswordComponent}
          />
        </switch>
      </Router>
    </>
  );
}

export default App;
