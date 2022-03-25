import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import axios from "axios";

class OwnerPaymentModule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId:window.sessionStorage.getItem("userId"),
            billMonth:"",
            unpaidBills: [],
            message: null
        }
        this.payBill = this.payBill.bind(this);
        this.loadUnpaidBills = this.loadUnpaidBills.bind(this);
    }

    componentDidMount() {
        this.loadUnpaidBills();
    }

    loadUnpaidBills() {

        axios.post("http://localhost:8080/owner/list_all_unpaid/"+this.state.userId)
            .then((resp) => {
                
                
                console.log(resp.data);
                resp.data.map(
                        bill => {
                            let months=["","January", "February", "March", "April", "May", "June", "July", "August",
                                "September", "October", "November", "December"];
                             console.log(months[parseInt((bill.billingDate).substr(5,2))]+" "+(bill.billingDate).substr(5,2));

                             let year=(bill.billingDate).substr(0,4);
                             console.log(year);
                            bill.billingDate=months[parseInt((bill.billingDate).substr(5,2))]+","+year;}
                        );
                this.setState({unpaidBills: resp.data});
                console.log(this.state.unpaidBills);
            }).catch(err=>{
                window.alert("Error please try again later!!");
            });
   }

   payBill(bill){
    console.log(bill);
    let billId=bill.compositeKey.billId;
    axios.
    post("http://localhost:8080/owner/paymentPage/"+this.state.userId+"/"+billId)
    .then((resp)=>
    {
        if(resp.status === 200){
            window.sessionStorage.setItem("billId",billId);
            window.sessionStorage.setItem("amount",resp.data.amount)
            this.props.history.push("/House-owner/Bills/PayBills");    
        }else{
            window.alert(resp.data.message);
        }
    })
    .catch(err=>{
        window.alert("Error please try again later!!");
    })
    
   }

    render() {
        return (
            <div>
             <h3  className="text-center pb-2">Unpaid bills</h3>
                <table className="table table-striped border border-primary">
                    <thead>
                        <tr>
                            <th>Bill number</th>
                            <th>Billing month</th>
                            <th>Purpose</th>
                            <th>Amount before due date</th>
                            <th>Amount after due date</th>
                            <th>Due date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.unpaidBills.map(
                        bill =>
                                    <tr key={bill.compositeKey.billId}>
                                        <td>{bill.compositeKey.billId}</td>
                                        <td>{bill.billingDate}</td>
                                        <td>{bill.purpose}</td>
                                        <td>{bill.amount}</td>
                                        <td>{bill.latePaymentAmount}</td>
                                        <td>{bill.dueDate}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.payBill(bill)}> Pay</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default OwnerPaymentModule;