import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import axios from "axios";
import "../components/CommonStyle.css";

class OwnerPaymentHistory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bills: [],
            userId:window.sessionStorage.getItem("userId"),
            message: null
        } 
        this.loadPaymentHistory = this.loadPaymentHistory.bind(this);
    }
    
   componentDidMount(){
    this.loadPaymentHistory();
   }

   loadPaymentHistory(){
        axios.post("http://localhost:8080/owner/list_all_paid/"+this.state.userId)
            .then((resp) => {
                console.log(resp.data);
                resp.data.map(
                        bill => {
                            let months=["","January", "February", "March", "April", "May", "June", "July", "August",
                                "September", "October", "November", "December"];
                        
                             let year=(bill.billingDate).substr(0,4);
                             console.log(year);
                            bill.billingDate=months[parseInt((bill.billingDate).substr(5,2))]+","+year;
                           
                        }
                            
                        );
                this.setState({bills: resp.data});
                console.log(this.state.bills);
            }).catch(err=>{
                window.alert("Error please try again later!!");
            });





   }

    render() {

        return (
            <div>
                <h3 className="text-center pb-2">Payment History</h3>
                <table className="table table-striped border border-primary mt-3 w-27">
                    <thead>
                        <tr>
                            <th>Bill number</th>
                            <th>Billing month</th>
                            <th>Purpose</th>
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
                                        <td>{bill.compositeKey.billId}</td>
                                        <td>{bill.billingDate}</td>
                                        <td>{bill.purpose}</td>
                                        <td>{bill.actualPaidAmount}</td>
                                        <td>{bill.paymentDate}</td>
                                        <td>{bill.modeOfPayment}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
        );
    }

}

export default OwnerPaymentHistory;