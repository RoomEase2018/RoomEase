import React, { Component } from 'react';
import Note from '../Components/Note'

class Bulletin extends Component {
	constructor() {
		super();

		this.state = {
			notes: [
				{
				message: 'first message', style: {position: 'relative', top: '100px', left: '100px', height: '150px', width: '150px'}
				},
				{
				message: 'second message', style: {position: 'relative', top: '300px', left: '300px', height: '150px', width: '150px'}
				},
				{
				message: 'third message', style: {position: 'relative', top: '300px', left: '500px', height: '150px', width: '150px'}
				}
			]
		}
	}

	hideNote = index => {
		const notes = this.state.notes;
		notes[index].message = null;
		this.setState({
			notes: notes
		})
	}

	render() {
		return (
			<div>
				<div style={{
					height: '900px',
					width: '900px',
					border: 'red 3px solid'
				}}>
					{this.state.notes.map((note, i) => (
						<Note
							message={note.message}
							index={i}
							key={i}
							hideNote={this.hideNote}
						/>
					))}
				</div>
			</div>
		)
	}
}
export default Bulletin;