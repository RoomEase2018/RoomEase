import React, { Component } from 'react';
import Note from './Components/Note'

class Bulletin extends Component {
	constructor() {
		super();

		this.state = {
			notes: [
				{
				message: 'first message', style: {position: 'absolute', top: '11%', left: '23%', height: '150px', width: '150px'}
				},
				{
				message: 'second message', style: {position: 'absolute', top: '41%', left: '63%', height: '150px', width: '150px'}
				},
				{
				message: 'third message', style: {position: 'absolute', top: '61%', left: '4%', height: '150px', width: '150px'}
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
					height: '900px',
					width: '900px',
					border: 'red 3px solid'
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