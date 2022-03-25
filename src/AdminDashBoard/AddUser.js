import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import "../components/CommonStyle.css";
import axios from "axios";

import { Col, Row } from "react-bootstrap";

class AddUser extends Component {
  

constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            mobileNumber:'',
            email:'',
            password:'',
            confirmPassword:'',
            houseNumber:1,
            errors:{},
            message: null
        }
        this.submitHandler = this.submitHandler.bind(this);

        this.validateFormEntries=()=>{
        let formValid=true;
        let errors={};

        console.log(this.state)
        if(!(this.state["firstName"])||!(this.state["lastName"])||!(this.state["mobileNumber"])
          ||!(this.state["email"])||!(this.state["password"])||!(this.state["confirmPassword"])
          ||!(this.state["houseNumber"])){
            errors["emptyField"]="Please fill all the field";
            this.setState({errors:errors});
            return false;
          }

          let name_regex=/^[a-zA-Z]*$/
          if(!name_regex.test(this.state.firstName) || !name_regex.test(this.state.lastName) ){
           formValid=false;
            errors["name"]="Letters Only"; 
          }
         
         let mobile_regex=/^\d{10}$/
          if(!mobile_regex.test(this.state.mobileNumber) || (this.state.mobileNumber).length<10){
           formValid=false;
            errors["mobile"]="Invalid Mobile Number"; 
          }

          let email_regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
          if(!email_regex.test(this.state.email)){
           formValid=false;
            errors["email"]="Invalid Email Id"; 
          }

          let password=this.state.password;
          let pass_regex=/^(?=.*\d)(?=.*[#@$*])(?=.*[A-Z]).{5,20}$/
          if(password.length<5|| !pass_regex.test(password)){
           formValid=false;
            errors["password"]="Minimum of 5 character must contain atleast one uppercase letter,digits and special characters(#,$,*,@)"; 
          }

          if(this.state.password !== this.state.confirmPassword){
            formValid=false;
            errors["confirmpass"]="New and Confirm Password should be same"; 
          } 
        this.setState({errors:errors})
         return formValid;
      }

    }


submitHandler = (e) => {
    e.preventDefault();
      if(this.validateFormEntries()){

        let req = {
              firstName:this.state.firstName,
              lastName:this.state.lastName,
              email: this.state.email, 
              password: this.state.password,
              confirmPassword:this.state.confirmPassword,
              mobileNumber:this.state.mobileNumber,
              houseNumber:this.state.houseNumber
              };
        axios
       .post("http://localhost:8080/user/register", req)
      .then((resp) => {
        if(resp.status===200){
          window.alert(resp.data);
          this.setState({ 
              firstName: '',
              lastName: '',
              mobileNumber:'',
              email:'',
              password:'',
              confirmPassword:''
            });
        }
        else
          window.alert("Owner Registration Failed")
      })
      .catch((err) => {
        window.alert("Error Occured try again");
      });
       }else{
        console.log("Validation Failed!!")
       }
  };






onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render(){
  return (
   <div >
   <h3>Owner Registration</h3>
       <form>
    <div className="row p-2">
      <h6 className="errStyle">{this.state.errors["emptyField"]}</h6>
      <h6 className="errStyle">{this.state.errors["name"]}</h6>
      <label  className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-2">
        <input type="text" 
        className="form-control border border-primary" 
        name="firstName" 
        placeholder="First Name"
        value={this.state.firstName}
        onChange={this.onChange}/>
      </div>


      <div className="col-sm-2">
        <input type="text" 
        className="form-control border border-primary" 
        name="lastName" 
        placeholder="Last Name"
        value={this.state.lastName}
        onChange={this.onChange}/>
      </div>
    </div>

    
    <h6 className="errStyle">{this.state.errors["mobile"]}</h6>
    <div className="row p-2">
      <label  className="col-sm-2 col-form-label">Mobile Number</label>
      <div className="col-sm-4">
        <input type="text"
           className="form-control border border-primary" 
           name="mobileNumber"
           maxLength="10"
            placeholder="Mobile Number"
            value={this.state.mobileNumber}
            onChange={this.onChange}/>
      </div>
    </div>



    <h6 className="errStyle">{this.state.errors["email"]}</h6>
    <div className="row p-2">
      <label className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-4">
        <input type="email" 
        className="form-control border border-primary" 
        name="email" 
        placeholder="Email"
        value={this.state.email}
        onChange={this.onChange}/>
      </div>
    </div>

    <h6 className="errStyle">{this.state.errors["password"]}</h6>
    
    <div className="row p-2">
      <label className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-4">
        <input type="password"
           className="form-control border border-primary" 
          name="password" 
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChange}/>
      </div>
    </div>

    <h6 className="errStyle">{this.state.errors["confirmpass"]}</h6>
    <div className="row p-2">
      <label  className="col-sm-2 col-form-label">Confirm Password</label>
      <div className="col-sm-4">
        <input type="password" 
            className="form-control border border-primary"
            name="confirmPassword" 
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.onChange}/>
      </div>
    </div>

    <div className="row p-2">
          <label className="col-sm-2 col-form-label">House Number</label>
          <div className="col-sm-4">
              <select name="houseNumber"  
              onChange={this.onChange} 
              value={this.state.houseNumber}
              className="form-control border border-primary"
              >
                  <option  value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>

              </select>
            </div>
    </div>
    <div>
      <div className="myButton1">
        <button type="submit" className="btn btn-primary" onClick={this.submitHandler} >Register</button>
      </div>
    </div>
  </form>
  </div> 
  );

}
}

export default AddUser;
