import Button from "@restart/ui/esm/Button";
import React, { Fragment } from "react";
import { Container, Form, FormGroup } from "react-bootstrap";

function AddEvents() {
  return (
    <Fragment>
      <h1 className="text-center my-3">Add Event Details</h1>
      <Form>
        <div className="row">
        <label className="col-md-8" for="place">Event Name
         <br />
              <input
                 className="text border border-primary"
                 type="text"
                required=""
                placeholder="Enter Name Here"
              />
            </label>
            </div>
        <div className="row">
        <label className="col-md-8" for="place">Venue
         <br />
              <input
                 className="text border border-primary"
                 type="text"
                required=""
                placeholder="Enter Venue Here"
              />
            </label>
            </div>

        <div className="row">
          <label className="col-md-8">
            Description*
            <br />
            <textarea
              className="form-control border border-primary"
              required=""
              placeholder="Enter Description Here"
              rows="6"
            ></textarea>
          </label>
        </div>
        <button
              className="btn btn-primary my-1"
            >
              Submit
            </button>



      </Form>
    </Fragment>
  );
}

export default AddEvents;
