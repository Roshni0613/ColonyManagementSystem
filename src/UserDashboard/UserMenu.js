import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function UserMenu() {
    return (
        <div>
            <ListGroup>
                {/* <ListGroupItem tag="a" href="/House-owner/UserProfile" action>
                User Profile
                </ListGroupItem> */}

                <ListGroupItem tag="a" href="/House-owner/ChangePassword" action>
                Change Password
                </ListGroupItem>

                {/*<ListGroupItem tag="a" href="/House-owner/NoticeBoard" action>
                Notice Board
                </ListGroupItem>*/}

                <ListGroupItem tag="a" href="/House-owner/Bills" action>
               Bill Payment
                </ListGroupItem>

                <ListGroupItem tag="a" href="/House-owner/PaymentHistory" action>
                Payment History
                </ListGroupItem>

                {/*<ListGroupItem tag="a" href="/House-owner/ViewEvents" action>
                Events
                </ListGroupItem>

                <ListGroupItem tag="a" href="/House-owner/DoComplaint" action>
                Complaints
                </ListGroupItem>*/}

            </ListGroup>
        </div>
    )
}

export default UserMenu;