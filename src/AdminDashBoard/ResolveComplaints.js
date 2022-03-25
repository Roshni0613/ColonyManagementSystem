import React, { Fragment } from "react";
import { Container, Form, FormGroup } from "react-bootstrap";
import ComplaintsMang from "./ComplaintsMang";

function ResolveComplaints() {
  return (
    <div>

       <ComplaintsMang/>
      <Fragment>
        <h2 className="text- my-3">Complaint Resolution</h2>
        <Form>
          <div className="row">
            <label className="col-md-8" for="place">
             Title
              <br />
              <input
                className="text border border-primary"
                type="text"
                required=""
                placeholder="Enter Title Here"
              />
            </label>
          </div>
         

          <div className="row">
            <label className="col-md-8">
              Resolution
              <br />
              <textarea
                className="form-control border border-primary"
                required=""
                placeholder="Enter Text Here"
                rows="6"
              ></textarea>
            </label>
          </div>
          <button className="btn btn-sm btn-primary my-1">Submit</button>
        </Form>
      </Fragment>
    </div>
  );
}

export default ResolveComplaints;
