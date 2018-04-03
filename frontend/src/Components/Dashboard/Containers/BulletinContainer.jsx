import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "../Components/Note";
import { fetchAllVisibleNotes } from "../Actions/DashboardActions";

const mapStateToProps = state => {
  return {
    notes: state.Dashboard.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllVisibleNotes: id => {
      dispatch(fetchAllVisibleNotes(id));
    }
  };
};

class Bulletin extends Component {
  constructor() {
    super();

    this.state = {
      notes: [
        {
          message: "first message",
          style: {
            position: "relative",
            top: "100px",
            left: "100px",
            height: "150px",
            width: "150px"
          }
        },
        {
          message: "second message",
          style: {
            position: "relative",
            top: "300px",
            left: "300px",
            height: "150px",
            width: "150px"
          }
        },
        {
          message: "third message",
          style: {
            position: "relative",
            top: "300px",
            left: "500px",
            height: "150px",
            width: "150px"
          }
        }
      ]
    };
  }

  hideNote = index => {
    const notes = this.state.notes;
    notes[index].message = null;
    this.setState({
      notes: notes
    });
  };

  componentDidMount() {
	  this.props.fetchAllVisibleNotes(1);
  }

  render() {
    const { notes } = this.props;
    console.log("notes : ", notes);
    return (
      <div>
        <div
          style={{
            height: "600px",
            width: "900px",
            border: "blue 1px solid"
          }}
        >
          {notes.map((note, i) => (
            <Note
              message={note.note}
              index={i}
              key={i}
              hideNote={this.hideNote}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bulletin);
