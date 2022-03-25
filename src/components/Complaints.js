import React from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Complaints.css";

function Complaints() {
  return (
    <>

      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center mt-5 font-weight-bold">Complaints</h1>
            <hr className="bg-white" />
            <h5 className="text-center">Please write your complaints below:</h5>
           
          </div>
        </div>
        <form>
         <div className="row">
            <div className="col-md-2"></div>
            <label className="col-md-4">
              Full Name*
             <input
              className="text border border-primary"
                type="text"
                id="text"
                required=""
                placeholder="Ravi Prakash"
              />
            </label>

            <label className="col-md-4">
              Email*
       
              <input
               className="text border border-primary"
                type="text"
                id="text"
                required=""
                placeholder="abc@gmail.com"
              />
            </label>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <label className="col-md-4">
              House Number
              <br />
              <input
                 className="text border border-primary"
                 type="text"
                required=""
                placeholder="H-25"
              />
            </label>

            <label className="col-md-4">
              Mobile Number
              <br />
              <input
                 className="text border border-primary"
                 type="text"
                required=""
                placeholder="+919891234567"
              />
            </label>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <label className="col-md-8">
              Description*
              <br />
              <textarea
              className="form-control border border-primary"
              required=""
              placeholder="Enter Description Here"
              rows="4"
            ></textarea>
            </label>
          </div>

          <div className="row my-2">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <button
              className="btn btn-sm btn-primary"
            >
              Submit
            </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Complaints;
