import React, { Component } from "react";
import axios from "axios";
import "../components/CommonStyle.css";

class GenerateBillComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        amount: "",
        dueDate:null,
        latePaymentAmount:"",
        purpose:"Maintenance",
        billMonth:"",
        message:null,
        errors:{}
      };
      
      this.submitHandler = this.submitHandler.bind(this);
      this.validateFormEntries=()=>{
        let formValid=true;
        let errors={};
        let duedate=new Date(this.state.dueDate);
        let currentDate=new Date();
        console.log(this.state)
        if(!(this.state["amount"])  || !(this.state["dueDate"]) || !(this.state["latePaymentAmount"])
          || !(this.state["purpose"]) || !(this.state["billMonth"])
          ){
            errors["emptyField"]="Please fill all the field";
            this.setState({errors:errors});
            return false;
          }

          if(parseInt(this.state["amount"]) <=0 ||parseInt(this.state["latePaymentAmount"]) <=0){
           formValid=false;
            errors["amount"]="Bill amount or late payment fee cannot less than or equal to zero "; 
          }
         
          if(parseInt(this.state["latePaymentAmount"]) < parseInt(this.state["amount"])){
           formValid=false;
            errors["latePaymentAmount"]="Late Payment Amount cannot less than bill amount "; 
          }

          if(duedate.getTime()<currentDate.getTime()){
          formValid=false;
          errors["dueDate"]="Due Date Should be greater than current date"
        }
        

        this.setState({errors:errors})
         return formValid;
      }
    }

    submitHandler = (e) => {
      this.setState({message:null});
      if(this.validateFormEntries()){
        let month=(this.state.billMonth).slice(-2);
        let year=(this.state.billMonth).substr(2,2);
        let months=["","JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG",
                   "SEP", "OCT", "NOV", "DEC"];
        console.log(month+" "+year+" "+months[parseInt(month)]);
        let billId=months[parseInt(month)]+year+Math.floor(1000 + Math.random() * 900);
        let billDate=this.state.billMonth+"-01";

        console.log(billId+" "+billDate);

        let req={billId:billId,amount:this.state.amount,billDate:billDate,purpose:this.state.purpose,
          latePaymentAmount:this.state.latePaymentAmount,dueDate:this.state.dueDate};

        axios.post("http://localhost:8080/admin/generate-bill",req)
        .then((resp=>
          {
            if(resp.status===200){
              window.confirm(resp.data.message);
              this.setState({amount: "",
                      dueDate:"",
                      latePaymentAmount:"",
                      purpose:"Maintenance",
                      billMonth:"",
                      message:null});
            }
            
         else
             window.alert(resp.data.message);
          })).catch((error)=>{
            this.setState({message:"Error occured please try again!!"})
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
          <h6 className="errCenter">{this.state.errors["emptyField"]}</h6>
          <h6 className="errCenter">{this.state.message}</h6>
           <h3 className="text-center">Bill Generation</h3>  
             <div className="form-group row">
             <h6 className="errCenter">{this.state.errors["amount"]}</h6>
            <label >Amount before due date</label>
              <input 
              type="Number"
              name="amount"
              value={this.state.amount}
              onChange={this.onChange}
              className="form-control border border-primary"
              />
              </div>
              <div  className="form-group row" >
              <h6 className="errCenter">{this.state.errors["latePaymentAmount"]}</h6>
              <label>Amount after due date</label>
              <input 
              type="Number"
              name="latePaymentAmount"
              value={this.state.latePaymentAmount}
              onChange={this.onChange}
               className="form-control border border-primary"
              />
              </div>
              <div  className="form-group row" >
               <h6 className="errCenter">{this.state.errors["dueDate"]}</h6>
              <label>Due_Date </label>
              <input
               type="Date"
               name="dueDate"
              className="form-control border border-primary"
               value={this.state.dueDate}
               onChange={this.onChange}
              />
              </div>
              <div  className="form-group row" >
              <label>Bill Month</label>
              <input
               type="month"
               name="billMonth"
               className="form-control border border-primary"
               value={this.state.billMonth}
               onChange={this.onChange}
              />
              </div>
              <div  className="form-group row" >
              <label>Objective/Purpose</label>
              <select name="purpose"  className="border border-primary" onChange={this.onChange} value={this.state.purpose}>
                <option  value="Maintenance">Maintenance</option>
                <option value="Social Event">Social Event</option>
                <option value="Others">Others</option>
              </select>
              </div>

              <div className="text text-center mt-3">
              <div className="myButton">
              <button className="btn btn-primary btn-sm"  onClick={this.submitHandler}>Generate</button>
              </div>
              </div>
          
        </div>
      )
    }
}

export default GenerateBillComponent;
