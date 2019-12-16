import React from "react";
import "../styles/contact.css";

//TODO: implement component
//TODO: style the component
export default class Contact extends React.Component {
	render() {
		return (
			<div id="contactSection">
				<ul>
					<li>
						<a href="#">
							<span>Email</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Linkedin</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Github</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Twitter</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
