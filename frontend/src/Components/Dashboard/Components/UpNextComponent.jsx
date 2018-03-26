import React, { Component } from "react";
import Progressbar from "./Progressbar";
import Checkbox from "./Checkbox";

class UpNextComponent extends Component {
  render() {
    console.log("upnext props : ", this.props);
    return (
      <div>
          <Progressbar karma={this.props.karma} />
          <div id="next-task" style={{ fontSize: 80 }}>
            {this.props.task[0].desc}
          </div>
		  <Checkbox />
      </div>
    );
  }
}

export default UpNextComponent;
