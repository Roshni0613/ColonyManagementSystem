import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import axios from "axios";
import "./Login.css";
import "./CommonStyle.css";
import Navbar from "./Navbar";


class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: null,
      errors:{}
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.validateFormEntries=()=>{
        let formValid=true;
        let errors={};

        console.log(this.state)
        if(!(this.state["email"])  || !(this.state["password"])){
            errors["emptyField"]="Please fill all the field";
            this.setState({errors:errors});
            return false;
          }

          let email_regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
          if(!email_regex.test(this.state.email)){
           formValid=false;
            errors["email"]="Invalid Email Id"; 
          }
          
          let password=this.state.password;
          if(password.length<5){
           formValid=false;
            errors["password"]="Invalid Password"; 
          }

         
        this.setState({errors:errors})
         return formValid;
      }
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({message:""});
      if(this.validateFormEntries()){
        let req = { email: this.state.email, password: this.state.password };
        axios
       .post("http://localhost:8080/user/login", req)
      .then((resp) => {
        console.log(resp.data); 
        console.log(resp.data.role);
        window.sessionStorage.setItem("userName", resp.data.firstName);
        window.sessionStorage.setItem("userId", resp.data.id);

        if (resp.data.role == "ADMIN") 
          this.props.history.push("/Admin");
        else 
          this.props.history.push("/House-owner");
      })
      .catch((err) => {
        this.setState({message:"Error Occured try again"});
        this.setState({ email: "", password: "" });
      });
       }else{
        console.log("Validation Failed!!")
       }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="bg">
        <Navbar/>
        <h2 className="text-center">Login</h2>
        <h6 className="errCenter">{this.state.errors["emptyField"]}</h6>
        <h6 className="errCenter">{this.state.message}</h6>
        <form>
          <div className="form-group">
           <h6 className="errCenter">{this.state.errors["email"]}</h6>
            <label>Email</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="form-control border border-primary"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <h6 className="errCenter">{this.state.errors["password"]}</h6>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="form-control border border-primary"
              value={this.state.password}
              onChange={this.onChange}
              maxLength='20'
            />
          </div>
       <div className="text-center pt-3">
            <button className="btn btn-success" onClick={this.submitHandler}>
              Login
            </button>
            &nbsp;&nbsp;&nbsp;
            <Link  to={"/login/forget-password"}>Forgot Password</Link>
            </div>
         
        </form>
      </div>
    );
  }
}

export default LoginComponent;
