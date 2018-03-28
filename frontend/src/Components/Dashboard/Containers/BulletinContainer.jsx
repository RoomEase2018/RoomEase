import React, { Component } from 'react';
import Note from '../Components/Note'

class Bulletin extends Component {
	constructor() {
		super();

		this.state = {
			notes: [
				{
				message: 'first message', style: {position: 'absolute', top: '66%', left: '24%', height: '150px', width: '150px'}
				},
				{
				message: 'second message', style: {position: 'absolute', top: '69%', left: '54%', height: '150px', width: '150px'}
				},
				{
				message: 'third message', style: {position: 'absolute', top: '71%', left: '34%', height: '150px', width: '150px'}
				}
			]
		}
	}

	removeNote = index => {
		const notes = this.state.notes.slice();
		notes.splice(index, 1);
		this.setState({
			notes: notes
		})
	}

	render() {
		return (
			<div>
				<div style={{
					height: '600px',
					width: '900px',
					border: 'blue 1px solid'
				}}>
					{this.state.notes.map((note, i) => (
						<Note
							message={note.message}
							style={note.style}
							index={i}
							key={i}
							removeNote={this.removeNote}
						/>
					))}
				</div>
			</div>
		)
	}
}
export default Bulletin;