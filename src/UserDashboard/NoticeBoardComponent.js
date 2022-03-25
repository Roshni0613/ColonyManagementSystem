import React, { Component } from "react";
import FileDownload from "js-file-download";
import axios from "axios";
import { base64StringToBlob } from "blob-util";

class NoticeBoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [],
      message: null,
    };
    this.loadNotices = this.loadNotices.bind(this);
    this.downloadNotice = this.downloadNotice.bind(this);
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    this.loadNotices();
  }

  loadNotices() {
    axios
      .post("http://localhost:8080/admin/display-active-notices")
      .then((resp) => {
        this.setState({ notices: resp.data });
        console.log(this.state.notices);
      });
  }

  downloadNotice(notice) {
    console.log(notice.fileName);
    if (!(notice.data instanceof Blob)) console.log(typeof notice.data);

    const blob = base64StringToBlob(notice.data, "application/pdf");

    FileDownload(blob, notice.fileName);
  }

  render() {
    return (
      <div className="border border-round">
        <h2 className="text-center text-u"><u>Notice Board</u></h2>
        <p className="card-text m-3">
          {this.state.notices.map((notice) => (
            <li key={notice.id}>
              <a href="#" onClick={() => this.downloadNotice(notice)}>
                {notice.title}
              </a>
            </li>
          ))}
        </p>
      </div>
    );
  }
}

export default NoticeBoardComponent;
