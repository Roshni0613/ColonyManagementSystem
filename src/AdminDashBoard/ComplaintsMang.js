import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ResolveComplaints from "./ResolveComplaints";
import { Form, Button, Container, Row ,Col } from "react-bootstrap";

function ComplaintsMang() {
  return (
    <div>
      <div className="row">
        <div className="col md-4 text-center">
          <Link className="btn btn-primary mx-2 btn-sm">View Complaints</Link>
        </div>
        <div className="col md-4 text-center">
          <Link className="btn btn-primary btn-sm " to={"/Admin/ResolveComplaints"}>Resolve Complaints</Link>
        </div>
      </div>
      </div>
      
  );
}

export default ComplaintsMang;
