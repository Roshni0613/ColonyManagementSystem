import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class OwnerList extends Component
 {

  constructor(props)
  {
    super(props)
    this.state = {
      owners : [],
      message : null

    }
    this.loadOwnerList = this.loadOwnerList.bind(this);
  }

  componentDidMount() {
    this.loadOwnerList();
}

loadOwnerList() {

  axios.get("http://localhost:8080/admin/list_all_users")
      .then((resp) => {           
          console.log(resp.data);
          this.setState({owners: resp.data});
          console.log(this.state.owners);
      }).catch(err=>{
          window.alert("Error please try again later!!");
      });
}
  

  render(){
    return (
    <div>
      <h2>List of Owners</h2>

      <table className="table table-striped border border-primary">
      
        <thead className="thead-dark">
          <tr>
            <th scope="col">House number</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
           {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
        {
              this.state.owners.map(
              owner=>
            <tr>
            <td>{owner.houseNumber}</td>
            <td>{owner.firstName}</td>
            <td>{owner.lastName}</td>
            <td>{owner.email}</td>
            <td>{owner.mobileNumber}</td>
           { /*<td>
                <Link className="btn btn-primary mx-2 btn-sm">Update</Link>
                <Link className="btn btn-primary btn-sm">Delete</Link>
           </td>*/}
          </tr>
              )}
        </tbody>

      </table>
    </div>
  );
}
}
export default OwnerList;
