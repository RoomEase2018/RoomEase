import React, { Component } from 'react';

class Checkbox extends Component {

	render() {
		return (
			<div className="checkbox" id="checkbox" >
          <input type="checkbox" name="completed" value="false" onClick={this.props.handleCompletedCheckbox} />
          Completed
      </div>
		)
	}
}


export default Checkbox;