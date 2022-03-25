import React, { Component } from 'react';
import axios from 'axios';
import "../components/CommonStyle.css";

class ChangePasswordComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            oldPassword: '',
            newPassword: '',
            confirmPassword:'',
            errors:{},
            message: null
        }
        this.submitHandler = this.submitHandler.bind(this);

        this.validateFormEntries=()=>{
        let formValid=true;
        let errors={};

        console.log(this.state)
        if(!(this.state["oldPassword"])||!(this.state["newPassword"])||!(this.state["confirmPassword"])){
            errors["emptyField"]="Please fill all the field";
            this.setState({errors:errors});
            return false;
          }
         
          let pass_regex=/^(?=.*\d)(?=.*[#@$*])(?=.*[A-Z]).{5,20}$/
          if(this.state.newPassword.length<5|| !pass_regex.test(this.state.newPassword)){
           formValid=false;
            errors["password"]="Minimum of 5 character must contain atleast one uppercase letter,digits and special characters(#,$,*,@)"; 
          }

          if(this.state.newPassword !== this.state.confirmPassword){
            formValid=false;
            errors["confirmpass"]="New and Confirm Password should be same"; 
          } 
        this.setState({errors:errors})
         return formValid;
      }

    }

    submitHandler = (e) => {
        e.preventDefault();
        if(!(this.validateFormEntries()))
         console.log("Validation Failed")
        else{
            let userId=window.sessionStorage.getItem("userId");
            console.log(userId);
            let req={oldPassword:this.state.oldPassword,newPassword:this.state.newPassword,confirmPassword:this.state.confirmPassword}
            axios.post("http://localhost:8080/user/change_pass/"+userId,req)
                .then(resp => {
                    console.log(resp.data);
                    console.log(resp.data.message);
                    window.confirm(resp.data);
                    this.props.history.push("/House-owner");
                }).catch(err=>{
                    this.setState({oldPassword:'',newPassword:'',confirmPassword:'',message:"Password Reset Fail!!"});
                    window.alert("Password Reset Fail!!Please try Again");
                })
        }
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="Login">
            <h3 className="pb-3">Change Password</h3>
                <h6 className="errStyle">{this.state.errors["emptyField"]}</h6>
                
                <form >

                <div className="row p-2">
                    <label className="col-sm-2 col-form-label">Old Password</label>
                <div className="col-sm-3">
                    <input type="password" placeholder="oldpassword" name="oldPassword" className="form-control border border-primary" value={this.state.oldPassword} onChange={this.onChange}/>
                </div>
                </div>
                
                <div className="row p-2">
                <h6 className="errStyle">{this.state.errors["password"]}</h6>
                    <label className="col-sm-2 col-form-label">New Password</label>
                    <div className="col-sm-3">
                    <input type="password" placeholder="newpassword" name="newPassword" className="form-control border border-primary" value={this.state.newPassword} onChange={this.onChange}/>
                    </div>
                </div>
                
                <div className="row p-2">
                <h6 className="errStyle">{this.state.errors["confirmpass"]}</h6>
                    <label className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-3">
                    <input type="password" placeholder="confirmpassword" name="confirmPassword" 
                    className="form-control border border-primary" value={this.state.confirmPassword} onChange={this.onChange}/>
                    </div>
                </div>
                
                <div className="myButton1">
                  <button className="btn btn-primary btn-sm" onClick={this.submitHandler}>
                    Submit
                  </button>
                </div>
            </form>
    </div>
        );
    }
}

export default ChangePasswordComponent;