import React, { Component } from 'react';
import Draggable from 'react-draggable';


// bulletin board width + height needs to be fixed (define width + height)
// props = message + removeNote function + index

class Note extends Component {
	
	removeNote = () => {
		this.props.removeNote(this.props.index)
	}

	render() {
		return (
			<Draggable cancel="message">
				<div style={this.props.style}>
					<p>{this.props.message}</p>
					<button onClick={this.removeNote}>DELETE</button>
				</div>
			</Draggable>
		)
	}
}

export default Note;
