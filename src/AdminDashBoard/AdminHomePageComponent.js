import React from "react";
import { Form, Button, Container, Row ,Col } from "react-bootstrap";
import Header from "./Header";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OwnerList from "./OwnerList";
import AddEvents from "./AddEvents";
import AddNotice from "./AddNotice";
import ComplaintsMang from "./ComplaintsMang";
import AdminProfile from "./AdminProfile";
import ResolveComplaints from "./ResolveComplaints";
import AddUser from "./AddUser";
import GenerateBill from "./GenerateBill";
import AdminViewAllNotice from "./AdminViewAllNotice";
import ChangePassword from "./ChangePassword";
import AdminViewAllBill from "./AdminViewAllBill";
import AdminPaymentStatusPage from "./AdminPaymentStatusPage";
import Navbar from "../components/Navbar";

function AdminHomePageComponent() {
 
  return (
    <Router>
    <div>
      <Navbar />
      <Header/>
      <div className="container-fluid">
          <Row>
            <Col md={3} className="md-3 p-2">
<Menu/>
            </Col>

            <Col md={9}>
        <switch>
        <Route path="/Admin/AdminProfile" component={AdminProfile} exact />
        <Route path="/Admin/AddUser" component={AddUser} exact />
          <Route path="/Admin/OwnerList" component={OwnerList} exact />
          <Route path="/Admin/ChangePassword" component={ChangePassword} exact />
          <Route path="/Admin/ComplaintsMang" component={ComplaintsMang} exact />
          <Route path="/Admin/AddNotice" component={AddNotice} exact />
          <Route path="/Admin/ViewNotice" component={AdminViewAllNotice} exact />
          <Route path="/Admin/AddEvents" component={AddEvents} exact /> 
          <Route path="/Admin/ResolveComplaints" component={ResolveComplaints} exact /> 
          <Route path="/Admin/GenerateBill" component={GenerateBill} exact /> 
          <Route path="/Admin/ViewBills" component={AdminViewAllBill} exact /> 
          <Route path="/Admin/PaymentStatus" component={AdminPaymentStatusPage} exact /> 

          {/* <Route path="/Admin/ViewBill" component={ResolveComplaints} exact /> 
          <Route path="/Admin/PaymentStatus" component={ResolveComplaints} exact />  */}
        </switch>
 

            </Col>
          </Row>
      </div>
    </div>
    </Router>
  );
}

export default AdminHomePageComponent;
