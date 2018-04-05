import React, { Component } from "react"

class NextTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedTasks: props.sortedTasks,
            currentIndex: 0
        }
    }

    handlePrevButton = e => {
        let index = (this.state.currentIndex - 1) % 5
        this.setState({
            currentIndex: index
        })
    }

    handleNextButton = e => {
        let index = (this.state.currentIndex + 1) % 5
        this.setState({
            currentIndex: index
        })
    }

    render() {
        const { handleIndexButton, task } = this.props
        return (
            <div className="next_task" id="next-task">
                <p>{task}</p>
                <button value="previous" onClick={handleIndexButton}>
				←
                </button>
                <button value="next" onClick={handleIndexButton}>
				→
                </button>
            </div>
        )
    }
}

export default NextTask
