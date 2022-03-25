import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function Menu() {
    return (
        <div>
            <ListGroup>
                {/* <ListGroupItem tag="a" href="/Admin/AdminProfile" action>
                Profile
                </ListGroupItem> */}

                <ListGroupItem tag="a" href="/Admin/ChangePassword" action>
                Change Password
                </ListGroupItem>


                <ListGroupItem tag="a" href="/Admin/AddUser" action>
                Register Owner
                </ListGroupItem>

                <ListGroupItem tag="a" href="/Admin/OwnerList" action>
                List of Owners
                </ListGroupItem>

                <ListGroupItem tag="a" href="/Admin/GenerateBill" action>
                Generate Bill
                </ListGroupItem>

                <ListGroupItem tag="a" href="/Admin/ViewBills" action>
                List of All Bills
                </ListGroupItem> 
                
                <ListGroupItem tag="a" href="/Admin/PaymentStatus" action>
                Payment Status
                </ListGroupItem>

              
                <ListGroupItem tag="a" href="/Admin/AddNotice" action>
                Upload Notice
                </ListGroupItem>

                <ListGroupItem tag="a" href="/Admin/ViewNotice" action>
                List of All Notices
                </ListGroupItem>

                {/*<ListGroupItem tag="a" href="/Admin/ComplaintsMang" action>
                Complaint Management
                </ListGroupItem>


                <ListGroupItem tag="a" href="/Admin/AddEvents" action>
                Add Events
                </ListGroupItem>*/}

            </ListGroup>
        </div>
    )
}

export default Menu;
