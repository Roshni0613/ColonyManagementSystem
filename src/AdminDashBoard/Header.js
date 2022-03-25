import React from "react";
import { Card,CardBody } from "react-bootstrap";

function Header() {

  let userName=window.sessionStorage.getItem("userName");
  return (

    <div>
      <Card className="my-2  my-5" style={{backgroundColor: "#EFF0F3 "}}>
        <Card.Body>
          <h1 className="text-center">Welcome Admin</h1>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Header;
