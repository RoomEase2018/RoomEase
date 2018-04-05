import React, { Component } from "react";
import axios from "axios";

class GoalsContainer extends Component {
	constructor() {
		super();


	}

	componentDidMount() {
		axios
			.get(`/getRoutes/getAllCompletedTasksAndRecurring/1`)
			.then(res => {
				let apartmentKarma = 0;
				Array.from(res.data.data).forEach(el => {
					apartmentKarma += el.karma;
				})

				
				// this.setState({
				// 	apartmentKarma: apartmentKarma
				// 	completedTasks: res.data
				// })
			})
	}

	render() {
		return (
			<div>
				hi i'm paul
			</div>
		)
	}
}

export default GoalsContainer;