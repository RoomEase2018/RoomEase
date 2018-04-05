import React, { Component } from "react"
import { connect } from "react-redux"
import Note from "../Components/Note"
import { fetchAllVisibleNotes } from "../Actions/DashboardActions"

const mapStateToProps = state => {
    return {
        notes: state.Dashboard.notes
    }
}

class Bulletin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: props.notes
        }
    }

    hideNote = index => {
        // this.props.notes[index] = null
        // const notes = this.state.notes;
        // notes[index].message = null;
        // this.setState({
        //   notes: notes
        // });
    }

    render() {
        const { notes } = this.props
        // console.log(notes);
        return (
            <div className="bulletin">
                {notes.map((note, i) => (
                    <Note
                        message={note.message}
                        index={i}
                        key={i}
                        hideNote={this.hideNote}
                    />
                ))}
            </div>
        )
    }
}
export default connect(mapStateToProps)(Bulletin)
