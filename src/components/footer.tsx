import React from "react";

//TODO: style the component
export default class Footer extends React.Component {
	year = new Date().getFullYear();
	render() {
		return (
			<footer>
				<p>©{this.year} Wilson Wan. All rights reserved.</p>
			</footer>
		);
	}
}
