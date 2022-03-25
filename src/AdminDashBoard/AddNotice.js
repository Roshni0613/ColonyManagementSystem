import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import axios from "axios";
import "../components/CommonStyle.css";

class AddNoticeComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        title: "",
        file:null,
        expirydate: null,
        message:null,
        errors:{}
      };
      
      this.submitHandler = this.submitHandler.bind(this);
      this.validateFormEntries=()=>{
          console.log("inside validation method");
          let formValid=true;
          let errors={};
          let title=this.state.title;
          let expirydate=new Date(this.state.expirydate);
          let currentDate=new Date();
          let file=this.state.file;
          console.log(expirydate+" "+currentDate);

          console.log(!(this.state.title));
          if(!(title)  || !(expirydate) || !(file)){
            errors["emptyField"]="Please fill all the field";
            this.setState({errors:errors});
            return false;
          }

          if(title.length<5 || title.length >50){
            errors["title"]="Title length should be within the range of 5-30 characters";
            formValid=false;
          }
          if(expirydate.getTime()<currentDate.getTime()){
            formValid=false;
            errors["expirydate"]="Expiry Date Should be greater than current Date "; 
          }
          let fileName=file.name;
          if(fileName.slice(-3)!=='pdf'){
            console.log(fileName.slice(-3));
           formValid=false;
            errors["file"]="PDF file only ";  
     }
          this.setState({errors:errors})
         return formValid;

      }
    }


    submitHandler = (e) => {
      this.setState({message:""});
      if(this.validateFormEntries()){
        console.log(this.validateFormEntries())
         const formData = new FormData();
         formData.append("title", this.state.title);
         formData.append("file", this.state.file);
         formData.append("expirydate", this.state.expirydate);

         axios({
         url: "http://localhost:8080/admin/upload",
         method: 'POST',
         data: formData,
         headers: {
         'Content-Type': "multipart/form-data"
         }
         }).then((resp) => {
          if(resp.status ===200){
           window.confirm(resp.data.message);
           this.setState({expirydate:"",title:""});

          }
         else
          window.alert(resp.data.message);
         }).catch((error) => {  
            console.log(error);
            if(error.status===400)
                 this.setState({message:error.data.message})
            else 
                this.setState({message:"Error occured please try again!!"})
         }) 
       }else{
        console.log("Validation failed")
       }
       }

      


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onHandleFileChange = (e) => this.setState({file:e.target.files[0]})

    render() {
      return (
        <div>
          <h3 className="pb-2">Upload Notice</h3>
          <h6 className="errStyle">{this.state.errors["emptyField"]}</h6>
          <h6 className="errStyle">{this.state.message}</h6>
          
          <div className="row">
          <h6 className="errStyle">{this.state.errors["title"]}</h6>
            <label className="col-md-8" for="place">
              Title
              <br />
              <input
                className="text border border-primary"
                type="text"
                placeholder="Enter Title Here"
                name="title"
                value={this.state.title}
                onChange={this.onChange}

              />
            </label>
          </div>
          <form>
          <h6 className="errStyle">{this.state.errors["expirydate"]}</h6>
            <label>Enter Expiry_Date </label>
            <input
             type="Date"
             name="expirydate"
             value={this.state.expirydate}
             onChange={this.onChange}
            />
            <div className="form-group my-2 mx-0">
            <h6 className="errorMesg">{this.state.errors["file"]}</h6>
              {/* <label for="exampleFormControlFile1">Example file input</label> */}
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                name="file"
                onChange={this.onHandleFileChange}
              />
            </div>
          </form>
          <button className="btn btn-primary my-1 btn-sm" onClick={this.submitHandler}>Upload</button>
        </div>
      )
    }
}

export default AddNoticeComponent;
