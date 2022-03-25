import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import axios from "axios";

class AdminViewAllBill extends Component {

    constructor(props) {
        super(props)
        this.state = {
            billMonth:"",
            bills: [],
            message: null
        }
        this.deleteBill=this.deleteBill.bind(this);
        this.loadBills = this.loadBills.bind(this);
    }

    componentDidMount() {
        this.loadBills();
    }

    loadBills() {

        axios.post("http://localhost:8080/admin/list_all_bills")
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
                this.setState({bills: resp.data});
                console.log(this.state.bills);
            }).catch(err=>{
                window.alert("Error please try again later!!");
            });
   }

   deleteBill(billId){
    axios.delete("http://localhost:8080/admin/delete_bill/"+billId)
           .then(res => {
                 window.confirm('Bill deleted successfully');
                let bills=this.state.bills.filter(bill =>bill.compositeKey.billId!== billId);
                console.log("After Delete:"+bills)
               this.setState({bills: bills});
               
           }).catch(err=>{
            window.alert('Error please try again later!!');
           })
    
   }

    render() {
        return (
            <div>
            <h3 className="text-center pb-2">List of All Bills</h3>
                <table className="table table-striped border border-primary">
                    <thead>
                        <tr>
                            <th>Bill Number</th>
                            <th>Billing Month</th>
                            <th>Purpose</th>
                            <th>Amount before due date</th>
                            <th>Amount after due date</th>
                            <th>Due date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bills.map(
                        bill =>
                                    <tr key={bill.compositeKey.billId}>
                                        <td>{bill.compositeKey.billId}</td>
                                        <td>{bill.billingDate}</td>
                                        <td>{bill.purpose}</td>
                                        <td>{bill.amount}</td>
                                        <td>{bill.latePaymentAmount}</td>
                                        <td>{bill.dueDate}</td>
                                        <td>
                                            <button className="btn btn-success" 
                                            onClick={() => this.deleteBill(bill.compositeKey.billId)}>Delete</button>
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

export default AdminViewAllBill;