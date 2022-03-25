import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoticeBoardComponent from "./NoticeBoardComponent";
import HeaderUser from "./HeaderUser";
import DoComplaint from "./DoComplaint";
import ViewEvents from "./ViewEvents";
import UserMenu from "./UserMenu";
import ChangePassword from "./ChangePassword";
import PaymentPage from "./PaymentPage";
import OwnerPaymentModule from "./OwnerPaymentModule";
import OwnerPaymentHistory from "./OwnerPaymentHistory";
import Navbar from "../components/Navbar";

function OwnerHomePageComponent() {
  return (
    <Router>
      <div>
       <Navbar />
        <HeaderUser />
        <div className="container-fluid">
          <Row>
            <Col md={2} className="md-3 p-2">
              <UserMenu/>
            </Col>

            <Col md={7}>
              <switch>
                <Route
                  path="/House-owner/NoticeBoard"
                  component={NoticeBoardComponent}
                  exact
                />

                <Route
                  path="/House-owner/ChangePassword"
                  component={ChangePassword}
                  exact
                />

                <Route
                  path="/House-owner/Bills"
                  component={OwnerPaymentModule}
                  exact
                />

                <Route
                  path="/House-owner/PaymentHistory"
                  component={OwnerPaymentHistory}
                  exact
                />
                
                <Route
                  path="/House-owner/Bills/PayBills"
                  component={PaymentPage}
                  exact
                />


                <Route
                  path="/House-owner/ViewEvents"
                  component={ViewEvents}
                  exact
                />
                <Route
                  path="/House-owner/DoComplaint"
                  component={DoComplaint}
                  exact
                />
              </switch>
            </Col>

            <Col md={3}>
            <NoticeBoardComponent/>
            </Col>
          </Row>
        </div>
      </div>
    </Router>
  );
}

export default OwnerHomePageComponent;
