import React, { Component } from "react";
import axios from "axios";
import "../components/CommonStyle.css";


class PaymentPageComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cardNumber: "",
        cvv:"",
        expirydate:"",
        amount:window.sessionStorage.getItem("amount"),
        cardName:"",
        message:null,
        errors:{}
      };
      
      this.submitHandler = this.submitHandler.bind(this);
      this.validateFormEntries=()=>{
        let formValid=true;
        let errors={};

        console.log(this.state)
        if(!(this.state["cardNumber"])  || !(this.state["cvv"]) || !(this.state["expirydate"])
          || !(this.state["cardName"]) 
          ){
            errors["emptyField"]="Please fill all the field";
            this.setState({errors:errors});
            return false;
          }

          let cardName_regex=/^[a-zA-Z\s]*$/
          if(!cardName_regex.test(this.state.cardName)){
           formValid=false;
            errors["cardName"]="Invalid Name"; 
          }
         
         let cardNum_regex=/^\d{12}$/
          if(!cardNum_regex.test(this.state.cardNumber)){
           formValid=false;
            errors["cardNumber"]="Invalid card number"; 
          }

          let cvv_regex=/^\d{3}$/
          if(!cvv_regex.test(this.state.cvv)){
          formValid=false;
          errors["cvv"]="Invalid CVV"; 
        };
        
        let expirydate=this.state.expirydate+"-30";
        expirydate=new Date(expirydate);
        let currentDate=new Date(); 

         if(expirydate.getTime()<currentDate.getTime()){
          formValid=false;
          errors["expirydate"]="Invalid expirydate"
        }
        this.setState({errors:errors})
         return formValid;
      }
    }

    submitHandler = (e) => {
      this.setState({message:""});
      if(this.validateFormEntries()){
        let billId=window.sessionStorage.getItem("billId");
        let userId=window.sessionStorage.getItem("userId");
        axios.post("http://localhost:8080/owner/payment/"+userId+"/"+billId)
        .then((resp=>
          {
            if(resp.status===200){
              window.confirm(resp.data.message);
              this.setState({
                cardNumber: "",
                cvv:"",
                expirydate:"",
                amount:"",
                cardName:"",
              });

              this.props.history.push("/House-owner/Bills");
            } 
         else
             window.alert(resp.data.message);
          })).catch((error)=>{
            window.alert("Error occured please try again!!");
          }
        )
       }else{
        console.log("Validation Failed!!")
       }
      }

      


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

    render(){


      return (
        <div>
        <h3 className="text-center pb-2">Payment Page</h3>
          <h6 className="errCenter" >{this.state.errors["emptyField"]}</h6>
          <h6 className="errCenter">{this.state.message}</h6>
             <div className="form-group row">
             <h6 className="errCenter">{this.state.errors["cardNumber"]}</h6>
            <label >Card Number</label>
              <input 
              type="text"
              name="cardNumber"
              value={this.state.cardNumber}
              maxLength="12"
              onChange={this.onChange}
              className="form-control border border-primary"
              />
              </div>
              <div  className="form-group row" >
              <h6 className="errCenter">{this.state.errors["cardName"]}</h6>
              <label>Name</label>
              <input 
              type="text"
              name="cardName"
              value={this.state.cardName}
              onChange={this.onChange}
              className="form-control border border-primary"
              />
              </div>
              <div  className="form-group row" >
               <h6 className="errCenter">{this.state.errors["cvv"]}</h6>
              <label>CVV</label>
              <input
               type="text"
               name="cvv"
               value={this.state.cvv}
              maxLength="3"
              onChange={this.onChange}
             className="form-control border border-primary"
              />
              </div>
              <div  className="form-group row" >
               <h6 className="errCenter">{this.state.errors["expirydate"]}</h6>
              <label>Expiry_Date</label>
              <input
               type="month"
               name="expirydate"
               value={this.state.expirydate}
               className="border border-primary"
               onChange={this.onChange}
              />
              </div>
              <div  className="form-group row" >
              <label>Amount</label>
              <input
               type="number"
               name="amount"
               value={this.state.amount}
              readonly="readonly"
              className="form-control border border-primary"
              />
              </div>

              <div className="myButton">
              <div className="text-center m-3">
              <button className="btn btn-primary btn-sm"  onClick={this.submitHandler}>Pay</button>
              </div>
              </div>
          
        </div>
      )
    }
}

export default PaymentPageComponent;
