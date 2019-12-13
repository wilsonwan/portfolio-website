import React from "react";
import "../styles/navigationBar.css";

//TODO: link the anchor links
//TODO: style the component
export default class NavigationBar extends React.Component {
	render() {
		return (
			<div id="navigationBar">
				<ul>
					<li>
						<a href="#">
							<span>About</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Resume</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Projects</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Github</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Contact</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
