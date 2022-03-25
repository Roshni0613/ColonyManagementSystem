import React, { Component } from "react";

class Login_LogoutButton extends Component {

    constructor(props){
        super(props);
        this.state ={
            showLogout:(window.sessionStorage.getItem("userId"))?true:false,
        }
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
      }
    



    login(){
      this.props.history.push("/Login");
    }

    logout(){
      if(window.confirm("Do you want to logout")){
        window.sessionStorage.clear();
        this.props.history.push("/");
      }
    }
  
  render(){
    const login=(<button onClick={this.login} className="btn btn-primary m-1 mx-4 btn-sm" type="submit">Login</button>);

   const Logout=<button onClick={this.logout} className="btn btn-primary m-1 mx-4 btn-sm" type="submit">
                  Logout
                </button>;   
    return(
      <div>
        {this.state.showLogout?Logout:login}
      </div>
    );
  }
}

export default Login_LogoutButton;
