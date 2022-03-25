import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import axios from "axios";
import "../components/CommonStyle.css";

class AdminPaymentStatusPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            billMonth:"",
            unpaidBills: [],
            bills: [],
            searchFlag:"",
            errors:{},
            message: null
        }
        this.updateStatus = this.updateStatus.bind(this);
        this.loadUnpaidBills = this.loadUnpaidBills.bind(this);
        this.loadPaymentHistory = this.loadPaymentHistory.bind(this);
        this.submitHandler=this.submitHandler.bind(this);

        this.validateFormEntries=()=>{
        let formValid=true;
        let errors={};
        console.log(this.state)
        if(!(this.state["billMonth"]) || !(this.state["searchFlag"])){
            errors["emptyField"]="Please select both the field";
            this.setState({errors:errors});
            return false;
          }
        this.setState({errors:errors})
         return formValid;
      }
    }

    loadUnpaidBills() {

        let billDate=this.state.billMonth+"-01";
        axios.post("http://localhost:8080/admin/list_unpaidbills_for_date/"+billDate)
            .then((resp) => {
                console.log(resp.data);
                resp.data.map(
                        bill => {
                            let months=["","January", "February", "March", "April", "May", "June", "July", "August",
                                "September", "October", "November", "December"];
                             console.log(months[parseInt((bill.bill.billingDate).substr(5,2))]+" "+(bill.bill.billingDate).substr(5,2));

                             let year=(bill.bill.billingDate).substr(0,4);
                             console.log(year);
                            bill.bill.billingDate=months[parseInt((bill.bill.billingDate).substr(5,2))]+","+year;
                            bill.u.firstName=bill.u.firstName+" "+bill.u.lastName;
                        }
                            
                        );
                this.setState({unpaidBills: resp.data});
                console.log(this.state.unpaidBills);
            }).catch(err=>{
                window.alert("Error please try again later!!");
            });
   }

   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

   updateStatus(bill){

        this.setState({message:""});
        let billId=bill.bill.compositeKey.billId;
        let userId=bill.u.id;
        axios.post("http://localhost:8080/admin/payment_success/"+userId+"/"+billId)
        .then((resp=>
          {
            if(resp.status===200){
              window.alert(resp.data.message);
              let bills=this.state.unpaidBills.filter(bill =>bill.u.id!== userId);
               this.setState({unpaidBills: bills});
            } 
         else
             window.alert(resp.data.message);
          })).catch((error)=>{
            window.alert("Error occured please try again!!");
          }
        )
       }


   loadPaymentHistory(){

    let billDate=this.state.billMonth+"-01";
        axios.post("http://localhost:8080/admin/list_paidbills_for_date/"+billDate)
            .then((resp) => {
                console.log(resp.data);
                resp.data.map(
                        bill => {
                            bill.u.firstName=bill.u.firstName+" "+bill.u.lastName;
                           
                        }
                            
                        );
                this.setState({bills: resp.data});
                console.log(this.state.bills);
            }).catch(err=>{
                window.alert("Error please try again later!!");
            });





   }

   submitHandler(){
    if(this.validateFormEntries()){
            if(this.state.searchFlag=='unpaid')
                this.loadUnpaidBills();
            if(this.state.searchFlag=='paid')
                this.loadPaymentHistory();
        }else{
            console.log("Validation Fail")
        }
   }

    render() {


        const unpaidTable=(
            <table className="table table-striped border border-primary mt-3 w-27">
                    <thead>
                        <tr>
                            <th>Bill Number</th>
                            <th>House Number</th>
                            <th>Owner Name</th>
                            <th>Amount before due date</th>
                            <th>Amount after due date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.unpaidBills.map(
                        bill =>
                                    <tr >
                                        <td>{bill.bill.compositeKey.billId}</td>
                                        <td>{bill.u.houseNumber}</td>
                                        <td>{bill.u.firstName}</td>
                                        <td>{bill.bill.amount}</td>
                                        <td>{bill.bill.latePaymentAmount}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.updateStatus(bill)}>Pay</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                );

        const paidTable=(
            <table className="table table-striped border border-primary mt-3 w-27">
                    <thead>
                        <tr>
                            <th>Bill Number</th>
                            <th>House Number</th>
                            <th>Owner Name</th>
                            <th>Paid amount</th>
                            <th>Payment date</th>
                            <th>Mode of payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bills.map(
                        bill =>
                                    <tr >
                                        <td>{bill.bill.compositeKey.billId}</td>
                                        <td>{bill.u.houseNumber}</td>
                                        <td>{bill.u.firstName}</td>
                                        <td>{bill.bill.actualPaidAmount}</td>
                                        <td>{bill.bill.paymentDate}</td>
                                        <td>{bill.bill.modeOfPayment}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                );






        return (
            <div>
                <h3 className="text-center pb-2">Payment Status</h3>
                <h6 className="errCenter">{this.state.errors["emptyField"]}</h6>
                <div style={{textAlign:'center'}}>
                        <input 
                        type="radio"
                        name="searchFlag"
                        value='unpaid'
                        onChange={this.onChange}
                        />
                        <label 
                            style={{marginRight:'30px',marginLeft:'10px',fontSize:'20px',fontWeight:'bold'}}>
                            Unpaid
                        </label>
                        
                        <input 
                        type="radio"
                        name="searchFlag"
                        value='paid'
                        onChange={this.onChange}
                        />
                        <label 
                            style={{marginLeft:'10px',fontSize:'20px',fontWeight:'bold'}}>
                            Paid
                        </label>
                        
                        <div style={{paddingTop:'20px',paddingBottom:'30px',fontWeight:'bold'}}>
                        <label>Bill Month</label>
                              <input
                               type="month"
                               name="billMonth"
                               value={this.state.billMonth}
                               onChange={this.onChange}
                              />
                        </div> 
                        <div>
                        <button className="btn btn-success" onClick={this.submitHandler}>Submit</button>
                        </div>
                </div>

                {(this.state.searchFlag=='unpaid')?unpaidTable:paidTable}

            </div>
        );
    }

}

export default AdminPaymentStatusPage;