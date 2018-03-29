import React, { Component } from "react"
import Progressbar from "./Progressbar"
import Checkbox from "./Checkbox"

class UpNextComponent extends Component {
    render() {
        return (
            <div className="up_next">
                <Progressbar karma={this.props.karma} />
                <div className="next_task" id="next-task">
                    {this.props.task[0].desc}
                </div>
                <Checkbox />
            </div>
        )
    }
}

export default UpNextComponent
