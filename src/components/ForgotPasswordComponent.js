import React, { Component } from 'react';
import axios from 'axios';
import "./Login.css";
import "./CommonStyle.css";
import Navbar from "./Navbar";;



class ForgetPasswordComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            email: '',
            errors:{},
            message: null
        }
        this.submitHandler = this.submitHandler.bind(this);

        this.validateFormEntries=()=>{
        let formValid=true;
        let errors={};

        console.log(this.state)
        if(!(this.state["email"])){
            errors["emptyField"]="Please fill all the field";
            this.setState({errors:errors});
            return false;
          }

          let email_regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
          if(!email_regex.test(this.state.email)){
           formValid=false;
            errors["email"]="Invalid Email Id"; 
          }
         
        this.setState({errors:errors})
         return formValid;
      }
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.validateFormEntries()){
            let req={email:this.state.email};
        axios.post("http://localhost:8080/user/forgot_pass",req)
            .then(resp => {
                console.log(resp.data);
                console.log(resp.data.message);
                window.confirm("New Password has been mailed to given email id");
                this.props.history.push("/Login");
            }).catch( err=>{
                 window.alert("Incorrect Mail ID")            

            })
        }else{
            console.log("Validation Failed");
        }
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className='bg'>
             <Navbar/>
             
            <div className="pt-5">
               
                <h5 className="errStyle">{this.state.errors["emptyField"]}</h5>
                <h5 className="errStyle">{this.state.errors["email"]}</h5>
                <form >
                <div className="form-group">
                    <label>Enter Registered Email ID</label>
                    <input type="text" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="myButton">
                <button className="btn btn-success" onClick={this.submitHandler}>Submit</button>
                </div>
            </form>
    </div>
    </div>
        );
    }
}

export default ForgetPasswordComponent;