import React, { Component } from 'react'
import axios from "axios";
import FileDownload from 'js-file-download';
import { base64StringToBlob } from 'blob-util';
import "../components/Login.css"

class AdminViewAllNotice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notices: [],
            message: null
        }
        this.loadNotices=this.loadNotices.bind(this);
        this.downloadNotice=this.downloadNotice.bind(this);
        this.deleteNotice = this.deleteNotice.bind(this);
    }

    componentDidMount() {
        console.log("inside AdminViewAllNotice componentDidMount");
        this.loadNotices();
    }

    loadNotices() {
        axios.post("http://localhost:8080/user/display-notices")
            .then((resp) => {
                console.log(resp.data);
                resp.data.map(
                        notice => {
                            console.log(notice.flag);
                            let status=(notice.flag)?'ACTIVE':'INACTIVE';
                            notice.flag=status;
                        }
                        );

                this.setState({notices: resp.data})
                console.log(this.state.notices);
            });
    
    }

   downloadNotice(notice){
      console.log(notice.fileName);
       if (!(notice.data instanceof Blob)) 
        console.log(typeof notice.data);

      const blob = base64StringToBlob(notice.data, 'application/pdf');

      FileDownload(blob, notice.fileName);
    }

    deleteNotice(noticeId) {
        axios.delete("http://localhost:8080/admin/delete_notice/"+noticeId)
           .then(res => {
                this.setState({notices: this.state.notices.filter(notice => notice.id !== noticeId)});
               window.confirm('Notice deleted successfully');
               
           }).catch(err=>{
            window.alert('Error please try again later!!');
           })

    }

    render() {
        return (
            <div>
            <h3 className="text-center pb-2">List of All Notices</h3>
                <table className="table table-striped border border-primary">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>File name</th>
                            <th>Upload date</th>
                            <th>Expiry date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.notices.map(
                        notice =>
                                    <tr key={notice.id}>
                                        <td>{notice.title}</td>
                                        <td>{notice.fileName}</td>
                                        <td>{notice.uploadTime}</td>
                                        <td>{notice.noticeExpiryDate}</td>
                                        <td>{notice.flag}</td>
                                        <td>

                                            <button className="btn btn-success btn-sm" 
                                            onClick={() => this.downloadNotice(notice)}>Download</button>&nbsp;&nbsp;
                                            <button className="btn btn-success btn-sm"
                                             onClick={() => this.deleteNotice(notice.id)}>Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default AdminViewAllNotice;